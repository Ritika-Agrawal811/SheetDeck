'use client';

import { useSearchParams } from 'next/navigation';
import type { Tags, Categories } from '@/types/cheatsheets';

export const useQueryParams = () => {
    const searchParams = useSearchParams();

    const tab = (searchParams.get('tab') || '') as Tags | '';
    const subtab = (searchParams.get('subtab') || '') as Categories | '';
    const id = searchParams.get('id') || '';

    const clearQueryParams = () => {
        if (typeof window !== 'undefined') {
            const newUrl = `${window.location.origin}${window.location.pathname}`;
            window.history.replaceState({}, '', newUrl);
        }
    };

    return {
        tab,
        subtab,
        id,
        clearQueryParams,
    };
};
