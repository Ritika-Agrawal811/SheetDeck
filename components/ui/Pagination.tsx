import clsx from 'clsx';
import React from 'react';

import { usePagination } from '@/hooks/usePagination';

// components
import { IoChevronForward, IoChevronBack } from 'react-icons/io5';
import Icon from '@/components/ui/Icon';

interface PaginationProps<T> {
    data: T[];
}

function Pagination<T>({ data }: PaginationProps<T>) {
    const { currentPage, totalPages, goToPrevPage, goToNextPage, setPage } = usePagination({ data });

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    const PAGE_WIDTH = 40; // w-9 = 2.25rem = 36px
    const GAP = 16; // gap-8 = 1rem = 16px
    const OFFSET = (PAGE_WIDTH + GAP) * (currentPage - 1);

    return (
        <nav role="navigation" aria-label="Pagination" className={clsx('flex items-center justify-center gap-6')}>
            {/* prev button */}
            <button
                className={clsx(
                    'p-1.5 md:p-2.5 shadow',
                    'bg-white dark:bg-gray-800',
                    'text-emerald-700 dark:text-emerald-600 border border-gray-200 dark:border-gray-700',
                    'inline-block rounded-full cursor-pointer',
                    'focus:outline-none focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-blue-500',
                    'disabled:bg-gray-50 dark:disabled:bg-gray-400 disabled:text-gray-600 dark:disabled:text-gray-700 disabled:cursor-not-allowed',
                    currentPage !== 1 && 'group transition duration-300 hover:bg-purple-50 dark:hover:bg-gray-700 hover:border-transparent'
                )}
                onClick={goToPrevPage}
                disabled={currentPage === 1}
                aria-disabled={currentPage === 1}
            >
                <span className="sr-only">Go to previous page</span>
                <Icon
                    icon={IoChevronBack}
                    size="text-xl md:text-2xl"
                    className="group-hover:scale-125 transition duration-300"
                    aria-hidden={true}
                />
            </button>

            {/* page numbers */}
            <ul className={clsx('flex gap-4', 'relative')}>
                {pages.map((number) => {
                    return (
                        <li key={`page-${number}`}>
                            <button
                                aria-current={number === currentPage ? 'page' : undefined}
                                aria-label={`Go to page ${number}`}
                                className={clsx(
                                    'text-lg md:text-xl w-10 h-10 rounded-full cursor-pointer',
                                    'flex items-center justify-center',
                                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
                                    currentPage === number
                                        ? 'text-white dark:text-gray-900 duration-260 scale-110 md:scale-125'
                                        : 'hover:text-emerald-700 dark:hover:text-emerald-600'
                                )}
                                onClick={() => setPage(number)}
                            >
                                {number}
                            </button>
                        </li>
                    );
                })}

                {/* indicator */}
                <div
                    className={clsx(
                        'absolute top-1/2 -translate-y-1/2',
                        'w-10 h-10 rounded-full',
                        'bg-emerald-700 dark:bg-emerald-600',
                        '-z-10 transition-all duration-250 ease-out'
                    )}
                    style={{ left: OFFSET }}
                    aria-hidden="true"
                ></div>
            </ul>

            {/* next button */}
            <button
                className={clsx(
                    'p-1.5 md:p-2.5 shadow',
                    'bg-white dark:bg-gray-800',
                    'text-emerald-700 dark:text-emerald-600 border border-gray-200 dark:border-gray-700',
                    'inline-block rounded-full cursor-pointer',
                    'focus:outline-none focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-blue-500',
                    'disabled:bg-gray-50 dark:disabled:bg-gray-400 disabled:text-gray-600 dark:disabled:text-gray-700 disabled:cursor-not-allowed',
                    currentPage !== totalPages &&
                        'group transition duration-300 hover:bg-purple-50 dark:hover:bg-gray-700 hover:border-transparent'
                )}
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                aria-disabled={currentPage === totalPages}
            >
                <span className="sr-only">Go to next page</span>
                <Icon
                    icon={IoChevronForward}
                    size="text-xl md:text-2xl"
                    className="group-hover:scale-125 transition duration-300"
                    aria-hidden={true}
                />
            </button>
        </nav>
    );
}

export default Pagination;
