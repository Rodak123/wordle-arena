import type { Guess } from '../nytimes/Guess.ts';

export const BOT_STATUS = {
  SOLVED: 'solved',
  FAILED: 'failed',
  CRASHED: 'crashed',
} as const;

export type BotStatus = (typeof BOT_STATUS)[keyof typeof BOT_STATUS];

interface BaseBotResult {
  guesses: Guess[];
  status: BotStatus;
  solvingTimeMs: number;
}

interface NormalBotResult extends BaseBotResult {
  status: 'solved' | 'failed';
  achievements: {
    checkedValidWords: boolean;
    usedWordList: boolean;
  };
}

interface CrashedBotResult extends BaseBotResult {
  status: 'crashed';
  error: Error;
}

export type BotResult = NormalBotResult | CrashedBotResult;
