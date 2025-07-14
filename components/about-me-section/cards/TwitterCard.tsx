'use client';

import React from 'react';

import { useScreenBreakpoint } from '@/hooks/useScreenBreakpoint';

// components
import SocialCard from './SocialCard';
import { FaSquareXTwitter } from 'react-icons/fa6';

const TwitterCard = () => {
    const { breakpoint } = useScreenBreakpoint();

    if (!breakpoint) return null;
    return (
        <SocialCard
            label={breakpoint === 'xs' ? 'Connect' : 'Connect with me on'}
            icon={FaSquareXTwitter}
            profile="X/Twitter"
            socialURL="https://twitter.com/RitikaAgrawal08"
            orientation={breakpoint === 'xs' ? 'horizontal' : 'vertical'}
            size={breakpoint === 'xs' ? 'small' : 'default'}
            className="bg-white dark:bg-transparent"
        />
    );
};

export default TwitterCard;
