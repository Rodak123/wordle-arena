# Wordle Bot Arena

![Discord Preview](./docs/discord_preview.png)

Wordle simulator which provides a simple way to implement your own Wordle bot.

[Create your own solver bot](./docs/CREATE_BOT.md).

## Prerequisites

- Node ^24

## Setup

Add your `./webhooks.json` file like:
```json
[
  "https://discord.com/api/webhooks/..."
]
```
This is to send the results to discord.
If missing, app works just fine :).

Install node packages.
```bash
npm install
```

## Run

Start a single arena battle of today.

```bash
npm run start
```

Start battles every day at 8 AM.

```bash
npm run cron
```
