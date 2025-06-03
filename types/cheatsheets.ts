import { TAGS, CATEGORIES } from '../lib/cheatsheets/constants';

type Tags = (typeof TAGS)[number];

type Categories = (typeof CATEGORIES)[number];

export type Cheatsheet = {
    id: string;
    title: string;
    tag: Tags;
    category: Categories;
    image: string;
};
