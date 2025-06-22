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
        <h3 className="text-lg space-x-1">
            <span>Showing</span>
            <ResultsIndex startIndex={startIndex} endIndex={endIndex} />
            <span>of</span>
            <Total length={cheatsheets.length} />
        </h3>
    );
};

export default DisplaySummary;
