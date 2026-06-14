import { existsSync, readFileSync } from 'fs';
import path from 'path';
import { z } from 'zod';
import { Discord } from '../core/discord/Discord.ts';

export const tryLoadDiscord = () => {
  const webhooksPath = path.join(process.cwd(), 'webhooks.json');
  if (!existsSync(webhooksPath)) {
    console.warn(
      `Missing webhooks at: '${webhooksPath}', discord will not receive messages.`,
    );
    return null;
  }
  const webhooks = z
    .array(z.string())
    .parse(JSON.parse(readFileSync(webhooksPath, 'utf8')));

  return new Discord('Wordle Arena', webhooks);
};
