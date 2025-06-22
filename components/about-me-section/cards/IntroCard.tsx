import React from 'react';
import clsx from 'clsx';

// components
import Image from 'next/image';
import ArrowSVG from '../ArrowSVG';

const IntroCard = () => {
    return (
        <>
            {/* Intro card */}
            <article className="flex gap-2 2xl:gap-4">
                <figure>
                    <Image
                        alt="creator's picture"
                        src="https://pbs.twimg.com/profile_images/1536045260253515776/BNiSS_c1_400x400.jpg"
                        width={400}
                        height={400}
                        className={clsx('rounded-full', 'w-20 md:w-24 2xl:w-28', 'h-20 md:h-24 2xl:h-28')}
                    />
                </figure>
                <ArrowSVG color="#6e11b0" className={clsx('scale-x-[-1] rotate-60', 'w-20 h-20 2xl:w-24 2xl:h-24')} />
            </article>

            <div className="text-right sm:-mt-4">
                <p className={clsx('text-xl md:text-2xl 2xl:text-3xl', 'pr-4 2xl:pr-2')}>
                    Hey, I&apos;m <span className="font-castoro font-bold">Ritika</span>
                </p>
                <p className={clsx('text-lg md:text-xl 2xl:text-2xl ', 'font-medium text-emerald-700')}>Full-stack Developer</p>
            </div>
        </>
    );
};

export default IntroCard;
