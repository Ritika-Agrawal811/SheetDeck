import React from 'react';
import clsx from 'clsx';

import { usePagination } from '@/hooks/usePagination';
import { useSearch } from '@/hooks/useSearch';

// components
import ResultsIndex from './ResultsIndex';
import Total from './Total';
import Icon from '@/components/ui/Icon';
import { IoChevronBack } from 'react-icons/io5';

const SearchSummary = () => {
    const { searchResults, searchValue, showSearchResults, reset } = useSearch();
    const { startIndex, endIndex } = usePagination({ data: searchResults ?? [] });

    if (!searchResults || searchResults.length == 0) {
        return (
            <h3 className="text-lg">
                <span className="text-purple-800">No results</span> found for <span className="font-bold">&quot;{searchValue}&quot;</span>
            </h3>
        );
    }

    return (
        <div className="flex gap-2 items-center">
            {/* prev button */}
            <span
                className={clsx('inline-block rounded-full cursor-pointer group transition duration-300', 'hover:text-emerald-700')}
                onClick={reset}
            >
                <Icon icon={IoChevronBack} size={24} className="group-hover:scale-125 transition duration-300" />
            </span>

            <h3 className="text-lg space-x-1">
                <span>Showing</span>
                <ResultsIndex startIndex={startIndex} endIndex={endIndex} />

                <span>of</span>
                <Total length={searchResults.length} />

                {/* searched value */}
                {showSearchResults && (
                    <>
                        {' '}
                        for <span className="font-bold text-lg">&quot;{searchValue}&quot;</span>
                    </>
                )}
            </h3>
        </div>
    );
};

export default SearchSummary;
