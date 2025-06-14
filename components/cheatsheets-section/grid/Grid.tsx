'use client';

import clsx from 'clsx';

import { useCategory } from '../../../hooks/useCategory';

// components
import Card from './Card';

const Grid = () => {
    const { cheatsheets } = useCategory();

    return (
        <section className={clsx('columns-4 gap-16')}>
            {cheatsheets.map((data) => {
                return <Card key={data.id} {...data} />;
            })}
        </section>
    );
};

export default Grid;
