import { atom } from 'jotai';

import type { Categories, Tags } from '../types/cheatsheets';

import { TAGS_INFO } from '../lib/cheatsheets/constants';
import { fetchSubCategories } from '../utils/fetchSubCategories';

export type ActiveCategory = {
    topic: Tags;
    category: Categories;
};

export const topics = Object.keys(TAGS_INFO) as Tags[];
const initialTopic = topics[0];
const initialSubTopic = fetchSubCategories(initialTopic)[0].title;

export const activeCategoryAtom = atom<ActiveCategory>({ topic: initialTopic, category: initialSubTopic });
