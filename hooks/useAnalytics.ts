import { useMutation } from '@tanstack/react-query';
import { trackPageview } from '@/lib/api/analytics';

export const useAnalytics = () => {
    // Pageview tracking
    const { mutate: recordPageView } = useMutation({
        mutationFn: trackPageview,
    });

    return { recordPageView };
};
