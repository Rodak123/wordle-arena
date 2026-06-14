import type { ASolverBot } from '../bot/ASolverBot.ts';
import type { Wordle } from '../nytimes/Wordle.ts';

import { RandomSolverBot } from './randomBot/RandomSolverBot.ts';
import { CheatingBot } from './cheatingBot/CheatingBot.ts';
import { HorsleBot } from './horsleBot/HorsleBot.ts';
import { PatternBot } from './patternBot/PatternBot.ts';
import { LookupTableBot } from './lookupTableBot/LookupTableBot.ts';

export const createAllBots = (wordle: Wordle): ASolverBot[] => {
  // add your bot here:
  return [
    new RandomSolverBot(wordle),
    new CheatingBot(wordle),
    new HorsleBot(wordle),
    new PatternBot(wordle),
    new LookupTableBot(wordle),
    // new YourBot(wordle),
  ];
};
