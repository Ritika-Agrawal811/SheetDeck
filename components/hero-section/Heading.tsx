import React from 'react';
import clsx from 'clsx';

const Heading = () => {
    return (
        <section className={clsx('border-2', 'flex items-center justify-center')}>
            <h1 className={clsx('text-5xl leading-16')}>
                Code <span className={clsx('font-bold')}>faster</span>. <br />
                Learn <span className={clsx('font-bold')}>smarter</span>.<br />
                Concise <span className={clsx('font-bold underline underline-offset-6')}>cheat sheets</span> <br /> for instant code
                reference.
            </h1>
        </section>
    );
};

export default Heading;
