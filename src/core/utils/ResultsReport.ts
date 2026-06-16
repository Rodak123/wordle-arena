import type { BotResult } from '../bot/BotResult.ts';
import { Wordle } from '../nytimes/Wordle.ts';

export class ResultsReport {
  private _title: string;

  private _reportMessage: string | null = null;

  public constructor(title: string) {
    this._title = title;
  }

  private _stringifySolvingTime(timeMs: number): string {
    if (timeMs < 1) {
      return '> 1 ms';
    }

    if (timeMs > 1000) {
      const timeSec = timeMs / 1000.0;
      const roundedTime = Number(timeSec.toFixed(1));
      return `${roundedTime} s`;
    }

    const roundedTime = Number(timeMs.toFixed(1));
    return `${roundedTime} ms`;
  }

  private _stringifyBotResults(results: BotResult[]) {
    return results
      .map(
        (result) =>
          `**${result.meta.name}** (${this._stringifySolvingTime(result.solvingTimeMs)})`,
      )
      .join(', ');
  }

  public generateReportMessage(botResults: BotResult[]): void {
    const botResultStatusGroups = Object.groupBy(
      botResults,
      (result) => result.status,
    );

    const solvedGuessCountGroups = Object.groupBy(
      botResultStatusGroups.solved ?? [],
      (result) => result.guesses.length,
    );

    let content = `${this._title}\n`;

    let isFirst = true;
    for (let i = 1; i <= Wordle.AttemptCount; i++) {
      const results = solvedGuessCountGroups[i];
      if (results === undefined) continue;
      if (isFirst) {
        content += ':crown:';
        isFirst = false;
      }
      content += `${i}/${Wordle.AttemptCount}: ${this._stringifyBotResults(results)}\n`;
    }

    if (botResultStatusGroups.failed !== undefined) {
      content += `X/${Wordle.AttemptCount}: ${this._stringifyBotResults(botResultStatusGroups.failed)}\n`;
    }

    if (botResultStatusGroups.crashed !== undefined) {
      content += `Crashed :wilted_rose:: ${this._stringifyBotResults(botResultStatusGroups.crashed)}\n`;
    }

    content +=
      '\nMake your own bot: [github/wordle-arena](<https://github.com/Rodak123/wordle-arena>)';

    this._reportMessage = content;
  }

  public get reportMessage() {
    if (this._reportMessage === null) {
      throw new Error('Report message not yet generated!');
    }
    return this._reportMessage;
  }
}
