import { useAtom } from 'jotai';
import { useCallback } from 'react';

import type { Categories, Tags } from '@/types/cheatsheets';

import { activeCategoryAtom, topics, activeCheatsheetsAtom } from '@/atoms/category';
import { fetchSubCategories } from '@/utils/fetchSubCategories';
import { fetchSelectedCheatsheets } from '@/utils/fetchSelectedCheatsheets';

export const useCategory = () => {
    const [activeCategory, setActiveCategory] = useAtom(activeCategoryAtom);
    const [cheatsheets, setCheatsheets] = useAtom(activeCheatsheetsAtom);

    const updateCategoryAndCheatsheets = useCallback(
        (updatedCategory: { topic: Tags; category: Categories }) => {
            setActiveCategory(updatedCategory);

            // update the active cheatsheets
            const updatedCheatsheets = fetchSelectedCheatsheets(updatedCategory);
            setCheatsheets(updatedCheatsheets);
        },
        [setActiveCategory, setCheatsheets]
    );

    // update the selected topic
    const setActiveTopicHandler = (topic: Tags) => {
        if (topic) {
            const updatedCategory = {
                topic,
                category: fetchSubCategories(topic)[0].title,
            };
            updateCategoryAndCheatsheets(updatedCategory);
        }
    };

    // update the selected sub category
    const setActiveSubCategoryHandler = (category: Categories) => {
        if (category) {
            const updatedCategory = {
                topic: activeCategory.topic,
                category,
            };
            updateCategoryAndCheatsheets(updatedCategory);
        }
    };

    return { activeCategory, cheatsheets, setActiveTopicHandler, setActiveSubCategoryHandler, updateCategoryAndCheatsheets, topics };
};
