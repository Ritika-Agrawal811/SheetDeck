'use client';

import clsx from 'clsx';

import { useTheme } from '@/hooks/useTheme';

// components
import { IoSunny, IoMoon } from 'react-icons/io5';
import Icon from '../../ui/Icon';

const ThemeToggle = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <div role="radiogroup" aria-label="Toggle Light/Dark Mode">
            {/* Light Mode Button */}
            <button
                role="radio"
                aria-checked={!isDark}
                aria-label="Light Mode"
                className={clsx(
                    'p-2 xl:p-2.5 rounded-full cursor-pointer',
                    'bg-gray-800 border border-gray-700 dark:hover:bg-gray-700',
                    isDark ? 'block' : 'hidden',
                    'focus:outline-none focus-visible:ring-2 ring-blue-500',
                    'group transition duration-300'
                )}
                onClick={() => toggleTheme(false)}
            >
                <Icon
                    icon={IoSunny}
                    aria-hidden="true"
                    size="text-xl md:text-2xl lg:text-xl 3xl:text-2xl"
                    className="group-hover:scale-110 transition duration-300 pointer-events-none"
                />
            </button>

            {/* Dark Mode Button */}
            <button
                role="radio"
                aria-checked={isDark}
                aria-label="Dark Mode"
                className={clsx(
                    'p-2 xl:p-2.5 rounded-full cursor-pointer',
                    'shadow bg-white border border-gray-200 hover:bg-emerald-50',
                    isDark ? 'hidden' : 'block',
                    'focus:outline-none focus-visible:ring-2 ring-blue-500',
                    'group transition duration-300'
                )}
                onClick={() => toggleTheme(true)}
            >
                <Icon
                    icon={IoMoon}
                    aria-hidden="true"
                    size="text-xl md:text-2xl lg:text-xl 3xl:text-2xl"
                    className="group-hover:scale-110 transition duration-300 pointer-events-none"
                />
            </button>
        </div>
    );
};

export default ThemeToggle;
