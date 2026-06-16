export type Clue = 'c' | 'p' | 'a';
export type Evaluation = `${Clue}${Clue}${Clue}${Clue}${Clue}`;
export type LookupTableSubtree = {
  w: string;
  g?: Partial<Record<Evaluation, LookupTableSubtree>>;
};
