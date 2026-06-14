import { type ASolverBot } from '../core/bot/ASolverBot.ts';
import {
  BOT_STATUS,
  type BotResult,
  type BotStatus,
} from '../core/bot/BotResult.ts';
import { createAllBots } from '../bots/bots.ts';
import { Wordle } from '../core/nytimes/Wordle.ts';

export const runBotsAndSortResults = async (
  wordle: Wordle,
): Promise<BotResult[]> => {
  // setup bots
  const bots: ASolverBot[] = createAllBots(wordle);

  // let bots solve
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

  // sort results
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

  return botResults;
};
