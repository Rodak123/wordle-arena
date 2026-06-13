import { BOT_STATUS, type BotResult } from './BotResult.ts';
import { type Guess } from '../nytimes/Guess.ts';
import { Wordle } from '../nytimes/Wordle.ts';
import type { BotMeta } from './BotMeta.ts';

export abstract class ASolverBot {
  private _wordle: Wordle;

  private _checkedValidWords: boolean = false;
  private _usedWordList: boolean = false;

  constructor(wordle: Wordle) {
    this._wordle = wordle;
  }

  // Utility methods

  /**
   * Returns true when a word is in the word list
   */
  protected _isWordValid(word: string): boolean {
    this._checkedValidWords = true;
    return this._wordle.isWordValid(word);
  }

  /**
   * Returns the entire word list
   */
  protected _getValidWords(): string[] {
    this._usedWordList = true;
    return this._wordle.validWords;
  }

  // Solver

  public solve(): BotResult {
    const guesses: Guess[] = [];
    let error: null | Error = null;
    let isSolved: boolean = false;

    const startTime = performance.now();

    try {
      this._init();
    } catch (err) {
      error = err as Error;
    }

    if (error === null) {
      for (let i = 0; i < Wordle.AttemptCount; i++) {
        try {
          const word = this._pickWord(i, guesses);
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

    const endTime = performance.now();
    const solvingTimeMs = endTime - startTime;

    const baseResult = {
      guesses,
      solvingTimeMs,
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
      achievements: {
        checkedValidWords: this._checkedValidWords,
        usedWordList: this._usedWordList,
      },
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
  protected abstract _init(): void;

  /**
   * The bot choses a word
   */
  protected abstract _pickWord(
    attemptIndex: number,
    previousGuesses: Guess[],
  ): string;
}
