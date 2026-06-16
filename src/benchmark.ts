import { createWordle } from './actions/createWordle.ts';
import { runBotsAndSortResults } from './actions/runBotsAndSortResults.ts';

type BotResultsAggregation = {
  solvedChallenges: number;
  failedChallenges: number;
  averageGuesses: number;
  averageSolvingTimeMs: number;
  wordsCausingCrash: string[];
};

/**
 * Benchmarks all bots on top of the whole wordlist
 */
export const benchmark = async () => {
  const wordle = createWordle();
  const results: Record<string, BotResultsAggregation> = {};

  for (const word of wordle.validWords) {
    console.log(`Trying ${word}`);

    wordle.loadExact(word);

    const botResults = await runBotsAndSortResults(wordle);

    botResults.forEach((result) => {
      const name = result.meta.name;

      results[name] ??= {
        solvedChallenges: 0,
        failedChallenges: 0,
        averageGuesses: 0,
        averageSolvingTimeMs: 0,
        wordsCausingCrash: [],
      };

      const totalGuesses =
        results[name].solvedChallenges + results[name].failedChallenges + 1;

      switch (result.status) {
        case 'solved':
          results[name].solvedChallenges++;
          break;

        case 'failed':
          results[name].failedChallenges++;
          break;

        case 'crashed':
          results[name].failedChallenges++;
          results[name].wordsCausingCrash.push(word);
          break;
      }

      results[name].averageSolvingTimeMs +=
        result.solvingTimeMs / totalGuesses -
        results[name].averageSolvingTimeMs / Math.max(totalGuesses - 1, 1);
      results[name].averageGuesses +=
        result.guesses.length / totalGuesses -
        results[name].averageGuesses / Math.max(totalGuesses - 1, 1);
    });
  }

  console.log(results);
};

if (import.meta.main) {
  benchmark();
}
