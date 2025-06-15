'use client';

import { TAGS_INFO } from '@/lib/cheatsheets/constants';
import { useCategory } from '@/hooks/useCategory';
import { usePagination } from '@/hooks/usePagination';

// components
import CategoryCard from './CategoryCard';

const Categories = () => {
    const { topics, activeCategory, cheatsheets, setActiveTopicHandler } = useCategory();
    const { resetCurrentPage } = usePagination({ data: cheatsheets });

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
                        setActiveCategory={() => {
                            setActiveTopicHandler(tag);
                            resetCurrentPage();
                        }}
                    />
                );
            })}
        </ul>
    );
};

export default Categories;
