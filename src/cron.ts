import { main } from './main.ts';
import cron from 'node-cron';

// At 8 AM every day
cron.schedule('0 0 8 * * *', () => {
  main();
});
