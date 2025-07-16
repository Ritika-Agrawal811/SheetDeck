'use client';

import React from 'react';
import clsx from 'clsx';

import { useTheme } from '@/hooks/useTheme';

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
    const { isDark } = useTheme();
    return (
        <section className="my-20 xl:my-28">
            <div className={clsx('flex flex-col items-center gap-16')}>
                <Badge
                    size="default"
                    color={isDark ? '#d8b4fe' : '#6d11af'}
                    shape="pill"
                    className="shadow-xl shadow-purple-50 dark:shadow-lg dark:shadow-gray-800"
                >
                    About Me
                </Badge>

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
