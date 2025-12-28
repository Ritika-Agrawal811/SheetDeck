'use client';

import { useTheme } from '@/hooks/useTheme';

// components
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
    const { isDark } = useTheme();

    return (
        <Link href="/">
            <Image
                src={isDark ? '/assets/logo-dark.webp' : '/assets/logo-light.webp'}
                alt="website logo for sheetdeck"
                width={200}
                height={50}
                className="origin-left scale-80 xl:scale-90 3xl:scale-100"
            />
        </Link>
    );
};

export default Logo;
