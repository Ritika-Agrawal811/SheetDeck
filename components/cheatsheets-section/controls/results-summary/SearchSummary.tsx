'use client';

import clsx from 'clsx';

import { usePagination } from '@/hooks/usePagination';
import { useSearch } from '@/hooks/useSearch';

// components
import Total from './Total';
import ResultsIndex from './ResultsIndex';
import Icon from '@/components/ui/Icon';
import { IoChevronBack } from 'react-icons/io5';

const SearchSummary = () => {
    const { searchResults, searchValue, reset } = useSearch();
    const { startIndex, endIndex } = usePagination({ data: searchResults ?? [] });

    const resultsAvailable = searchResults && searchResults.length > 0;

    return (
        <div className="flex gap-2 items-center">
            {/* Prev Button */}
            <button
                className={clsx('inline-block rounded-full cursor-pointer group transition duration-300', 'hover:text-emerald-600')}
                onClick={reset}
            >
                <span className="sr-only">Clear search results</span>
                <Icon icon={IoChevronBack} aria-hidden="true" size="text-2xl" className="group-hover:scale-125 transition duration-300" />
            </button>

            {resultsAvailable ? (
                /**
                 * Available results information
                 */
                <h2 className="text-base xl:text-lg 4xl:text-xl space-x-1">
                    <span>Showing</span>
                    <ResultsIndex startIndex={startIndex} endIndex={endIndex} /> of <Total length={searchResults.length} />
                    for <br className="lg:hidden" />
                    <span className="font-bold text-base xl:text-lg 4xl:text-xl">&quot;{searchValue}&quot;</span>
                </h2>
            ) : (
                /**
                 * No results label
                 */
                <h2 className="text-base xl:text-lg 4xl:text-xl">
                    <span className="text-purple-800 dark:text-purple-300">No results</span> found for{' '}
                    <span className="font-bold">&quot;{searchValue}&quot;</span>
                </h2>
            )}
        </div>
    );
};

export default SearchSummary;
