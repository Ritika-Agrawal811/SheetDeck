import clsx from 'clsx';

import type { IconType } from 'react-icons';

// components
import Icon from '@/components/ui/Icon';

const cardVariants = {
    size: {
        small: {
            card: 'p-3 gap-3 sm:p-4 sm:gap-4 4xl:p-6 4xl:gap-6',
            label: 'text-base 3xl:text-lg 4xl:text-xl',
            icon: 'text-4xl md:text-5xl xl:text-4xl 3xl:text-5xl',
        },
        default: {
            card: 'p-3 gap-3 sm:py-4 sm:px-4 3xl:px-6 gap-4 3xl:gap-6 4xl:px-8 4xl:gap-8',
            label: 'text-lg 3xl:text-xl 4xl:text-2xl',
            icon: 'text-4xl md:text-5xl xl:text-4xl 3xl:text-5xl 4xl:text-6xl',
        },
        big: {
            card: 'py-4 px-6 3xl:px-8 gap-6 3xl:gap-8 4xl:px-10 4xl:gap-10',
            label: 'text-lg md:text-xl 3xl:text-2xl',
            icon: 'text-5xl md:text-6xl xl:text-5xl 3xl:text-6xl 4xl:text-7xl',
        },
    },
    orientation: {
        horizontal: 'flex',
        vertical: 'flex flex-col',
    },
};

// specific width classes for vertical orientation based on size
const verticalWidthClasses = {
    small: 'w-28 4xl:w-32',
    default: 'w-32 3xl:w-36 4xl:w-40',
    big: 'w-32 md:w-36 3xl:w-40 4xl:w-44',
};

interface SocialCardProps {
    label?: string;
    icon: IconType;
    size?: keyof typeof cardVariants.size;
    orientation?: keyof typeof cardVariants.orientation;
    profile: string;
    socialURL: string;
    className?: string;
}

const SocialCard = ({ label, icon, size = 'default', orientation = 'vertical', className, socialURL, profile }: SocialCardProps) => {
    return (
        <a
            href={socialURL}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={0}
            className={clsx(
                'block border-2 border-gray-800 dark:border-gray-600',
                'focus:outline-none focus-visible:border-transparent focus-visible:ring-3 focus-visible:ring-offset-2 focus-visible:ring-blue-500 focus-visible:ring-offset-[var(--ring-offset)]',
                'hover:scale-95 transition duration-300 ease-in-out',
                'items-center cursor-pointer rounded-2xl group',

                cardVariants.size[size].card,
                cardVariants.orientation[orientation],
                orientation === 'horizontal' ? 'w-fit' : verticalWidthClasses[size],
                className
            )}
            aria-label={`Visit my ${profile} account`}
        >
            {/* Social Label */}
            {label && <span className={clsx('text-center', cardVariants.size[size].label)}>{label}</span>}

            {/* Social Icon */}
            <Icon
                icon={icon}
                size={cardVariants.size[size].icon}
                aria-hidden={true}
                className="group-hover:scale-115 transition duration-300 ease-in-out"
            />
        </a>
    );
};

export default SocialCard;
