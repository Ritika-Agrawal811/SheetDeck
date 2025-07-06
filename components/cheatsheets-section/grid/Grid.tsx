'use client';

import { useRef, useState } from 'react';
import clsx from 'clsx';

import type { Cheatsheet } from '@/types/cheatsheets';
import { usePagination } from '@/hooks/usePagination';

// components
import Card from './Card';
import CheatsheetModal from '../modal/CheatsheetModal';

type CheatsheetModalDetails = {
    open: boolean;
    details: Cheatsheet | null;
};

interface GridProps {
    cheatsheets: Cheatsheet[];
}

const Grid: React.FC<GridProps> = ({ cheatsheets }) => {
    const { paginatedData } = usePagination({ data: cheatsheets });

    const [modal, setModal] = useState<CheatsheetModalDetails>({ open: false, details: null });
    const gridRef = useRef<HTMLElement>(null);
    // const hasMounted = useRef(false);

    // useEffect(() => {
    //     if (hasMounted.current && gridRef.current) {
    //         gridRef.current.scrollIntoView({ behavior: 'smooth' });
    //     }

    //     hasMounted.current = true;
    // }, [currentPage]);

    return (
        <>
            <CheatsheetModal {...modal} onClose={() => setModal((prev) => ({ ...prev, open: false }))} />
            <section
                className={clsx(
                    'grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5',
                    'gap-10 sm:gap-x-6 sm:gap-y-12 md:gap-16 items-center',
                    'scroll-m-36'
                )}
                ref={gridRef}
            >
                {paginatedData.map((data) => {
                    return <Card key={data.id} {...data} viewCardDetails={() => setModal({ open: true, details: data })} />;
                })}
            </section>
        </>
    );
};

export default Grid;
