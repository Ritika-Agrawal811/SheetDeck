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
        <header className={clsx('h-screen', 'flex flex-col justify-between', 'overflow-x-hidden')}>
            <Logo />
            <Heading />
            <section className="flex flex-col gap-20">
                <ExploreButton />
                <TopicsLoop />
            </section>

            {/* decorative components */}
            <DecorativeImage {...cheatSheets.html.concepts[0]} position="left" size="small" />
            <DecorativeImage {...cheatSheets.css.concepts[0]} position="right" size="default" />

            {/* background gradients */}
            <BackgroundSoftGradient position="left" size="tiny" />
            <BackgroundSoftGradient position="right" size="tiny" />
        </header>
    );
};

export default HeroSection;
