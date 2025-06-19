'use client';

import React from 'react';
import clsx from 'clsx';

import { motion } from 'framer-motion';

import type { Cheatsheet } from '@/types/cheatsheets';
import { TAGS_INFO } from '@/lib/cheatsheets/constants';

// components
import Image from 'next/image';
import Badge from '@/components/ui/Badge';
import { IoMdDownload } from 'react-icons/io';
import Icon from '@/components/ui/Icon';

const cardVariants = {
    initial: {
        opacity: 0,
        scale: 0.95,
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5 },
    },
};

type CardProps = {
    onClick: () => void;
} & Cheatsheet;

const Card = ({ title, tag, image, onClick }: CardProps) => {
    const downloadFileName = image.split('/').pop();

    return (
        <motion.article
            className={clsx('relative shadow-lg', 'p-4 mb-16', 'cursor-pointer group/card')}
            initial="initial"
            animate="animate"
            variants={cardVariants}
            onClick={onClick}
        >
            <Badge size="small" color={TAGS_INFO[tag].color} shape="pill" className="absolute left-2 top-2">
                {tag}
            </Badge>

            {/* next button */}
            <a
                href={image}
                className={clsx(
                    'p-2 shadow absolute right-2 top-2',
                    'text-emerald-700 bg-white border border-gray-200',
                    'inline-block rounded-full cursor-pointer group/icon transition duration-300',
                    'hover:bg-purple-50 hover:border-transparent'
                )}
                download={downloadFileName}
                onClick={(event) => event.stopPropagation()}
            >
                <Icon icon={IoMdDownload} size={24} className="group-hover/icon:scale-120 transition duration-300" />
            </a>

            <figure className="mt-10 mb-10 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    width={300}
                    height={350}
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
                <h4 className={clsx(title.length > 20 && 'text-sm')}>{title}</h4>
            </div>
        </motion.article>
    );
};

export default Card;
