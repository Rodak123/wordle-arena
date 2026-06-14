import { type BotResult } from '../bot/BotResult.ts';
import { Wordle } from '../nytimes/Wordle.ts';
import { stringifyBotResults } from '../utils/stringifyBotResults.ts';
import { Discord } from './Discord.ts';

export const generateOverviewMessage = (
  botResults: BotResult[],
  title: string,
) => {
  const botResultStatusGroups = Object.groupBy(
    botResults,
    (result) => result.status,
  );

  const solvedGuessCountGroups = Object.groupBy(
    botResultStatusGroups.solved ?? [],
    (result) => result.guesses.length,
  );

  let content = `${title}${Discord.NewLine}`;

  let isFirst = true;
  for (let i = 1; i <= Wordle.AttemptCount; i++) {
    const results = solvedGuessCountGroups[i];
    if (results === undefined) continue;
    if (isFirst) {
      content += ':crown:';
      isFirst = false;
    }
    content += `${i}/${Wordle.AttemptCount}: ${stringifyBotResults(results)}${Discord.NewLine}`;
  }

  if (botResultStatusGroups.failed !== undefined) {
    content += `X/${Wordle.AttemptCount}: ${stringifyBotResults(botResultStatusGroups.failed)}${Discord.NewLine}`;
  }

  if (botResultStatusGroups.crashed !== undefined) {
    content += `Crashed :wilted_rose:: ${stringifyBotResults(botResultStatusGroups.crashed)}${Discord.NewLine}`;
  }

  content += `${Discord.NewLine}Make your own bot: [github/wordle-arena](<https://github.com/Rodak123/wordle-arena>)`;

  return content;
};
