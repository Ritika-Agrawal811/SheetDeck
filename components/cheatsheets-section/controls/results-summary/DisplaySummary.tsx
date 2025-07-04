import React from 'react';

import { useCategory } from '@/hooks/useCategory';
import { usePagination } from '@/hooks/usePagination';

// components
import ResultsIndex from './ResultsIndex';
import Total from './Total';

const DisplaySummary = () => {
    const { cheatsheets } = useCategory();
    const { startIndex, endIndex } = usePagination({ data: cheatsheets });

    return (
        <h2 className="text-base xl:text-lg 3xl:text-xl space-x-1">
            <span className="hidden md:inline">Showing</span>
            <ResultsIndex startIndex={startIndex} endIndex={endIndex} />
            <span>of</span>
            <Total length={cheatsheets.length} />
        </h2>
    );
};

export default DisplaySummary;
