'use client';

import { useEffect } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';

const Pageview = () => {
    const { recordPageView } = useAnalytics();

    /**
     * Make a pageview api call with route and referrer info
     */
    useEffect(() => {
        recordPageView({
            route: window.location.pathname,
            referrer: document.referrer,
        });
    }, [recordPageView]);

    return null;
};

export default Pageview;
