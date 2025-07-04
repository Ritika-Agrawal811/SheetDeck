import React, { useEffect } from 'react';
import clsx from 'clsx';

import type { Cheatsheet } from '@/types/cheatsheets';
import { useSearch } from '@/hooks/useSearch';

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
}

const SearchList: React.FC<SearchListProps> = ({ className, data, setDataHandler, resetInputValueHandler }) => {
    const { getResultsList, displaySearchResultsHandler } = useSearch();

    // sets the search results list
    useEffect(() => {
        if (data.value === '') {
            setDataHandler([]);
            return;
        }

        const filteredCheatsheets = getResultsList(data.value);
        setDataHandler(filteredCheatsheets);
    }, [data.value, getResultsList, setDataHandler]);

    const selectSearchOptionHandler = (title: string) => {
        displaySearchResultsHandler(title);
        resetInputValueHandler();
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
        >
            {data.results.slice(0, 10).map((item) => {
                return (
                    <li
                        key={item.id}
                        tabIndex={0}
                        className={clsx('p-3 cursor-pointer', 'hover:bg-gray-100')}
                        onMouseDown={() => selectSearchOptionHandler(item.title)}
                    >
                        {item.title}
                    </li>
                );
            })}
        </ul>
    );
};

export default SearchList;
