'use client';

import React, { useCallback, useState } from 'react';
import clsx from 'clsx';

import type { Cheatsheet } from '@/types/cheatsheets';
import { useSearch } from '@/hooks/useSearch';

// components
import { IoSearch } from 'react-icons/io5';
import Icon from '@/components/ui/Icon';
import SearchList from './SearchList';

type SearchData = {
    openList: boolean;
    value: string;
    results: Cheatsheet[];
};

const SearchBox = () => {
    const { displaySearchResultsHandler } = useSearch();

    const [searchData, setSearchData] = useState<SearchData>({
        openList: false,
        value: '',
        results: [],
    });
    const [focusFirstSearchItem, setFocusFirstSearchItem] = useState(false);

    const setSearchResultsHandler = useCallback((results: Cheatsheet[]) => {
        setSearchData((prev) => ({ ...prev, results }));
    }, []);

    const resetInputValueHandler = useCallback(() => {
        setSearchData((prev) => ({ ...prev, value: '' }));
    }, []);

    const closeSearchList = useCallback(() => {
        setSearchData((prev) => ({ ...prev, openList: false }));
    }, []);

    // triggered on change event of input field -- when a value is entered
    const searchCheatsheetHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === '') setSearchData((prev) => ({ ...prev, openList: false }));

        setSearchData((prev) => ({
            ...prev,
            value: event.target.value,
            openList: true,
        }));
    };

    // triggered when input field is on focus to show the results list
    const onFocusHandler = () => {
        setSearchData((prev) => ({ ...prev, openList: true }));
    };

    const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (searchData.results.length === 0) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setFocusFirstSearchItem(true);
        }
    };

    const resetFocusFirstSearchItem = useCallback(() => {
        setFocusFirstSearchItem(false);
    }, []);

    // triggered on form submit to show the search results
    const showSearchResultsHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        displaySearchResultsHandler(searchData.value);
        setSearchData({
            openList: false,
            value: '',
            results: [],
        });
    };

    return (
        <form
            role="search"
            className={clsx(
                'border border-gray-200 dark:border-gray-600 shadow rounded-md bg-white dark:bg-gray-800',
                'flex',
                'relative w-full sm:max-w-[250px] xl:max-w-[300px] h-12 sm:h-10 xl:h-12'
            )}
            onSubmit={showSearchResultsHandler}
        >
            <label htmlFor="cheatsheets-search" className="sr-only">
                Search for cheat sheets
            </label>

            <input
                type="search"
                id="cheatsheets-search"
                name="cheatsheet"
                autoComplete="off"
                placeholder="Enter a cheat sheet"
                className={clsx(
                    'h-full grow rounded-l-md',
                    'px-4',
                    'sm:text-sm xl:text-base',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-offset-[var(--ring-offset)]',
                    'placeholder:text-gray-500 dark:placeholder:text-gray-200'
                )}
                value={searchData.value}
                onChange={searchCheatsheetHandler}
                onFocus={onFocusHandler}
                onKeyDown={onKeyDownHandler}
            />

            <SearchList
                className="absolute top-[120%] w-full z-50"
                data={searchData}
                setDataHandler={setSearchResultsHandler}
                resetInputValueHandler={resetInputValueHandler}
                focusFirstSearchItem={focusFirstSearchItem}
                resetFocusFirstSearchItem={resetFocusFirstSearchItem}
                closeSearchList={closeSearchList}
            />

            <button
                type="submit"
                className={clsx(
                    'flex items-center justify-center',
                    'px-2 cursor-pointer',
                    'bg-emerald-700 dark:bg-emerald-500 text-white dark:text-gray-900 rounded-r-md',
                    'border border-emerald-700 dark:border-emerald-500',
                    'focus:outline-none focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 focus-visible:ring-offset-[var(--ring-offset)]'
                )}
            >
                <span className="sr-only">Search</span>
                <Icon icon={IoSearch} size="text-xl xl:text-2xl" aria-hidden={true} />
            </button>
        </form>
    );
};

export default SearchBox;
