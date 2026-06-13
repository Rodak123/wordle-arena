# Wordle Bot Arena

Wordle simulator which provides a simple way to implement your own Wordle bot.

[Create your own solver bot](./docs/CREATE_BOT.md).

## Run

Ensure that you have `./webhooks.json` file like:
```json
[
  "https://discord.com/api/webhooks/..."
]
```
This is to send the results to discord.

```bash
npm install
```

Start a single arena battle of today.

```bash
npm run start
```

Start battles every day at 8 AM.

```bash
npm run cron
```