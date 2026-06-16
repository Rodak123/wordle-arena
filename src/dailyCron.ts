import cron from 'node-cron';
import { daily } from './daily.ts';

/**
 * Schedules daily wordle every day at 08:00
 */
export const dailyCron = () => {
  cron.schedule('0 0 8 * * *', () => {
    daily();
  });
};

if (import.meta.main) {
  dailyCron();
}
