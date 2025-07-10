import { useAtom } from 'jotai';
import { useCallback, useMemo } from 'react';

import { searchValueAtom, searchResultsAtom, showResultsAtom } from '@/atoms/search';
import { getAllCheatsheets } from '@/utils/getAllCheatsheets';

export const useSearch = () => {
    const [searchValue, setSearchValue] = useAtom(searchValueAtom);
    const [searchResults, setSearchResults] = useAtom(searchResultsAtom);
    const [showSearchResults, setShowSearchResults] = useAtom(showResultsAtom);

    const allCheatsheets = useMemo(() => getAllCheatsheets(), []);

    const displaySearchResultsHandler = (value: string) => {
        if (value === '') return;

        // set search value
        setSearchValue(value);

        // set search results
        const filteredCheatsheets = getResultsList(value);
        setSearchResults(filteredCheatsheets);

        setShowSearchResults(true);
    };

    const getResultsList = useCallback(
        (value: string) => {
            return allCheatsheets.filter((item) => {
                const title = item.title.toLowerCase();

                return title.includes(value.toLowerCase());
            });
        },
        [allCheatsheets]
    );

    const reset = () => {
        setSearchValue('');
        setShowSearchResults(false);
        setSearchResults(null);
    };

    return {
        searchValue,
        searchResults,
        getResultsList,
        showSearchResults,
        displaySearchResultsHandler,
        reset,
    };
};
