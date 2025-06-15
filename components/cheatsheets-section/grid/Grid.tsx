'use client';

import clsx from 'clsx';

import { useCategory } from '@/hooks/useCategory';

// components
import Card from './Card';

const Grid = () => {
    const { cheatsheets } = useCategory();

    return (
        <section className={clsx('grid grid-cols-4 gap-x-16 items-center')}>
            {cheatsheets.map((data) => {
                return <Card key={data.id} {...data} />;
            })}
        </section>
    );
};

export default Grid;
