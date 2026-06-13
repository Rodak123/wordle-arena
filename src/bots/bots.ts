import type { ASolverBot } from "../bot/ASolverBot.ts";
import type { Wordle } from "../nytimes/Wordle.ts";

import { RandomSolverBot } from "./randomBot/RandomSolverBot.ts";
import { CheatingBot } from "./cheatingBot/CheatingBot.ts";

export const createAllBots = (wordle: Wordle): ASolverBot[] => {
  // add your bot here:
  return [
    new RandomSolverBot(wordle),
    new CheatingBot(wordle),
    // new YourBot(wordle),
  ];
};
