import api from '@/lib/axios/instance';
import type { PageView } from '@/types/analytics';

/**
 * Record a page view
 * @param data - PageView data
 * @return void
 */
export async function trackPageview(payload: PageView) {
    const { data } = await api.post('/analytics/pageview', payload);
    return data;
}
