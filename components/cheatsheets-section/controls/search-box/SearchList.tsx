import React, { useEffect } from 'react';
import clsx from 'clsx';

import type { Cheatsheet } from '@/types/cheatsheets';
import { useSearch } from '@/hooks/useSearch';
import { useArrowKeyNavigation } from '@/hooks/useArrowKeyNavigation';

type Data = {
    openList: boolean;
    value: string;
    results: Cheatsheet[];
};

interface SearchListProps {
    data: Data;
    setDataHandler: (result: Cheatsheet[]) => void;
    resetInputValueHandler: () => void;
    closeSearchList: () => void;
    focusFirstSearchItem: boolean;
    resetFocusFirstSearchItem: () => void;
}

const SearchList: React.FC<SearchListProps> = ({
    data,
    setDataHandler,
    resetInputValueHandler,
    closeSearchList,
    focusFirstSearchItem,
    resetFocusFirstSearchItem,
}) => {
    const { getResultsList, displaySearchResultsHandler } = useSearch();
    const { registerItemRef, handleKeysNavigation, focusFirstItem, setCurrentIndex } = useArrowKeyNavigation(data.results.length, {
        orientation: 'vertical',
    });

    /**
     * Updates the search results when the search value changes.
     */
    useEffect(() => {
        if (data.value === '') {
            setDataHandler([]);
            return;
        }

        const filteredCheatsheets = getResultsList(data.value);
        setDataHandler(filteredCheatsheets);
    }, [data.value, getResultsList, setDataHandler]);

    /**
     * Closes the search list when clicking outside of it.
     */
    useEffect(() => {
        if (!data.openList) return;

        document.addEventListener('click', closeSearchList);

        return () => {
            document.removeEventListener('click', closeSearchList);
        };
    }, [data.openList, closeSearchList]);

    /**
     * Focuses the first search item when required for arrow key navigation.
     */
    useEffect(() => {
        if (focusFirstSearchItem) {
            focusFirstItem();
            setCurrentIndex(0);
            resetFocusFirstSearchItem();
        }
    }, [focusFirstSearchItem, focusFirstItem, resetFocusFirstSearchItem]);

    /**
     * Handles the selection of a search option and displays its results.
     * @param title - cheat sheet title
     */
    const selectSearchOptionHandler = (title: string) => {
        displaySearchResultsHandler(title);
        resetInputValueHandler();
    };

    /**
     * Handles keyboard events on each search item.
     * @param event - keyboard event
     * @param title - cheat sheet title
     */
    const itemKeyDownHandler = (event: React.KeyboardEvent, title: string) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.stopPropagation();
            selectSearchOptionHandler(title);
        }
    };

    return (
        <ul
            id="cheatsheet-search-options"
            tabIndex={-1}
            className={clsx(
                'absolute top-[120%] w-full z-50',
                'bg-white dark:bg-neutral-800 rounded-md',
                'border border-gray-200 dark:border-none',
                'divide-y divide-gray-200 dark:divide-gray-700',
                data.openList && data.results.length > 0 ? 'block' : 'hidden'
            )}
            onKeyDown={handleKeysNavigation}
        >
            {data.results.slice(0, 10).map((item, index) => {
                return (
                    <li
                        key={item.id}
                        tabIndex={0}
                        className={clsx(
                            'p-3 cursor-pointer',
                            'hover:bg-gray-100 dark:hover:bg-gray-800',
                            'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:outline-offset-[var(--ring-offset)]'
                        )}
                        onMouseDown={() => selectSearchOptionHandler(item.title)}
                        ref={(elem) => registerItemRef(elem, index)}
                        onKeyDown={(event) => itemKeyDownHandler(event, item.title)}
                    >
                        {item.title}
                    </li>
                );
            })}
        </ul>
    );
};

export default SearchList;
