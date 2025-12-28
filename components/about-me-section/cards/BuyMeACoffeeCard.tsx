'use client';

import { useScreenBreakpoint } from '@/hooks/useScreenBreakpoint';

// components
import SocialCard from './SocialCard';
import { SiBuymeacoffee } from 'react-icons/si';

const BuyMeACoffeeCard = () => {
    const { breakpoint } = useScreenBreakpoint();

    if (!breakpoint) return null;

    return (
        <SocialCard
            label="Buy me a coffee"
            icon={SiBuymeacoffee}
            profile="Buy me a coffee"
            socialURL="https://buymeacoffee.com/ritikaagrawal08"
            orientation={breakpoint === 'xs' ? 'vertical' : 'horizontal'}
            size="big"
            className="bg-yellow-400 dark:bg-yellow-500 dark:text-black"
        />
    );
};

export default BuyMeACoffeeCard;
