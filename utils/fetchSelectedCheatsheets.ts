import { cheatSheets } from '@/lib/cheatsheets/loader';
import type { ActiveCategory } from '@/atoms/category';

export const fetchSelectedCheatsheets = (activeCategory: ActiveCategory) => {
    if (activeCategory.topic === 'All') {
        return getAllCheatsheets().filter((item) => item.category === activeCategory.category);
    }

    return cheatSheets[activeCategory.topic.toLowerCase()][activeCategory.category];
};

const getAllCheatsheets = () => {
    const allTopicsData = Object.values(cheatSheets);

    const allCheatsheets = allTopicsData.flatMap((topicData) => Object.values(topicData).flat());

    return allCheatsheets;
};
