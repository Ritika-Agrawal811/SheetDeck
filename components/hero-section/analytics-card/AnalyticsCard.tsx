import clsx from 'clsx';
import VisitorsStatCard from './VisitorsStatCard';
import DownloadsStatCard from './DownloadsStatCard';

const AnalyticsCard = () => {
    return (
        <div className={clsx('w-1/2 relative overflow-y-hidden', 'flex flex-col items-center')}>
            <div className={clsx('mr-20', '-rotate-10')}>
                <VisitorsStatCard />
            </div>

            <div className={clsx('ml-20', 'absolute -bottom-14', 'rotate-10')}>
                <DownloadsStatCard />
            </div>
        </div>
    );
};

export default AnalyticsCard;
