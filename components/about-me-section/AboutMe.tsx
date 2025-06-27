'use client';

import React from 'react';
import clsx from 'clsx';

// components
import Badge from '@/components/ui/Badge';
import IntroCard from './cards/IntroCard';
import BackgroundSoftGradient from '@/components/ui/BackgroundGradient';
import GitHubCard from './cards/GitHubCard';
import BlogCards from './cards/BlogCards';
import BuyMeACoffeeCard from './cards/BuyMeACoffeeCard';
import CodePenCard from './cards/CodePenCard';
import TwitterCard from './cards/TwitterCard';
import GumroadCard from './cards/GumroadCard';

const AboutMe = () => {
    return (
        <section className="pt-28 pb-16">
            <div className={clsx('flex flex-col items-center gap-16')}>
                <Badge size="default" color="#6d11af" shape="pill" className="shadow-xl shadow-purple-100">
                    About Me
                </Badge>

                <div className={clsx('flex flex-col md:flex-row', 'gap-4 2xl:gap-6 relative')}>
                    <BackgroundSoftGradient />

                    {/* left container */}
                    <div className="space-y-4 2xl:space-y-6">
                        {/* upper row */}
                        <div className={clsx('flex flex-col-reverse sm:flex-row', 'gap-4 2xl:gap-6 items-center sm:items-end')}>
                            <GitHubCard />

                            <div>
                                <IntroCard />
                                <BlogCards />
                            </div>
                        </div>

                        {/* lower row */}
                        <div className={clsx('flex flex-col md:flex-row', 'gap-4 2xl:gap-6 items-center md:items-start justify-end')}>
                            <div className={clsx('flex md:flex-col', 'gap-4 2xl:gap-6 md:items-end')}>
                                <BuyMeACoffeeCard />
                                <CodePenCard />
                            </div>

                            <div className={clsx('flex flex-col sm:flex-row', 'gap-4', 'items-center sm:items-start')}>
                                <TwitterCard />
                                <div className="md:hidden">
                                    <GumroadCard />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right container */}
                    <div className="hidden md:flex items-center">
                        <GumroadCard />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
