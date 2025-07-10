import { z } from 'zod';
import { TAGS_INFO, CATEGORIES_INFO } from './constants';

export const Tags = z.enum(Object.keys(TAGS_INFO) as [keyof typeof TAGS_INFO]);

export const Categories = z.enum(Object.keys(CATEGORIES_INFO) as [keyof typeof CATEGORIES_INFO]);

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
