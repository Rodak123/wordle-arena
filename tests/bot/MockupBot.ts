import { ASolverBot } from '../../src/bot/ASolverBot';
import { type BotMeta } from '../../src/bot/BotMeta';

export class MockupBot extends ASolverBot {
  public static readonly WrongWord = 'latch';
  public static readonly SolutionWord = 'match';

  public isInitialized: boolean = false;

  protected _about(): BotMeta {
    return {
      name: 'Mockup Bot',
      author: 'Tester',
      description: 'Just tests the app out.',
    };
  }

  protected async _init(): Promise<void> {
    this.isInitialized = true;
  }

  protected async _pickWord(guessIndex: number): Promise<string> {
    if (guessIndex === 3) {
      return MockupBot.SolutionWord;
    }

    return MockupBot.WrongWord;
  }
}
