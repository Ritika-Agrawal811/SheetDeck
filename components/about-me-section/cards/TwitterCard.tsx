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
            label="Connect with me on"
            icon={FaSquareXTwitter}
            profile="X/Twitter"
            socialURL="https://twitter.com/RitikaAgrawal08"
            orientation={breakpoint === 'xs' ? 'horizontal' : 'vertical'}
            className="bg-white"
        />
    );
};

export default TwitterCard;
