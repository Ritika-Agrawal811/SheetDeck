import { z } from 'zod';
import { TAGS, CATEGORIES } from './constants';

export const Tags = z.enum(TAGS);

export const Categories = z.enum(CATEGORIES);

export const CheatsheetSchema = z.object({
    id: z.string(),
    title: z.string(),
    tag: Tags,
    category: Categories,
    image: z.string().url().or(z.string()),
});

export const CheatsheetNestedGroupSchema = z.record(z.record(z.array(CheatsheetSchema)));

export type CheatsheetNestedGroup = z.infer<typeof CheatsheetNestedGroupSchema>;
export type Cheatsheet = z.infer<typeof CheatsheetSchema>;
