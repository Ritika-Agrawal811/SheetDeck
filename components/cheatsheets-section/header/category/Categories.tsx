'use client';

import type { Tags } from '@/types/cheatsheets';

import { TAGS_INFO } from '@/lib/cheatsheets/constants';
import { useCategory } from '@/hooks/useCategory';
import { usePagination } from '@/hooks/usePagination';
import { useSearch } from '@/hooks/useSearch';

// components
import CategoryCard from './CategoryCard';

const Categories = () => {
    const { topics, activeCategory, cheatsheets, setActiveTopicHandler } = useCategory();
    const { resetCurrentPage } = usePagination({ data: cheatsheets });
    const { reset } = useSearch();

    const setCategoryHandler = (tag: Tags) => {
        setActiveTopicHandler(tag);
        resetCurrentPage();
        reset();
    };

    return (
        <ul className="flex">
            {topics.map((tag) => {
                return (
                    <CategoryCard
                        key={tag}
                        title={tag}
                        color={TAGS_INFO[tag].color}
                        icon={TAGS_INFO[tag].icon}
                        active={activeCategory.topic === tag}
                        setActiveCategory={() => setCategoryHandler(tag)}
                    />
                );
            })}
        </ul>
    );
};

export default Categories;
