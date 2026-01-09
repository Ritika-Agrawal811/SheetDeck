import clsx from 'clsx';

// components
import SectionHeading from '@/components/ui/SectionHeading';
import BackgroundGradient from '@/components/ui/BackgroundGradient';
import IntroCard from './cards/IntroCard';
import GitHubCard from './cards/GitHubCard';
import BlogCards from './cards/BlogCards';
import BuyMeACoffeeCard from './cards/BuyMeACoffeeCard';
import CodePenCard from './cards/CodePenCard';
import TwitterCard from './cards/TwitterCard';
import GumroadCard from './cards/GumroadCard';
import Waves from '@/components/ui/Waves';

const AboutMe = () => {
    return (
        <section className="pt-24 3xl:pt-32 pb-12 relative">
            <Waves classes={clsx('absolute top-0 left-0 w-full', 'scale-y-[-1]', ' h-18 md:h-22 xl:h-24 3xl:h-44')} />
            <div className={clsx('flex flex-col items-center gap-16')}>
                <SectionHeading content="About Me" />

                <div className={clsx('flex flex-col sm:flex-row', 'gap-4 3xl:gap-6 relative')}>
                    <BackgroundGradient />

                    {/* Left Container */}
                    <div className="space-y-4 3xl:space-y-6">
                        {/* Upper Row */}
                        <div className={clsx('flex flex-col-reverse sm:flex-row', 'gap-4 3xl:gap-6 items-center sm:items-end')}>
                            <GitHubCard />

                            <div>
                                <IntroCard />
                                <BlogCards />
                            </div>
                        </div>

                        {/* Lower Row */}
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

                    {/* Right Container */}
                    <div className="hidden sm:flex items-center">
                        <GumroadCard />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
