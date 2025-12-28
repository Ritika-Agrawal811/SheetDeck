import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import { useSearch } from '@/hooks/useSearch';

// components
import TopicsDropdown from './TopicsDropdown';
import CategoriesModal from './CategoriesModal';
import SubCategoriesDropdown from './SubCategoriesDropdown';
import LayoutControls from '@/components/cheatsheets-section/controls/LayoutControls';
import SearchBox from '@/components/cheatsheets-section/controls/search-box/SearchBox';
import ResultsSummary from '@/components/cheatsheets-section/controls/results-summary/ResultsSummary';

interface ControlsProps {
    view: 'grid' | 'list';
    setViewHandler: (view: 'grid' | 'list') => void;
}

const Controls: React.FC<ControlsProps> = ({ view, setViewHandler }) => {
    const [showSticky, setShowSticky] = useState(false);
    const sentinelRef = useRef<HTMLDivElement | null>(null);

    const { showSearchResults } = useSearch();

    /**
     * Checks when the component is in view and update the state accordingly
     */
    useEffect(() => {
        const target = sentinelRef.current;
        const observer = new IntersectionObserver(([entry]) => setShowSticky(!entry.isIntersecting), {
            threshold: 0.1,
        });

        if (target) observer.observe(target);

        return () => {
            if (target) observer.unobserve(target);
        };
    }, []);

    return (
        <>
            <div ref={sentinelRef} className="absolute -mt-8 hidden sm:block" />
            <nav
                className={clsx(
                    'sticky top-0 z-50 -mt-8',
                    'px-4 md:px-0 py-5',
                    'transition-all duration-150',
                    'sm:before:absolute before:content-[""] before:w-[125%] md:before:w-[130%] 2xl:before:w-[150%] before:h-full before:-left-1/4 before:top-0',
                    'before:-z-10',
                    showSticky &&
                        'before:bg-[#f7ece0] dark:before:bg-neutral-800 before:border-b before:border-[var(--color-border-primary)] dark:before:border-gray-600'
                )}
            >
                {/* for tablets and laptops only */}
                <div className={clsx('hidden sm:flex', 'items-center justify-between')}>
                    {/* Topics and sub categories dropdowns */}
                    {showSticky && !showSearchResults && (
                        <div className="hidden lg:flex gap-2 3xl:gap-3 items-center">
                            <TopicsDropdown />
                            <SubCategoriesDropdown />
                        </div>
                    )}

                    {/* Results and search summary */}
                    <div className={clsx('grow-2', showSticky && 'lg:text-center')}>
                        <ResultsSummary />
                    </div>

                    {/* View controls and Search Box */}
                    <div className={clsx('flex gap-2 3xl:gap-3 items-center justify-end', !showSticky && 'grow')}>
                        <LayoutControls view={view} setViewHandler={setViewHandler} />

                        <div className={clsx(showSticky && 'hidden lg:block')}>
                            <SearchBox />
                        </div>

                        {/* Categories Modal for tablets */}
                        {showSticky && <CategoriesModal />}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Controls;
