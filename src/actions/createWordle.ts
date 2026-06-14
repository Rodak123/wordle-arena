import { Wordle } from '../core/nytimes/Wordle.ts';
import wordleList from '../data/wordle-list.json' with { type: 'json' };

export const createWordle = () => {
  const validWords = new Set(wordleList);
  const wordle = new Wordle(validWords);

  return wordle;
};
