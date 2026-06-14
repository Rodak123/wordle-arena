import {
  ASolverBot,
  type Guess,
  type BotMeta,
  LETTER_STATUS,
  type GuessLetter,
} from '../allowedContext.ts';

export class PatternBot extends ASolverBot {
  private _wordsLeft: Set<string> = new Set();

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

  private _pickRandomFromWordsLeft(): string {
    const words = [...this._wordsLeft.values()];
    const index = Math.floor(Math.random() * words.length);
    const word = words[index];
    this._wordsLeft.delete(word);
    return word;
  }

  protected async _pickWord(
    guessIndex: number,
    previousGuesses: Guess[],
  ): Promise<string> {
    if (guessIndex === 0) {
      // a good one seed strategy word
      // source: https://www.sfi.ie/research-news/news/wordle-data-analytics/
      const firstWord = 'tales';
      this._wordsLeft.delete(firstWord);
      return firstWord;
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

    return this._pickRandomFromWordsLeft();
  }
}
