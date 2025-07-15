'use client';

import React from 'react';

import { useTheme } from '@/hooks/useTheme';

// components
import Image from 'next/image';

const Logo = () => {
    const { isDark } = useTheme();

    return (
        <div className="">
            <Image
                src={isDark ? '/assets/logo-dark.png' : '/assets/logo-light.png'}
                alt="website logo for sheetdeck"
                width={200}
                height={50}
            />
        </div>
    );
};

export default Logo;
