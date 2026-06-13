// gemini saved this script, I can't find any docs on webhooks
export class Discord {
  public static readonly NewLine = '\n';

  private _username: string;
  private _webhooks: string[] = [];

  public constructor(username: string, webhooks: string[]) {
    this._username = username;
    this._webhooks = webhooks;
  }

  public async sendMessage(content: string, file?: Buffer, fileName?: string) {
    for (const webhook of this._webhooks) {
      const formData = new FormData();

      const payload = {
        content,
        username: this._username,
      };
      formData.append('payload_json', JSON.stringify(payload));

      if (file) {
        const fileUint8Array = file as unknown as Uint8Array<ArrayBuffer>;
        const fileBlob = new Blob([fileUint8Array]);
        formData.append('files[0]', fileBlob, fileName || 'upload.png');
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
