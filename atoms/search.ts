import { atom } from 'jotai';

import type { Cheatsheet } from '@/types/cheatsheets';

type SearchData = {
    available: boolean;
    value: string;
    results: Cheatsheet[];
};

export const searchData = atom<SearchData>({
    available: false,
    value: '',
    results: [],
});
