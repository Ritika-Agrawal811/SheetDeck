import React from 'react';
import clsx from 'clsx';

const tagsVariants = {
    size: {
        small: 'px-3 py-1 text-sm border',
        default: 'px-4 py-1.5 border-2',
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
            className={clsx(
                'w-fit shadow-md font-semibold',
                active ? 'bg-emerald-700 text-white' : 'bg-white',
                tagsVariants.size[size],
                tagsVariants.shape[shape],
                className
            )}
            style={{ color: active ? undefined : color, borderColor: active ? '#047857' : color }}
        >
            {children}
        </div>
    );
};

export default Badge;
