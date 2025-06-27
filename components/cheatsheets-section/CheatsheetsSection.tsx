'use client';

import { useState } from 'react';
import clsx from 'clsx';

import { useSearch } from '@/hooks/useSearch';

// components
import Header from './header/Header';
import Badge from '@/components/ui/Badge';
import Controls from './controls/Controls';
import CheatsheetsDisplay from './cheatsheets-display/CheatsheetsDisplay';
import SearchResults from './search-results/SearchResults';

const CheatsheetsSection = () => {
    const { showSearchResults } = useSearch();
    const [view, setView] = useState<'grid' | 'list'>('grid');

    const setViewHandler = (view: 'grid' | 'list') => {
        setView(view);
    };

    return (
        <section className={clsx('w-full md:w-11/12 2xl:w-4/5 max-w-screen-3xl mx-auto', 'my-28 space-y-16')}>
            <Badge size="default" color="#6d11af" shape="pill" className="shadow-xl shadow-purple-100 mx-auto">
                Cheat Sheets
            </Badge>
            <Header />
            <Controls view={view} setViewHandler={setViewHandler} />
            {showSearchResults ? <SearchResults view={view} /> : <CheatsheetsDisplay view={view} />}
        </section>
    );
};

export default CheatsheetsSection;
