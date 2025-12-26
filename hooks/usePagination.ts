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

    /**
     * Gets the paginated data for the current page.
     */
    const paginatedData = useMemo(() => {
        return data.slice(start, end);
    }, [data, currentPage, pageSize]);

    /**
     *  Sets the current page to the next page.
     */
    const goToNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
        scrollToPageTop();
    };

    /**
     *  Sets the current page to the prev page.
     */
    const goToPrevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
        scrollToPageTop();
    };

    /**
     *  Sets the current page to the specified page.
     * @param page - page number to set
     *
     * clamps the page number to stay within valid bounds (between 1 and totalPages).
     */
    const setPage = (page: number) => {
        setCurrentPage(Math.min(Math.max(1, page), totalPages));
        scrollToPageTop();
    };

    /**
     * Resets the current page to the first page.
     */
    const resetCurrentPage = () => {
        setCurrentPage(1);
    };

    /**
     * Set the goToPageTop flag to trigger scrolling to top of the page.
     */
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
