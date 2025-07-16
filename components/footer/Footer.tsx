import React from 'react';
import clsx from 'clsx';

// components
import Logo from '@/components/hero-section/navbar/Logo';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            role="contentinfo"
            className={clsx(
                'w-full md:w-11/12 2xl:w-4/5 max-w-screen-3xl mx-auto',
                'p-6 mt-16 md:mb-6',
                'bg-purple-100 dark:bg-neutral-800 md:rounded-xl',
                'border-b border-purple-100 dark:border-gray-600',
                'text-sm md:text-base 3xl:text-lg',
                'flex flex-col sm:flex-row items-start sm:items-center justify-between',
                'gap-4 sm:gap-0'
            )}
        >
            <Logo />
            <p className="mt-1">
                &copy; {currentYear} <span className="text-emerald-700 dark:text-emerald-500">Ritika Agrawal</span> | All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
