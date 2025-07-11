'use client';

import React from 'react';
import clsx from 'clsx';

import { cheatSheets } from '@/lib/cheatsheets/loader';

// components
import Heading from './Heading';
import Logo from './Logo';
import TopicsLoop from './TopicsLoop';
import DecorativeImage from '@/components/ui/DecorativeImage';
import ExploreButton from './ExploreButton';
import BackgroundSoftGradient from '@/components/ui/BackgroundGradient';

const HeroSection = () => {
    return (
        <header
            className={clsx('h-screen', 'w-full max-w-screen-3xl mx-auto', 'flex flex-col justify-between', 'relative overflow-x-hidden')}
        >
            <Logo />
            <Heading />
            <ExploreButton />
            <TopicsLoop />

            {/* decorative components */}
            <DecorativeImage {...cheatSheets.html.concepts[0]} position="left" size="small" className="hidden md:block" priorty />
            <DecorativeImage {...cheatSheets.css.concepts[0]} position="right" size="default" className="hidden md:block" priorty />

            {/* background gradients */}
            <BackgroundSoftGradient position="left" size="tiny" className="hidden md:block" />
            <BackgroundSoftGradient position="right" size="tiny" className="hidden md:block" />
        </header>
    );
};

export default HeroSection;
