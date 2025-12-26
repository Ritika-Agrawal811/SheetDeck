import { useAtom } from 'jotai';
import { useCallback } from 'react';

import type { Categories, Tags } from '@/types/cheatsheets';

import { activeCategoryAtom, topics, activeCheatsheetsAtom } from '@/atoms/category';
import { fetchSubCategories } from '@/utils/fetchSubCategories';
import { fetchSelectedCheatsheets } from '@/utils/fetchSelectedCheatsheets';

export const useCategory = () => {
    const [activeCategory, setActiveCategory] = useAtom(activeCategoryAtom);
    const [cheatsheets, setCheatsheets] = useAtom(activeCheatsheetsAtom);

    /**
     * Updates the active category and cheatsheets.
     * @param updatedCategory - new active category and sub category object
     */
    const updateCategoryAndCheatsheets = useCallback(
        (updatedCategory: { topic: Tags; category: Categories }) => {
            setActiveCategory(updatedCategory);

            const updatedCheatsheets = fetchSelectedCheatsheets(updatedCategory);
            setCheatsheets(updatedCheatsheets);
        },

        [setActiveCategory, setCheatsheets]
    );

    /**
     * Sets the active topic and updates the category and cheatsheets accordingly.
     * @param topic - the selected topic
     */
    const setActiveTopicHandler = (topic: Tags) => {
        if (topic) {
            const updatedCategory = {
                topic,
                category: fetchSubCategories(topic)[0].title,
            };

            updateCategoryAndCheatsheets(updatedCategory);
        }
    };

    /**
     * Sets the active sub category and updates the category and cheatsheets accordingly.
     * @param category - the selected sub category
     */
    const setActiveSubCategoryHandler = (category: Categories) => {
        if (category) {
            const updatedCategory = {
                topic: activeCategory.topic,
                category,
            };

            updateCategoryAndCheatsheets(updatedCategory);
        }
    };

    return {
        topics,
        cheatsheets,
        activeCategory,
        setActiveTopicHandler,
        setActiveSubCategoryHandler,
        updateCategoryAndCheatsheets,
    };
};
