'use client';

import React from 'react';
import clsx from 'clsx';

import { useTheme } from '@/hooks/useTheme';

// components
import { IoSunny, IoMoon } from 'react-icons/io5';
import Icon from '../ui/Icon';

const Navbar = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <nav className={clsx('pt-6 lg:pt-8 2xl:pt-12', 'w-4/5 mx-auto', 'flex items-center justify-between')}>
            Logo
            <div role="radiogroup" aria-label="Toggle Light/Dark Mode" tabIndex={0}>
                <button
                    role="radio"
                    aria-checked={!isDark}
                    aria-label="Light Mode"
                    className={clsx(
                        'p-2.5 rounded-full cursor-pointer',
                        'bg-gray-800 border border-gray-700 dark:hover:bg-gray-700',
                        isDark ? 'block' : 'hidden',
                        'focus:outline-none focus-visible:ring-2 ring-blue-500'
                    )}
                    onClick={() => toggleTheme(false)}
                >
                    <Icon
                        icon={IoSunny}
                        aria-hidden="true"
                        size="text-xl md:text-2xl lg:text-xl 2xl:text-2xl"
                        className="pointer-events-none"
                    />
                </button>

                <button
                    role="radio"
                    aria-checked={isDark}
                    aria-label="Dark Mode"
                    className={clsx(
                        'p-2 rounded-full cursor-pointer',
                        'shadow bg-white border border-gray-200 hover:bg-purple-50',
                        isDark ? 'hidden' : 'block',
                        'focus:outline-none focus-visible:ring-2 ring-blue-500'
                    )}
                    onClick={() => toggleTheme(true)}
                >
                    <Icon
                        icon={IoMoon}
                        aria-hidden="true"
                        size="text-xl md:text-2xl lg:text-xl 2xl:text-2xl"
                        className="pointer-events-none"
                    />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
