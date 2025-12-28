import { atom } from 'jotai';

import type { Cheatsheet } from '@/types/cheatsheets';

type SearchData = {
    show: boolean;
    value: string;
    results: Cheatsheet[];
};

export const searchData = atom<SearchData>({
    show: false,
    value: '',
    results: [],
});
