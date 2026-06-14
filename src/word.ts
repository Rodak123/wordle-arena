import { reportToDiscord } from './actions/reportToDiscord.ts';
import { tryLoadDiscord } from './actions/tryLoadDiscord.ts';
import { createWordle } from './actions/createWordle.ts';
import { runBotsAndSortResults } from './actions/runBotsAndSortResults.ts';

/**
 * Uses a specific word as a solution
 */
export const word = async (solutionWord: string) => {
  // load discord
  const discord = tryLoadDiscord();

  // load wordle
  const wordle = createWordle();
  wordle.loadExact(solutionWord);

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
  const wordArg = process.argv[2];

  if (!wordArg) {
    console.error('Please provide a word as the first argument.');
    process.exit(1);
  }

  word(wordArg);
}
