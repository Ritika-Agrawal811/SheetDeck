import { useMemo } from 'react';
import { useAtom } from 'jotai';

import { currentPageAtom } from '@/atoms/pagination';

type UsePaginationProps<T> = {
    data: T[];
    pageSize?: number;
};

export function usePagination<T>({ data, pageSize = 10 }: UsePaginationProps<T>) {
    const [currentPage, setCurrentPage] = useAtom(currentPageAtom);

    const totalPages = Math.ceil(data.length / pageSize);
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;

    const paginatedData = useMemo(() => {
        return data.slice(start, end);
    }, [data, currentPage, pageSize]);

    const goToNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const goToPrevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const setPage = (page: number) => {
        setCurrentPage(Math.min(Math.max(1, page), totalPages));
    };

    const resetCurrentPage = () => {
        setCurrentPage(1);
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
    };
}
