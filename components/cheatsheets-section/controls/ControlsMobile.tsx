'use client';

import clsx from 'clsx';

import { useSearch } from '@/hooks/useSearch';

// components
import SearchBox from './search-box/SearchBox';
import ResultsSummary from './results-summary/ResultsSummary';
import LayoutControls from './LayoutControls';

interface ControlsMobileProps {
    view: 'grid' | 'list';
    setViewHandler: (view: 'grid' | 'list') => void;
}

const ControlsMobile: React.FC<ControlsMobileProps> = ({ view, setViewHandler }) => {
    const { showSearchResults } = useSearch();

    return (
        <>
            {/* for mobile screens only */}
            <nav className="px-4 -mt-8 sm:hidden">
                <div className={clsx('flex flex-col', 'gap-5')}>
                    <SearchBox />
                    <div className="flex justify-between items-center">
                        <ResultsSummary />
                        {!showSearchResults && <LayoutControls view={view} setViewHandler={setViewHandler} />}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default ControlsMobile;
