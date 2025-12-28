interface TotalProps {
    length: number;
}

const Total: React.FC<TotalProps> = ({ length }) => {
    return (
        <span className="text-purple-800 dark:text-purple-300 font-medium">
            {length} result{length > 1 && 's'}
        </span>
    );
};

export default Total;
