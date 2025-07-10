import { useMemo } from 'react';
import { useAtom } from 'jotai';

import { currentPageAtom, scrollToTopOfPageAtom } from '@/atoms/pagination';

interface UsePaginationProps<T> {
    data: T[];
    pageSize?: number;
}

export function usePagination<T>({ data, pageSize = 10 }: UsePaginationProps<T>) {
    const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
    const [goToPageTop, setGoToPageTop] = useAtom(scrollToTopOfPageAtom);

    const totalPages = Math.ceil(data.length / pageSize);
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;

    const paginatedData = useMemo(() => {
        return data.slice(start, end);
    }, [data, currentPage, pageSize]);

    const goToNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
        scrollToPageTop();
    };

    const goToPrevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
        scrollToPageTop();
    };

    const setPage = (page: number) => {
        setCurrentPage(Math.min(Math.max(1, page), totalPages));
        scrollToPageTop();
    };

    const resetCurrentPage = () => {
        setCurrentPage(1);
    };

    const scrollToPageTop = () => {
        setGoToPageTop((prev) => !prev);
    };

    return {
        currentPage,
        startIndex: start + 1,
        endIndex: end > data.length ? data.length : end,
        totalPages,
        paginatedData,
        goToNextPage,
        goToPrevPage,
        setPage,
        resetCurrentPage,
        goToPageTop,
        scrollToPageTop,
    };
}
