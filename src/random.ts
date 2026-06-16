import { runBotsAndSortResults } from './actions/runBotsAndSortResults.ts';
import { ResultsReport } from './core/utils/ResultsReport.ts';
import { OverviewImage } from './core/overviewImage/OverviewImage.ts';
import { DiscordBot } from './core/discord/DiscordBot.ts';
import { Wordle } from './core/nytimes/Wordle.ts';

/**
 * Uses random word from the valid word list
 */
export const random = async () => {
  // initialize
  const discordBot = DiscordBot.createDiscordBotFromLocal('WordleArena');
  const wordle = Wordle.createWordleFromLocal();

  // load wordle
  wordle.loadRandom();

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
  random();
}
