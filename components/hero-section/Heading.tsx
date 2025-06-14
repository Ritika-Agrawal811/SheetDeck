import React from 'react';
import clsx from 'clsx';

// components
import { IoPaperPlane } from 'react-icons/io5';
import Icon from '../ui/Icon';

const Heading = () => {
    return (
        <div className={clsx('flex items-center justify-center')}>
            <h1 className={clsx('text-5xl leading-16')}>
                <div>
                    Code <span className={clsx('font-jua text-6xl')}>faster</span>. Learn{' '}
                    <span className={clsx('bg-purple-800 text-slate-100 px-4')}>smarter</span>.
                </div>

                <div className="my-6">
                    Concise
                    <span
                        className={clsx(
                            'font-bold uppercase font-anta',
                            'text-6xl mx-6 text-emerald-700',
                            'inline-block relative',
                            'before:absolute before:content-[""] before:w-[150%] before:h-1 before:bg-black before:-left-[140%] before:top-full',
                            'after:absolute after:content-[""] after:w-[150%] after:h-1 after:bg-black after:-right-[140%] after:top-full'
                        )}
                    >
                        cheat sheets
                    </span>
                </div>
                <div>
                    for
                    <span
                        className={clsx(
                            'border-2 border-dashed border-slate-500',
                            'mx-3 px-2 rounded-2xl',
                            'inline-flex gap-4 items-center'
                        )}
                    >
                        instant <Icon icon={IoPaperPlane} size={45} className="text-purple-800" />
                    </span>
                    code reference.
                </div>
            </h1>
        </div>
    );
};

export default Heading;
