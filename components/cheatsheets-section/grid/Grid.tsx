'use client';

import { useEffect, useRef } from 'react';
import clsx from 'clsx';

import { useCategory } from '@/hooks/useCategory';
import { usePagination } from '@/hooks/usePagination';

// components
import Card from './Card';

const Grid = () => {
    const { cheatsheets } = useCategory();
    const { currentPage, paginatedData } = usePagination({ data: cheatsheets });

    const gridRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (gridRef.current) {
            gridRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [currentPage]);

    return (
        <section className={clsx('grid grid-cols-4 gap-x-16 items-center', 'scroll-m-36')} ref={gridRef}>
            {paginatedData.map((data) => {
                return <Card key={data.id} {...data} />;
            })}
        </section>
    );
};

export default Grid;
