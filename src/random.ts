import { reportToDiscord } from './actions/reportToDiscord.ts';
import { tryLoadDiscord } from './actions/tryLoadDiscord.ts';
import { createWordle } from './actions/createWordle.ts';
import { runBotsAndSortResults } from './actions/runBotsAndSortResults.ts';

/**
 * Uses random word from the valid word list
 */
export const random = async () => {
  // load discord
  const discord = tryLoadDiscord();

  // load wordle
  const wordle = createWordle();
  wordle.loadRandom();

  // let bots solve
  console.log(`Bot results for '${wordle.solutionWord}':\n`);

  const botResults = await runBotsAndSortResults(wordle);

  // report to discord
  if (discord !== null) {
    await reportToDiscord(
      botResults,
      discord,
      `Wordle Arena for the word '${wordle.solutionWord}' report:`,
    );
  }
};

if (import.meta.main) {
  random();
}
