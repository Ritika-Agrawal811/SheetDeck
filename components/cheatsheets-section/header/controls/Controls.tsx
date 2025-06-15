'use client';

import React from 'react';
import clsx from 'clsx';

import type { IconType } from 'react-icons';
import { useCategory } from '@/hooks/useCategory';
import { usePagination } from '@/hooks/usePagination';

// components
import { IoGrid, IoListSharp } from 'react-icons/io5';
import Icon from '@/components/ui/Icon';
import SearchBox from './SearchBox';

interface ControlsProps {
    view: 'grid' | 'list';
    setViewHandler: (view: 'grid' | 'list') => void;
}

const Controls: React.FC<ControlsProps> = ({ view, setViewHandler }) => {
    const { cheatsheets } = useCategory();
    const { startIndex, endIndex } = usePagination({ data: cheatsheets });

    return (
        <section className="flex justify-between items-center">
            <h3 className="text-lg">
                Showing{' '}
                <span className="font-medium text-emerald-700">
                    {startIndex}-{endIndex}
                </span>{' '}
                of <span className="text-purple-800 font-medium">{cheatsheets.length} results</span>
            </h3>
            <div className="flex gap-4 items-center">
                <ul className="flex gap-4">
                    {gridViews.map((item) => {
                        return (
                            <li
                                key={item.view}
                                className={clsx(
                                    'p-2.5 rounded-md shadow cursor-pointer transition-colors duration-200 ease-in',
                                    view === item.view ? 'bg-emerald-700 text-white' : 'bg-white border border-gray-200'
                                )}
                                onClick={() => setViewHandler(item.view)}
                            >
                                <Icon icon={item.icon} size={24} />
                            </li>
                        );
                    })}
                </ul>

                <SearchBox />
            </div>
        </section>
    );
};

export default Controls;

const gridViews: { view: 'grid' | 'list'; icon: IconType }[] = [
    {
        view: 'grid',
        icon: IoGrid,
    },
    {
        view: 'list',
        icon: IoListSharp,
    },
];
