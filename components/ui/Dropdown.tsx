import React, { useState, useEffect, useCallback } from 'react';
import clsx from 'clsx';

import { formatLabels } from '@/utils/formatLabels';
import { useArrowKeyNavigation } from '@/hooks/useArrowKeyNavigation';

// components
import { IoChevronDownOutline } from 'react-icons/io5';
import Icon from './Icon';

interface DropdownProps {
    label: string;
    selectedOption: string;
    setSelectedOption: (option: string) => void;
    data: string[];
    labelStyle?: React.CSSProperties;
    labelClassname?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ label, selectedOption, setSelectedOption, data, labelStyle, labelClassname }) => {
    const { registerItemRef, handleKeysNavigation, focusFirstItem, setActiveIndex } = useArrowKeyNavigation(data.length, {
        orientation: 'vertical',
    });
    const [open, setOpen] = useState(false);

    const closeExpandedOptions = useCallback(() => {
        setOpen(false);
    }, []);

    // add click event to document to close the expanded options
    useEffect(() => {
        if (!open) return;

        document.addEventListener('click', closeExpandedOptions);

        return () => {
            document.removeEventListener('click', closeExpandedOptions);
        };
    }, [open, closeExpandedOptions]);

    const setSelectedOptionHandler = (event: React.MouseEvent<HTMLLIElement>, option: string) => {
        event.stopPropagation();
        setSelectedOption(option);
        setOpen(false);
    };

    const parentKeyDownHandler = () => {
        focusFirstItem();
        setActiveIndex(0);
    };

    const itemKeyDownHandler = (event: React.KeyboardEvent, option: string) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.stopPropagation();
            setSelectedOption(option);
            setOpen(false);
        }
    };

    return (
        <div className="relative" aria-label={`Select a ${label} for cheatsheet`}>
            <button
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-controls={`${label}-dropdown-options`}
                id={`${label}-dropdown-button`}
                className={clsx(
                    'bg-white dark:bg-gray-800 rounded-md',
                    'border border-gray-200 dark:border-gray-700',
                    'cursor-pointer',
                    'flex items-center',
                    'focus:outline-none focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-blue-500 '
                )}
                onClick={() => setOpen((prev) => !prev)}
                onKeyDown={parentKeyDownHandler}
            >
                <span
                    className={clsx(
                        'p-2 xl:p-2.5',
                        'rounded-l-md border-r border-gray-200 dark:border-gray-700',
                        'text-sm xl:text-base',
                        labelClassname
                    )}
                    style={labelStyle}
                >
                    {formatLabels(selectedOption)}
                </span>

                <span
                    className={clsx(
                        'py-2 xl:py-2.5 px-1.5 xl:px-2',
                        'bg-emerald-700 dark:bg-emerald-500 text-white dark:text-gray-900',
                        'rounded-r-md'
                    )}
                    aria-hidden={true}
                >
                    <Icon icon={IoChevronDownOutline} size="text-xl 3xl:text-2xl" className="pointer-events-none" />
                </span>
            </button>

            <ul
                id={`${label}-dropdown-options`}
                role="listbox"
                tabIndex={-1}
                aria-hidden="true"
                aria-labelledby={`${label}-dropdown-button`}
                className={clsx(
                    'absolute',
                    'w-full mt-2',
                    'bg-white dark:bg-neutral-800 rounded-md',
                    'border border-gray-200 dark:border-none',
                    'text-center divide-y divide-gray-200 dark:divide-gray-700',
                    open ? 'block' : 'hidden'
                )}
                onKeyDown={handleKeysNavigation}
            >
                {data.map((item, index) => {
                    const isSelected = item === selectedOption;
                    return (
                        <li
                            key={item}
                            role="option"
                            tabIndex={0}
                            aria-selected={isSelected}
                            className={clsx(
                                'py-1.5 3xl:py-2 cursor-pointer',
                                'text-sm xl:text-base',
                                'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:outline-offset-[var(--ring-offset)]',
                                isSelected
                                    ? 'bg-emerald-700 dark:bg-emerald-400 text-white dark:text-gray-900 hover:bg-emerald-800 dark:font-medium'
                                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                            )}
                            onClick={(event) => setSelectedOptionHandler(event, item)}
                            onKeyDown={(event) => itemKeyDownHandler(event, item)}
                            ref={(elem) => registerItemRef(elem, index)}
                        >
                            {formatLabels(item)}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Dropdown;
