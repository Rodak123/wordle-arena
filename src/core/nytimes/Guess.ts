export const LETTER_STATUS = {
  MISSING: 'missing', // gray
  OCCURRING: 'occurring', // orange
  EXACT: 'exact', // green
} as const;

export type LetterStatus = (typeof LETTER_STATUS)[keyof typeof LETTER_STATUS];

export interface GuessLetter {
  letter: string;
  status: LetterStatus;
}

export type FiveArray<T> = [T, T, T, T, T];

export type RawGuess = FiveArray<string>;
export type Guess = FiveArray<GuessLetter>;
