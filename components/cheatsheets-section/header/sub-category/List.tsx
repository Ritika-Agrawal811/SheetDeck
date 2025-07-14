'use client';
import React, { useEffect } from 'react';
import clsx from 'clsx';

import type { Categories } from '@/types/cheatsheets';

import { useCategory } from '@/hooks/useCategory';
import { usePagination } from '@/hooks/usePagination';
import { useSearch } from '@/hooks/useSearch';
import { useTheme } from '@/hooks/useTheme';
import { useQueryParams } from '@/hooks/useQueryParams';
import { useArrowKeyNavigation } from '@/hooks/useArrowKeyNavigation';
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
    const { isDark } = useTheme();

    const subCategories = fetchSubCategories(activeCategory.topic);
    const { registerItemRef, handleKeysNavigation, setActiveIndex } = useArrowKeyNavigation(subCategories.length);

    useEffect(() => {
        setActiveIndex(0);
    }, [activeCategory.topic, setActiveIndex]);

    const parentKeyDownHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Tab') {
            /* set the current active sub category index as active index */
            const index = subCategories.findIndex((item) => item.title === activeCategory.category);
            setActiveIndex(index);
        }
        handleKeysNavigation(event);
    };

    const setSubCategoryHandler = (title: Categories, index: number) => {
        setActiveSubCategoryHandler(title);
        setActiveIndex(index);
        resetCurrentPage();
        clearQueryParams();
        reset();
    };

    const clickHandler = (event: React.MouseEvent<HTMLElement>, title: Categories, index: number) => {
        event.stopPropagation();
        setSubCategoryHandler(title, index);
    };

    const itemKeyDownHandler = (event: React.KeyboardEvent<HTMLLIElement>, title: Categories, index: number) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setSubCategoryHandler(title, index);
        }
    };

    return (
        <ul role="tablist" aria-label={`Subcategories for ${activeCategory.topic}`} className={className} onKeyDown={parentKeyDownHandler}>
            {subCategories.map((category, index) => {
                return (
                    <li
                        key={category.title}
                        role="tab"
                        id={`subtab-${activeCategory.topic.toLowerCase()}-${category.title.toLowerCase()}`}
                        aria-selected={activeCategory.category === category.title}
                        aria-controls="cheatsheets-panel"
                        tabIndex={activeCategory.category === category.title ? 0 : -1}
                        onClick={(event) => clickHandler(event, category.title, index)}
                        onKeyDown={(event) => itemKeyDownHandler(event, category.title, index)}
                        ref={(elem) => registerItemRef(elem, index)}
                        className={clsx(
                            'rounded-lg',
                            'focus:outline-none focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
                        )}
                    >
                        <Badge
                            size={size}
                            color={isDark ? '#d4d4d8' : '#1e2939'}
                            shape="rounded"
                            className={clsx(
                                'bg-white dark:bg-gray-800 cursor-pointer shadow-none capitalize',
                                'flex items-center',
                                'gap-2 xl:gap-3',
                                'transition duration-150 ease-in',
                                activeCategory.category !== category.title && 'hover:scale-103 hover:bg-gray-100 dark:hover:bg-zinc-800'
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
