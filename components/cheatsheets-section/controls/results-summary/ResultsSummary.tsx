import React from 'react';

import { useSearch } from '@/hooks/useSearch';

// components
import SearchSummary from './SearchSummary';
import DisplaySummary from './DisplaySummary';

const ResultsSummary = () => {
    const { showSearchResults } = useSearch();

    return <>{showSearchResults ? <SearchSummary /> : <DisplaySummary />}</>;
};

export default ResultsSummary;
