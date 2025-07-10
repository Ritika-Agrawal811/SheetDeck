'use client';

import React from 'react';

import { useScreenBreakpoint } from '@/hooks/useScreenBreakpoint';

// components
import SocialCard from './SocialCard';
import { SiGumroad } from 'react-icons/si';

const GumroadCard = () => {
    const { breakpoint } = useScreenBreakpoint();

    if (!breakpoint) return null;

    return (
        <SocialCard
            label="Explore my Ebooks"
            icon={SiGumroad}
            profile="Gumroad"
            socialURL="https://ritikaagrawal08.gumroad.com/"
            orientation={breakpoint === 'xs' || breakpoint === 'sm' ? 'horizontal' : 'vertical'}
            className="bg-[#ff90e8]"
            size="big"
        />
    );
};

export default GumroadCard;
