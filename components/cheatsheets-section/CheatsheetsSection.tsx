'use client';

import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';

import { useAtom } from 'jotai';
import { useTheme } from '@/hooks/useTheme';
import { useSearch } from '@/hooks/useSearch';
import { useScreenBreakpoint } from '@/hooks/useScreenBreakpoint';
import { useQueryParams } from '@/hooks/useQueryParams';
import { scrollToCheatsheetAtom } from '@/atoms/scrollToCheatsheet';

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
    const { activeCategory, updateCategoryAndCheatsheets } = useCategory();
    const { tab, subtab, id } = useQueryParams();
    const { isDark, hasMounted } = useTheme();

    const [view, setView] = useState<'grid' | 'list'>('grid');
    const [hasInitialized, setHasInitialized] = useState(false);
    const [scroll, setScroll] = useAtom(scrollToCheatsheetAtom);
    const cheatsheetsRef = useRef<HTMLDivElement>(null);

    const setViewHandler = (view: 'grid' | 'list') => {
        setView(view);
    };

    // set the active topic and sub category from the query params if available
    useEffect(() => {
        if (!hasInitialized && tab && subtab) {
            updateCategoryAndCheatsheets({ topic: tab, category: subtab });
            setHasInitialized(true);
        }
    }, [tab, subtab, hasInitialized, updateCategoryAndCheatsheets]);

    // scroll to the cheat sheet card whose id is mentioned in the query params
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

    // scroll to cheat sheets section when explore button is clicked
    useEffect(() => {
        if (scroll) {
            cheatsheetsRef?.current?.scrollIntoView({ behavior: 'smooth' });
            setScroll(false);
        }
    }, [scroll, setScroll]);

    return (
        <section
            ref={cheatsheetsRef}
            className={clsx('w-full md:w-11/12 2xl:w-[85%] 3xl:w-4/5 max-w-screen-3xl mx-auto', 'my-20 xl:my-28 space-y-16', 'scroll-m-4')}
        >
            {hasMounted && (
                <Badge
                    size="default"
                    color={isDark ? '#d8b4fe' : '#6d11af'}
                    shape="pill"
                    className="mx-auto shadow-xl shadow-purple-50 dark:shadow-lg dark:shadow-gray-800"
                >
                    Cheat Sheets
                </Badge>
            )}
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
