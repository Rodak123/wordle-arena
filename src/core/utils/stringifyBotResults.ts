import { type BotResult } from '../bot/BotResult.ts';
import { stringifySolvingTime } from './stringifySolvingTime.ts';

export const stringifyBotResults = (results: BotResult[]) => {
  return results
    .map(
      (result) =>
        `**${result.meta.name}** (${stringifySolvingTime(result.solvingTimeMs)})`,
    )
    .join(', ');
};
