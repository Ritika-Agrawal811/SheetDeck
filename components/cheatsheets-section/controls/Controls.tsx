import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import ResultsSummary from '@/components/cheatsheets-section/controls/ResultsSummary';
import LayoutControls from '@/components/cheatsheets-section/controls/LayoutControls';
import SearchBox from '@/components/cheatsheets-section/controls/SearchBox';

interface ControlsProps {
    view: 'grid' | 'list';
    setViewHandler: (view: 'grid' | 'list') => void;
}

const Controls: React.FC<ControlsProps> = ({ view, setViewHandler }) => {
    const [showSticky, setShowSticky] = useState(false);
    const sentinelRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => setShowSticky(!entry.isIntersecting), { threshold: 0 });

        if (sentinelRef.current) observer.observe(sentinelRef.current);

        return () => {
            if (sentinelRef.current) observer.unobserve(sentinelRef.current);
        };
    }, []);

    return (
        <>
            <div ref={sentinelRef} className="absolute -mt-8" />
            <nav
                className={clsx(
                    'sticky top-0 py-5 z-50 -mt-6',
                    'transition-all duration-150',
                    'before:absolute before:content-[""] before:w-[150%] before:h-full before:-left-1/4 before:top-0',
                    'before:-z-10',
                    showSticky && 'before:bg-purple-50 before:border-b before:border-purple-200'
                )}
            >
                <div className="flex items-center justify-between">
                    <ResultsSummary />
                    <div className="flex gap-4 items-center">
                        <LayoutControls view={view} setViewHandler={setViewHandler} />
                        <SearchBox />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Controls;
