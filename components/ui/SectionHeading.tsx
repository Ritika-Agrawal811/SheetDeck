import React from 'react';
import clsx from 'clsx';

import { platypi } from '@/app/font';

interface SectionHeadingProps {
    content: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ content }) => {
    return (
        <h2
            className={clsx(
                'text-purple-800 dark:text-purple-300',
                'text-xl 3xl:text-[22px] font-medium',
                'flex justify-center items-center gap-1.5',
                `${platypi.variable} font-platypi`
            )}
        >
            {/* circles on left */}
            <span aria-hidden={true} className={clsx('inline-block rounded-full', 'w-1 h-1', 'bg-emerald-700 dark:bg-emerald-400')}></span>
            <span
                aria-hidden={true}
                className={clsx('inline-block rounded-full', 'w-1.5 h-1.5', 'bg-emerald-700 dark:bg-emerald-400')}
            ></span>
            <span aria-hidden={true} className={clsx('inline-block rounded-full', 'w-2 h-2', 'bg-emerald-700 dark:bg-emerald-400')}></span>

            {/* content */}
            <span className="mx-2.5 -mt-1.5">{content}</span>

            {/* circles on right */}
            <span aria-hidden={true} className={clsx('inline-block rounded-full', 'w-2 h-2', 'bg-emerald-700 dark:bg-emerald-400')}></span>
            <span
                aria-hidden={true}
                className={clsx('inline-block rounded-full', 'w-1.5 h-1.5', 'bg-emerald-700 dark:bg-emerald-400')}
            ></span>
            <span aria-hidden={true} className={clsx('inline-block rounded-full', 'w-1 h-1', 'bg-emerald-700 dark:bg-emerald-400')}></span>
        </h2>
    );
};

export default SectionHeading;
