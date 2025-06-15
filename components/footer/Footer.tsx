import React from 'react';
import clsx from 'clsx';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={clsx('w-4/5 mx-auto', 'p-6 mt-16 mb-6', 'bg-purple-50 text-right rounded-xl', 'border-b border-purple-200')}>
            <p>
                &copy; {currentYear} <span className="text-emerald-700">Ritika Agrawal</span> | All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
