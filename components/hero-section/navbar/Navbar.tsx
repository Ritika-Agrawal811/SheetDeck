import React from 'react';
import clsx from 'clsx';

// components
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    return (
        <nav
            className={clsx(
                'pt-6 pb-10 lg:py-8 3xl:py-12',
                'w-11/12 2xl:w-[85%] 3xl:w-4/5 max-w-screen-3xl mx-auto',
                'flex items-center justify-between'
            )}
        >
            <Logo />
            <ThemeToggle />
        </nav>
    );
};

export default Navbar;
