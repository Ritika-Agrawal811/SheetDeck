import React from 'react';
import clsx from 'clsx';

// components
import { IoImageSharp } from 'react-icons/io5';
import Icon from '@/components/ui/Icon';

const CardSkeleton = () => {
    return (
        <div
            role="status"
            aria-busy="true"
            className={clsx(
                'relative shadow-lg rounded-lg p-4 mx-auto',
                'mx-auto w-[275px] xs:w-[300px] sm:w-[280px] md:w-[300px] xl:w-full',
                'bg-white dark:bg-neutral-800 dark:shadow-neutral-800'
            )}
        >
            <span className="sr-only">Loading card content</span>

            {/* Badge placeholder */}
            <div className="absolute left-2 top-2 h-7 w-16 rounded-full bg-gray-200 dark:bg-neutral-500 animate-pulse"></div>

            {/* Download icon placeholder */}
            <div className="absolute right-2 top-2 h-9 w-9 rounded-full bg-gray-200 dark:bg-neutral-500 animate-pulse"></div>

            {/* Image placeholder */}
            <div
                className={clsx(
                    'mt-8 mb-8 3xl:mt-10 3xl:mb-10',
                    'h-[330px] w-full',
                    'bg-gray-200 dark:bg-zinc-600',
                    'rounded animate-pulse',
                    'flex items-center justify-center'
                )}
            >
                <Icon icon={IoImageSharp} aria-hidden="true" size="text-4xl" className="text-gray-100 dark:text-zinc-500" />
            </div>

            {/* Title bubble */}
            <div className="absolute bottom-0 left-0 right-0 h-11 3xl:h-12 rounded-t-full bg-slate-100 dark:bg-zinc-800 flex justify-center items-center">
                <div className="h-4 w-3/4 bg-gray-300 dark:bg-neutral-500 rounded-full animate-pulse"></div>
            </div>
        </div>
    );
};

export default CardSkeleton;
