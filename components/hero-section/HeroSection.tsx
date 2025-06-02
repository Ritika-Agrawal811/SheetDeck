import React from 'react';
import clsx from 'clsx';

// components
import Heading from './Heading';
import Logo from './Logo';
import TopicsLoop from './TopicsLoop';

const HeroSection = () => {
    return (
        <header className={clsx('h-screen', 'flex flex-col justify-between')}>
            <Logo />
            <Heading />
            <TopicsLoop />
        </header>
    );
};

export default HeroSection;
