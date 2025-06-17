import React from 'react';

import { useCategory } from '@/hooks/useCategory';
import { usePagination } from '@/hooks/usePagination';

const ResultsSummary = () => {
    const { cheatsheets } = useCategory();
    const { startIndex, endIndex } = usePagination({ data: cheatsheets });

    return (
        <h3 className="text-lg">
            Showing{' '}
            <span className="font-medium text-emerald-700">
                {startIndex}-{endIndex}
            </span>{' '}
            of <span className="text-purple-800 font-medium">{cheatsheets.length} results</span>
        </h3>
    );
};

export default ResultsSummary;
