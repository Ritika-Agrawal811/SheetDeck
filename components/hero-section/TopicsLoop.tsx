'use client';

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

import { castoro } from '@/app/font';

import { motion, useReducedMotion } from 'framer-motion';
import { useCategory } from '@/hooks/useCategory';
import { useScreenBreakpoint } from '@/hooks/useScreenBreakpoint';
import { TAGS_INFO } from '@/lib/cheatsheets/constants';

const TopicsLoop = () => {
    const { topics } = useCategory();
    const { breakpoint } = useScreenBreakpoint();
    const prefersReducedMotion = useReducedMotion();

    const [animateNow, setAnimateNow] = useState(false);

    const xValue = (breakpoint: string) => {
        switch (breakpoint) {
            case 'xs':
                return '-400%';
            case 'sm':
                return '-200%';
            case 'md':
                return '-133.33%';
            default:
                return '-100%';
        }
    };

    const animate = {
        x: xValue(breakpoint ?? ''),
        transition: {
            repeat: Infinity,
            duration: 10,
            ease: 'linear',
        },
    };

    useEffect(() => {
        const timeout = setTimeout(() => setAnimateNow(true), 100);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <section className={clsx('overflow-hidden')}>
            <div className={clsx('', '-rotate-2')}>
                <motion.div
                    initial={{
                        x: 0,
                    }}
                    animate={animateNow && !prefersReducedMotion ? animate : undefined}
                    className={clsx('whitespace-nowrap py-4 lg:py-8 2xl:py-10')}
                >
                    {[...topics, ...topics].map((topic, index) => {
                        if (topic.toLowerCase() === 'all') return null;

                        return (
                            <p
                                key={`${topic}-${index}`}
                                className={clsx(
                                    'w-full sm:w-1/2 md:w-[calc(100%/3)] lg:w-[calc(100%/4)]',
                                    'inline-flex justify-between items-center',
                                    ` ${castoro.variable} font-castoro font-bold`,
                                    'text-3xl xl:text-4xl 2xl:text-5xl'
                                )}
                                style={{ color: TAGS_INFO[topic].color }}
                            >
                                <span className={clsx('w-px h-8 lg:h-10 2xl:h-12', 'inline-block rounded-full bg-zinc-400')}></span>
                                {topic}
                                <span className={clsx('w-px h-8 lg:h-10 2xl:h-12', 'inline-block rounded-full bg-zinc-400')}></span>
                            </p>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default TopicsLoop;
