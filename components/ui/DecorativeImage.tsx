import React from 'react';
import clsx from 'clsx';

// components
import Image from 'next/image';

const sizeVariants = {
    small: 'w-1/2 lg:w-3/5 2xl:w-3/4',
    default: 'w-3/4 lg:w-4/5 xl:w-[85%] 2xl:w-auto',
};

interface DecorativeImageProps {
    image: string;
    title: string;
    position: 'left' | 'right';
    size: 'small' | 'default';
    className?: string;
    priorty: boolean;
}

const DecorativeImage = ({ image, title, position, size, className, priorty }: DecorativeImageProps) => {
    return (
        <div
            className={clsx(
                'absolute top-[40%] -translate-y-[40%]',
                className,
                position === 'left' ? '-left-8 lg:-left-6' : '-right-48 lg:-right-32 xl:-right-14 2xl:-right-5'
            )}
        >
            <figure
                className={clsx(
                    'relative',
                    'before:absolute before:content-[""] before:w-full before:h-full before:bg-gray-200 before:rounded-xl before:-z-10',
                    sizeVariants[size],
                    position === 'left' ? 'before:rotate-10 before:left-0' : 'before:-rotate-5 before:right-3'
                )}
            >
                <Image
                    src={image}
                    alt={title}
                    width={300}
                    height={350}
                    className={clsx('rounded-xl border border-gray-200 opacity-95', position === 'left' ? '-rotate-10' : 'rotate-10')}
                    priority={priorty}
                />
            </figure>
        </div>
    );
};

export default DecorativeImage;
