'use client';

import React from 'react';
import clsx from 'clsx';

import { motion } from 'framer-motion';
import { useCategory } from '../../hooks/useCategory';
import { TAGS_INFO } from '../../lib/cheatsheets/constants';

const loopVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: '-100%',
        transition: {
            repeat: Infinity,
            duration: 10,
            ease: 'linear',
        },
    },
};

const TopicsLoop = () => {
    const { topics } = useCategory();

    return (
        <section className={clsx('overflow-hidden pb-8')}>
            <div className={clsx('', '-rotate-2')}>
                {/* bg-gradient-to-r from-zinc-200 via-slate-100 via-40% */}
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={loopVariants}
                    className={clsx('whitespace-nowrap pt-8 pb-4', 'text-5xl font-bold text-zinc-900')}
                >
                    {[...topics, ...topics].map((topic, index) => {
                        if (topic.toLowerCase() === 'all') return null;

                        return (
                            <motion.p
                                key={`${topic}-${index}`}
                                className={clsx('w-[calc(100%/4)]', 'inline-flex justify-between items-center gap-10', 'font-castoro')}
                                style={{ color: TAGS_INFO[topic].color }}
                            >
                                <span className={clsx('w-px h-12', 'inline-block rounded-full bg-zinc-400')}></span>
                                {topic}
                                <span className={clsx('w-px h-12', 'inline-block rounded-full bg-zinc-400')}></span>
                            </motion.p>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default TopicsLoop;
