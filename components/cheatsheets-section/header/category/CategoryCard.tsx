import React from 'react';
import clsx from 'clsx';

import type { IconType } from 'react-icons';
import { castoro } from '@/app/font';

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
    const keyDownHandler = (event: React.KeyboardEvent<HTMLLIElement>) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setActiveCategory();
        }
    };

    return (
        <li
            tabIndex={active ? 0 : -1}
            role="tab"
            aria-selected={active}
            aria-label={title}
            id={`tab-${title.toLowerCase()}`}
            className={clsx(
                'cursor-pointer relative overflow-hidden',
                'w-1/2 sm:w-1/3 md:w-1/4 h-full lg:grow',
                'inline-flex flex-col items-center justify-center',
                `${castoro.variable} font-castoro font-bold border-3 border-transparent`,
                'focus:outline-none focus:border-3 focus:border-blue-500',
                icon ? 'text-lg sm:text-xl xl:text-2xl 3xl:text-3xl' : 'text-2xl lg:text-3xl 2xl:text-4xl',
                active && 'text-white'
            )}
            onClick={setActiveCategory}
            onKeyDown={keyDownHandler}
        >
            {icon && <Icon icon={icon} size="text-5xl lg:text-6xl 2xl:text-7xl" className="mb-4 xl:mb-6" aria-hidden={true} />}
            {title}

            <div className={clsx('absolute right-0 top-0', 'h-full w-px')} style={{ background: color }}></div>
            <div
                className={clsx(
                    'absolute -z-10 rounded-full',
                    'left-1/2 -bottom-10 -translate-x-1/2',
                    'transition-all duration-650 ease-out',
                    active ? 'w-[150%] h-[150%]' : 'w-0 h-0'
                )}
                style={{ backgroundColor: color }}
                aria-hidden={true}
            ></div>
        </li>
    );
};

export default CategoryCard;
