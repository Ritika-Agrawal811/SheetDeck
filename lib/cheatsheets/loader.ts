// app/utils/loadCheatsheets.ts
import cheatSheetsRaw from '../../data/cheatsheets.json';
import { CheatsheetGroupSchema } from './schema';

const parsed = CheatsheetGroupSchema.safeParse(cheatSheetsRaw);

if (!parsed.success) {
    console.error('❌ Invalid cheat sheets data:', parsed.error.format());
    throw new Error('Cheatsheet JSON validation failed.');
}

export const cheatSheets = parsed.data;
