import { format } from 'date-fns';
import { DailyWordleSchema } from './DailyWordleSchema.ts';
import {
  LETTER_STATUS,
  type Guess,
  type GuessLetter,
  type RawGuess,
} from './Guess.ts';

export class Wordle {
  private static getEndpoint = (date: Date) =>
    `https://www.nytimes.com/svc/wordle/v2/${format(date, 'yyyy-MM-dd')}.json`;

  private _solution: RawGuess | null = null;

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

  public evaluateGuess(guess: RawGuess): Guess {
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
