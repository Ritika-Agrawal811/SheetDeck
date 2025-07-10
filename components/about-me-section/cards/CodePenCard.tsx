'use client';

import React from 'react';

import { useScreenBreakpoint } from '@/hooks/useScreenBreakpoint';

// components
import SocialCard from './SocialCard';
import { FaCodepen } from 'react-icons/fa6';

const CodePenCard = () => {
    const { breakpoint } = useScreenBreakpoint();

    if (!breakpoint) return null;
    return (
        <SocialCard
            label="View my Pens"
            icon={FaCodepen}
            profile="Codepen"
            socialURL="https://codepen.io/RitikaAgrawal08"
            orientation={breakpoint === 'xs' ? 'vertical' : 'horizontal'}
            className="bg-white"
        />
    );
};

export default CodePenCard;
