import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import { useSearch } from '@/hooks/useSearch';

// components
import ResultsSummary from '@/components/cheatsheets-section/controls/results-summary/ResultsSummary';
import LayoutControls from '@/components/cheatsheets-section/controls/LayoutControls';
import SearchBox from '@/components/cheatsheets-section/controls/search-box/SearchBox';
import SubCategoriesDropdown from './SubCategoriesDropdown';
import TopicsDropdown from './TopicsDropdown';

interface ControlsProps {
    view: 'grid' | 'list';
    setViewHandler: (view: 'grid' | 'list') => void;
}

const Controls: React.FC<ControlsProps> = ({ view, setViewHandler }) => {
    const { showSearchResults } = useSearch();

    const [showSticky, setShowSticky] = useState(false);
    const sentinelRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const target = sentinelRef.current;
        const observer = new IntersectionObserver(([entry]) => setShowSticky(!entry.isIntersecting), { threshold: 0 });

        if (target) observer.observe(target);

        return () => {
            if (target) observer.unobserve(target);
        };
    }, []);

    return (
        <>
            <div ref={sentinelRef} className="absolute -mt-8" />
            <nav
                className={clsx(
                    'sticky top-0 py-5 z-50 -mt-8',
                    'transition-all duration-150',
                    'before:absolute before:content-[""] before:w-[150%] before:h-full before:-left-1/4 before:top-0',
                    'before:-z-10',
                    showSticky && 'before:bg-purple-50 before:border-b before:border-purple-200'
                )}
            >
                <div className="flex items-center justify-between">
                    {showSticky && !showSearchResults && (
                        <div className="flex gap-3 items-center">
                            <TopicsDropdown />
                            <SubCategoriesDropdown />
                        </div>
                    )}
                    <div className={clsx('grow-2', showSticky && 'text-center')}>
                        <ResultsSummary />
                    </div>
                    <div className={clsx('flex gap-3 items-center justify-end', !showSticky && 'grow')}>
                        <LayoutControls view={view} setViewHandler={setViewHandler} />
                        <SearchBox />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Controls;
