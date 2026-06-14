import { expect, test } from 'vitest';
import { describe } from 'node:test';
import { createWordleWithSolution } from './createWordleWithSolution.ts';
import { LETTER_STATUS, type RawGuess } from '../../src/nytimes/Guess.ts';

describe('Wordle', () => {
  test('is created and loaded', () => {
    const rawGuess: RawGuess = ['p', 'e', 'n', 'i', 's'];
    const word = rawGuess.reduce((word, l) => word + l, '');

    const wordle = createWordleWithSolution(word);

    expect(wordle.solution).toStrictEqual(rawGuess);
  });

  test('catches invalid words', () => {
    const wordle = createWordleWithSolution('match');

    expect(() => wordle.createRawGuess(['horse'][2])).toThrow(); // passed undefined
    expect(() => wordle.createRawGuess('bad')).toThrow(); // passed short word
    expect(() => wordle.createRawGuess('invalid')).toThrow(); // passed long word
    expect(() => wordle.createRawGuess('wor_s')).toThrow(); // passed invalid word
  });

  test('correctly evaluates missing letters', () => {
    const wordle = createWordleWithSolution('match');

    const rawGuess = wordle.createRawGuess('latch');
    const guess = wordle.evaluateRawGuess(rawGuess);

    expect(guess[0].status).toBe(LETTER_STATUS.MISSING);
  });

  test('correctly evaluates single occurring letter', () => {
    const wordle = createWordleWithSolution('match');

    const rawGuess = wordle.createRawGuess('clone');
    const guess = wordle.evaluateRawGuess(rawGuess);

    expect(guess[0].status).toBe(LETTER_STATUS.OCCURRING); // first C is just in a wrong position
  });

  test('correctly evaluates multiple occurring letters with exact', () => {
    const wordle = createWordleWithSolution('match');

    const rawGuess = wordle.createRawGuess('circa');
    const guess = wordle.evaluateRawGuess(rawGuess);

    expect(guess[0].status).toBe(LETTER_STATUS.MISSING); // first C is missing (already found the exact of that letter)
    expect(guess[3].status).toBe(LETTER_STATUS.EXACT); // second C is exact
  });

  test('correctly evaluates multiple occurring letters with duplicates', () => {
    const wordle = createWordleWithSolution('snake');

    const rawGuess = wordle.createRawGuess('cross');
    const guess = wordle.evaluateRawGuess(rawGuess);

    expect(guess[3].status).toBe(LETTER_STATUS.OCCURRING); // first S is occurring
    expect(guess[4].status).toBe(LETTER_STATUS.MISSING); // second S is missing, since there are no more S's left
  });

  test('correctly evaluates exact letters', () => {
    const wordle = createWordleWithSolution('match');

    const rawGuess = wordle.createRawGuess('latch');
    const guess = wordle.evaluateRawGuess(rawGuess);

    // all letters after first are green
    for (let i = 1; i < guess.length; i++) {
      expect(guess[i].status).toBe(LETTER_STATUS.EXACT);
    }
  });
});
