import type { Guess } from '../nytimes/Guess.ts';
import type { BotMeta } from './BotMeta.ts';

export const BOT_STATUS = {
  SOLVED: 'solved',
  FAILED: 'failed',
  CRASHED: 'crashed',
} as const;

export type BotStatus = (typeof BOT_STATUS)[keyof typeof BOT_STATUS];

interface BaseBotResult {
  meta: BotMeta;
  guesses: Guess[];
  status: BotStatus;
  solvingTimeMs: number;
}

interface NormalBotResult extends BaseBotResult {
  status: 'solved' | 'failed';
}

interface CrashedBotResult extends BaseBotResult {
  status: 'crashed';
  error: Error;
}

export type BotResult = NormalBotResult | CrashedBotResult;
