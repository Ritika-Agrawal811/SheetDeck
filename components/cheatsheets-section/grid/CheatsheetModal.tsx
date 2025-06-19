import React from 'react';
import clsx from 'clsx';

import type { Cheatsheet } from '@/types/cheatsheets';
import { TAGS_INFO } from '@/lib/cheatsheets/constants';

// components
import Modal from '@/components/ui/Modal';
import Badge from '@/components/ui/Badge';
import { IoMdDownload } from 'react-icons/io';
import Icon from '@/components/ui/Icon';
import Image from 'next/image';

interface CheatsheetModalProps {
    open: boolean;
    details: Cheatsheet | null;
    onClose: () => void;
}

const CheatsheetModal: React.FC<CheatsheetModalProps> = ({ open, details, onClose }) => {
    return (
        <>
            {details && (
                <Modal open={open} onClose={onClose}>
                    <section className={clsx('w-4/5 mx-auto', 'h-screen flex flex-col')}>
                        <header className={clsx('py-6', 'flex items-center justify-between')}>
                            <div className="space-y-3">
                                <h3 className="text-white text-3xl">{details.title}</h3>
                                <Badge size="small" color={TAGS_INFO[details.tag].color} shape="pill" className="">
                                    {details.tag}
                                </Badge>
                            </div>

                            <button
                                className={clsx(
                                    'bg-purple-800 text-xl text-white',
                                    'rounded-md cursor-pointer',
                                    'transition duration-150 hover:bg-purple-900'
                                )}
                            >
                                <a
                                    href={details.image}
                                    download={details.image.split('/').pop()}
                                    className={clsx('flex gap-4 items-center', 'px-4 py-2')}
                                >
                                    Download
                                    <Icon icon={IoMdDownload} size={24} />
                                </a>
                            </button>
                        </header>
                        <figure className="relative grow overflow-hidden">
                            <Image src={details.image} alt={details.title} fill quality={100} className="object-contain" />
                        </figure>
                    </section>
                </Modal>
            )}
        </>
    );
};

export default CheatsheetModal;
