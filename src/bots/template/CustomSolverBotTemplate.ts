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
export class CustomSolverBot extends ASolverBot {
  protected _about(): BotMeta {
    return {
      name: 'Bot Name', // shouldn't be too long
      author: 'Your Name', // your name/nick or sth
      description: 'How does your bot work?',
    };
  }

  protected _init(): void {
    // init your solver bot here
  }

  protected _pickWord(): string {
    // write your custom bot logic here
    const word: string = 'hello';
    return word;
  }
}
