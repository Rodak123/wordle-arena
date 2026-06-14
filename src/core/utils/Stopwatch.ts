export class Stopwatch {
  private _timeMs: number = 0;

  private _start: number = 0;
  private _isRunning: boolean = false;

  public start() {
    if (this._isRunning) return false;

    this._start = performance.now();
    this._isRunning = true;

    return true;
  }

  public stop(): boolean {
    if (!this._isRunning) return false;

    const end = performance.now();

    this._timeMs += end - this._start;
    this._isRunning = false;

    return true;
  }

  public reset(): void {
    this._timeMs = 0;
    this._isRunning = false;
  }

  public get timeMs(): number {
    return this._timeMs;
  }
}
