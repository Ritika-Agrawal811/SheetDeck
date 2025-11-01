import api from '@/lib/axios/instance';
import type { PageView, Event } from '@/types/analytics';

/**
 * Record a page view
 * @param data - PageView data
 * @return Promise<any>
 */
export async function trackPageview(payload: PageView) {
    const { data } = await api.post('/analytics/pageview', payload);
    return data;
}

/**
 * Record a event - click, download etc
 * @param data - Event data
 * @return Promise<any>
 */
export async function trackEvent(payload: Event) {
    const { data } = await api.post('/analytics/event', {
        route: payload.route,
        cheatsheet_slug: payload.cheatsheetSlug,
        event_type: payload.eventType,
    });

    return data;
}
