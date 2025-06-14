'use client';

import { TAGS_INFO } from '../../../lib/cheatsheets/constants';
import { useCategory } from '../../../hooks/useCategory';

// components
import CategoryCard from './CategoryCard';

const Categories = () => {
    const { topics, activeCategory, setActiveTopicHandler } = useCategory();

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
                        }}
                    />
                );
            })}
        </ul>
    );
};

export default Categories;
