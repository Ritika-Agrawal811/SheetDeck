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
            <div className="flex gap-2 items-center">
                {/* prev button */}
                <button
                    className={clsx('inline-block rounded-full cursor-pointer group transition duration-300', 'hover:text-emerald-700')}
                    onClick={reset}
                >
                    <span className="sr-only">Clear search results</span>
                    <Icon
                        icon={IoChevronBack}
                        aria-hidden="true"
                        size="text-2xl"
                        className="group-hover:scale-125 transition duration-300"
                    />
                </button>
                <h2 className="text-lg">
                    <span className="text-purple-800">No results</span> found for{' '}
                    <span className="font-bold">&quot;{searchValue}&quot;</span>
                </h2>
            </div>
        );
    }

    return (
        <div className="flex gap-2 items-center">
            {/* prev button */}
            <button
                className={clsx('inline-block rounded-full cursor-pointer group transition duration-300', 'hover:text-emerald-700')}
                onClick={reset}
            >
                <span className="sr-only">Clear search results</span>
                <Icon icon={IoChevronBack} aria-hidden="true" size="text-2xl" className="group-hover:scale-125 transition duration-300" />
            </button>

            <h2 className="text-base xl:text-lg 3xl:text-xl space-x-1">
                <span>Showing</span>
                <ResultsIndex startIndex={startIndex} endIndex={endIndex} />

                <span>of</span>
                <Total length={searchResults.length} />

                {/* searched value */}
                {showSearchResults && (
                    <>
                        {' '}
                        for <br className="lg:hidden" />{' '}
                        <span className="font-bold text-base xl:text-lg 3xl:text-xl">&quot;{searchValue}&quot;</span>
                    </>
                )}
            </h2>
        </div>
    );
};

export default SearchSummary;
