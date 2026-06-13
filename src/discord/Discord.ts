export class Discord {
  public static readonly NewLine = '\n';

  private _username: string;
  private _webhooks: string[] = [];

  public constructor(username: string, webhooks: string[]) {
    this._username = username;
    this._webhooks = webhooks;
  }

  public async sendMessage(content: string) {
    for (const webhook of this._webhooks) {
      const message = {
        content,
        username: this._username,
      };

      try {
        const response = await fetch(webhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(message),
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
