'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import clsx from 'clsx';
import type { Tags } from '@/types/cheatsheets';

import { TAGS_INFO } from '@/lib/cheatsheets/constants';
import { useCategory } from '@/hooks/useCategory';
import { usePagination } from '@/hooks/usePagination';
import { useSearch } from '@/hooks/useSearch';
import { useScreenBreakpoint } from '@/hooks/useScreenBreakpoint';
import { useQueryParams } from '@/hooks/useQueryParams';

// components
import CategoryCard from './CategoryCard';
import { IoChevronForward, IoChevronBack } from 'react-icons/io5';
import Icon from '@/components/ui/Icon';

const Categories = () => {
    const { topics, activeCategory, cheatsheets, setActiveTopicHandler } = useCategory();
    const { resetCurrentPage } = usePagination({ data: cheatsheets });
    const { reset } = useSearch();
    const { breakpoint } = useScreenBreakpoint();
    const { clearQueryParams } = useQueryParams();

    const scrollContainerRef = useRef<HTMLUListElement>(null);
    const [scrollButton, setScrollButton] = useState({ left: false, right: false });

    /* 
       scrollLeft: numbers of pixels by which the element has been scrolled to the left
       clientWidth: visible width of the scrollable area
       scrollWidth: total scrollable width of the element

       Hence maximum value of clientWidth + scrollLeft represents the rightmost edge of the element
     */
    const checkButtonVisibility = useCallback(() => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setScrollButton({
                left: scrollLeft > 0,
                right: scrollLeft + clientWidth < scrollWidth - 1,
            });
        }
    }, []);

    useEffect(() => {
        const currentRef = scrollContainerRef.current;

        checkButtonVisibility();

        // add event listners for scroll and resize
        if (currentRef) {
            currentRef.addEventListener('scroll', checkButtonVisibility);
        }
        window.addEventListener('resize', checkButtonVisibility);

        // cleanup function
        return () => {
            if (currentRef) {
                currentRef.removeEventListener('scroll', checkButtonVisibility);
            }
            window.removeEventListener('resize', checkButtonVisibility);
        };
    }, [checkButtonVisibility]);

    const setCategoryHandler = (tag: Tags) => {
        setActiveTopicHandler(tag);
        resetCurrentPage();
        clearQueryParams();
        reset();
    };

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = scrollContainerRef.current.clientWidth * getScrollAmount(breakpoint ?? '');
            scrollContainerRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    const getScrollAmount = (breakpoint: string) => {
        switch (breakpoint) {
            case 'xs':
                return 0.5;
            case 'sm':
                return 0.3333;
            case 'md':
                return 0.25;
            default:
                return 0;
        }
    };

    return (
        <div className="relative">
            {/* prev button */}
            {scrollButton.left && (
                <button
                    className={clsx(
                        'absolute h-full top-1/2 -translate-y-1/2 left-0 z-50',
                        'bg-linear-to-r from-black/10 to-transparent',
                        'text-white flex items-center lg:hidden',
                        'inline-block cursor-pointer pl-1 pr-2'
                    )}
                    onClick={() => scroll('left')}
                >
                    <span className="sr-only">Scroll to left</span>
                    <span className="bg-black/20 inline-block rounded-full p-1">
                        <Icon icon={IoChevronBack} size="text-xl" aria-hidden={true} />
                    </span>
                </button>
            )}

            <ul
                ref={scrollContainerRef}
                role="tablist"
                className={clsx(
                    'overflow-y-hidden overflow-x-auto whitespace-nowrap hide-scrollbar',
                    'h-28 sm:h-32 md:h-36 lg:h-40 2xl:h-44',
                    'lg:flex'
                )}
            >
                {topics.map((tag) => {
                    return (
                        <CategoryCard
                            key={tag}
                            title={tag}
                            color={TAGS_INFO[tag].color}
                            icon={TAGS_INFO[tag].icon}
                            active={activeCategory.topic === tag}
                            setActiveCategory={() => setCategoryHandler(tag)}
                        />
                    );
                })}
            </ul>

            {/* next button */}
            {scrollButton.right && (
                <button
                    className={clsx(
                        'absolute h-full top-1/2 -translate-y-1/2 right-0 z-50',
                        'bg-linear-to-r from-transparent to-black/10',
                        'text-white flex items-center lg:hidden',
                        'inline-block cursor-pointer pl-1 pr-2'
                    )}
                    onClick={() => scroll('right')}
                >
                    <span className="sr-only">Scroll to right</span>
                    <span className="bg-black/20 inline-block rounded-full p-1">
                        <Icon icon={IoChevronForward} size="text-xl" aria-hidden={true} />
                    </span>
                </button>
            )}
        </div>
    );
};

export default Categories;
