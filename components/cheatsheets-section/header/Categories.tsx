'use client';

import { TAGS_INFO } from '../../../lib/cheatsheets/constants';
import { useCategory } from '../../../hooks/useCategory';

// components
import CategoryCard from './CategoryCard';

const Categories = () => {
    const { topics, activeCategory, setActiveTopicHandler } = useCategory();

    return (
        <div className="flex items-center">
            {topics.map((tag) => {
                return (
                    <CategoryCard
                        key={tag}
                        title={tag}
                        color={TAGS_INFO[tag].color}
                        active={activeCategory.topic === tag}
                        setActiveCategory={() => {
                            setActiveTopicHandler(tag);
                        }}
                    />
                );
            })}
        </div>
    );
};

export default Categories;
