import React, { useState } from 'react';
import clsx from 'clsx';

import { useCategory } from '@/hooks/useCategory';
import { formatLabels } from '@/utils/formatLabels';

// components
import { IoChevronDownOutline } from 'react-icons/io5';
import Icon from '@/components/ui/Icon';
import Modal from '@/components/ui/Modal';
import List from './List';
import CloseBtn from '@/components/ui/CloseBtn';

const SubCategoriesMobile = () => {
    const { activeCategory } = useCategory();

    const [open, setOpen] = useState(false);

    return (
        <div className="sm:hidden mx-4" aria-label="Select a sub category for a cheat sheet">
            <button
                aria-haspopup="dialog"
                aria-expanded={open}
                id="sub-cateogy-mobile-dropdown"
                className={clsx(
                    'flex flex-col items-start gap-1',
                    'bg-purple-50 dark:bg-neutral-800',
                    'w-full p-3',
                    'rounded-xl border border-purple-200 dark:border-gray-600'
                )}
                onClick={() => setOpen(true)}
            >
                <span className="font-medium text-lg">Category</span>
                <div className={clsx('flex items-center justify-between w-full')}>
                    <span className="capitalize" aria-label={`selected category is ${formatLabels(activeCategory.category)}`}>
                        {formatLabels(activeCategory.category)}
                    </span>
                    <Icon icon={IoChevronDownOutline} size="text-xl xl:text-2xl" className="pointer-events-none" aria-hidden={true} />
                </div>
            </button>

            <Modal backdrop="light" open={open} onClose={() => setOpen(false)}>
                <section className="flex items-center justify-center h-full" onClick={() => setOpen(false)}>
                    <div className={clsx('bg-white dark:bg-zinc-800', 'rounded-xl shadow', 'p-4 w-11/12')}>
                        <header className="flex items-center justify-between">
                            <h3 className="text-lg font-medium">Select a category</h3>
                            <CloseBtn onClose={() => setOpen(false)} />
                        </header>
                        <hr className="h-px border-purple-200 dark:border-gray-600 my-4" />
                        <List className={clsx('flex flex-wrap justify-center gap-3')} size="tiny" showImage={false} />
                    </div>
                </section>
            </Modal>
        </div>
    );
};

export default SubCategoriesMobile;
