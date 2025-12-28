'use client';

import clsx from 'clsx';
import { useCallback, useState } from 'react';

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

    const [focusFirstSearchItem, setFocusFirstSearchItem] = useState(false);
    const [searchData, setSearchData] = useState<SearchData>({
        openList: false,
        value: '',
        results: [],
    });

    /**
     * Sets the search results in the state.
     * @param results - list of filtered cheatsheets
     */
    const setSearchResultsHandler = useCallback((results: Cheatsheet[]) => {
        setSearchData((prev) => ({ ...prev, results }));
    }, []);

    /**
     * Resets the search input value.
     */
    const resetInputValueHandler = useCallback(() => {
        setSearchData((prev) => ({ ...prev, value: '' }));
    }, []);

    /**
     * Closes the search results list.
     */
    const closeSearchList = useCallback(() => {
        setSearchData((prev) => ({ ...prev, openList: false }));
    }, []);

    /**
     * Handles the search input change event.
     * @param event - input change event
     */
    const searchCheatsheetHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === '') setSearchData((prev) => ({ ...prev, openList: false }));

        setSearchData((prev) => ({
            ...prev,
            value: event.target.value,
            openList: true,
        }));
    };

    /**
     * Handles the form submit event to show search results.
     * @param event - form submit event
     */
    const showSearchResultsHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        displaySearchResultsHandler(searchData.value);
        setSearchData({
            openList: false,
            value: '',
            results: [],
        });
    };

    /**
     * Handles the input focus event to open the search list.
     */
    const onFocusHandler = () => {
        setSearchData((prev) => ({ ...prev, openList: true }));
    };

    /**
     * Handles the key down event for arrow key navigation.
     * @param event - key down event
     */
    const onKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (searchData.results.length === 0) return;

        if (event.key === 'ArrowDown') {
            event.preventDefault();
            setFocusFirstSearchItem(true);
        }
    };

    /**
     * Resets the focus to the first search item.
     */
    const resetFocusFirstSearchItem = useCallback(() => {
        setFocusFirstSearchItem(false);
    }, []);

    return (
        <form
            role="search"
            className={clsx(
                'border border-gray-200 dark:border-gray-600 shadow rounded-md bg-white dark:bg-gray-800',
                'flex',
                'relative w-full sm:max-w-[250px] xl:max-w-[300px] h-12 sm:h-10 xl:h-11 3xl:h-12'
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
                data={searchData}
                setDataHandler={setSearchResultsHandler}
                resetInputValueHandler={resetInputValueHandler}
                closeSearchList={closeSearchList}
                focusFirstSearchItem={focusFirstSearchItem}
                resetFocusFirstSearchItem={resetFocusFirstSearchItem}
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
                <Icon icon={IoSearch} size="text-xl 3xl:text-2xl" aria-hidden={true} />
            </button>
        </form>
    );
};

export default SearchBox;
