import { existsSync, readFileSync } from 'fs';
import path from 'path';
import { z } from 'zod';
import { Wordle } from './nytimes/Wordle.ts';
import type { ASolverBot } from './bot/ASolverBot.ts';
import { createAllBots } from './bots/bots.ts';
import { BOT_STATUS, type BotStatus, type BotResult } from './bot/BotResult.ts';
import { Discord } from './discord/Discord.ts';

import wordleList from './data/wordle-list.json' with { type: 'json' };
import { createResultsOverview } from './canvas/createResultsOverview.ts';
import { stringifyBotResults } from './utils/stringifyBotResults.ts';

const tryLoadDiscord = () => {
  const webhooksPath = path.join(process.cwd(), 'webhooks.json');
  if (!existsSync(webhooksPath)) {
    console.warn(
      `Missing webhooks at: '${webhooksPath}', discord will not receive messages.`,
    );
    return null;
  }
  const webhooks = z
    .array(z.string())
    .parse(JSON.parse(readFileSync(webhooksPath, 'utf8')));

  return new Discord('Wordle Arena', webhooks);
};

const generateOverviewMessage = (botResults: BotResult[]) => {
  const botResultStatusGroups = Object.groupBy(
    botResults,
    (result) => result.status,
  );

  const solvedGuessCountGroups = Object.groupBy(
    botResultStatusGroups.solved ?? [],
    (result) => result.guesses.length,
  );

  let content = `Today's Wordle Arena report:${Discord.NewLine}`;

  let isFirst = true;
  for (let i = 1; i <= Wordle.AttemptCount; i++) {
    const results = solvedGuessCountGroups[i];
    if (results === undefined) continue;
    if (isFirst) {
      content += ':crown:';
      isFirst = false;
    }
    content += `${i}/${Wordle.AttemptCount}: ${stringifyBotResults(results)}${Discord.NewLine}`;
  }

  if (botResultStatusGroups.failed !== undefined) {
    content += `X/${Wordle.AttemptCount}: ${stringifyBotResults(botResultStatusGroups.failed)}${Discord.NewLine}`;
  }

  if (botResultStatusGroups.crashed !== undefined) {
    content += `Crashed :wilted_rose:: ${stringifyBotResults(botResultStatusGroups.crashed)}${Discord.NewLine}`;
  }

  content += `${Discord.NewLine}Make your own bot: [github/wordle-arena](<https://github.com/Rodak123/wordle-arena>)`;

  return content;
};

export const main = async () => {
  // load discord
  const discord = tryLoadDiscord();

  // load wordle
  const validWords = new Set(wordleList);
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

      console.log(`-- ${index} --`);
      console.log(`Bot '${result.meta.name}' by ${result.meta.author}`);
      console.log(`has ${result.status} in ${result.solvingTimeMs}ms:`);
      console.log('Guesses:', words);
      if (result.status === BOT_STATUS.CRASHED) {
        console.log(`Error: ${result.error}`);
      }
      console.log();

      return result;
    }),
  );

  const statusOrderMap: Record<BotStatus, number> = {
    solved: 1,
    failed: 2,
    crashed: 3,
  };

  botResults.sort((a, b) => {
    // sort by status
    const statusOrder = statusOrderMap[a.status] - statusOrderMap[b.status];
    if (statusOrder !== 0) return statusOrder;

    // sort by guess count
    const guessOrder = a.guesses.length - b.guesses.length;
    if (guessOrder !== 0) return guessOrder;

    // sort by time
    const timeOrder = a.solvingTimeMs - b.solvingTimeMs;
    return timeOrder;
  });

  if (discord !== null) {
    const message = generateOverviewMessage(botResults);
    const overviewImage = await createResultsOverview(botResults);

    // report to discord
    await discord.sendMessage(message, overviewImage, 'overview.png');
  }
};

// Source - https://stackoverflow.com/a/6090287
// Posted by Stephen Emslie, modified by community. See post 'Timeline' for change history
// Retrieved 2026-06-13, License - CC BY-SA 4.0
if (import.meta.main) {
  main();
}
