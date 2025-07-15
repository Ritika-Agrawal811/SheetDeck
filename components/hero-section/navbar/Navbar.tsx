import React from 'react';
import clsx from 'clsx';

// components
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    return (
        <nav className={clsx('pt-6 lg:pt-8 2xl:pt-12', 'w-11/12 md:w-4/5 mx-auto', 'flex items-center justify-between')}>
            <Logo />
            <ThemeToggle />
        </nav>
    );
};

export default Navbar;
