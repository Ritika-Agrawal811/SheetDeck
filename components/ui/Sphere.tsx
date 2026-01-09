import clsx from 'clsx';
import type { IconType } from 'react-icons';

// components
import Icon from '@/components/ui/Icon';

const variants = {
    size: {
        small: 'w-10 h-10',
        medium: 'w-12 h-12',
        large: 'w-14 h-14',
    },
};

interface SphereProps {
    color: string;
    size?: keyof typeof variants.size;
    icon?: IconType | null;
}

const Sphere = ({ color, size = 'medium', icon }: SphereProps) => {
    return (
        <div
            className={clsx(
                variants.size[size],
                'rounded-full',
                'bg-white dark:bg-gray-900',
                'shadow-lg shadow-gray-400 dark:shadow-gray-800 relative'
            )}
            style={{ background: `radial-gradient(circle at 25% 25%, #fff, ${color}, #121212 90%)` }}
        >
            {/* category icon */}
            {icon && (
                <Icon
                    icon={icon}
                    size="text-[27px]"
                    className={clsx('absolute top-2 left-2', 'rotate-10', 'text-white dark:text-black')}
                    aria-hidden={true}
                />
            )}
        </div>
    );
};

export default Sphere;
