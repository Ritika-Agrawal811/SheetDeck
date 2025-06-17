'use client';
import React from 'react';
import clsx from 'clsx';

import { useCategory } from '@/hooks/useCategory';
import { usePagination } from '@/hooks/usePagination';
import { fetchSubCategories } from '@/utils/fetchSubCategories';
import { formatLabels } from '@/utils/formatLabels';

// components
import Badge from '@/components/ui/Badge';
import Image from 'next/image';

const SubCategories = () => {
    const { activeCategory, setActiveSubCategoryHandler, cheatsheets } = useCategory();
    const { resetCurrentPage } = usePagination({ data: cheatsheets });

    const subCategories = fetchSubCategories(activeCategory.topic);

    return (
        <div className={clsx('bg-purple-50 p-6 rounded-xl', 'flex gap-x-8 gap-y-6 items-center flex-wrap justify-center')}>
            {subCategories.map((category) => {
                return (
                    <button
                        key={category.title}
                        onClick={() => {
                            setActiveSubCategoryHandler(category.title);
                            resetCurrentPage();
                        }}
                    >
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
                            {formatLabels(category.title)}
                        </Badge>
                    </button>
                );
            })}
        </div>
    );
};

export default SubCategories;
