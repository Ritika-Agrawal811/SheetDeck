import React from 'react';
import clsx from 'clsx';

import type { Cheatsheet } from '../../types/cheatsheets';

// components
import Image from 'next/image';

const Card = ({ title, tag, image }: Cheatsheet) => {
    return (
        <article className={clsx('relative shadow-lg', 'p-4 mb-10')}>
            <div
                className={clsx(
                    'absolute left-2 top-4',
                    'text-amber-600 font-semibold text-sm',
                    'w-fit rounded-full px-3 py-1',
                    'bg-white shadow-md border border-amber-600'
                )}
            >
                {tag}
            </div>
            <Image src={image} alt={title} width={300} height={350} />

            <div
                className={clsx(
                    'bg-slate-100',
                    'absolute bottom-0 left-0 right-0',
                    'h-14',
                    'rounded-t-full',
                    'flex justify-center items-center'
                )}
            >
                <h4 className={clsx('text-lg')}>{title}</h4>
            </div>
        </article>
    );
};

export default Card;
