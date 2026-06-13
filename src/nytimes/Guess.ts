export const LETTER_STATUS = {
  MISSING: 'missing', // gray
  OCCURRING: 'occurring', // orange
  EXACT: 'exact', // green
} as const;

export type LetterStatus = (typeof LETTER_STATUS)[keyof typeof LETTER_STATUS];

export type GuessLetter = {
  letter: string;
  status: LetterStatus;
};

export type RawGuess = [string, string, string, string, string];

export type Guess = [
  GuessLetter,
  GuessLetter,
  GuessLetter,
  GuessLetter,
  GuessLetter,
];
