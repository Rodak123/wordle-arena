# Creating Your Bot

[Back](../README.md)

To create your own bot, duplicate the folder `/src/bots/template` and change its name.
Then also rename `CustomSolverBotTemplate.ts` and the class inside it.

The file [CustomSolverBotTemplate.ts](../src/bots/template/CustomSolverBotTemplate.ts) has comments which will guide you.
Don't forget to name and describe it!

After you are finished, add you bot inside the `/src/bots/bots.ts` file like so:
```ts
export const createAllBots = (wordle: Wordle): ASolverBot[] => {
  return [
    // ...previous bots
    new YourBot(wordle), // like so
  ];
};
```

That's it! :)