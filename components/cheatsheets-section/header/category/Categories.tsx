'use client';

import clsx from 'clsx';
import type { Tags } from '@/types/cheatsheets';

import { TAGS_INFO } from '@/lib/cheatsheets/constants';
import { useSearch } from '@/hooks/useSearch';
import { useCategory } from '@/hooks/useCategory';
import { usePagination } from '@/hooks/usePagination';
import { useQueryParams } from '@/hooks/useQueryParams';
import { useScreenBreakpoint } from '@/hooks/useScreenBreakpoint';
import { useArrowKeyNavigation } from '@/hooks/useArrowKeyNavigation';
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll';

// components
import CategoryCard from './CategoryCard';
import Icon from '@/components/ui/Icon';
import { IoChevronForward, IoChevronBack } from 'react-icons/io5';

const Categories = () => {
    const { topics, activeCategory, cheatsheets, setActiveTopicHandler } = useCategory();

    const { resetCurrentPage } = usePagination({ data: cheatsheets });
    const { registerItemRef, handleKeysNavigation, setCurrentIndex } = useArrowKeyNavigation(topics.length);

    const { breakpoint } = useScreenBreakpoint();
    const { registerScrollRef, scrollButton, scroll } = useHorizontalScroll(breakpoint);

    const { clearQueryParams } = useQueryParams();
    const { reset } = useSearch();

    /**
     * Sets the active topic and index, resets pagination page, clears query params and resets search
     * @param tag - active topic
     * @param index - index of active topic
     */
    const setCategoryHandler = (tag: Tags, index: number) => {
        setActiveTopicHandler(tag);
        setCurrentIndex(index);

        resetCurrentPage();
        clearQueryParams();
        reset();
    };

    /**
     * Handles the keyboard event for arrow navigation
     * @param event - keyboard event
     */
    const onKeyDownHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Tab') {
            const index = topics.indexOf(activeCategory.topic);
            setCurrentIndex(index);
        }

        handleKeysNavigation(event);
    };

    return (
        <div className="relative">
            {/* prev button */}
            {scrollButton.left && (
                <button
                    className={clsx(
                        'absolute h-full top-1/2 -translate-y-1/2 left-0 z-50',
                        'bg-linear-to-r from-black/10 dark:from-white/10 to-transparent',
                        'text-white dark:text-purple-300 flex items-center lg:hidden',
                        'inline-block cursor-pointer pl-1 text-sm'
                    )}
                    onClick={() => scroll('left')}
                >
                    <span className="sr-only">Scroll to left</span>
                    <span className="bg-black/20 dark:bg-white/20 inline-block rounded-full p-0.5">
                        <Icon icon={IoChevronBack} size="text-xl" aria-hidden={true} />
                    </span>
                </button>
            )}

            {/* categories list */}
            <ul
                ref={(elem) => registerScrollRef(elem)}
                role="tablist"
                className={clsx(
                    'overflow-y-hidden overflow-x-auto whitespace-nowrap hide-scrollbar',
                    'h-28 sm:h-32 md:h-36 lg:h-40 3xl:h-44',
                    'lg:flex'
                )}
                onKeyDown={onKeyDownHandler}
            >
                {topics.map((tag, index) => {
                    return (
                        <CategoryCard
                            key={tag}
                            title={tag}
                            color={TAGS_INFO[tag].color}
                            icon={TAGS_INFO[tag].icon}
                            active={activeCategory.topic === tag}
                            setActiveCategory={() => setCategoryHandler(tag, index)}
                            ref={(elem) => registerItemRef(elem, index)}
                        />
                    );
                })}
            </ul>

            {/* next button */}
            {scrollButton.right && (
                <button
                    className={clsx(
                        'absolute h-full top-1/2 -translate-y-1/2 right-0 z-50',
                        'bg-linear-to-r from-transparent to-black/10 dark:to-white/10',
                        'text-white dark:text-purple-300 flex items-center lg:hidden',
                        'inline-block cursor-pointer pr-1 text-sm'
                    )}
                    onClick={() => scroll('right')}
                >
                    <span className="sr-only">Scroll to right</span>
                    <span className="bg-black/20 dark:bg-white/20 inline-block rounded-full p-0.5">
                        <Icon icon={IoChevronForward} size="text-xl" aria-hidden={true} />
                    </span>
                </button>
            )}
        </div>
    );
};

export default Categories;
