import { createAllBots } from './bots/bots.ts';
import { DiscordBot } from './core/discord/DiscordBot.ts';
import { Wordle } from './core/nytimes/Wordle.ts';
import { OverviewImage } from './core/overviewImage/OverviewImage.ts';
import { ResultsReport } from './core/utils/ResultsReport.ts';
import { WordleBotRunner } from './core/WordleBotRunner.ts';

/**
 * Uses todays Wordle solution for the bots
 */
export const daily = async () => {
  // initialize
  const discordBot = DiscordBot.createDiscordBotFromLocal('WordleArena');
  const wordle = Wordle.createWordleFromLocal();

  // load wordle
  const today = new Date();
  await wordle.loadByDate(today);

  // let bots solve
  const wordleBotRunner = new WordleBotRunner(createAllBots(wordle));

  wordleBotRunner.runBots();
  wordleBotRunner.sortResults();

  console.log(`Bot results of '${today.toLocaleDateString()}':\n`);

  // generate results
  const overviewImage = new OverviewImage();
  const resultsReport = new ResultsReport(
    `Wordle Arena of ${today.toLocaleDateString()} report:`,
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
  daily();
}
