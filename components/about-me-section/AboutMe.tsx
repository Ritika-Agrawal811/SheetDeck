import React from 'react';
import clsx from 'clsx';

// components
import Badge from '../ui/Badge';
import Image from 'next/image';
import { FaGithub, FaDev, FaMedium, FaSquareXTwitter, FaCodepen } from 'react-icons/fa6';
import { SiGumroad, SiBuymeacoffee } from 'react-icons/si';
import SocialCard from './SocialCard';
import ArrowSVG from './ArrowSVG';
import BackgroundSoftGradient from '../ui/BackgroundGradient';

const AboutMe = () => {
    return (
        <section className="pt-28 pb-16">
            <div className={clsx('flex flex-col items-center gap-12')}>
                <Badge size="default" color="#6d11af" shape="pill" className="shadow-xl shadow-purple-100">
                    About me
                </Badge>

                <div className={clsx('flex gap-4 relative')}>
                    <BackgroundSoftGradient />

                    {/* left container */}
                    <div className="space-y-4">
                        {/* upper row */}
                        <div className="flex gap-4 items-end">
                            {/* GitHub card */}
                            <SocialCard
                                label="View my projects"
                                icon={FaGithub}
                                profile="GitHub"
                                socialURL="https://github.com/Ritika-Agrawal811"
                                size="small"
                                className="bg-white"
                            />

                            <div>
                                {/* Intro card */}
                                <article className="flex gap-2">
                                    <figure>
                                        <Image
                                            alt="creator's picture"
                                            src="https://pbs.twimg.com/profile_images/1536045260253515776/BNiSS_c1_400x400.jpg"
                                            width={400}
                                            height={400}
                                            className="rounded-full w-28 h-28"
                                        />
                                    </figure>
                                    <ArrowSVG color="#6e11b0" className=" w-24 h-24 scale-x-[-1] rotate-60" />
                                </article>
                                <div className="text-right">
                                    <p className="text-3xl pr-2">
                                        Hey, I &apos; m <span className="font-castoro text-3xl font-bold">Ritika</span>
                                    </p>
                                    <p className="text-2xl font-medium text-purple-800">Full-stack Developer</p>
                                </div>

                                {/* Blogs card */}
                                <div className="flex gap-4 mt-4">
                                    <SocialCard
                                        label="Read my articles"
                                        icon={FaDev}
                                        profile="Dev.to"
                                        socialURL="https://dev.to/ritikaagrawal08"
                                        size="small"
                                        orientation="horizontal"
                                        className="grow bg-white"
                                    />
                                    <SocialCard
                                        icon={FaMedium}
                                        profile="Medium"
                                        socialURL="https://medium.com/@RitikaAgrawal08"
                                        orientation="horizontal"
                                        className="bg-black text-white"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* lower row */}
                        <div className="flex gap-4 items-start justify-end">
                            {/* Codepen card */}
                            <div className="flex flex-col gap-4 items-end">
                                <SocialCard
                                    label="Buy me a coffee"
                                    icon={SiBuymeacoffee}
                                    profile="Buy me a coffee"
                                    socialURL="https://buymeacoffee.com/ritikaagrawal08"
                                    orientation="horizontal"
                                    size="big"
                                    className="bg-yellow-400"
                                />
                                <SocialCard
                                    label="View my pens"
                                    icon={FaCodepen}
                                    profile="Codepen"
                                    socialURL="https://codepen.io/RitikaAgrawal08"
                                    orientation="horizontal"
                                    className="bg-white"
                                />
                            </div>

                            {/* X/Twitter card */}
                            <SocialCard
                                label="Learn web dev with me"
                                icon={FaSquareXTwitter}
                                profile="X/Twitter"
                                socialURL="https://twitter.com/RitikaAgrawal08"
                                orientation="vertical"
                                className="bg-white"
                            />
                        </div>
                    </div>

                    {/* right container */}
                    <div className="flex items-center">
                        <SocialCard
                            label="View my ebooks"
                            icon={SiGumroad}
                            profile="Gumroad"
                            socialURL="https://ritikaagrawal08.gumroad.com/"
                            orientation="vertical"
                            className="bg-[#ff90e8]"
                            size="big"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
