import Icon from '@/components/ui/Icon';
import clsx from 'clsx';
import React from 'react';

import { useCategory } from '@/hooks/useCategory';
import { usePagination } from '@/hooks/usePagination';
import { IoChevronForward, IoChevronBack } from 'react-icons/io5';

const Pagination = () => {
    const { cheatsheets } = useCategory();
    const { currentPage, totalPages, goToPrevPage, goToNextPage, setPage } = usePagination({ data: cheatsheets });

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    const PAGE_WIDTH = 40; // w-9 = 2.25rem = 36px
    const GAP = 16; // gap-8 = 1rem = 16px
    const OFFSET = (PAGE_WIDTH + GAP) * (currentPage - 1);

    return (
        <section className={clsx('flex items-center justify-center gap-6')}>
            {/* prev button */}
            <span
                className={clsx(
                    'p-2.5 shadow',
                    'text-emerald-700 border border-gray-200',
                    'inline-block rounded-full cursor-pointer group transition duration-300',
                    'hover:bg-purple-50 hover:border-transparent'
                )}
                onClick={goToPrevPage}
            >
                <Icon icon={IoChevronBack} size={24} className="group-hover:scale-125 transition duration-300" />
            </span>

            {/* page numbers */}
            <div className={clsx('flex gap-4', 'relative')}>
                {pages.map((item) => {
                    return (
                        <span
                            key={`page-${item}`}
                            className={clsx(
                                'text-xl w-10 h-10',
                                'flex items-center justify-center',
                                'cursor-pointer hover:text-emerald-700',
                                currentPage === item && 'text-white duration-260 scale-125'
                            )}
                            onClick={() => setPage(item)}
                        >
                            {item}
                        </span>
                    );
                })}

                {/* indicator */}
                <div
                    className={clsx(
                        'absolute top-1/2 -translate-y-1/2',
                        'w-10 h-10 rounded-full',
                        'bg-emerald-700',
                        '-z-10 transition-all duration-250 ease-out'
                    )}
                    style={{ left: OFFSET }}
                ></div>
            </div>

            {/* next button */}
            <span
                className={clsx(
                    'p-2.5 shadow',
                    'text-emerald-700 border border-gray-200',
                    'inline-block rounded-full cursor-pointer group transition duration-300',
                    'hover:bg-purple-50 hover:border-transparent'
                )}
                onClick={goToNextPage}
            >
                <Icon icon={IoChevronForward} size={24} className="group-hover:scale-125 transition duration-300" />
            </span>
        </section>
    );
};

export default Pagination;
