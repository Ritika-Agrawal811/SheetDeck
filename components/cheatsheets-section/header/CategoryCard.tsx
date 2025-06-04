import React from 'react';
import clsx from 'clsx';

type CategoryCardProps = {
    title: string;
    color: string;
    active: boolean;
    setActiveCategory: () => void;
};

const CategoryCard = ({ title, color, active, setActiveCategory }: CategoryCardProps) => {
    return (
        <div
            className={clsx('cursor-pointer border-r p-10', 'grow flex items-center justify-center', 'text-4xl', active && 'text-white')}
            onClick={setActiveCategory}
            style={{ backgroundColor: active ? color : undefined }}
        >
            {title}
        </div>
    );
};

export default CategoryCard;
