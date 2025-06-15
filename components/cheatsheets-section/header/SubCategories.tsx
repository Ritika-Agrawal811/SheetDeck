'use client';
import React from 'react';
import clsx from 'clsx';

import { useCategory } from '@/hooks/useCategory';
import { fetchSubCategories } from '@/utils/fetchSubCategories';
import { formatSubCategories } from '@/utils/formatSubCategories';

// components
import Badge from '@/components/ui/Badge';
import Image from 'next/image';

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
                            className={clsx(
                                'cursor-pointer shadow-none capitalize',
                                'flex gap-4 items-center',
                                'transition-colors duration-175 ease-in'
                            )}
                            active={activeCategory.category === category.title}
                        >
                            <Image src={category.image} alt={`${category.title}`} width={35} height={35} />
                            {formatSubCategories(category.title)}
                        </Badge>
                    </button>
                );
            })}
        </div>
    );
};

export default SubCategories;
