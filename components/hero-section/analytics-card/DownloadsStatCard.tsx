import clsx from 'clsx';

// components
import { FaUsers } from 'react-icons/fa';
import Icon from '@/components/ui/Icon';
import { IoMdDownload } from 'react-icons/io';
import { TbHandClick } from 'react-icons/tb';

const DownloadsStatCard = () => {
    return (
        <article
            className={clsx(
                'w-[275px] h-[275px]',
                'p-4 rounded-xl relative z-20',
                'bg-[var(--background)] shadow-xl',
                'border-2 border-secondary'
            )}
        >
            {/* Header Section */}
            <h3 className={clsx('font-medium mb-4', 'flex items-center gap-2')}>
                <Icon icon={FaUsers} size="text-xl" aria-hidden={true} />
                <span>Total Downloads</span>
            </h3>
            <p className={clsx('text-3xl font-medium ml-4', ' text-emerald-700 dark:text-emerald-500')}>1200+</p>

            {/* Download click visualization */}
            <div
                className={clsx(
                    'border border-gray-100 dark:border-none',
                    'p-4 rounded-lg',
                    'w-3/4 h-1/2',
                    'absolute bottom-8 left-1/2 transform -translate-x-1/2',
                    'shadow-lg dark:shadow-md dark:bg-neutral-800 dark:shadow-neutral-800'
                )}
            >
                <div className="flex items-center justify-between">
                    <div className={clsx('rounded-full w-10 h-5', 'bg-gray-100 dark:bg-gray-700')}></div>

                    <span className={clsx('p-2 shadow relative', 'inline-block rounded-full', 'bg-emerald-50 dark:bg-gray-700')}>
                        {/* Download Icon */}
                        <Icon
                            icon={IoMdDownload}
                            aria-hidden={true}
                            size="text-xl md:text-2xl lg:text-xl 3xl:text-2xl"
                            className={clsx('group-hover/icon:scale-120 transition duration-300', 'text-emerald-700 dark:text-emerald-400')}
                        />

                        {/* Hand Click Icon */}
                        <span className={clsx('absolute', 'text-neutral-900 dark:text-neutral-300')}>
                            <Icon icon={TbHandClick} aria-hidden={true} size="text-xl md:text-2xl lg:text-xl 3xl:text-3xl" />
                        </span>
                    </span>
                </div>

                <div className={clsx('bg-gray-50 dark:bg-neutral-700', 'h-4/5 mt-4 rounded-lg')}></div>
            </div>
        </article>
    );
};

export default DownloadsStatCard;
