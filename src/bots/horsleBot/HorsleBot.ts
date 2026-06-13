import { ASolverBot, type BotMeta } from '../allowedContext.ts';

export class HorsleBot extends ASolverBot {
  protected _about(): BotMeta {
    return {
      name: 'Horsle',
      author: 'Knedla',
      description: 'This horse game is super hard',
    };
  }

  protected _init(): void {
    console.log("Ready to horse around!")
  }

  protected _pickWord(): string {
    return "horse";
  }
}
