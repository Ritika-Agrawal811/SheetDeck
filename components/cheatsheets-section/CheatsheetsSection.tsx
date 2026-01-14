'use client';

import clsx from 'clsx';
import { useState, useEffect, useRef } from 'react';

import { useAtom } from 'jotai';
import { useSearch } from '@/hooks/useSearch';
import { useCategory } from '@/hooks/useCategory';
import { useScreenBreakpoint } from '@/hooks/useScreenBreakpoint';
import { useQueryParams } from '@/hooks/useQueryParams';
import { scrollToCheatsheetAtom } from '@/atoms/scrollToCheatsheet';

// components
import Header from './header/Header';
import Controls from './controls/Controls';
import CheatsheetsDisplay from './cheatsheets-display/CheatsheetsDisplay';
import SearchResults from './search-results/SearchResults';
import ControlsMobile from './controls/ControlsMobile';
import SectionHeading from '@/components/ui/SectionHeading';

const CheatsheetsSection = () => {
    const { activeCategory, updateCategoryAndCheatsheets } = useCategory();
    const { breakpoint } = useScreenBreakpoint();
    const { tab, subtab, id } = useQueryParams();
    const { showSearchResults } = useSearch();

    const [view, setView] = useState<'grid' | 'list'>('grid');
    const [hasInitialized, setHasInitialized] = useState(false);
    const [scroll, setScroll] = useAtom(scrollToCheatsheetAtom);
    const cheatsheetsRef = useRef<HTMLDivElement>(null);

    /**
     * Sets the view for the cheat sheets layout
     * @param view - layout view
     */
    const setViewHandler = (view: 'grid' | 'list') => {
        setView(view);
    };

    /**
     * Sets the active topic and sub cateogry from the query params if available
     */
    useEffect(() => {
        if (!hasInitialized && tab && subtab) {
            updateCategoryAndCheatsheets({ topic: tab, category: subtab });
            setHasInitialized(true);
        }
    }, [tab, subtab, hasInitialized, updateCategoryAndCheatsheets]);

    /**
     * Scrolls to the cheat sheet card that matches the id from the query params
     */
    useEffect(() => {
        if (!id) return;

        const timeout = setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                element.focus();
            }
        }, 500);

        return () => clearTimeout(timeout);
    }, [activeCategory, id]);

    /**
     * Scrolls to the cheat sheets section when Explore Button is clicked
     */
    useEffect(() => {
        if (scroll) {
            cheatsheetsRef?.current?.scrollIntoView({ behavior: 'smooth' });
            setScroll(false);
        }
    }, [scroll, setScroll]);

    return (
        <section ref={cheatsheetsRef} className={clsx('my-20 xl:my-28 space-y-16', 'scroll-m-4')}>
            <SectionHeading content="Cheat Sheets" />

            {/* Tabs to select topic and category */}
            <Header />

            {breakpoint === 'xs' ? (
                <ControlsMobile view={view} setViewHandler={setViewHandler} />
            ) : (
                <Controls view={view} setViewHandler={setViewHandler} />
            )}

            {/* Cheat Sheets Display */}
            <div
                role="tabpanel"
                id="cheatsheets-panel"
                className="w-full md:w-11/12 2xl:w-[85%] 3xl:w-4/5 max-w-screen-3xl mx-auto"
                aria-labelledby={`subtab-${activeCategory.topic.toLowerCase()}-${activeCategory.category.toLowerCase()}`}
            >
                {showSearchResults ? <SearchResults view={view} /> : <CheatsheetsDisplay view={view} />}
            </div>
        </section>
    );
};

export default CheatsheetsSection;
