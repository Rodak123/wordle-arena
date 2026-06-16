import type { DiscordMessage } from './DiscordMessage.ts';
import { existsSync, readFileSync } from 'fs';
import path from 'path';
import { z } from 'zod';

export class DiscordBot {
  public static createDiscordBotFromLocal(
    username: string,
    relativeWebhooksPath: string = 'webhooks.json',
  ) {
    const webhooksPath = path.join(process.cwd(), relativeWebhooksPath);
    if (!existsSync(webhooksPath)) {
      console.warn(
        `Missing webhooks at: '${webhooksPath}', discord will not receive messages.`,
      );
      return new DiscordBot(username, []);
    }

    const webhooks = z
      .array(z.string())
      .parse(JSON.parse(readFileSync(webhooksPath, 'utf8')));

    return new DiscordBot(username, webhooks);
  }

  private _username: string;
  private _webhooks: string[] = [];

  public constructor(username: string, webhooks: string[]) {
    this._username = username;
    this._webhooks = webhooks;
  }

  public async sendMessage(message: DiscordMessage) {
    for (const webhook of this._webhooks) {
      const formData = new FormData();

      const payload = {
        content: message.content,
        username: this._username,
      };
      formData.append('payload_json', JSON.stringify(payload));

      if (message.type === 'attached-files') {
        message.attachedFiles.forEach(({ file, fileName }, index) => {
          const fileUint8Array = file as unknown as Uint8Array<ArrayBuffer>;
          const fileBlob = new Blob([fileUint8Array]);
          formData.append(`files[${index}]`, fileBlob, fileName);
        });
      }

      try {
        const response = await fetch(webhook, {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          console.error(
            `Failed to send: [${response.status}] ${response.statusText}`,
          );
        }
      } catch (err) {
        console.error(`Failed to send: ${err}`);
      }
    }
  }
}
