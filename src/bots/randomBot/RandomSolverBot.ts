import { ASolverBot, type BotMeta } from '../allowedContext.ts';

export class RandomSolverBot extends ASolverBot {
  private _wordsLeft: string[] = [];

  protected _about(): BotMeta {
    return {
      name: 'Random Bot',
      author: 'Radek Titěra',
      description:
        'Picks random words from the valid word list and hopes for the best :).',
    };
  }

  protected _init(): void {
    // loads the valid word list
    this._wordsLeft = this._getValidWords();
  }

  protected _pickWord(i: number): string {
    if (i === 3) return 'quell';
    // picks and removes a random word from it
    const index = Math.floor(Math.random() * this._wordsLeft.length);
    this._wordsLeft.splice(index, 1);
    const word = this._wordsLeft[index];
    return word;
  }
}
