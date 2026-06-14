import {
  ASolverBot,
  type Guess,
  type BotMeta,
  LETTER_STATUS,
  type GuessLetter,
} from '../allowedContext.ts';

export class PatternBot extends ASolverBot {
  private _wordsLeft: string[] = [];

  protected _about(): BotMeta {
    return {
      name: 'Pattern Bot',
      author: 'Radek',
      description: 'Matches words in the word list using previous guesses.',
    };
  }

  protected async _init(): Promise<void> {
    this._wordsLeft = this._getValidWords();
  }

  protected async _pickWord(
    guessIndex: number,
    previousGuesses: Guess[],
  ): Promise<string> {
    if (guessIndex === 0) {
      // a good one seed strategy word
      // source: https://www.sfi.ie/research-news/news/wordle-data-analytics/
      return 'tales';
    }

    const missingLetters = [
      ...new Set(
        previousGuesses
          .reduce(
            (guessLetters: GuessLetter[], guess) => [...guessLetters, ...guess],
            [],
          )
          .filter((guessLetter) => guessLetter.status === LETTER_STATUS.MISSING)
          .map((guessLetter) => guessLetter.letter),
      ).values(),
    ];

    console.log(missingLetters);

    let bestMatch = this._wordsLeft[0];
    return bestMatch;
  }
}
