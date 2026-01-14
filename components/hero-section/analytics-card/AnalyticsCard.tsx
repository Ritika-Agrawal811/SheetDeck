import clsx from 'clsx';
import VisitorsStatCard from './VisitorsStatCard';
import DownloadsStatCard from './DownloadsStatCard';

const AnalyticsCard = () => {
    return (
        <div
            className={clsx(
                'h-[250px] 2xl:h-full relative overflow-hidden',
                'flex flex-col items-center',
                'border-b border-secondary lg:border-0'
            )}
        >
            <div className={clsx('xs:mr-14 sm:mr-20 md:mr-16', '-rotate-8 md:-rotate-10')}>
                <VisitorsStatCard />
            </div>

            <div className={clsx('ml-8 xs:ml-22 sm:ml-28', 'absolute -bottom-16 xs:-bottom-15', 'rotate-8 sm:rotate-10')}>
                <DownloadsStatCard />
            </div>
        </div>
    );
};

export default AnalyticsCard;
