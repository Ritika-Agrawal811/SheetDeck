import { cheatSheets } from '@/lib/cheatsheets/loader';
import { getAllCheatsheets } from './getAllCheatsheets';

import type { ActiveCategory } from '@/atoms/category';

/**
 * Returns the cheat sheets for the selected category
 * @param activeCategory - active topic and sub category object
 * @returns Cheatsheet[]
 */
export const fetchSelectedCheatsheets = (activeCategory: ActiveCategory) => {
    if (activeCategory.topic === 'all') {
        return getAllCheatsheets().filter((item) => item.category === activeCategory.category);
    }

    return cheatSheets[activeCategory.topic.toLowerCase()][activeCategory.category];
};
