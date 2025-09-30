import { useMutation } from '@tanstack/react-query';
import { trackPageview, trackEvent } from '@/lib/api/analytics';

export const useAnalytics = () => {
    // Pageview tracking
    const { mutate: recordPageView } = useMutation({
        mutationFn: trackPageview,
        retry: 6,
        retryDelay: (attemptIndex) => {
            // Render-optimized delays for free tier
            const delays = [3000, 8000, 15000, 25000, 45000, 60000];
            return delays[attemptIndex] || 60000;
        },
    });

    // Event tracking
    const { mutate: recordEvent } = useMutation({
        mutationFn: trackEvent,
        retry: 6,
        retryDelay: (attemptIndex) => {
            // Render-optimized delays for free tier
            const delays = [3000, 8000, 15000, 25000, 45000, 60000];
            return delays[attemptIndex] || 60000;
        },
    });

    return { recordPageView, recordEvent };
};
