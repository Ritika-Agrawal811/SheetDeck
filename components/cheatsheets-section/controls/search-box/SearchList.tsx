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
    className?: string;
    data: Data;
    setDataHandler: (result: Cheatsheet[]) => void;
    resetInputValueHandler: () => void;
    closeSearchList: () => void;
    focusFirstSearchItem: boolean;
    resetFocusFirstSearchItem: () => void;
}

const SearchList: React.FC<SearchListProps> = ({
    className,
    data,
    setDataHandler,
    resetInputValueHandler,
    closeSearchList,
    focusFirstSearchItem,
    resetFocusFirstSearchItem,
}) => {
    const { getResultsList, displaySearchResultsHandler } = useSearch();
    const { registerItemRef, handleKeysNavigation, focusFirstItem, setActiveIndex } = useArrowKeyNavigation(data.results.length, {
        orientation: 'vertical',
    });

    // sets the search results list
    useEffect(() => {
        if (data.value === '') {
            setDataHandler([]);
            return;
        }

        const filteredCheatsheets = getResultsList(data.value);
        setDataHandler(filteredCheatsheets);
    }, [data.value, getResultsList, setDataHandler]);

    // handle closing of list when document is clicked
    useEffect(() => {
        if (!data.openList) return;

        const timeout = setTimeout(() => {
            document.addEventListener('click', closeSearchList);
        }, 0);

        return () => {
            clearTimeout(timeout);
            document.removeEventListener('click', closeSearchList);
        };
    }, [data.openList, closeSearchList]);

    // focus the first item for arrow key navigation
    useEffect(() => {
        if (focusFirstSearchItem) {
            focusFirstItem();
            setActiveIndex(0);
            resetFocusFirstSearchItem();
        }
    }, [focusFirstSearchItem, focusFirstItem, setActiveIndex, resetFocusFirstSearchItem]);

    const selectSearchOptionHandler = (title: string) => {
        displaySearchResultsHandler(title);
        resetInputValueHandler();
    };

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
                'bg-white rounded-md',
                'bg-white border border-gray-200',
                'divide-y divide-gray-200',
                className,
                data.openList && data.results.length > 0 ? 'block' : 'hidden'
            )}
            onKeyDown={handleKeysNavigation}
        >
            {data.results.slice(0, 10).map((item, index) => {
                return (
                    <li
                        key={item.id}
                        tabIndex={0}
                        className={clsx('p-3 cursor-pointer', 'hover:bg-gray-100', 'focus-visible:outline-blue-500')}
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
