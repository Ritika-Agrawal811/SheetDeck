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

    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * pageSize;
        return data.slice(start, start + pageSize);
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

    return {
        currentPage,
        startIndex: (currentPage - 1) * pageSize + 1,
        endIndex: (currentPage - 1) * pageSize + pageSize,
        totalPages,
        paginatedData,
        goToNextPage,
        goToPrevPage,
        setPage,
    };
}
