import React from 'react';
import clsx from 'clsx';

const tagsVariants = {
    size: {
        tiny: 'text-[13px] py-0.5 px-2 border',
        small: 'px-3 py-1 border text-sm',
        default: 'px-4 py-1.5 border-2 text-sm lg:text-base 3xl:text-lg',
        big: 'px-7 py-2 text-lg border-2',
    },
    shape: {
        pill: 'rounded-full',
        rounded: 'rounded-lg',
    },
} as const;

interface BadgeProps {
    size: keyof typeof tagsVariants.size;
    shape: keyof typeof tagsVariants.shape;
    color: string;
    children: React.ReactNode;
    className?: string;
    active?: boolean;
}

const Badge = ({ className, size, children, color, shape, active }: BadgeProps) => {
    return (
        <div
            className={clsx('w-fit shadow-md font-semibold', tagsVariants.size[size], tagsVariants.shape[shape], className)}
            style={{
                color: active ? '#fff' : color,
                borderColor: active ? '#047857' : color,
                backgroundColor: active ? '#047857' : undefined,
            }}
        >
            {children}
        </div>
    );
};

export default Badge;
