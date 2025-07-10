'use client';

import React from 'react';

import { useScreenBreakpoint } from '@/hooks/useScreenBreakpoint';

// components
import SocialCard from './SocialCard';
import { FaGithub } from 'react-icons/fa6';

const GitHubCard = () => {
    const { breakpoint } = useScreenBreakpoint();

    if (!breakpoint) return null;

    return (
        <SocialCard
            label="View my Projects"
            icon={FaGithub}
            profile="GitHub"
            socialURL="https://github.com/Ritika-Agrawal811"
            size="small"
            orientation={breakpoint === 'xs' ? 'horizontal' : 'vertical'}
            className="bg-gray-800 text-white"
        />
    );
};

export default GitHubCard;
