import { useMutation } from '@tanstack/react-query';
import { trackPageview, trackEvent } from '@/lib/api/analytics';

export const useAnalytics = () => {
    /**
     * Mutation to send a pageview api call
     */
    const { mutate: recordPageView } = useMutation({
        mutationFn: trackPageview,
        retry: 6,
        retryDelay: (attemptIndex) => {
            // Render-optimized delays for free tier
            const delays = [3000, 8000, 15000, 25000, 45000, 60000];
            return delays[attemptIndex] || 60000;
        },
    });

    /**
     * Mutation to send an event api call - click, download etc
     */
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
