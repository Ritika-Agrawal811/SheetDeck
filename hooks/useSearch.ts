import { useAtom } from 'jotai';
import { useCallback, useMemo } from 'react';

import { searchData } from '@/atoms/search';
import { getAllCheatsheets } from '@/utils/getAllCheatsheets';

export const useSearch = () => {
    const [searchDetails, setSearchDetails] = useAtom(searchData);

    const allCheatsheets = useMemo(() => getAllCheatsheets(), []);

    /**
     * Displays search results based on the input value.
     * @param value - search input value
     */
    const displaySearchResultsHandler = (value: string) => {
        if (value === '') return;

        const filteredCheatsheets = getResultsList(value);

        setSearchDetails((prev) => ({
            ...prev,
            available: filteredCheatsheets.length > 0,
            value,
            results: filteredCheatsheets,
        }));
    };

    /**
     * Gets the list of results matching the search value.
     * @param value - search input value
     * @returns filtered list of cheatsheets
     */
    const getResultsList = useCallback(
        (value: string) => {
            return allCheatsheets.filter((item) => {
                const title = item.title.toLowerCase();

                return title.includes(value.toLowerCase());
            });
        },
        [allCheatsheets]
    );

    /**
     * Resets the search details to initial state.
     */
    const reset = () => {
        setSearchDetails({
            available: false,
            value: '',
            results: [],
        });
    };

    return {
        searchValue: searchDetails.value,
        searchResults: searchDetails.results,
        showSearchResults: searchDetails.available,
        displaySearchResultsHandler,
        getResultsList,
        reset,
    };
};
