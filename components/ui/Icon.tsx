import clsx from 'clsx';

import type { IconType } from 'react-icons';

interface IconProps {
    icon: IconType;
    className?: string;
    size?: string;
    color?: string;
}

const Icon = ({ icon: Icon, className, size = 'text-xl', color }: IconProps) => {
    return <Icon className={clsx(size, className)} color={color} />;
};

export default Icon;
