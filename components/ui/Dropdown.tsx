import React, { useState } from 'react';
import clsx from 'clsx';

import { formatLabels } from '@/utils/formatLabels';

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
    const [open, setOpen] = useState(false);

    const filteredData = data.filter((item, index) => data.indexOf(item) === index);

    const setSelectedOptionHandler = (event: React.MouseEvent<HTMLLIElement>, option: string) => {
        event.stopPropagation();
        setSelectedOption(option);
        setOpen(false);
    };

    return (
        <div className="relative" aria-label={`Select a ${label} for cheatsheet`}>
            <button
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-controls={`${label}-dropdown-options`}
                id={`${label}-dropdown-button`}
                className={clsx(
                    'bg-white rounded-md',
                    'bg-white border border-gray-200',
                    'cursor-pointer',
                    'flex items-center',
                    'focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500'
                )}
                onClick={() => setOpen((prev) => !prev)}
                // onBlur={() => setOpen(false)}
            >
                <span
                    className={clsx('p-2 xl:p-2.5', 'rounded-l-md border-r border-gray-200', 'text-sm xl:text-base', labelClassname)}
                    style={labelStyle}
                >
                    {formatLabels(selectedOption)}
                </span>

                <span className={clsx('py-2 xl:py-2.5 px-1.5 xl:px-2', 'bg-emerald-700 text-white', 'rounded-r-md')} aria-hidden={true}>
                    <Icon icon={IoChevronDownOutline} size="text-xl xl:text-2xl" className="pointer-events-none" />
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
                    'bg-white rounded-md',
                    'bg-white border border-gray-200',
                    'text-center divide-y divide-gray-200',
                    open ? 'block' : 'hidden'
                )}
            >
                {filteredData.map((item) => {
                    const isSelected = item === selectedOption;
                    return (
                        <li
                            key={item}
                            role="option"
                            tabIndex={0}
                            aria-selected={isSelected}
                            className={clsx(
                                'py-2 cursor-pointer',
                                'text-sm xl:text-base',
                                isSelected ? 'bg-emerald-700 text-white hover:bg-emerald-800' : 'hover:bg-gray-100'
                            )}
                            onClick={(event) => setSelectedOptionHandler(event, item)}
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
