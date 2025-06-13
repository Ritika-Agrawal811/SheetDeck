import React from 'react';
import clsx from 'clsx';

const gradientVariants = {
    size: {
        tiny: 'w-1/4 h-full',
        small: 'w-1/2 h-full',
        default: 'w-full h-full',
        big: 'w-[200%] h-[200%]',
    },
    position: {
        center: 'top-1/2 left-1/2 -translate-1/2',
        top: 'top-0 left-1/2 -translate-x-1/2',
        left: 'left-0 top-1/2 -translate-y-1/2',
        right: 'right-0 top-1/2 -translate-y-1/2',
        bottom: 'bottom-0 left-1/2 -translate-x-1/2',
    },
};

type BackgroundSoftGradientProps = {
    size?: keyof typeof gradientVariants.size;
    position?: keyof typeof gradientVariants.position;
};

const BackgroundSoftGradient = ({ size = 'default', position = 'center' }: BackgroundSoftGradientProps) => {
    return (
        <div
            className={clsx(
                'absolute -z-10',
                'bg-radial from-purple-100 from-0% to-transparent to-60%',
                gradientVariants.size[size],
                gradientVariants.position[position]
            )}
        ></div>
    );
};

export default BackgroundSoftGradient;
