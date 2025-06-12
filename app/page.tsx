import AboutMe from '../components/about-me-section/AboutMe';
import CheatsheetsSection from '../components/cheatsheets-section/CheatsheetsSection';
import HeroSection from '../components/hero-section/HeroSection';
import Support from '../components/support-section/Support';

export default function Home() {
    return (
        <>
            <HeroSection />
            <CheatsheetsSection />
            <Support />
            <AboutMe />
        </>
    );
}
