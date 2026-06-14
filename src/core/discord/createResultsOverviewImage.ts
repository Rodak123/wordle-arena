import path from 'path';
import { createCanvas, GlobalFonts } from '@napi-rs/canvas';
import type { BotResult } from '../bot/BotResult.ts';
import { Wordle } from '../nytimes/Wordle.ts';
import {
  type Guess,
  LETTER_STATUS,
  type LetterStatus,
} from '../nytimes/Guess.ts';

GlobalFonts.registerFromPath(
  path.join(process.cwd(), 'src', 'data', 'fonts', 'OpenSans-Regular.ttf'),
  'Open Sans',
);

const THEME = {
  BG: '#151515',
  BORDER: '#3a3a3c',
  GREY: '#3a3a3c',
  YELLOW: '#b59f3b',
  GREEN: '#538d4e',
  TEXT: '#ffffff',
  PADDING: 8,
  WORDLE_BOX: 8,
  WORDLE_BOX_MARGIN: 2,
} as const;

const EMPTY_GUESS: Guess = [
  { letter: '', status: LETTER_STATUS.MISSING },
  { letter: '', status: LETTER_STATUS.MISSING },
  { letter: '', status: LETTER_STATUS.MISSING },
  { letter: '', status: LETTER_STATUS.MISSING },
  { letter: '', status: LETTER_STATUS.MISSING },
] as const;

const LETTER_STATUS_STYLE_MAP: Record<LetterStatus, string> = {
  exact: THEME.GREEN,
  occurring: THEME.YELLOW,
  missing: THEME.GREY,
};

export const createResultsOverviewImage = async (botResults: BotResult[]) => {
  // canvas my beloved :P

  const resultGridCols = 3;

  const botResultRows: BotResult[][] = [[]];
  let currentRow = 0;
  botResults.forEach((result) => {
    const row = botResultRows[currentRow];
    if (row.length < resultGridCols) {
      row.push(result);
    } else {
      botResultRows.push([result]);
      currentRow++;
    }
  });

  const resultBoxWidth = 128;
  const resultBoxHeight =
    THEME.PADDING * 6.5 + // Top text size
    Wordle.AttemptCount * (THEME.WORDLE_BOX + THEME.WORDLE_BOX_MARGIN); // wordle height

  const canvasWidth =
    THEME.PADDING * 4 + (THEME.PADDING + resultBoxWidth * resultGridCols);
  const canvasHeight =
    THEME.PADDING + (resultBoxHeight + THEME.PADDING) * botResultRows.length;

  const canvas = createCanvas(canvasWidth, canvasHeight);
  const ctx = canvas.getContext('2d');

  const responsiveTextInBox = (
    text: string,
    x: number,
    y: number,
    maxWidth: number,
    maxHeight: number,
    initialFontSize: number = 100,
  ) => {
    ctx.font = `${initialFontSize}px 'Open Sans'`;
    const textWidth = ctx.measureText(text).width || 1;
    let optimalFontSize = (maxWidth / textWidth) * initialFontSize;
    if (optimalFontSize > maxHeight) {
      optimalFontSize = maxHeight;
    }
    ctx.font = `${optimalFontSize}px 'Open Sans'`;
    ctx.fillStyle = THEME.TEXT;
    ctx.fillText(text, x, y);
  };

  const drawBotResult = (x: number, y: number, result: BotResult) => {
    let yOffset = THEME.PADDING;

    ctx.translate(x, y);

    ctx.lineWidth = 1;
    ctx.strokeStyle = THEME.BORDER;
    ctx.roundRect(0, 0, resultBoxWidth, resultBoxHeight, resultBoxWidth * 0.1);
    ctx.stroke();

    // name and author
    ctx.textAlign = 'center';
    ctx.textBaseline = 'hanging';
    responsiveTextInBox(
      result.meta.name,
      resultBoxWidth / 2,
      yOffset,
      resultBoxWidth - THEME.PADDING * 2,
      THEME.PADDING * 1.75,
    );
    yOffset += THEME.PADDING * 3.75;

    ctx.textBaseline = 'bottom';
    responsiveTextInBox(
      `by ${result.meta.author}`,
      resultBoxWidth / 2,
      yOffset,
      resultBoxWidth - THEME.PADDING * 2,
      THEME.PADDING * 1.25,
    );
    yOffset += THEME.PADDING * 1;

    // wordle result
    const wordleBoxXOffset =
      resultBoxWidth / 2 -
      (Wordle.WordLength / 2) * (THEME.WORDLE_BOX + THEME.WORDLE_BOX_MARGIN);

    for (let i = 0; i < Wordle.AttemptCount; i++) {
      const guess = result.guesses[i] ?? EMPTY_GUESS;
      for (let j = 0; j < guess.length; j++) {
        const guessLetter = guess[j];
        const isEmpty = guessLetter.letter.length === 0;

        const x =
          wordleBoxXOffset + j * (THEME.WORDLE_BOX + THEME.WORDLE_BOX_MARGIN);

        if (isEmpty) {
          ctx.strokeStyle = THEME.BORDER;
          ctx.lineWidth = 2;
          ctx.strokeRect(
            x + 1,
            yOffset + 1,
            THEME.WORDLE_BOX - 2,
            THEME.WORDLE_BOX - 2,
          );
        } else {
          ctx.fillStyle = LETTER_STATUS_STYLE_MAP[guessLetter.status];
          ctx.fillRect(x, yOffset, THEME.WORDLE_BOX, THEME.WORDLE_BOX);
        }
      }

      yOffset += THEME.WORDLE_BOX + THEME.WORDLE_BOX_MARGIN;
    }

    ctx.translate(-x, -y);
  };

  // background
  ctx.fillStyle = THEME.BG;
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // draw results

  const resultsYOffset = THEME.PADDING;
  for (let r = 0; r < botResultRows.length; r++) {
    const row = botResultRows[r];

    const centerXOffset =
      canvasWidth / 2 - ((resultBoxWidth + THEME.PADDING) * row.length) / 2;

    for (let i = 0; i < row.length; i++) {
      const result = row[i];

      const x = centerXOffset + (resultBoxWidth + THEME.PADDING) * i;
      const y = resultsYOffset + (resultBoxHeight + THEME.PADDING) * r;

      drawBotResult(x, y, result);
    }
  }

  const pngData = await canvas.encode('png');
  return pngData;
};
