import React from 'react';
import clsx from 'clsx';

import { useSearch } from '@/hooks/useSearch';

// components
import Grid from '../grid/Grid';
import Table from '../table/Table';
import Pagination from '../../ui/Pagination';
import Image from 'next/image';

interface SearchResultsProps {
    view: 'grid' | 'list';
}

const SearchResults: React.FC<SearchResultsProps> = ({ view }) => {
    const { searchResults, reset } = useSearch();
    return (
        <section className="space-y-16">
            {searchResults && searchResults.length > 0 ? (
                <>
                    {view === 'grid' && <Grid cheatsheets={searchResults} />}
                    {view === 'list' && <Table cheatsheets={searchResults} />}
                    <Pagination data={searchResults} />
                </>
            ) : (
                <div className="flex flex-col items-center">
                    <Image src="/assets/no-results.png" alt="no search results found" width={300} height={300} />
                    <h3 className="font-medium text-xl sm:text-2xl xl:text-3xl">No results found.</h3>
                    <p className="sm:text-lg mt-1">No cheat sheet matches your search.</p>

                    <button
                        onClick={reset}
                        className={clsx(
                            'mt-5 lg:mt-8 px-5 py-2.5',
                            'lg:text-lg',
                            'rounded-full bg-purple-800 text-white hover:bg-purple-700 hover:scale-105',
                            'transition duration-300 cursor-pointer'
                        )}
                    >
                        Clear Search
                    </button>
                </div>
            )}
        </section>
    );
};

export default SearchResults;
