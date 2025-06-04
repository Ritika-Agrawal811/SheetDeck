import { useAtom } from 'jotai';

import type { Categories, Tags } from '../types/cheatsheets';

import { activeCategoryAtom, topics } from '../atoms/category';
import { fetchSubCategories } from '../utils/fetchSubCategories';

export const useCategory = () => {
    const [activeCategory, setActiveCategory] = useAtom(activeCategoryAtom);

    const setActiveTopicHandler = (topic: Tags) => {
        if (topic) {
            setActiveCategory({
                topic,
                category: fetchSubCategories(topic)[0].title,
            });
        }
    };

    const setActiveSubCategoryHandler = (category: Categories) => {
        if (category) {
            setActiveCategory((prev) => ({ ...prev, category }));
        }
    };

    return { activeCategory, setActiveTopicHandler, setActiveSubCategoryHandler, topics };
};
