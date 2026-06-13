import { Wordle } from './nytimes/Wordle.ts';

const main = async () => {
  const wordle = new Wordle();
  const today = new Date();

  await wordle.load(today);

  console.log(wordle.evaluateGuess(['m', 'a', 't', 'c', 'h']));
};

main();
