import React from 'react';
import clsx from 'clsx';

import type { IconType } from 'react-icons';

// components
import { IoGrid, IoListSharp } from 'react-icons/io5';
import Icon from '@/components/ui/Icon';

interface LayoutControlsProps {
    view: 'grid' | 'list';
    setViewHandler: (view: 'grid' | 'list') => void;
}

const LayoutControls: React.FC<LayoutControlsProps> = ({ view, setViewHandler }) => {
    return (
        <ul className="flex gap-2">
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
    );
};

export default LayoutControls;

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
