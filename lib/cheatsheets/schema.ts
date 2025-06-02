import { z } from 'zod';

export const Tags = z.union([z.literal('HTML'), z.literal('CSS'), z.literal('JavaScript'), z.literal('React')]);

export const Categories = z.union([z.literal('concepts'), z.literal('attributes'), z.literal('elements')]);

export const CheatsheetSchema = z.object({
    id: z.string(),
    title: z.string(),
    tag: Tags,
    category: Categories,
    image: z.string().url().or(z.string()),
});

export const CheatsheetGroupSchema = z.record(z.array(CheatsheetSchema));

export type Cheatsheet = z.infer<typeof CheatsheetSchema>;
