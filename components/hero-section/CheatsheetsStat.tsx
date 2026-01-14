'use client';

import clsx from 'clsx';

import { TAGS_INFO } from '@/lib/cheatsheets/constants';
import { useCategory } from '@/hooks/useCategory';

// components
import { IoIosImages } from 'react-icons/io';
import Icon from '@/components/ui/Icon';
import Image from 'next/image';
import BackgroundGradient from '../ui/BackgroundGradient';
import Sphere from '../ui/Sphere';

const CheatsheetsStat = () => {
    const { topics } = useCategory();
    return (
        <div
            className={clsx(
                'h-[250px] 2xl:h-full relative overflow-hidden',
                'flex items-center justify-center',
                'border-b border-secondary lg:border-0'
            )}
        >
            {/* Background radial gradient */}
            <BackgroundGradient />

            {/* Cheat sheet Analytics Card */}
            <article
                className={clsx(
                    'w-[250px] sm:w-[300px] md:w-[265px] 2xl:w-[300px] h-[150px] sm:h-[160px] 2xl:h-[200px]',
                    'p-2 sm:p-4 rounded-xl relative z-20',
                    'bg-[var(--background)] shadow-xl'
                )}
            >
                <h3 className={clsx('font-medium mb-4', 'flex items-center gap-2')}>
                    <Icon icon={IoIosImages} size="text-xl" aria-hidden={true} />
                    <span className="text-base 2xl:text-lg">Total Cheat Sheets</span>
                </h3>
                <p className={clsx('text-4xl 2xl:text-5xl font-medium ml-4', ' text-emerald-700 dark:text-emerald-500')}>72</p>

                {/* Category Icons */}
                <div className="flex justify-end gap-2 2xl:gap-2.5 mt-2 2xl:mt-6">
                    {topics.map((tag) => {
                        if (tag === 'all') return null;
                        return <Sphere key={`sphere-${tag}`} color={TAGS_INFO[tag].color} icon={TAGS_INFO[tag].icon} />;
                    })}
                </div>
            </article>

            {/* Background Image */}
            <Image
                src="/assets/cheatsheet-background.png"
                alt="Background"
                width={900}
                height={800}
                className={clsx(
                    'w-full xs:w-4/5 md:h-1/2 xl:w-[150%]',
                    'h-[130%] sm:h-[140%] md:h-[160%] xl:h-[120%]',
                    'absolute z-10',
                    'left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2',
                    'grayscale-50 dark:grayscale-100 opacity-50 dark:opacity-10 rotate-15',
                    'pointer-events-none select-none'
                )}
            />
        </div>
    );
};

export default CheatsheetsStat;
