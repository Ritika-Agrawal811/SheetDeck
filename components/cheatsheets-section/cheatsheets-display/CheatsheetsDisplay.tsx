'use client';

import { useCategory } from '@/hooks/useCategory';

// components
import Grid from '../grid/Grid';
import Table from '../table/Table';
import Pagination from '../../ui/Pagination';

interface CheatsheetsDisplayProps {
    view: 'grid' | 'list';
}

const CheatsheetsDisplay: React.FC<CheatsheetsDisplayProps> = ({ view }) => {
    const { cheatsheets } = useCategory();

    return (
        <section className="space-y-16 ">
            {view === 'grid' && <Grid cheatsheets={cheatsheets} />}
            {view === 'list' && <Table cheatsheets={cheatsheets} />}
            <Pagination data={cheatsheets} />
        </section>
    );
};

export default CheatsheetsDisplay;
