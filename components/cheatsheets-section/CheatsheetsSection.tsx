'use client';

import { useState } from 'react';
import clsx from 'clsx';

import { useSearch } from '@/hooks/useSearch';
import { useScreenBreakpoint } from '@/hooks/useScreenBreakpoint';

// components
import Header from './header/Header';
import Badge from '@/components/ui/Badge';
import Controls from './controls/Controls';
import CheatsheetsDisplay from './cheatsheets-display/CheatsheetsDisplay';
import SearchResults from './search-results/SearchResults';
import ControlsMobile from './controls/ControlsMobile';
import { useCategory } from '@/hooks/useCategory';

const CheatsheetsSection = () => {
    const { showSearchResults } = useSearch();
    const { breakpoint } = useScreenBreakpoint();
    const { activeCategory } = useCategory();

    const [view, setView] = useState<'grid' | 'list'>('grid');

    const setViewHandler = (view: 'grid' | 'list') => {
        setView(view);
    };

    return (
        <section className={clsx('w-full md:w-11/12 2xl:w-4/5 max-w-screen-3xl mx-auto', 'my-20 xl:my-28 space-y-16')}>
            <Badge size="default" color="#6d11af" shape="pill" className="shadow-xl shadow-purple-100 mx-auto">
                Cheat Sheets
            </Badge>
            <Header />
            {breakpoint === 'xs' ? (
                <ControlsMobile view={view} setViewHandler={setViewHandler} />
            ) : (
                <Controls view={view} setViewHandler={setViewHandler} />
            )}

            <div
                role="tabpanel"
                id="cheatsheets-panel"
                aria-labelledby={`subtab-${activeCategory.topic.toLowerCase()}-${activeCategory.category.toLowerCase()}`}
            >
                {showSearchResults ? <SearchResults view={view} /> : <CheatsheetsDisplay view={view} />}
            </div>
        </section>
    );
};

export default CheatsheetsSection;
