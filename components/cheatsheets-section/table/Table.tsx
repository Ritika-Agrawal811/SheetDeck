'use client';

import { useState } from 'react';

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
    const { paginatedData } = usePagination({ data: cheatsheets });

    const [modal, setModal] = useState<CheatsheetModalDetails>({ open: false, details: null });

    return (
        <>
            <CheatsheetModal {...modal} onClose={() => setModal((prev) => ({ ...prev, open: false }))} />
            <table className="w-full table-fixed">
                <thead className="bg-gray-100 text-left">
                    <tr>
                        <th className="p-4 w-1/2">Title</th>
                        <th className="p-4 text-left">Category</th>
                        <th className="p-4 text-left">Action</th>
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
