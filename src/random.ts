import { ResultsReport } from './core/utils/ResultsReport.ts';
import { OverviewImage } from './core/overviewImage/OverviewImage.ts';
import { DiscordBot } from './core/discord/DiscordBot.ts';
import { Wordle } from './core/nytimes/Wordle.ts';
import { createAllBots } from './bots/bots.ts';
import { WordleBotRunner } from './core/WordleBotRunner.ts';

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
  const wordleBotRunner = new WordleBotRunner(createAllBots(wordle));

  wordleBotRunner.runBots();
  wordleBotRunner.sortResults();

  console.log(`Bot results for '${wordle.solutionWord}':\n`);

  // generate results
  const overviewImage = new OverviewImage();
  const resultsReport = new ResultsReport(
    `Wordle Arena for the word '${wordle.solutionWord}' report:`,
  );

  await overviewImage.generateOverview(wordleBotRunner.botResults);
  resultsReport.generateReportMessage(wordleBotRunner.botResults);

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
