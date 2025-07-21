'use client';

import React from 'react';

import { useTheme } from '@/hooks/useTheme';

// components
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
    const { isDark } = useTheme();

    return (
        <Link href="/">
            <Image
                src={isDark ? '/assets/logo-dark.png' : '/assets/logo-light.png'}
                alt="website logo for sheetdeck"
                width={200}
                height={50}
                priority
                quality={70}
                className="origin-left scale-80 xl:scale-90 3xl:scale-100"
            />
        </Link>
    );
};

export default Logo;
