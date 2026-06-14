import { tryLoadDiscord } from './actions/tryLoadDiscord.ts';
import { createWordle } from './actions/createWordle.ts';
import { runBotsAndSortResults } from './actions/runBotsAndSortResults.ts';
import { reportToDiscord } from './actions/reportToDiscord.ts';

/**
 * Uses todays Wordle solution for the bots
 */
export const daily = async () => {
  // load discord
  const discord = tryLoadDiscord();

  // load wordle
  const wordle = createWordle();

  const today = new Date();
  await wordle.loadByDate(today);

  // let bots solve
  console.log(`Bot results of '${today.toLocaleDateString()}':\n`);

  const botResults = await runBotsAndSortResults(wordle);

  // report to discord
  if (discord !== null) {
    await reportToDiscord(
      botResults,
      discord,
      `Wordle Arena of ${today.toLocaleDateString()} report:`,
    );
  }
};

if (import.meta.main) {
  daily();
}
