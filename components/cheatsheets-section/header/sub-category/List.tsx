'use client';
import React from 'react';
import clsx from 'clsx';

import type { Categories } from '@/types/cheatsheets';

import { useCategory } from '@/hooks/useCategory';
import { usePagination } from '@/hooks/usePagination';
import { useSearch } from '@/hooks/useSearch';
import { fetchSubCategories } from '@/utils/fetchSubCategories';
import { formatLabels } from '@/utils/formatLabels';

// components
import Badge from '@/components/ui/Badge';
import Image from 'next/image';

interface ListProps {
    size?: 'big' | 'small' | 'tiny' | 'default';
    className?: string;
    showImage?: boolean;
}

const List: React.FC<ListProps> = ({ className, size = 'default', showImage = true }) => {
    const { activeCategory, setActiveSubCategoryHandler, cheatsheets } = useCategory();
    const { resetCurrentPage } = usePagination({ data: cheatsheets });
    const { reset } = useSearch();

    const subCategories = fetchSubCategories(activeCategory.topic);

    const setSubCategoryHandler = (event: React.MouseEvent<HTMLButtonElement>, title: Categories) => {
        event.stopPropagation();
        setActiveSubCategoryHandler(title);
        resetCurrentPage();
        reset();
    };

    return (
        <div className={className}>
            {subCategories.map((category) => {
                return (
                    <button key={category.title} onClick={(event) => setSubCategoryHandler(event, category.title)}>
                        <Badge
                            size={size}
                            color="#1e2939"
                            shape="rounded"
                            className={clsx(
                                'cursor-pointer shadow-none capitalize',
                                'flex items-center',
                                'gap-2 xl:gap-4',
                                'transition duration-150 ease-in',
                                'bg-white hover:scale-103 hover:bg-gray-100'
                            )}
                            active={activeCategory.category === category.title}
                        >
                            {showImage && (
                                <Image
                                    src={category.image}
                                    alt={`${category.title}`}
                                    width={35}
                                    height={35}
                                    className={clsx('w-8 h-8 xl:w-9 xl:h-9')}
                                />
                            )}
                            {formatLabels(category.title)}
                        </Badge>
                    </button>
                );
            })}
        </div>
    );
};

export default List;
