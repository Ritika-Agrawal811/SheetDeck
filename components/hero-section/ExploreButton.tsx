'use client';

import React from 'react';
import clsx from 'clsx';

import { useAtom } from 'jotai';
import { platypi } from '@/app/font';
import { scrollToCheatsheetAtom } from '@/atoms/scrollToCheatsheet';

// components
import { IoArrowDown } from 'react-icons/io5';
import Icon from '@/components/ui/Icon';

const ExploreButton = () => {
    const label = 'explore';

    const [, setScroll] = useAtom(scrollToCheatsheetAtom);

    return (
        <div className={clsx('flex items-center justify-center')}>
            <button
                className={clsx(
                    'border-2 border-purple-800 dark:border-purple-300',
                    'bg-transparent',
                    'focus:outline-none focus-visible:border-transparent focus-visible:ring-3 focus-visible:ring-offset-2 focus-visible:ring-blue-500 focus-visible:ring-offset-[var(--ring-offset)]',
                    'w-24 h-24 sm:w-28 sm:h-28 2xl:w-30 2xl:h-30',
                    'relative cursor-pointer rounded-full',
                    'shadow-xl shadow-purple-100 dark:shadow-lg dark:shadow-gray-800'
                )}
                onClick={() => setScroll(true)}
            >
                <span className="sr-only">Explore the cheat sheets</span>
                {label.split('').map((letter, index) => {
                    return (
                        <span
                            key={`${letter}-${index}`}
                            aria-hidden="true"
                            className={clsx(
                                'inline-block absolute h-full',
                                'top-0 left-1/2 -translate-x-1/2',
                                'font-bold uppercase',
                                'text-purple-800 dark:text-purple-300',
                                `${platypi.variable} font-platypi`,
                                'sm:text-lg 2xl:text-xl'
                            )}
                            style={{ transform: `rotate(${-75 + 25 * index}deg)` }}
                        >
                            {letter}
                        </span>
                    );
                })}

                <span
                    aria-hidden="true"
                    className={clsx(
                        'inline-block absolute rounded-full',
                        'px-3 py-4',
                        'left-1/2 top-2/3 -translate-x-1/2 -translate-y-2/3',
                        'bg-purple-800 dark:bg-purple-300 text-white dark:text-gray-900'
                    )}
                >
                    <Icon icon={IoArrowDown} size="text-xl sm:text-2xl 2xl:text-3xl" />
                </span>
            </button>
        </div>
    );
};

export default ExploreButton;
