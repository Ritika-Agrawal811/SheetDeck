'use client';

import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import type { Cheatsheet } from '@/types/cheatsheets';
import { useCategory } from '@/hooks/useCategory';
import { usePagination } from '@/hooks/usePagination';

// components
import Card from './Card';
import CheatsheetModal from './CheatsheetModal';

type CheatsheetModalDetails = {
    open: boolean;
    details: Cheatsheet | null;
};

const Grid = () => {
    const { cheatsheets, activeCategory } = useCategory();
    const { currentPage, paginatedData } = usePagination({ data: cheatsheets });

    const [modal, setModal] = useState<CheatsheetModalDetails>({ open: false, details: null });
    const gridRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (gridRef.current) {
            gridRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [currentPage, activeCategory.category, activeCategory.topic]);

    return (
        <>
            <CheatsheetModal {...modal} onClose={() => setModal((prev) => ({ ...prev, open: false }))} />
            <section className={clsx('grid grid-cols-4 gap-x-16 items-center', 'scroll-m-36')} ref={gridRef}>
                {paginatedData.map((data) => {
                    return <Card key={data.id} {...data} onClick={() => setModal({ open: true, details: data })} />;
                })}
            </section>
        </>
    );
};

export default Grid;
