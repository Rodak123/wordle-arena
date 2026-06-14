import { BOT_STATUS, type BotResult } from './BotResult.ts';
import { type Guess } from '../nytimes/Guess.ts';
import { Wordle } from '../nytimes/Wordle.ts';
import type { BotMeta } from './BotMeta.ts';
import { Stopwatch } from '../utils/Stopwatch.ts';

export abstract class ASolverBot {
  private _wordle: Wordle;

  constructor(wordle: Wordle) {
    this._wordle = wordle;
  }

  // Utility methods

  /**
   * Returns true when a word is a valid choice in Wordle
   */
  protected _isWordValid(word: string): boolean {
    return this._wordle.isWordValid(word);
  }

  /**
   * Returns the entire Wordle word list
   */
  protected _getValidWords(): Set<string> {
    return this._wordle.validWords;
  }

  // Solver

  public async solve(): Promise<BotResult> {
    const guesses: Guess[] = [];
    let error: null | Error = null;
    let isSolved: boolean = false;

    const stopwatch = new Stopwatch();

    try {
      stopwatch.start();
      await this._init();
      stopwatch.stop();
    } catch (err) {
      error = err as Error;
    }

    if (error === null) {
      for (let i = 0; i < Wordle.AttemptCount; i++) {
        try {
          stopwatch.start();
          const word = await this._pickWord(i, guesses);
          stopwatch.stop();

          const rawGuess = this._wordle.createRawGuess(word);
          const guess = this._wordle.evaluateRawGuess(rawGuess);
          guesses.push(guess);

          if (Wordle.isSolved(guess)) {
            isSolved = true;
            break;
          }
        } catch (err) {
          error = err as Error;
          break;
        }
      }
    }

    const baseResult = {
      guesses,
      solvingTimeMs: stopwatch.timeMs,
      meta: this._about(),
    };

    if (error !== null) {
      return {
        ...baseResult,
        status: BOT_STATUS.CRASHED,
        error,
      };
    }

    return {
      ...baseResult,
      status: isSolved ? BOT_STATUS.SOLVED : BOT_STATUS.FAILED,
    };
  }

  // Custom bot

  /**
   * Information about the bot
   */
  protected abstract _about(): BotMeta;

  /**
   * Initializes the custom bot
   */
  protected abstract _init(): Promise<void>;

  /**
   * The bot choses a word
   */
  protected abstract _pickWord(
    attemptIndex: number,
    previousGuesses: Guess[],
  ): Promise<string>;
}
