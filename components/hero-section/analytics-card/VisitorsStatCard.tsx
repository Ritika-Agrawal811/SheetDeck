import clsx from 'clsx';

// components
import { FaUsers } from 'react-icons/fa';
import Icon from '@/components/ui/Icon';

const VisitorsStatCard = () => {
    return (
        <article
            className={clsx(
                'w-[250px] xs:w-[275px] sm:w-[320px] md:w-[250px] 2xl:w-[400px] h-[75px] xs:h-[80px] sm:h-[85px] md:h-[75px] 2xl:h-[120px]',
                'p-2 sm:p-4 md:p-2 2xl:p-4 rounded-xl relative z-20',
                'bg-[var(--background)] shadow-xl',
                'flex items-center justify-between',
                'border-2 border-secondary'
            )}
        >
            {/* Header section */}
            <div>
                <h3 className={clsx('font-medium mb-2 2xl:mb-4', 'flex items-center gap-2')}>
                    <Icon icon={FaUsers} size="text-xl md:text-lg 2xl:text-xl" aria-hidden={true} />
                    <span className="text-sm sm:text-base md:text-sm 2xl:text-lg">Total Visitors</span>
                </h3>
                <p className={clsx('text-2xl 2xl:text-3xl font-medium ml-4', ' text-emerald-700 dark:text-emerald-500')}>1500+</p>
            </div>

            {/* Bar chart visualization */}
            <div className={clsx('border-l-1 border-b-1 border-primary', 'flex gap-1 items-end', 'pl-2 pr-3 pt-3')}>
                <div className={clsx('w-3 md:w-2 2xl:w-4 h-2 md:h-1 2xl:h-8', 'bg-emerald-400', 'rounded-t-sm')}></div>
                <div className={clsx('w-3 md:w-2 2xl:w-4 h-6 md:h-4 2xl:h-12', 'bg-emerald-600', 'rounded-t-sm')}></div>
                <div className={clsx('w-3 md:w-2 2xl:w-4 h-8 md:h-6 2xl:h-14', 'bg-emerald-700', 'rounded-t-sm')}></div>
                <div className={clsx('w-3 md:w-2 2xl:w-4 h-10 md:h-8 2xl:h-18', 'bg-emerald-800', 'rounded-t-sm')}></div>
                <div className={clsx('w-3 md:w-2 2xl:w-4 h-2 md:h-1 2xl:h-8', 'bg-emerald-500', 'rounded-t-sm')}></div>
            </div>
        </article>
    );
};

export default VisitorsStatCard;
