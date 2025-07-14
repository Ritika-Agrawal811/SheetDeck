'use client';

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';

import type { Cheatsheet } from '@/types/cheatsheets';
import { TAGS_INFO } from '@/lib/cheatsheets/constants';

// components
import Image from 'next/image';
import Badge from '@/components/ui/Badge';
import { IoMdDownload } from 'react-icons/io';
import Icon from '@/components/ui/Icon';
import CardSkeleton from './CardSkeleton';

const cardVariants = {
    initial: {
        opacity: 0,
        scale: 0.95,
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: { duration: 1 },
    },
};

type CardProps = {
    viewCardDetails: () => void;
} & Cheatsheet;

const Card: React.FC<CardProps> = ({ id, title, tag, image, viewCardDetails }) => {
    const { isDark } = useTheme();

    const [isLoading, setIsLoading] = useState(true);
    const downloadFileName = image.split('/').pop();

    const onKeyDownHandler = (event: React.KeyboardEvent<HTMLElement>) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            viewCardDetails();
        }
    };

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 350);
    }, []);

    return (
        <>
            {isLoading ? (
                <CardSkeleton />
            ) : (
                <motion.article
                    role="button"
                    aria-label={`View the cheat sheet for ${title}`}
                    aria-haspopup="dialog"
                    tabIndex={0}
                    className={clsx(
                        'relative shadow-lg dark:shadow-md dark:bg-neutral-800 dark:shadow-neutral-800 rounded-lg',
                        'p-4',
                        'cursor-pointer group/card',
                        'mx-auto w-[275px] xs:w-[300px] sm:w-[280px] md:w-[300px] xl:w-auto',
                        'focus:outline-none focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
                    )}
                    id={id}
                    initial="initial"
                    animate="animate"
                    variants={cardVariants}
                    onClick={viewCardDetails}
                    onKeyDown={onKeyDownHandler}
                >
                    <Badge size="small" color={TAGS_INFO[tag].color} shape="pill" className="absolute left-2 top-2 dark:top-3">
                        {TAGS_INFO[tag].title}
                    </Badge>

                    {/* download button */}
                    <a
                        role="button"
                        href={image}
                        className={clsx(
                            'p-2 shadow absolute right-2 top-2',
                            'text-emerald-700 dark:text-emerald-600 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
                            'inline-block rounded-full cursor-pointer group/icon transition duration-300',
                            'hover:bg-purple-50 dark:hover:bg-gray-700 hover:border-transparent',
                            'focus:outline-none focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
                        )}
                        download={downloadFileName}
                        tabIndex={0}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <span className="sr-only">Download the {title} cheatsheet</span>
                        <Icon
                            icon={IoMdDownload}
                            aria-hidden={true}
                            size="text-xl md:text-2xl lg:text-xl 2xl:text-2xl"
                            className="group-hover/icon:scale-120 transition duration-300"
                        />
                    </a>

                    <figure className="mt-10 mb-10 overflow-hidden dark:rounded-lg">
                        <Image
                            src={image}
                            alt={title}
                            width={300}
                            height={350}
                            quality={70}
                            className="transition duration-300 group-hover/card:scale-105 group-hover/card:translate-y-3 dark:rounded-lg dark:scale-95 dark:group-hover/card:scale-100 dark:group-hover/card:translate-y-1"
                        />
                    </figure>

                    <div
                        className={clsx(
                            'bg-slate-50 dark:bg-zinc-900',
                            'absolute bottom-0 left-0 right-0',
                            'h-12',
                            'rounded-t-full',
                            'flex justify-center items-center'
                        )}
                        style={{ boxShadow: `2px ${isDark ? '-1px' : '-1.5px'} 0 ${TAGS_INFO[tag].color}` }}
                    >
                        <h3 className={clsx(title.length > 20 && 'text-sm')}>{title}</h3>
                    </div>
                </motion.article>
            )}
        </>
    );
};

export default Card;
