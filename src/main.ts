import { existsSync, readFileSync } from "fs";
import path from "path";
import { z } from "zod";
import { Wordle } from "./nytimes/Wordle.ts";
import type { ASolverBot } from "./bot/ASolverBot.ts";
import { createAllBots } from "./bots/bots.ts";
import { BOT_STATUS, type BotResult } from "./bot/BotResult.ts";
import { Discord } from "./discord/Discord.ts";

import wordleList from "./data/wordle-list.json" with { type: "json" };
import { createResultsOverview } from "./canvas/createResultsOverview.ts";

const tryLoadDiscord = () => {
  const webhooksPath = path.join(process.cwd(), "webhooks.json");
  if (!existsSync(webhooksPath)) {
    console.warn(
      `Missing webhooks at: '${webhooksPath}', discord will not receive messages.`,
    );
    return null;
  }
  const webhooks = z
    .array(z.string())
    .parse(JSON.parse(readFileSync(webhooksPath, "utf8")));

  return new Discord("Wordle Arena", webhooks);
};

export const main = async () => {
  // load discord
  const discord = tryLoadDiscord();

  // load wordle
  const validWords = wordleList;
  const wordle = new Wordle(validWords);
  const today = new Date();

  await wordle.load(today);

  // setup bots
  const bots: ASolverBot[] = createAllBots(wordle);

  // let bots solve and sort the results
  console.log(`Bot results of ${today.toLocaleDateString()}:\n`);

  const botResults = await Promise.all(
    bots.map(async (bot, index) => {
      const result = await bot.solve();
      const words = result.guesses.map(Wordle.toWord);

      console.log(`-- #${index} --`);
      console.log(`Bot '${result.meta.name}' by ${result.meta.author}`);
      console.log(`has ${result.status} in ${result.solvingTimeMs}ms:`);
      console.log("Guesses:", words);
      if (result.status === BOT_STATUS.CRASHED) {
        console.log(`Error: ${result.error}`);
      }
      console.log();

      return result;
    }),
  );

  if (discord !== null) {
    // report to discord
    botResults.sort((a, b) => {
      // sort by guess count
      const guessOrder = a.guesses.length - b.guesses.length;
      return guessOrder;
    });

    const botResultStatusGroups = Object.groupBy(
      botResults,
      (result) => result.status,
    );

    const solvedGuessCountGroups = Object.groupBy(
      botResultStatusGroups.solved ?? [],
      (result) => result.guesses.length,
    );

    const stringifyResults = (results: BotResult[]) =>
      results
        .map((result) => `**${result.meta.name}** by ${result.meta.author}`)
        .join(", ");

    let content = `Today's Wordle Arena report:${Discord.NewLine}`;

    let isFirst = true;
    for (let i = 1; i <= Wordle.AttemptCount; i++) {
      const results = solvedGuessCountGroups[i];
      if (results === undefined) continue;
      if (isFirst) {
        content += ":crown:";
        isFirst = false;
      }
      content += `${i}/${Wordle.AttemptCount}: ${stringifyResults(results)}${Discord.NewLine}`;
    }

    if (botResultStatusGroups.failed !== undefined) {
      content += `X/${Wordle.AttemptCount}: ${stringifyResults(botResultStatusGroups.failed)}${Discord.NewLine}`;
    }

    if (botResultStatusGroups.crashed !== undefined) {
      content += `Crashed :wilted_rose:: ${stringifyResults(botResultStatusGroups.crashed)}${Discord.NewLine}`;
    }

    // generate overview image
    const pngData = await createResultsOverview(botResults);

    discord.sendMessage(content, pngData, "overview.png");
  }
};

// Source - https://stackoverflow.com/a/6090287
// Posted by Stephen Emslie, modified by community. See post 'Timeline' for change history
// Retrieved 2026-06-13, License - CC BY-SA 4.0
if (import.meta.main) {
  main();
}
