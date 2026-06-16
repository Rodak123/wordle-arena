# Wordle Bot Arena

Today's wordle:

![Wordle Daily Overview](https://wordle.titera.dev/overview.png)

Make your fancy schmancy wordle guessing bot and battle it out in this Wordle (not associated in any way) Arena. >:)  

## Bots

[Create your own solver bot](./docs/CREATE_BOT.md).

- [Random Bot](./src/bots/randomBot/README.md)
- [Cheating Bot](./src/bots/cheatingBot/README.md)
- [Horsle](./src/bots/horsleBot/README.md)
- [Pattern Bot](./src/bots/patternBot/README.md)
- [O(1) lookup table bot](./src/bots/lookupTableBot/README.md)

## Contents

- [Wordle Bot Arena](#wordle-bot-arena)
  - [Bots](#bots)
  - [Contents](#contents)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Run](#run)
  - [Test](#test)
  - [Discord](#discord)
  - [Credits](#credits)

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
npm run daily
```

Start a single arena battle with a random word.
```bash
npm run random
```

Start a single arena battle with a random word.
```bash
npm run word <WORD>
```

Start battles every day at 8 AM.
```bash
npm run cron
```

## Test

Check linting and type errors.
```bash
npm run lint
```

Run `tests/` once.
```bash
npm run test
```

Run `tests/` and wait for changes.
```bash
npm run test-watch
```

## Discord

Here is how it looks in discord:

![Discord Preview](./docs/discord_preview.png)

## Credits

- Wordle List - [gist.github.com/dracos/valid-wordle-words.txt](https://gist.github.com/dracos/dd0668f281e685bad51479e5acaadb93)
- Daily Solution - [www.nytimes.com](https://www.nytimes.com/svc/wordle/v2/2026-06-13.json)
