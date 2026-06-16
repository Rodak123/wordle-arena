import { runBotsAndSortResults } from './actions/runBotsAndSortResults.ts';
import { ResultsReport } from './core/utils/ResultsReport.ts';
import { OverviewImage } from './core/overviewImage/OverviewImage.ts';
import { DiscordBot } from './core/discord/DiscordBot.ts';
import { Wordle } from './core/nytimes/Wordle.ts';

/**
 * Uses a specific word as a solution
 */
export const word = async (solutionWord: string) => {
  // initialize
  const discordBot = DiscordBot.createDiscordBotFromLocal('WordleArena');
  const wordle = Wordle.createWordleFromLocal();

  // load wordle
  wordle.loadExact(solutionWord);

  // let bots solve
  console.log(`Bot results for '${wordle.solutionWord}':\n`);

  const botResults = await runBotsAndSortResults(wordle);

  // generate results
  const overviewImage = new OverviewImage();
  const resultsReport = new ResultsReport(
    `Wordle Arena for the word '${wordle.solutionWord}' report:`,
  );

  await overviewImage.generateOverview(botResults);
  resultsReport.generateReportMessage(botResults);

  // save and send
  discordBot.sendMessage({
    type: 'attached-files',
    content: resultsReport.reportMessage,
    attachedFiles: [overviewImage.overviewImage],
  });

  overviewImage.saveOverviewImage();
};

if (import.meta.main) {
  const wordArg = process.argv[2];

  if (!wordArg) {
    console.error('Please provide a word as the first argument.');
    process.exit(1);
  }

  word(wordArg);
}
