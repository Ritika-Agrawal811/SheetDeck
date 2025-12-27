// components
import { Suspense } from 'react';
import Pageview from '@/components/analytics/Pageview';
import AboutMe from '../components/about-me-section/AboutMe';
import CheatsheetsSection from '../components/cheatsheets-section/CheatsheetsSection';
import HeroSection from '../components/hero-section/HeroSection';
import Support from '../components/support-section/Support';
import CircularLoader from '@/components/ui/CircularLoader';

export default function Home() {
    return (
        <>
            <Pageview />
            <HeroSection />
            <main>
                <Suspense
                    fallback={
                        <div className="min-h-screen flex items-center justify-center">
                            <CircularLoader title="cheat sheets" />
                        </div>
                    }
                >
                    <CheatsheetsSection />
                </Suspense>
                <Support />
                <AboutMe />
            </main>
        </>
    );
}
