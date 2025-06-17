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
}

const Dropdown: React.FC<DropdownProps> = ({ label, selectedOption, setSelectedOption, data, labelStyle }) => {
    const [open, setOpen] = useState(false);

    const filteredData = data.filter((item, index) => data.indexOf(item) === index);

    const setSelectedOptionHandler = (option: string) => {
        setSelectedOption(option);
        setOpen(false);
    };

    return (
        <div role="listbox" className="relative">
            <button
                aria-haspopup="listbox"
                aria-expanded="false"
                aria-controls={`${label}-dropdown-options`}
                aria-label={`Select a ${label} for cheatsheet`}
                id={`${label}-dropdown-button`}
                className={clsx('bg-white rounded-md', 'bg-white border border-gray-200', 'cursor-pointer', 'flex items-center')}
                onClick={() => setOpen((prev) => !prev)}
            >
                <span className="p-2.5 rounded-l-md border-r border-gray-200" style={labelStyle}>
                    {formatLabels(selectedOption)}
                </span>

                <span className={clsx('p-2.5 px-2', 'bg-emerald-700 text-white', 'rounded-r-md')}>
                    <Icon icon={IoChevronDownOutline} size={24} className="pointer-events-none" />
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
                    return (
                        <li
                            key={item}
                            role="option"
                            tabIndex={0}
                            className={clsx(
                                'py-2 cursor-pointer',
                                item === selectedOption ? 'bg-emerald-700 text-white hover:bg-emerald-800' : 'hover:bg-gray-100'
                            )}
                            onClick={() => setSelectedOptionHandler(item)}
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
