import { ASolverBot, type BotMeta } from '../allowedContext.ts';

export class RandomSolverBot extends ASolverBot {
  public about(): BotMeta {
    return {
      name: 'Random Bot',
      author: 'Radek Titěra',
      description:
        'Picks random words from the valid word list and hopes for the best :).',
    };
  }

  protected _init(): void {
    // noting to init
  }

  protected _pickWord(): string {
    const wordList = this._getValidWords();

    const index = Math.floor(Math.random() * wordList.length);
    const word = wordList[index];

    return word;
  }
}
