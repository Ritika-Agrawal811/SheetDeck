import React from 'react';
import clsx from 'clsx';

import type { IconType } from 'react-icons';

// components
import Icon from '@/components/ui/Icon';

interface CategoryCardProps {
    title: string;
    color: string;
    icon: IconType | null;
    active: boolean;
    setActiveCategory: () => void;
}

const CategoryCard = ({ title, color, icon, active, setActiveCategory }: CategoryCardProps) => {
    return (
        <li
            className={clsx(
                'cursor-pointer border-r-1 p-4 relative overflow-hidden',
                'grow flex flex-col items-center justify-center',
                'font-castoro font-bold',
                icon ? 'text-2xl' : 'text-4xl',
                active && 'text-white'
            )}
            onClick={setActiveCategory}
            style={{ borderColor: color }}
        >
            {icon && <Icon icon={icon} size={65} className="mb-4" />}
            {title}

            <div
                className={clsx(
                    'absolute -z-10 rounded-full',
                    'left-1/2 -bottom-10 -translate-x-1/2',
                    'transition-all duration-650 ease-out',
                    active ? 'w-[150%] h-[150%]' : 'w-0 h-0'
                )}
                style={{ backgroundColor: color }}
            ></div>
        </li>
    );
};

export default CategoryCard;
