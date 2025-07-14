import React from 'react';
import clsx from 'clsx';

const gradientVariants = {
    size: {
        tiny: 'w-1/4 h-4/5 lg:h-full',
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

interface BackgroundSoftGradientProps {
    size?: keyof typeof gradientVariants.size;
    position?: keyof typeof gradientVariants.position;
    className?: string;
}

const BackgroundSoftGradient = ({ size = 'default', position = 'center', className }: BackgroundSoftGradientProps) => {
    return (
        <div
            className={clsx(
                'absolute -z-10',
                'bg-radial from-purple-50 dark:hidden from-0% to-transparent to-60%',
                gradientVariants.size[size],
                gradientVariants.position[position],
                className
            )}
        ></div>
    );
};

export default BackgroundSoftGradient;
