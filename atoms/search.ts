import { atom } from 'jotai';

import type { Cheatsheet } from '@/types/cheatsheets';

export const showResultsAtom = atom<boolean>(false);
export const searchValueAtom = atom<string>('');
export const searchResultsAtom = atom<Cheatsheet[] | null>(null);
