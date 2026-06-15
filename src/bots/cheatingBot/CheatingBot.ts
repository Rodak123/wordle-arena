import { ASolverBot, type BotMeta } from '../allowedContext.ts';

type FakeItTillYouMakeIt = {
  _wordle: {
    _solution: string[];
  };
};

export class CheatingBot extends ASolverBot {
  protected _about(): BotMeta {
    return {
      name: 'Cheating bot',
      author: 'Jirka Vrba',
    };
  }

  protected async _init(): Promise<void> {}

  protected async _pickWord(): Promise<string> {
    // Fun fact, in Typescript, private fields are not actually private :^)
    // It's just a compile-time check that can be easily bypassed
    return (this as unknown as FakeItTillYouMakeIt)._wordle._solution.join('');
  }
}
