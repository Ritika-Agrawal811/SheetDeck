'use client';
import React from 'react';
import clsx from 'clsx';

import type { Categories } from '@/types/cheatsheets';

import { useCategory } from '@/hooks/useCategory';
import { usePagination } from '@/hooks/usePagination';
import { useSearch } from '@/hooks/useSearch';
import { useQueryParams } from '@/hooks/useQueryParams';
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
    const { clearQueryParams } = useQueryParams();
    const { reset } = useSearch();

    const subCategories = fetchSubCategories(activeCategory.topic);

    const setSubCategoryHandler = (event: React.MouseEvent<HTMLElement>, title: Categories) => {
        event.stopPropagation();
        setActiveSubCategoryHandler(title);
        resetCurrentPage();
        clearQueryParams();
        reset();
    };

    return (
        <ul role="tablist" aria-label={`Subcategories for ${activeCategory.topic}`} className={className}>
            {subCategories.map((category) => {
                return (
                    <li
                        key={category.title}
                        role="tab"
                        id={`subtab-${activeCategory.topic.toLowerCase()}-${category.title.toLowerCase()}`}
                        aria-selected={activeCategory.category === category.title}
                        aria-controls="cheatsheets-panel"
                        tabIndex={activeCategory.category === category.title ? 0 : -1}
                        onClick={(event) => setSubCategoryHandler(event, category.title)}
                        className={clsx(
                            'rounded-lg',
                            'focus:outline-none focus:border-transparent focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                        )}
                    >
                        <Badge
                            size={size}
                            color="#1e2939"
                            shape="rounded"
                            className={clsx(
                                'cursor-pointer shadow-none capitalize',
                                'flex items-center',
                                'gap-2 xl:gap-3',
                                'transition duration-150 ease-in',
                                'bg-white hover:scale-103 hover:bg-gray-100'
                            )}
                            active={activeCategory.category === category.title}
                        >
                            {showImage && (
                                <Image
                                    src={category.image}
                                    alt={`sub category: ${category.title}`}
                                    width={35}
                                    height={35}
                                    className={clsx('w-auto h-8 xl:h-9')}
                                />
                            )}
                            {formatLabels(category.title)}
                        </Badge>
                    </li>
                );
            })}
        </ul>
    );
};

export default List;
