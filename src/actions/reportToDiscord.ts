import { type BotResult } from '../core/bot/BotResult.ts';
import { createResultsOverviewImage } from '../core/discord/createResultsOverviewImage.ts';
import { type Discord } from '../core/discord/Discord.ts';
import { generateOverviewMessage } from '../core/discord/generateOverviewMessage.ts';

export const reportToDiscord = async (
  botResults: BotResult[],
  discord: Discord,
  title: string,
) => {
  const message = generateOverviewMessage(botResults, title);
  const overviewImage = await createResultsOverviewImage(botResults);

  await discord.sendMessage(message, overviewImage, 'overview.png');
};
