import React from 'react';
import clsx from 'clsx';

const VisitRepositoryButton = () => {
    return (
        <a
            href="https://github.com/Ritika-Agrawal811/webdev-cheatsheets"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
            aria-label="Visit SheetDeck GitHub Repository"
            className={clsx(
                'mt-8 px-6 py-3 2xl:px-8 2xl:py-4',
                'text-base 2xl:text-xl',
                'border-2 border-purple-100 dark:border-none rounded-full',
                'focus:outline-none focus-visible:border-transparent focus-visible:ring-3 focus-visible:ring-offset-2 focus-visible:ring-blue-500 focus-visible:ring-offset-[var(--ring-offset)]',
                'bg-purple-800 dark:bg-purple-300 text-white dark:text-gray-900',
                'cursor-pointer',
                'shadow-lg shadow-purple-100 dark:shadow-none',
                'font-platypi dark:font-medium',
                'relative overflow-hidden',
                'hover:scale-105 transition duration-300 ease-in-out',
                'before:absolute before:content-[""] before:w-[200%] before:h-[200%] before:left-0  before:top-0',
                'before:bg-linear-0 before:from-transparent before:from-0% via-transparent via-80% before:to-purple-400 dark:before:to-purple-1000 before:to-80% before:rotate-30 before:opacity-90',
                'before:transition-all before:ease-in-out before:duration-300 hover:before:rotate-0'
            )}
        >
            <span className="relative z-10">Visit repository</span>
        </a>
    );
};

export default VisitRepositoryButton;
