import React from 'react';
import clsx from 'clsx';

// components
import Heading from './Heading';

const HeroSection = () => {
    return (
        <header className={clsx('border-2 h-screen')}>
            <Heading />
        </header>
    );
};

export default HeroSection;
