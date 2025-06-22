import React from 'react';

interface TotalProps {
    length: number;
}

const Total: React.FC<TotalProps> = ({ length }) => {
    return (
        <span className="text-purple-800 font-medium">
            {length} result{length > 1 && 's'}
        </span>
    );
};

export default Total;
