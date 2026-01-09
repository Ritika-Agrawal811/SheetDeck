import clsx from 'clsx';

// components
import Heading from './Heading';
import StripesBars from '@/components/ui/StripesBars';
import ExploreButton from './ExploreButton';
import BackgroundGradient from '@/components/ui/BackgroundGradient';
import CheatsheetsStat from './CheatsheetsStat';
import AnalyticsCard from './analytics-card/AnalyticsCard';

const HeroSection = () => {
    return (
        <header className={clsx('w-full max-w-screen-3xl mx-auto', 'flex flex-col', 'relative pt-10 pb-18')}>
            <Heading />

            <div className={clsx('flex', 'px-20 h-[400px]', 'border-b border-secondary')}>
                <AnalyticsCard />
                <ExploreButton />
                <CheatsheetsStat />
            </div>

            {/* Background Gradient */}
            <BackgroundGradient position="center" size="default" className="block lg:hidden" />

            {/* Stripes Bars */}
            <StripesBars orientation="vertical" position="left" className="hidden lg:block" />
            <StripesBars orientation="vertical" position="right" className="hidden lg:block" />
        </header>
    );
};

export default HeroSection;
