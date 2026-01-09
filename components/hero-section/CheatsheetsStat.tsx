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
        <div className={clsx('w-1/2 relative overflow-hidden', 'flex items-center justify-center')}>
            {/* Background radial gradient */}
            <BackgroundGradient />

            {/* Cheat sheet Analytics Card */}
            <article className={clsx('w-[300px] h-[200px]', 'p-4 rounded-xl relative z-20', 'bg-[var(--background)] shadow-xl')}>
                <h3 className={clsx('font-medium mb-4', 'flex items-center gap-2')}>
                    <Icon icon={IoIosImages} size="text-xl" aria-hidden={true} />
                    <span>Total Cheat Sheets</span>
                </h3>
                <p className={clsx('text-5xl font-medium ml-4', ' text-emerald-700 dark:text-emerald-500')}>72</p>

                {/* Category Icons */}
                <div className="flex justify-end gap-2.5 mt-6">
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
                    'absolute w-[150%] h-[120%] z-10',
                    'left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2',
                    'grayscale-50 dark:grayscale-100 opacity-50 dark:opacity-10 rotate-15',
                    'pointer-events-none select-none'
                )}
            />
        </div>
    );
};

export default CheatsheetsStat;
