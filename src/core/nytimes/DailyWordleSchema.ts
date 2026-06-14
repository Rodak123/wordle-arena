import z from 'zod';

export const DailyWordleSchema = z.object({
  id: z.number(),
  solution: z.string(),
  print_date: z.string(),
  days_since_launch: z.number(),
  editor: z.string(),
});

export type DailyWordle = z.infer<typeof DailyWordleSchema>;
