import React from 'react';

interface ResultsIndexProps {
    startIndex: number;
    endIndex: number;
}

const ResultsIndex: React.FC<ResultsIndexProps> = ({ startIndex, endIndex }) => {
    return (
        <span className="font-medium text-emerald-700 dark:text-emerald-600">
            {endIndex === 1 ? endIndex : `${startIndex}-${endIndex}`}
        </span>
    );
};

export default ResultsIndex;
