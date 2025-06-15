'use client';

import React from 'react';
import clsx from 'clsx';

// components
import Image from 'next/image';
import VisitRepositoryButton from './VisitRepositoryButton';

const Support = () => {
    return (
        <section className={clsx('py-20 bg-purple-50', 'relative')}>
            <div className={clsx('flex flex-col gap-4 items-center', 'relative z-20')}>
                {/* Title */}
                <h2 className="text-6xl">
                    Show your <span className={clsx('font-medium font-platypi text-purple-800')}>support</span>.{' '}
                </h2>

                {/* Subtitle */}
                <p className={clsx('text-2xl', 'flex items-center gap-1')}>
                    <span className="font-medium">
                        Found these cheat sheets <span className="text-emerald-700 font-jua">helpful</span>?
                    </span>{' '}
                    A <Image alt="star gif" src="/assets/star.gif" width={50} height={50} /> on GitHub goes a long way!
                </p>

                {/* Call to action button */}
                <VisitRepositoryButton />
            </div>

            {/* Background Image */}
            <div className={clsx('absolute left-[40%] -translate-x-[40%] bottom-0', 'z-10', 'h-1/2 w-2/5')}>
                <Image
                    alt="background road image"
                    src="/assets/road.svg"
                    width={500}
                    height={200}
                    quality={50}
                    className="h-full w-full object-cover opacity-70"
                />
            </div>
        </section>
    );
};

export default Support;
