import { cheatSheets } from '@/lib/cheatsheets/loader';
import { getAllCheatsheets } from './getAllCheatsheets';

import type { ActiveCategory } from '@/atoms/category';

export const fetchSelectedCheatsheets = (activeCategory: ActiveCategory) => {
    if (activeCategory.topic === 'All') {
        return getAllCheatsheets().filter((item) => item.category === activeCategory.category);
    }

    return cheatSheets[activeCategory.topic.toLowerCase()][activeCategory.category];
};
