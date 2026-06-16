import type { BotStatus } from '../bots/allowedContext.ts';
import type { ASolverBot } from './bot/ASolverBot.ts';
import { BOT_STATUS, type BotResult } from './bot/BotResult.ts';
import { Wordle } from './nytimes/Wordle.ts';

export class WordleBotRunner {
  _bots: ASolverBot[];

  _botResults: BotResult[] | null = null;

  public constructor(bots: ASolverBot[]) {
    this._bots = bots;
  }

  public async runBots(): Promise<void> {
    this._botResults = await Promise.all(
      this._bots.map(async (bot, index) => {
        const result = await bot.solve();
        const words = result.guesses.map(Wordle.toWord);

        console.log(`-- ${index} --`);
        console.log(`Bot '${result.meta.name}' by ${result.meta.author}`);
        console.log(`has ${result.status} in ${result.solvingTimeMs}ms:`);
        console.log('Guesses:', words);
        if (result.status === BOT_STATUS.CRASHED) {
          console.log(`Error: ${result.error}`);
        }
        console.log();

        return result;
      }),
    );
  }

  public async sortResults(): Promise<void> {
    const botResults = this.botResults;

    const statusOrderMap: Record<BotStatus, number> = {
      solved: 1,
      failed: 2,
      crashed: 3,
    };

    botResults.sort((a, b) => {
      // sort by status
      const statusOrder = statusOrderMap[a.status] - statusOrderMap[b.status];
      if (statusOrder !== 0) return statusOrder;

      // sort by guess count
      const guessOrder = a.guesses.length - b.guesses.length;
      if (guessOrder !== 0) return guessOrder;

      // sort by time
      const timeOrder = a.solvingTimeMs - b.solvingTimeMs;
      return timeOrder;
    });
  }

  public get botResults(): BotResult[] {
    if (this._botResults === null) {
      throw new Error('Bot results not yet generated!');
    }
    return this._botResults;
  }
}
