'use client';

import React from 'react';
import clsx from 'clsx';

import { useTheme } from '@/hooks/useTheme';

const tagsVariants = {
    size: {
        tiny: 'text-[13px] py-1 px-2 border',
        small: 'px-3 py-1 border text-sm',
        default: 'px-4 py-1.5 dark:py-2 border-2 dark:border text-sm lg:text-base 2xl:text-sm 3xl:text-base 4xl:text-lg',
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
    const { isDark } = useTheme();
    return (
        <div
            className={clsx('w-fit shadow-md font-semibold', tagsVariants.size[size], tagsVariants.shape[shape], className)}
            style={{
                color: active ? (isDark ? '#111827' : '#fff') : color,
                borderColor: active ? (isDark ? '#10B981' : '#047857') : color,
                backgroundColor: active ? (isDark ? '#10B981' : '#047857') : undefined,
            }}
        >
            {children}
        </div>
    );
};

export default Badge;
