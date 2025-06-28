import React, { useState } from 'react';
import clsx from 'clsx';

import { useCategory } from '@/hooks/useCategory';
import { formatLabels } from '@/utils/formatLabels';

// components
import { IoChevronDownOutline } from 'react-icons/io5';
import Icon from '@/components/ui/Icon';
import Modal from '@/components/ui/Modal';
import List from './List';

const SubCategoriesMobile = () => {
    const { activeCategory } = useCategory();

    const [open, setOpen] = useState(false);

    return (
        <div role="listbox" className="sm:hidden mx-4">
            <button
                aria-haspopup="listbox"
                aria-expanded="false"
                aria-label="Select a sub category for a cheat sheet"
                id="sub-cateogy-mobile-dropdown"
                className={clsx('flex flex-col items-start gap-1', 'bg-purple-50', 'w-full p-3', 'rounded-xl border border-purple-200')}
                onClick={() => setOpen(true)}
            >
                <span className="font-medium text-lg">Category</span>
                <div className={clsx('flex items-center justify-between w-full')}>
                    <span className="capitalize">{formatLabels(activeCategory.category)}</span>
                    <Icon icon={IoChevronDownOutline} size="text-xl xl:text-2xl" className="pointer-events-none" />
                </div>
            </button>

            <Modal backdrop="light" open={open} onClose={() => setOpen(false)}>
                <section className="flex items-center justify-center h-full" onClick={() => setOpen(false)}>
                    <div className={clsx('bg-white', 'rounded-xl shadow', 'p-4 w-11/12')}>
                        <h3 className="text-lg font-medium">Select a category</h3>
                        <hr className="h-px border-purple-200 my-4" />
                        <List className={clsx('flex flex-wrap justify-center gap-3')} size="tiny" showImage={false} />
                    </div>
                </section>
            </Modal>
        </div>
    );
};

export default SubCategoriesMobile;
