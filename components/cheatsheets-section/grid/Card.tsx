import React from 'react';
import clsx from 'clsx';

import type { Cheatsheet } from '../../../types/cheatsheets';
import { TAGS_INFO } from '../../../lib/cheatsheets/constants';

// components
import Image from 'next/image';
import Badge from '../../ui/Badge';

const Card = ({ title, tag, image }: Cheatsheet) => {
    return (
        <article className={clsx('relative shadow-lg', 'p-4 mb-16')}>
            <Badge size="small" color={TAGS_INFO[tag]} shape="pill" className="absolute left-2 top-2">
                {tag}
            </Badge>

            <figure className="mt-8 mb-10">
                <Image src={image} alt={title} width={300} height={350} />
            </figure>

            <div
                className={clsx(
                    'bg-slate-50',
                    'absolute bottom-0 left-0 right-0',
                    'h-12',
                    'rounded-t-full',
                    'flex justify-center items-center'
                )}
                style={{ boxShadow: `2px -1.5px 0 ${TAGS_INFO[tag]}` }}
            >
                <h4 className={clsx(title.length > 20 && 'text-sm')}>{title}</h4>
            </div>
        </article>
    );
};

export default Card;
