'use client';

import { useState } from 'react';

// components
import Grid from './grid/Grid';
import Header from './header/Header';
import Badge from '@/components/ui/Badge';
import Pagination from './pagination/Pagination';

const CheatsheetsSection = () => {
    const [view, setView] = useState<'grid' | 'list'>('grid');

    const setViewHandler = (view: 'grid' | 'list') => {
        setView(view);
    };

    return (
        <section className="w-4/5 mx-auto my-32 space-y-16">
            <Badge size="default" color="#6d11af" shape="pill" className="shadow-xl shadow-purple-100 mx-auto">
                Cheat Sheets
            </Badge>
            <Header view={view} setViewHandler={setViewHandler} />
            <Grid />
            <Pagination />
        </section>
    );
};

export default CheatsheetsSection;
