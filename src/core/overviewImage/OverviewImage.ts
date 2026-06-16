import { createCanvas, GlobalFonts } from '@napi-rs/canvas';
import path from 'path';
import * as fs from 'fs';
import type { BotResult } from '../bot/BotResult.ts';
import { type LetterStatus } from '../nytimes/Guess.ts';
import { Wordle } from '../nytimes/Wordle.ts';
import type { OverviewImageConfig } from './OverviewImageConfig.ts';
import type { BufferFile } from '../utils/BufferFile.ts';

GlobalFonts.registerFromPath(
  path.join(process.cwd(), 'src', 'data', 'fonts', 'OpenSans-Regular.ttf'),
  'Open Sans',
);

export class OverviewImage {
  private _config: OverviewImageConfig;
  private _overviewImage: BufferFile | null = null;

  public constructor(config: Partial<OverviewImageConfig> = {}) {
    this._config = {
      resultGridCols: config.resultGridCols ?? 3,
      resultBoxWidthPx: config.resultBoxWidthPx ?? 128,
      bgColor: config.bgColor ?? '#151515',
      borderColor: config.borderColor ?? '#3a3a3c',
      greyColor: config.greyColor ?? '#3a3a3c',
      yellowColor: config.yellowColor ?? '#b59f3b',
      greenColor: config.greenColor ?? '#538d4e',
      textColor: config.textColor ?? '#ffffff',
      paddingPx: config.paddingPx ?? 8,
      wordleBoxSizePx: config.wordleBoxSizePx ?? 8,
      wordleBoxMarginPx: config.wordleBoxMarginPx ?? 2,
    };
  }

  public getLetterStatusColor(letterStatus: LetterStatus): string {
    const LETTER_STATUS_STYLE_MAP: Record<LetterStatus, string> = {
      exact: this._config.greenColor,
      occurring: this._config.yellowColor,
      missing: this._config.greyColor,
    };
    return LETTER_STATUS_STYLE_MAP[letterStatus];
  }

  public async generateOverview(botResults: BotResult[]) {
    // canvas my beloved :P

    const {
      resultGridCols,
      bgColor,
      borderColor,
      textColor,
      paddingPx,
      resultBoxWidthPx,
      wordleBoxSizePx,
      wordleBoxMarginPx,
    } = this._config;

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

    const resultBoxHeight =
      paddingPx * 6.5 + // Top text size
      Wordle.AttemptCount * (wordleBoxSizePx + wordleBoxMarginPx); // wordle height

    const canvasWidth =
      paddingPx * 4 + (paddingPx + resultBoxWidthPx * resultGridCols);
    const canvasHeight =
      paddingPx + (resultBoxHeight + paddingPx) * botResultRows.length;

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
      ctx.fillStyle = textColor;
      ctx.fillText(text, x, y);
    };

    const drawBotResult = (x: number, y: number, result: BotResult) => {
      let yOffset = paddingPx;

      ctx.translate(x, y);

      ctx.lineWidth = 1;
      ctx.strokeStyle = borderColor;
      ctx.roundRect(
        0,
        0,
        resultBoxWidthPx,
        resultBoxHeight,
        resultBoxWidthPx * 0.1,
      );
      ctx.stroke();

      // name and author
      ctx.textAlign = 'center';
      ctx.textBaseline = 'hanging';
      responsiveTextInBox(
        result.meta.name,
        resultBoxWidthPx / 2,
        yOffset,
        resultBoxWidthPx - paddingPx * 2,
        paddingPx * 1.75,
      );
      yOffset += paddingPx * 3.75;

      ctx.textBaseline = 'bottom';
      responsiveTextInBox(
        `by ${result.meta.author}`,
        resultBoxWidthPx / 2,
        yOffset,
        resultBoxWidthPx - paddingPx * 2,
        paddingPx * 1.25,
      );
      yOffset += paddingPx * 1;

      // wordle result
      const wordleBoxXOffset =
        resultBoxWidthPx / 2 -
        (Wordle.WordLength / 2) * (wordleBoxSizePx + wordleBoxMarginPx);

      for (let i = 0; i < Wordle.AttemptCount; i++) {
        const guess = result.guesses[i];
        // if there are less guesses than Wordle.AttemptCount
        if (guess === undefined) {
          for (let j = 0; j < Wordle.WordLength; j++) {
            const x =
              wordleBoxXOffset + j * (wordleBoxSizePx + wordleBoxMarginPx);

            ctx.strokeStyle = borderColor;
            ctx.lineWidth = 2;
            ctx.strokeRect(
              x + 1,
              yOffset + 1,
              wordleBoxSizePx - 2,
              wordleBoxSizePx - 2,
            );
          }
        } else {
          for (let j = 0; j < guess.length; j++) {
            const guessLetter = guess[j];

            const x =
              wordleBoxXOffset + j * (wordleBoxSizePx + wordleBoxMarginPx);

            ctx.fillStyle = this.getLetterStatusColor(guessLetter.status);
            ctx.fillRect(x, yOffset, wordleBoxSizePx, wordleBoxSizePx);
          }
        }

        yOffset += wordleBoxSizePx + wordleBoxMarginPx;
      }

      ctx.translate(-x, -y);
    };

    // background
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // draw results

    const resultsYOffset = paddingPx;
    for (let r = 0; r < botResultRows.length; r++) {
      const row = botResultRows[r];

      const centerXOffset =
        canvasWidth / 2 - ((resultBoxWidthPx + paddingPx) * row.length) / 2;

      for (let i = 0; i < row.length; i++) {
        const result = row[i];

        const x = centerXOffset + (resultBoxWidthPx + paddingPx) * i;
        const y = resultsYOffset + (resultBoxHeight + paddingPx) * r;

        drawBotResult(x, y, result);
      }
    }

    const pngData = await canvas.encode('png');
    this._overviewImage = {
      file: pngData,
      fileName: 'overview.png',
    };
  }

  public saveOverviewImage(targetDir: string = './out/') {
    const overviewImage = this.overviewImage;
    const filePath = path.join(
      process.cwd(),
      targetDir,
      overviewImage.fileName,
    );

    try {
      const dir = path.dirname(filePath);

      fs.mkdirSync(dir, { recursive: true });

      fs.writeFileSync(filePath, overviewImage.file);
    } catch (error) {
      console.error('Failed to save buffer to file:', error);
      throw error;
    }
  }

  public get overviewImage() {
    if (this._overviewImage === null) {
      throw new Error('Image not yet generated!');
    }
    return this._overviewImage;
  }
}
