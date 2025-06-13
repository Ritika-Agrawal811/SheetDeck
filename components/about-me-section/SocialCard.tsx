import React from 'react';
import clsx from 'clsx';

import type { IconType } from 'react-icons';

// components
import Icon from '../ui/Icon';

const cardVariants = {
    size: {
        small: {
            card: 'p-4 gap-4',
            label: 'text-lg',
            icon: 45,
        },
        default: {
            card: 'py-4 px-6 gap-6',
            label: 'text-xl',
            icon: 50,
        },
        big: {
            card: 'py-4 px-8 gap-8',
            label: 'text-2xl',
            icon: 60,
        },
    },
    orientation: {
        horizontal: 'flex',
        vertical: 'flex flex-col',
    },
};

// specific width classes for vertical orientation based on size
const verticalWidthClasses = {
    small: 'w-28',
    default: 'w-32',
    big: 'w-40',
};

type SocialCardProps = {
    label?: string;
    icon: IconType;
    size?: keyof typeof cardVariants.size;
    orientation?: keyof typeof cardVariants.orientation;
    profile: string;
    socialURL: string;
    className?: string;
};

const SocialCard = ({ label, icon, size = 'default', orientation = 'vertical', className, socialURL, profile }: SocialCardProps) => {
    return (
        <a href={socialURL} target="_blank" rel="noopener noreferrer" className="inline-block" aria-label={`Visit my ${profile} account`}>
            <article
                className={clsx(
                    'rounded-2xl items-center border-2 border-black cursor-pointer group',
                    'hover:scale-95 transition duration-300 ease-in-out',
                    cardVariants.size[size].card,
                    cardVariants.orientation[orientation],
                    orientation === 'horizontal' ? 'w-fit' : verticalWidthClasses[size],
                    className
                )}
            >
                {label && <h4 className={clsx('text-center', cardVariants.size[size].label)}>{label}</h4>}
                <Icon
                    icon={icon}
                    size={cardVariants.size[size].icon}
                    className="group-hover:scale-115 transition duration-300 ease-in-out"
                />
            </article>
        </a>
    );
};

export default SocialCard;
