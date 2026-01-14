import clsx from 'clsx';

// components
import Heading from './Heading';
import StripesBars from '@/components/ui/StripesBars';
import ExploreButton from './ExploreButton';
import CheatsheetsStat from './CheatsheetsStat';
import AnalyticsCard from './analytics-card/AnalyticsCard';

const HeroSection = () => {
    return (
        <header className={clsx('w-full max-w-screen-3xl mx-auto', 'flex flex-col', 'relative pt-10 xl:pb-18')}>
            <Heading />

            {/* Analytics Cards and Explore Button */}
            <div
                className={clsx(
                    'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_2fr]',
                    '2xl:px-20 2xl:h-[400px]',
                    'lg:border-b border-secondary'
                )}
            >
                <AnalyticsCard />

                <div
                    className={clsx(
                        'md:row-start-3 lg:row-auto',
                        'md:col-span-2 lg:col-auto',
                        'py-6 place-content-center',
                        'border-b border-secondary md:border-0'
                    )}
                >
                    <ExploreButton />
                </div>
                <CheatsheetsStat />
            </div>

            {/* Stripes Bars */}
            <StripesBars orientation="vertical" position="left" className="hidden md:block" />
            <StripesBars orientation="vertical" position="right" className="hidden md:block" />
        </header>
    );
};

export default HeroSection;
