import { ASolverBot, type BotMeta } from '../allowedContext.ts';

/**
 * This is a template for making your own solver bot. Copy this folder and change its name.
 *
 * Rules:
 * - Don't override any base methods (that includes the constructor).
 * - Implement all three abstract methods (_about, _init and _pickWord)
 * - Only import from '../allowedContext.ts', this folder and custom libraries.
 * - After creating your bot, add it into '../bots.ts'.
 * - Use only the provided utility methods from ASolverBot
 * - Feel free to add your files :)
 * - (optional) Document your bot for others :)
 *
 * Provided utility methods:
 * - _isWordValid -> checks if the provided word is in the word list
 * - _getValidWords -> returns the entire word list
 *
 * Using utility methods gets recorded for fun :).
 */
export class CheatingBot extends ASolverBot {
  protected correctWord?: string;

  protected _about(): BotMeta {
    return {
      name: 'Cheating bot',
      author: 'Jirka Vrba',
      description: 'Secret :3',
    };
  }

  protected async _init(): Promise<void> {
    // init your solver bot here
    const date = new Date();
    const formatted = date.toISOString().substring(0, 10);
    const endpoint = `https://www.nytimes.com/svc/wordle/v2/${formatted}.json`;

    this.correctWord = await fetch(endpoint)
      .then((response) => response.json())
      .then((response) => response.solution);
  }

  protected async _pickWord(): Promise<string> {
    // write your custom bot logic here
    return this.correctWord ?? 'cheats';
  }
}
