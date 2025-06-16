import React from 'react';
import clsx from 'clsx';

// components
import Image from 'next/image';

interface DecorativeImageProps {
    image: string;
    title: string;
    position: 'left' | 'right';
    size: 'small' | 'default';
}

const DecorativeImage = ({ image, title, position, size }: DecorativeImageProps) => {
    return (
        <div className={clsx('absolute top-[40%] -translate-y-[40%]', position === 'left' ? '-left-5' : '-right-5')}>
            <figure
                className={clsx(
                    'relative',
                    'before:absolute before:content-[""] before:w-full before:h-full before:bg-gray-200 before:rounded-xl before:-z-10',
                    position === 'left' ? 'before:rotate-10 before:-left-20' : 'before:-rotate-5 before:right-3'
                )}
            >
                <Image
                    src={image}
                    alt={title}
                    width={300}
                    height={350}
                    className={clsx(
                        size === 'small' && 'w-3/4',
                        'rounded-xl border border-gray-200 opacity-95',
                        position === 'left' ? '-rotate-10' : 'rotate-10'
                    )}
                />
            </figure>
        </div>
    );
};

export default DecorativeImage;
