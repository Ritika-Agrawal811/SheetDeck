'use client';
import React from 'react';
import clsx from 'clsx';

import List from './List';

const SubCategories = () => {
    return (
        <List
            className={clsx(
                'bg-primary dark:bg-neutral-800 p-4 xl:p-6 rounded-xl',
                'hidden sm:flex items-center flex-wrap justify-center',
                'gap-x-3 lg:gap-x-4 3xl:gap-x-8',
                'gap-y-3 lg:gap-y-4 3xl:gap-y-6'
            )}
        />
    );
};

export default SubCategories;
