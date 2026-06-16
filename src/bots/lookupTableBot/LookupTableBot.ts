import type { LetterStatus } from '../allowedContext.ts';
import { ASolverBot, type Guess, type BotMeta } from '../allowedContext.ts';
import { lookupTable } from './lookupTable.ts';
import type { Clue, Evaluation, LookupTableSubtree } from './types.ts';

export class LookupTableBot extends ASolverBot {
  private lookupTable: LookupTableSubtree = lookupTable;

  protected _about(): BotMeta {
    return {
      name: 'O(1) lookup table bot',
      author: 'Jirka Vrba',
    };
  }

  protected async _init(): Promise<void> {}

  protected async _pickWord(
    _guessIndex: number,
    previousGuesses: Guess[],
  ): Promise<string> {
    if (previousGuesses.length === 0) {
      return this.lookupTable.w;
    }

    const previousGuessEvaluation = this.buildPattern(previousGuesses.at(-1)!);
    this.lookupTable = this.lookupTable.g![previousGuessEvaluation]!;
    return this.lookupTable.w;
  }

  private buildPattern(guess: Guess): Evaluation {
    const mapping: Record<LetterStatus, Clue> = {
      exact: 'c',
      occurring: 'p',
      missing: 'a',
    };

    return guess.map((letter) => mapping[letter.status]).join('') as Evaluation;
  }
}
