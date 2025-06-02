import React from 'react';
import clsx from 'clsx';

const Heading = () => {
    return (
        <h1 className={clsx('text-5xl')}>
            <span className={clsx('block')}>Code Faster.</span>
            <span className={clsx('block')}>Learn Smarter.</span>
            <span className={clsx('block')}>Concise Cheat Sheets for Instant Code Reference.</span>
        </h1>
    );
};

export default Heading;
