import React from 'react';
import clsx from 'clsx';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={clsx('w-4/5 mx-auto', 'p-6 mt-16 mb-6', 'bg-purple-100 text-right rounded-xl')}>
            <p>&copy; {currentYear} Ritika Agrawal | All rights reserved.</p>
        </footer>
    );
};

export default Footer;
