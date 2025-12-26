'use client';
import React, { useEffect } from 'react';
import clsx from 'clsx';

import type { Categories } from '@/types/cheatsheets';

import { useSearch } from '@/hooks/useSearch';
import { useTheme } from '@/hooks/useTheme';
import { useCategory } from '@/hooks/useCategory';
import { usePagination } from '@/hooks/usePagination';
import { useQueryParams } from '@/hooks/useQueryParams';
import { useArrowKeyNavigation } from '@/hooks/useArrowKeyNavigation';
import { fetchSubCategories } from '@/utils/fetchSubCategories';
import { formatLabels } from '@/utils/formatLabels';

// components
import Badge from '@/components/ui/Badge';

interface ListProps {
    size?: 'big' | 'small' | 'tiny' | 'default';
    className?: string;
    showImage?: boolean;
}

const List: React.FC<ListProps> = ({ className, size = 'default', showImage = true }) => {
    const { activeCategory, setActiveSubCategoryHandler, cheatsheets } = useCategory();
    const { resetCurrentPage } = usePagination({ data: cheatsheets });

    const { reset } = useSearch();
    const { isDark, hasMounted } = useTheme();
    const { clearQueryParams } = useQueryParams();

    const subCategories = fetchSubCategories(activeCategory.topic);
    const { registerItemRef, handleKeysNavigation, setCurrentIndex } = useArrowKeyNavigation(subCategories.length);

    /**
     * Reset current index for arrow navigation
     * when active category topic changes
     */
    useEffect(() => {
        setCurrentIndex(0);
    }, [activeCategory.topic, setCurrentIndex]);

    /**
     * Handle arrow navigation and set current index for it
     * @param event - keyboard event
     */
    const parentKeyDownHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Tab') {
            const index = subCategories.findIndex((item) => item.title === activeCategory.category);
            setCurrentIndex(index);
        }

        handleKeysNavigation(event);
    };

    /**
     * Sets the sub category
     * @param title - active sub category
     * @param index - index of active sub category
     */
    const setSubCategoryHandler = (title: Categories, index: number) => {
        setActiveSubCategoryHandler(title);
        setCurrentIndex(index);

        resetCurrentPage();
        clearQueryParams();
        reset();
    };

    /**
     *
     * @param event - mouse event
     * @param title - active sub category
     * @param index - index of active sub category
     */
    const itemClickHandler = (event: React.MouseEvent<HTMLElement>, title: Categories, index: number) => {
        event.stopPropagation();
        setSubCategoryHandler(title, index);
    };

    /**
     *
     * @param event - keyboard event
     * @param title - active sub category
     * @param index - index of active sub category
     */
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
                        onClick={(event) => itemClickHandler(event, category.title, index)}
                        onKeyDown={(event) => itemKeyDownHandler(event, category.title, index)}
                        ref={(elem) => registerItemRef(elem, index)}
                        className={clsx(
                            'rounded-lg',
                            'focus:outline-none focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 focus-visible:ring-offset-[var(--ring-offset)]'
                        )}
                    >
                        {hasMounted && (
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
                                    <img
                                        src={category.image}
                                        alt={`sub category: ${category.title}`}
                                        width={35}
                                        height={35}
                                        className={clsx('w-auto h-8 3xl:h-9')}
                                    />
                                )}
                                {formatLabels(category.title)}
                            </Badge>
                        )}
                    </li>
                );
            })}
        </ul>
    );
};

export default List;
