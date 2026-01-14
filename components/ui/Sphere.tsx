import clsx from 'clsx';
import type { IconType } from 'react-icons';

// components
import Icon from '@/components/ui/Icon';

interface SphereProps {
    color: string;
    icon?: IconType | null;
}

const Sphere = ({ color, icon }: SphereProps) => {
    return (
        <div
            className={clsx(
                'w-9.5 h-9.5 2xl:w-12 2xl:h-12',
                'rounded-full',
                'bg-white dark:bg-gray-900',
                'shadow-lg shadow-gray-400 dark:shadow-gray-800 relative'
            )}
            style={{ background: `radial-gradient(circle at 25% 25%, #fff, ${color}, #121212 90%)` }}
        >
            {/* Icon */}
            {icon && (
                <Icon
                    icon={icon}
                    size="text-[21px] 2xl:text-[27px]"
                    className={clsx('absolute top-2 left-2', 'rotate-10', 'text-white dark:text-black')}
                    aria-hidden={true}
                />
            )}
        </div>
    );
};

export default Sphere;
