import React from 'react';
import clsx from 'clsx';

import { IoArrowDown } from 'react-icons/io5';

const ExploreButton = () => {
    const label = 'explore';
    return (
        <div className={clsx('flex items-center justify-center')}>
            <button
                className={clsx(
                    'border-2 border-purple-800 bg-purple-50 outline-4 outline-purple-50',
                    'w-30 h-30',
                    'relative cursor-pointer rounded-full',
                    'shadow-xl shadow-purple-100'
                )}
            >
                {label.split('').map((letter, index) => {
                    return (
                        <span
                            key={`${letter}-${index}`}
                            className={clsx(
                                'inline-block absolute h-full',
                                'top-0 left-1/2 -translate-x-1/2',
                                'font-bold font-anta uppercase text-purple-800 text-xl'
                            )}
                            style={{ transform: `rotate(${-75 + 25 * index}deg)` }}
                        >
                            {letter}
                        </span>
                    );
                })}

                <span
                    className={clsx(
                        'inline-block absolute px-3 py-4 rounded-full',
                        'left-1/2 top-2/3 -translate-x-1/2 -translate-y-2/3',
                        'bg-purple-800 text-white',
                        'text-3xl'
                    )}
                >
                    <IoArrowDown />
                </span>
            </button>
        </div>
    );
};

export default ExploreButton;
