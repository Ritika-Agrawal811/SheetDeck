import React from 'react';
import clsx from 'clsx';

import type { IconType } from 'react-icons';
import { useArrowKeyNavigation } from '@/hooks/useArrowKeyNavigation';

// components
import { IoGrid, IoListSharp } from 'react-icons/io5';
import Icon from '@/components/ui/Icon';

interface LayoutControlsProps {
    view: 'grid' | 'list';
    setViewHandler: (view: 'grid' | 'list') => void;
}

const LayoutControls: React.FC<LayoutControlsProps> = ({ view, setViewHandler }) => {
    const { registerItemRef, handleKeysNavigation, setActiveIndex } = useArrowKeyNavigation(2);

    const parentKeyDownHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Tab') {
            /* set the current active view index as active index */
            setActiveIndex(view === 'grid' ? 0 : 1);
        }
        handleKeysNavigation(event);
    };

    const itemKeyDownHandler = (event: React.KeyboardEvent<HTMLLIElement>, view: 'grid' | 'list', index: number) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setViewHandler(view);
            setActiveIndex(index);
        }
    };

    return (
        <ul role="radiogroup" className={clsx('flex gap-2 3xl:gap-3')} onKeyDown={parentKeyDownHandler}>
            {gridViews.map((item, index) => {
                return (
                    <li
                        key={item.view}
                        tabIndex={view === item.view ? 0 : -1}
                        role="radio"
                        aria-checked={view === item.view}
                        className={clsx(
                            'p-2 xl:p-2.5 rounded-md shadow cursor-pointer transition-colors duration-200 ease-in',
                            'focus:outline-none focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 focus-visible:ring-offset-[var(--ring-offset)]',
                            'group transition duration-300',
                            view === item.view
                                ? 'bg-emerald-700 dark:bg-emerald-400 text-white dark:text-gray-900'
                                : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-gray-700 hover:border-transparent'
                        )}
                        onClick={() => setViewHandler(item.view)}
                        onKeyDown={(e) => itemKeyDownHandler(e, item.view, index)}
                        ref={(elem) => registerItemRef(elem, index)}
                    >
                        <span className="sr-only">Switch to {item.view} view</span>
                        <Icon
                            icon={item.icon}
                            size="text-xl 3xl:text-2xl"
                            aria-hidden="true"
                            className="group-hover:scale-110 transition duration-300"
                        />
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
