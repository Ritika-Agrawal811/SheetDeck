'use client';

import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';

import type { Cheatsheet } from '@/types/cheatsheets';
import { usePagination } from '@/hooks/usePagination';

// components
import Row from './Row';
import CheatsheetModal from '../modal/CheatsheetModal';

type CheatsheetModalDetails = {
    open: boolean;
    details: Cheatsheet | null;
};

interface TableProps {
    cheatsheets: Cheatsheet[];
}

const Table: React.FC<TableProps> = ({ cheatsheets }) => {
    const { goToPageTop, paginatedData } = usePagination({ data: cheatsheets });

    const [modal, setModal] = useState<CheatsheetModalDetails>({ open: false, details: null });
    const tableRef = useRef<HTMLTableElement>(null);
    const hasMounted = useRef(false);

    useEffect(() => {
        if (!hasMounted.current) {
            hasMounted.current = true;
            return;
        }

        const timeout = setTimeout(() => {
            if (tableRef.current) {
                tableRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 200);
        return () => clearTimeout(timeout);
    }, [goToPageTop]);

    return (
        <>
            <CheatsheetModal {...modal} onClose={() => setModal((prev) => ({ ...prev, open: false }))} />
            <table className="w-full table-fixed scroll-m-36" ref={tableRef}>
                <thead className={clsx('bg-gray-100 text-left', '2xl:text-lg 3xl:text-xl')}>
                    <tr>
                        <th className={clsx('p-4 3xl:p-6', 'w-[65%] sm:w-1/2')}>Title</th>
                        <th className={clsx('p-4 3xl:p-6', 'text-left', 'hidden sm:table-cell')}>Category</th>
                        <th className={clsx('p-4 3xl:p-6', 'text-left')}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedData.map((data) => {
                        return <Row key={data.id} {...data} onClick={() => setModal({ open: true, details: data })} />;
                    })}
                </tbody>
            </table>
        </>
    );
};

export default Table;
