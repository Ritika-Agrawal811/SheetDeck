'use client';

import { useRef } from 'react';

// components
import AboutMe from '../components/about-me-section/AboutMe';
import CheatsheetsSection from '../components/cheatsheets-section/CheatsheetsSection';
import Footer from '../components/footer/Footer';
import HeroSection from '../components/hero-section/HeroSection';
import Support from '../components/support-section/Support';

export default function Home() {
    const cheatsheetsRef = useRef<HTMLDivElement>(null);

    const scrollToCheatsheetsSectionHandler = () => {
        cheatsheetsRef?.current?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <>
            <HeroSection onExploreBtnClick={scrollToCheatsheetsSectionHandler} />
            <main>
                <div ref={cheatsheetsRef} className="scroll-m-4">
                    <CheatsheetsSection />
                </div>
                <Support />
                <AboutMe />
            </main>
            <Footer />
        </>
    );
}
