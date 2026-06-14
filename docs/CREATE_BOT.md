# Creating Your Bot

[Back](../README.md)

## Contents

- [Creating Your Bot](#creating-your-bot)
  - [Contents](#contents)
  - [1. Fork this repo](#1-fork-this-repo)
  - [2. Create the bot](#2-create-the-bot)
  - [3. Add and test your bot](#3-add-and-test-your-bot)
  - [4. Document your bot](#4-document-your-bot)
  - [5. Make a PR](#5-make-a-pr)

## 1. Fork this repo

Make a fork for this repo and create a new branch.
You can name it whatever, but `some-bot` makes sense.

## 2. Create the bot

Duplicate the folder `/src/bots/template` and change its name.
Then also rename `CustomSolverBotTemplate.ts` and the class inside it.

The file [CustomSolverBotTemplate.ts](../src/bots/template/CustomSolverBotTemplate.ts) has comments that will guide you.

Don't forget the `_about()` method!

## 3. Add and test your bot

After you are finished, add you bot inside the `/src/bots/bots.ts` file like so:
```ts
export const createAllBots = (wordle: Wordle): ASolverBot[] => {
  return [
    // ...previous bots
    new YourBot(wordle), // like so
  ];
};
```

Don't forget to test run it:
```bash
npm run daily
```

Or use other [run commands](../README.md#run).

Or a random word:
```bash
npm run random
```

Also make sure that you have correct linting and types:
```bash
npm run lint
```

## 4. Document your bot

Update the `README.md` file inside your bot folder. Describe it to as much details as you want.

You can also edit the root [README.md](../README.md#bots) and add your bot in the **Bots** section.

## 5. Make a PR

To submit your bot, make a pull request to the `main` branch.

That's it! :)