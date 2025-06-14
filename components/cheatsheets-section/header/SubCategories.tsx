'use client';
import React from 'react';
import clsx from 'clsx';

import { useCategory } from '../../../hooks/useCategory';
import { fetchSubCategories } from '../../../utils/fetchSubCategories';

// components
import Badge from '../../ui/Badge';

const SubCategories = () => {
    const { activeCategory, setActiveSubCategoryHandler } = useCategory();
    const subCategories = fetchSubCategories(activeCategory.topic);

    return (
        <div className={clsx('bg-purple-50 p-6 rounded-xl', 'flex gap-x-8 gap-y-6 items-center flex-wrap justify-center')}>
            {subCategories.map((category) => {
                return (
                    <button key={category.title} onClick={() => setActiveSubCategoryHandler(category.title)}>
                        <Badge
                            size="default"
                            color="#1e2939"
                            shape="rounded"
                            className="cursor-pointer shadow-none"
                            active={activeCategory.category === category.title}
                        >
                            {category.title}
                        </Badge>
                    </button>
                );
            })}
        </div>
    );
};

export default SubCategories;
