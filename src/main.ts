import { Wordle } from './nytimes/Wordle.ts';
import wordleList from './data/wordle-list.json' with { type: 'json' };
import type { ASolverBot } from './bot/ASolverBot.ts';
import { getAllBots as createAllBots } from './bots/bots.ts';
import { gu } from 'date-fns/locale';
import { BOT_STATUS } from './bot/BotResult.ts';

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
    const words = result.guesses.map(Wordle.toWord);

    console.log();
    console.log(`Bot '${result.meta.name}' by ${result.meta.author}`);
    console.log(`has ${result.status} in ${result.solvingTimeMs}ms:`);
    console.log('Guesses:', words);
    if (result.status === BOT_STATUS.CRASHED) {
      console.log(`Error: ${result.error}`);
    }
  });
};

main();
