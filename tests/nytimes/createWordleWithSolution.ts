import { Wordle } from '../../src/nytimes/Wordle.ts';

import wordleList from '../../src/data/wordle-list.json' with { type: 'json' };

export const createWordleWithSolution = (word: string): Wordle => {
  const validWords = new Set(wordleList);
  const wordle = new Wordle(validWords);

  wordle.loadExact(word);

  return wordle;
};
