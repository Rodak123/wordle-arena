import { Wordle } from './nytimes/Wordle.ts';
import wordleList from './data/wordle-list.json' with { type: 'json' };
import type { ASolverBot } from './bot/ASolverBot.ts';
import { getAllBots as createAllBots } from './bots/bots.ts';

const main = async () => {
  // load wordle
  const validWords = wordleList;
  const wordle = new Wordle(validWords);
  const today = new Date();

  await wordle.load(today);

  // setup bots
  const bots: ASolverBot[] = createAllBots(wordle);

  // let bots solve
  bots.forEach((bot) => {
    const result = bot.solve();
    console.log(result);
  });
};

main();
