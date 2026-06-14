import { format } from 'date-fns';
import { DailyWordleSchema } from './DailyWordleSchema.ts';
import {
  LETTER_STATUS,
  type Guess,
  type GuessLetter,
  type LetterStatus,
  type RawGuess,
} from './Guess.ts';

export class Wordle {
  private static getEndpoint = (date: Date) =>
    `https://www.nytimes.com/svc/wordle/v2/${format(date, 'yyyy-MM-dd')}.json`;

  public static readonly WordLength = 5;
  public static readonly AttemptCount = 6;

  public static isSolved = (guess: Guess) =>
    guess.every((guessLetter) => guessLetter.status === LETTER_STATUS.EXACT);

  public static toWord = (guess: Guess) =>
    guess.reduce((word, guessLetter) => word + guessLetter.letter, '');

  public static toEmojis(guess: Guess) {
    const emojiMap: Record<LetterStatus, string> = {
      exact: '🟩',
      occurring: '🟨',
      missing: '⬛',
    };
    return guess.reduce(
      (word, guessLetter) => word + emojiMap[guessLetter.status],
      '',
    );
  }

  private _solution: RawGuess | null = null;
  private _validWords: Set<string>;

  constructor(validWords: Set<string>) {
    this._validWords = validWords;
  }

  public async load(date: Date): Promise<void> {
    const endpoint = Wordle.getEndpoint(date);
    try {
      const response = await fetch(endpoint);
      const json = await response.json();

      const wordle = DailyWordleSchema.parse(json);
      this._solution = [
        wordle.solution[0],
        wordle.solution[1],
        wordle.solution[2],
        wordle.solution[3],
        wordle.solution[4],
      ];
    } catch (err) {
      this._solution = null;
      throw new Error(`Failed to load Wordle: ${err}`);
    }
  }

  public isWordValid(word: string): boolean {
    return this._validWords.has(word);
  }

  public get validWords(): Set<string> {
    return new Set(this._validWords);
  }

  public createRawGuess(word: string): RawGuess {
    if (word.length !== Wordle.WordLength) {
      throw new Error(
        `Guess must be exactly '${Wordle.WordLength}' letters long.`,
      );
    }

    const isValid = this.isWordValid(word);
    if (!isValid) {
      throw new Error(`Guess must be in the words list. Used: '${word}'`);
    }

    return word.split('') as RawGuess;
  }

  public evaluateRawGuess(guess: RawGuess): Guess {
    if (this._solution === null) {
      throw new Error('Wordle not loaded!');
    }

    const solution = this._solution;

    const solutionOccurrenceMap: Record<string, number> = {}; // how many times does a letter appear in the solution
    solution.forEach((letter) => {
      solutionOccurrenceMap[letter] = (solutionOccurrenceMap[letter] ?? 0) + 1;
    });

    return guess
      .map((letter, index): GuessLetter => {
        const isIncluded = solution.includes(letter);
        if (!isIncluded) {
          // when this letter is not in this word it is missing
          return { letter, status: LETTER_STATUS.MISSING };
        }

        const isExact = solution[index] === letter;
        if (isExact) {
          solutionOccurrenceMap[letter]--; // first remove the exact letter from the occurrence map
          // when this letter is in the word here it is exact
          return { letter, status: LETTER_STATUS.EXACT };
        }

        // when this letter is occurring in this word it is used
        return { letter, status: LETTER_STATUS.OCCURRING };
      })
      .map((guessLetter) => {
        if (guessLetter.status !== LETTER_STATUS.OCCURRING) {
          return guessLetter;
        }
        // filter out extra occurring letters

        solutionOccurrenceMap[guessLetter.letter]--;

        const isOccurring = solutionOccurrenceMap[guessLetter.letter] >= 0;
        if (!isOccurring) {
          // when the letter is no longer occurring in the word it is missing
          return { ...guessLetter, status: LETTER_STATUS.MISSING };
        }

        return {
          ...guessLetter,
          status: LETTER_STATUS.OCCURRING,
        };
      }) as Guess;
  }
}
