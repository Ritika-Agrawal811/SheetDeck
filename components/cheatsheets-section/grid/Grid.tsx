'use client';

import clsx from 'clsx';

import { useCategory } from '../../../hooks/useCategory';
import { fetchSelectedCheatsheets } from '../../../utils/fetchSelectedCheatsheets';

// components
import Card from './Card';

const Grid = () => {
    const { activeCategory } = useCategory();

    const cheatsheets = fetchSelectedCheatsheets(activeCategory);

    return (
        <section className={clsx('columns-4 gap-16', 'my-10')}>
            {cheatsheets.map((data) => {
                return <Card key={data.id} {...data} />;
            })}
        </section>
    );
};

export default Grid;
