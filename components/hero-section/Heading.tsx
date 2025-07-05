'use client';

import React from 'react';
import clsx from 'clsx';

import { anta } from '@/app/font';

// components
import { IoPaperPlane } from 'react-icons/io5';
import Icon from '@/components/ui/Icon';

const Heading = () => {
    return (
        <div className={clsx('flex items-center justify-center')}>
            <h1 className={clsx('text-3xl xl:text-4xl 2xl:text-5xl', 'leading-12 xl:leading-14 2xl:leading-16')}>
                <span className="w-fit mx-auto sm:mx-0 block">
                    Code <span className="font-medium text-4xl xl:text-5xl 2xl:text-6xl">faster</span>. <br className="sm:hidden" /> Learn{' '}
                    <span className="bg-purple-800 text-white px-2">smarter</span>.
                </span>

                <span className={clsx('my-4 2xl:my-6', 'text-center block')}>
                    Concise <br className="sm:hidden" />
                    <span
                        className={clsx(
                            'font-bold uppercase whitespace-nowrap',
                            `${anta.variable} font-anta`,
                            'text-4xl sm:text-4xl xl:text-5xl 2xl:text-6xl',
                            'mx-6 text-emerald-700',
                            'inline-block relative',
                            'before:absolute before:content-[""] before:w-[200%] before:h-1 before:bg-black before:-left-[190%] before:top-full',
                            'after:absolute after:content-[""] after:w-[200%] after:h-1 after:bg-black after:-right-[190%] after:top-full'
                        )}
                    >
                        cheat sheets
                    </span>
                </span>
                <span className="w-fit mx-auto sm:mx-0 block">
                    for
                    <span
                        className={clsx(
                            'border-2 border-dashed border-slate-500',
                            'ml-3 sm:mr-3 px-4 rounded-2xl',
                            'inline-flex gap-4 items-center'
                        )}
                    >
                        instant <Icon icon={IoPaperPlane} size="text-4xl xl:text-5xl" className="text-purple-800" aria-hidden={true} />
                    </span>{' '}
                    <br className="sm:hidden" />
                    code reference.
                </span>
            </h1>
        </div>
    );
};

export default Heading;
