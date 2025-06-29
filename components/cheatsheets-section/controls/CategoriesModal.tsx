import React, { useState } from 'react';
import clsx from 'clsx';

import type { Tags } from '@/types/cheatsheets';
import { TAGS_INFO } from '@/lib/cheatsheets/constants';
import { useCategory } from '@/hooks/useCategory';
import { usePagination } from '@/hooks/usePagination';
import { useSearch } from '@/hooks/useSearch';

// components
import { IoGlobeOutline } from 'react-icons/io5';
import Icon from '@/components/ui/Icon';
import Modal from '@/components/ui/Modal';
import List from '../header/sub-category/List';

const CategoriesModal = () => {
    const { topics, activeCategory, cheatsheets, setActiveTopicHandler } = useCategory();
    const { resetCurrentPage } = usePagination({ data: cheatsheets });
    const { reset } = useSearch();

    const [open, setOpen] = useState(false);

    const setCategoryHandler = (event: React.MouseEvent<HTMLElement>, tag: Tags) => {
        event.stopPropagation();
        setActiveTopicHandler(tag);
        resetCurrentPage();
        reset();
    };

    return (
        <div role="listbox" className="lg:hidden">
            <button
                aria-haspopup="listbox"
                aria-expanded="false"
                aria-label="Select a category for a cheat sheet"
                id="cateogy-dropdown"
                className={clsx(
                    'flex items-start gap-1',
                    'p-2',
                    'rounded-full border border-purple-800',
                    'text-purple-800 font-medium text-sm'
                )}
                onClick={() => setOpen(true)}
            >
                <Icon icon={IoGlobeOutline} size="text-xl" className="pointer-events-none" />
                Category
            </button>

            <Modal backdrop="light" open={open} onClose={() => setOpen(false)}>
                <section className="flex items-center justify-center h-full" onClick={() => setOpen(false)}>
                    <div className={clsx('bg-white', 'rounded-xl shadow', 'p-4 w-11/12')}>
                        <h3 className="text-lg font-medium">Select a category</h3>

                        <ul className={clsx('flex', 'mt-2 mb-6 border-b border-purple-200')}>
                            {topics.map((tag) => {
                                const color = TAGS_INFO[tag].color;
                                const isSelected = activeCategory.topic === tag;
                                return (
                                    <li
                                        key={tag}
                                        className={clsx('p-4 grow text-center', isSelected ? 'font-bold' : 'font-medium')}
                                        style={{
                                            borderBottom: isSelected ? `3px solid ${color}` : undefined,
                                            color: isSelected ? color : undefined,
                                        }}
                                        onClick={(event) => setCategoryHandler(event, tag)}
                                    >
                                        {tag}
                                    </li>
                                );
                            })}
                        </ul>

                        <List className={clsx('flex flex-wrap justify-center gap-4 mb-4')} size="small" showImage={true} />
                    </div>
                </section>
            </Modal>
        </div>
    );
};

export default CategoriesModal;
