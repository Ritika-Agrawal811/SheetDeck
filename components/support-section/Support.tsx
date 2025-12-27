import clsx from 'clsx';
import { platypi } from '@/app/font';

// components
import Image from 'next/image';
import VisitRepositoryButton from './VisitRepositoryButton';

const Support = () => {
    return (
        <section className={clsx('py-20 bg-primary', 'relative')}>
            <div className={clsx('flex flex-col gap-4 items-center', 'relative z-20')}>
                {/* Title */}
                <h2 className="text-3xl sm:text-4xl 2xl:text-5xl 3xl:text-6xl">
                    Show your{' '}
                    <span className={clsx('font-medium text-purple-800 dark:text-purple-400', `${platypi.variable} font-platypi`)}>
                        support.
                    </span>
                </h2>

                {/* Subtitle */}
                <p className={clsx('sm:text-lg 2xl:text-xl 3xl:text-2xl', 'flex flex-col sm:flex-row items-center gap-1')}>
                    <span className="font-medium">
                        Found these cheat sheets
                        <span className={clsx('text-emerald-600 dark:text-emerald-400 font-medium')}>helpful</span>?
                    </span>
                    <span className="flex gap-1 items-center">
                        A <img alt="star gif" src="/assets/star.gif" width={50} height={50} className="w-10 h-10 3xl:w-12 3xl:h-12" /> on
                        GitHub goes a long way!
                    </span>
                </p>

                {/* Call to action button */}
                <VisitRepositoryButton />
            </div>

            {/* Background Image */}
            <div
                className={clsx(
                    'absolute lg:left-[40%] lg:-translate-x-[40%] 4xl:left-[45%] 4xl:-translate-x-[45%] bottom-0',
                    'z-10',
                    'h-3/5 sm:h-1/2',
                    'w-full sm:w-3/4 lg:w-2/5 4xl:w-1/4',
                    'scale-x-[-1] sm:scale-x-[1]'
                )}
            >
                <Image
                    alt="background road image"
                    src="/assets/road.svg"
                    width={500}
                    height={200}
                    quality={50}
                    className="h-full w-full object-cover opacity-70"
                />
            </div>
        </section>
    );
};

export default Support;
