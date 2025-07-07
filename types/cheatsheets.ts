import { TAGS_INFO, CATEGORIES_INFO } from '@/lib/cheatsheets/constants';

export type Tags = keyof typeof TAGS_INFO | 'all';

export type Categories = keyof typeof CATEGORIES_INFO;

export type Cheatsheet = {
    id: string;
    title: string;
    tag: Tags;
    category: Categories;
    image: string;
};
