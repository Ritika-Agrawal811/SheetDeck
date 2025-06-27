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

    const setSearchResultsHandler = useCallback((results: Cheatsheet[]) => {
        setSearchData((prev) => ({ ...prev, results }));
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

    // triggered when input field goes out of focus to close the results list
    const onBlurHandler = () => {
        setSearchData({
            openList: false,
            value: '',
            results: [],
        });
    };

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
            aria-label="search for cheat sheets"
            className={clsx(
                'border border-gray-200 shadow rounded-md bg-white',
                'flex',
                'relative w-full sm:max-w-[250px] xl:max-w-[300px] h-12 sm:h-10 xl:h-12'
            )}
            onSubmit={showSearchResultsHandler}
        >
            <label htmlFor="cheatsheets-search" className="sr-only">
                search for cheat sheets:
            </label>

            <input
                type="search"
                id="cheatsheets-search"
                name="cheatsheet"
                autoComplete="off"
                placeholder="Search for a cheat sheet"
                className={clsx('h-full grow', 'px-4', 'sm:text-sm xl:text-base')}
                value={searchData.value}
                onChange={searchCheatsheetHandler}
                onBlur={onBlurHandler}
            />

            <SearchList className="absolute top-[120%] w-full z-50" data={searchData} setDataHandler={setSearchResultsHandler} />

            <button
                type="submit"
                className={clsx(
                    'flex items-center justify-center',
                    'px-2 cursor-pointer',
                    'bg-emerald-700 text-white rounded-r-md',
                    'border border-emerald-700'
                )}
            >
                <Icon icon={IoSearch} size="text-xl xl:text-2xl" />
            </button>
        </form>
    );
};

export default SearchBox;
