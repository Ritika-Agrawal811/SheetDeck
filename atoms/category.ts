import { atom } from 'jotai';

import type { Categories, Tags, Cheatsheet } from '@/types/cheatsheets';

import { TAGS_INFO } from '@/lib/cheatsheets/constants';
import { fetchSubCategories } from '@/utils/fetchSubCategories';
import { fetchSelectedCheatsheets } from '@/utils/fetchSelectedCheatsheets';

export type ActiveCategory = {
    topic: Tags;
    category: Categories;
};

// all topics array
export const topics = Object.keys(TAGS_INFO) as Tags[];

// initial active category
const initialTopic = topics[0];
const initialSubTopic = fetchSubCategories(initialTopic)[0].title;
const initialActiveCategory = { topic: initialTopic, category: initialSubTopic };

// initial cheatsheets
const initialCheatsheets = fetchSelectedCheatsheets(initialActiveCategory);

// jotai atoms for active category and cheatsheets
export const activeCategoryAtom = atom<ActiveCategory>(initialActiveCategory);
export const activeCheatsheetsAtom = atom<Cheatsheet[]>(initialCheatsheets);
