import { cheatSheets } from '../lib/cheatsheets/loader';
import { CATEGORIES_INFO } from '../lib/cheatsheets/constants';

import type { Tags, Categories } from '../types/cheatsheets';

export const fetchSubCategories = (topic: Tags) => {
    const topicCategories = (
        topic === 'All' ? Object.keys(CATEGORIES_INFO) : Object.keys(cheatSheets[topic.toLowerCase()])
    ) as Categories[];
    const subCategories = topicCategories.map((item) => CATEGORIES_INFO[item]);

    return subCategories;
};
