import React from 'react';

import { useSearch } from '@/hooks/useSearch';

// components
import Grid from '../grid/Grid';
import Table from '../table/Table';
import Pagination from '../../ui/Pagination';

interface SearchResultsProps {
    view: 'grid' | 'list';
}

const SearchResults: React.FC<SearchResultsProps> = ({ view }) => {
    const { searchResults } = useSearch();
    return (
        <section className="space-y-16">
            {searchResults && searchResults.length > 0 && (
                <>
                    {view === 'grid' && <Grid cheatsheets={searchResults} />}
                    {view === 'list' && <Table cheatsheets={searchResults} />}
                    <Pagination data={searchResults} />
                </>
            )}
        </section>
    );
};

export default SearchResults;
