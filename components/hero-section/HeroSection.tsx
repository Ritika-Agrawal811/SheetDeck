'use client';

import React from 'react';
import clsx from 'clsx';

import { cheatSheets } from '@/lib/cheatsheets/loader';

// components
import Heading from './Heading';
import Navbar from './Navbar';
import TopicsLoop from './TopicsLoop';
import DecorativeImage from '@/components/ui/DecorativeImage';
import ExploreButton from './ExploreButton';
import BackgroundSoftGradient from '@/components/ui/BackgroundGradient';

const HeroSection = () => {
    return (
        <header
            className={clsx(
                'xl:h-dvh',
                'w-full max-w-screen-3xl mx-auto',
                'flex flex-col gap-16 xl:gap-0 xl:justify-between',
                'relative overflow-x-hidden'
            )}
        >
            <Navbar />
            <Heading />
            <ExploreButton />
            <TopicsLoop />

            {/* decorative components */}
            <DecorativeImage {...cheatSheets.html.concepts[0]} position="left" size="small" className="hidden lg:block" priorty />
            <DecorativeImage {...cheatSheets.css.concepts[0]} position="right" size="default" className="hidden lg:block" priorty />

            {/* background gradients */}
            <BackgroundSoftGradient position="left" size="tiny" className="hidden lg:block" />
            <BackgroundSoftGradient position="right" size="tiny" className="hidden lg:block" />
            <BackgroundSoftGradient position="center" size="default" className="block lg:hidden" />
        </header>
    );
};

export default HeroSection;
