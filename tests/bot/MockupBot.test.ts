import { expect, test } from 'vitest';
import { describe } from 'node:test';
import { createWordleWithSolution } from '../nytimes/createWordleWithSolution.ts';
import { MockupBot } from './MockupBot.ts';
import { BOT_STATUS } from '../../src/core/bot/BotResult.ts';

describe('Mockup Bot', () => {
  test('is created and solves after 3 guesses', async () => {
    const wordle = createWordleWithSolution(MockupBot.SolutionWord);
    const mockupBot = new MockupBot(wordle);

    const result = await mockupBot.solve();

    expect(result.status).toBe(BOT_STATUS.SOLVED);
    expect(result.guesses.length).toBe(4);
  });
});
