import cron from 'node-cron';
import { daily } from './daily.ts';
import { benchmark } from './benchmark.ts';

/**
 * Schedules daily wordle every day
 */
export const dailyCron = () => {
  daily(false);
  benchmark();

  cron.schedule(
    '0 0 6 * * *', // 06:00
    () => {
      daily();
    },
    {
      name: 'Daily Wordle',
      timezone: 'Europe/Prague',
    },
  );
};

if (import.meta.main) {
  dailyCron();
}
