import React from 'react';

import type { IconType } from 'react-icons';

interface IconProps {
    icon: IconType;
    className?: string;
    size?: number | string;
    color?: string;
}

const Icon = ({ icon: Icon, className, size = 20, color }: IconProps) => {
    return <Icon className={className} size={size} color={color} />;
};

export default Icon;
