import React from 'react';
import clsx from 'clsx';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className={clsx(
                'w-full md:w-11/12 2xl:w-4/5 max-w-screen-3xl mx-auto',
                'p-6 mt-16 md:mb-6',
                'bg-purple-50 md:rounded-xl',
                'border-b border-purple-200',
                'text-sm md:text-base 3xl:text-lg text-center sm:text-right'
            )}
        >
            <p>
                &copy; {currentYear} <span className="text-emerald-700">Ritika Agrawal</span> | All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
