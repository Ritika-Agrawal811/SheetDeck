'use client';

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

import { motion } from 'framer-motion';

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
                        'relative shadow-lg rounded-lg',
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
                    <Badge size="small" color={TAGS_INFO[tag].color} shape="pill" className="absolute left-2 top-2">
                        {TAGS_INFO[tag].title}
                    </Badge>

                    {/* download button */}
                    <a
                        role="button"
                        href={image}
                        className={clsx(
                            'p-2 shadow absolute right-2 top-2',
                            'text-emerald-700 bg-white border border-gray-200',
                            'inline-block rounded-full cursor-pointer group/icon transition duration-300',
                            'hover:bg-purple-50 hover:border-transparent',
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

                    <figure className="mt-10 mb-10 overflow-hidden">
                        <Image
                            src={image}
                            alt={title}
                            width={300}
                            height={350}
                            quality={70}
                            className="transition duration-300 group-hover/card:scale-105 group-hover/card:translate-y-3"
                        />
                    </figure>

                    <div
                        className={clsx(
                            'bg-slate-50',
                            'absolute bottom-0 left-0 right-0',
                            'h-12',
                            'rounded-t-full',
                            'flex justify-center items-center'
                        )}
                        style={{ boxShadow: `2px -1.5px 0 ${TAGS_INFO[tag].color}` }}
                    >
                        <h3 className={clsx(title.length > 20 && 'text-sm')}>{title}</h3>
                    </div>
                </motion.article>
            )}
        </>
    );
};

export default Card;
