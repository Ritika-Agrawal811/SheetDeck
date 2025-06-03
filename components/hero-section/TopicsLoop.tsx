'use client';

import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

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
    return (
        <section className={clsx('overflow-hidden py-20')}>
            <div className={clsx('bg-gradient-to-r from-zinc-200 via-slate-100 via-40%', '-rotate-3')}>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={loopVariants}
                    className={clsx('whitespace-nowrap py-6', 'text-4xl font-bold text-zinc-900')}
                >
                    {[...topics, ...topics].map((topic, index) => {
                        return (
                            <motion.p
                                key={`${topic}-${index}`}
                                className={clsx('w-[calc(100%/4)]', 'inline-flex justify-center items-center gap-10')}
                            >
                                <span className={clsx('w-2 h-2', 'inline-block rounded-full bg-zinc-900')}></span>
                                {topic}
                                <span className={clsx('w-2 h-2', 'inline-block rounded-full bg-zinc-900')}></span>
                            </motion.p>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default TopicsLoop;

const topics = ['HTML', 'CSS', 'JavaScript', 'React'];
