import React from 'react';
import clsx from 'clsx';

import { cheatSheets } from '../../lib/cheatsheets/loader';

// components
import Card from './Card';

const Grid = () => {
    return (
        <section className={clsx('columns-4 gap-10', 'w-4/5 mx-auto my-10', 'border-2')}>
            {cheatSheets.html.concepts.map((data) => {
                return <Card key={data.id} {...data} />;
            })}
        </section>
    );
};

export default Grid;
