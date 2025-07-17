'use client';

import React from 'react';
import clsx from 'clsx';

// components
import IntroCard from './cards/IntroCard';
import BackgroundSoftGradient from '@/components/ui/BackgroundGradient';
import GitHubCard from './cards/GitHubCard';
import BlogCards from './cards/BlogCards';
import BuyMeACoffeeCard from './cards/BuyMeACoffeeCard';
import CodePenCard from './cards/CodePenCard';
import TwitterCard from './cards/TwitterCard';
import GumroadCard from './cards/GumroadCard';
import SectionHeading from '@/components/ui/SectionHeading';

const AboutMe = () => {
    return (
        <section className="my-20 3xl:my-28">
            <div className={clsx('flex flex-col items-center gap-16')}>
                <SectionHeading content="About Me" />

                <div className={clsx('flex flex-col sm:flex-row', 'gap-4 3xl:gap-6 relative')}>
                    <BackgroundSoftGradient />

                    {/* left container */}
                    <div className="space-y-4 3xl:space-y-6">
                        {/* upper row */}
                        <div className={clsx('flex flex-col-reverse sm:flex-row', 'gap-4 3xl:gap-6 items-center sm:items-end')}>
                            <GitHubCard />

                            <div>
                                <IntroCard />
                                <BlogCards />
                            </div>
                        </div>

                        {/* lower row */}
                        <div className={clsx('flex flex-row', 'gap-4 3xl:gap-6 items-start sm:justify-end')}>
                            <div className={clsx('flex flex-col', 'gap-4 3xl:gap-6 items-end')}>
                                <div className="sm:hidden">
                                    <GumroadCard />
                                </div>
                                <BuyMeACoffeeCard />
                                <div className="hidden sm:block">
                                    <CodePenCard />
                                </div>
                            </div>

                            <div className={clsx('flex flex-col-reverse', 'gap-4', 'items-start')}>
                                <TwitterCard />
                                <div className="block sm:hidden">
                                    <CodePenCard />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right container */}
                    <div className="hidden sm:flex items-center">
                        <GumroadCard />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
