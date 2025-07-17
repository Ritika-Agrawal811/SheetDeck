import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

import type { Cheatsheet } from '@/types/cheatsheets';
import { TAGS_INFO } from '@/lib/cheatsheets/constants';

// components
import Modal from '@/components/ui/Modal';
import Badge from '@/components/ui/Badge';
import { IoMdDownload } from 'react-icons/io';
import Icon from '@/components/ui/Icon';
import Image from 'next/image';
import CircularLoader from '@/components/ui/CircularLoader';
import CloseBtn from '@/components/ui/CloseBtn';

interface CheatsheetModalProps {
    open: boolean;
    details: Cheatsheet | null;
    onClose: () => void;
}

const CheatsheetModal: React.FC<CheatsheetModalProps> = ({ open, details, onClose }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (details) {
            setIsLoading(true);
            setTimeout(() => setIsLoading(false), 300);
        }
    }, [details]);

    return (
        <>
            {details && (
                <Modal key={details?.id} open={open} onClose={onClose}>
                    <section className={clsx('w-full', 'h-screen flex flex-col lg:flex-row-reverse')} onClick={onClose}>
                        <header
                            className={clsx('w-full lg:w-[30%]', 'border-b lg:border-l border-b-gray-800 lg:border-l-gray-800 bg-black/10')}
                        >
                            <div className="flex justify-end  p-2 md:p-4">
                                <CloseBtn onClose={onClose} theme="light" />
                            </div>

                            <div
                                className={clsx(
                                    'flex lg:flex-col items-center lg:items-start justify-between',
                                    'px-4 pb-4 md:px-6 lg:pl-4 lg:pr-0 2xl:pl-8'
                                )}
                            >
                                <div className="space-y-2 lg:space-y-3 3xl:space-y-4">
                                    <h3 className="text-white text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl 3xl:text-[28px]">
                                        {details.title}
                                    </h3>
                                    <Badge size="small" color={TAGS_INFO[details.tag].color} shape="pill" className="text-xs sm:text-sm">
                                        {TAGS_INFO[details.tag].title}
                                    </Badge>
                                </div>

                                <button
                                    className={clsx(
                                        'bg-purple-800 xl:text-lg 3xl:text-xl text-white',
                                        'rounded-md cursor-pointer border-2 border-transparent lg:mt-6',
                                        'transition duration-150 hover:bg-purple-900',
                                        'focus:outline-none focus-visible:border-blue-500'
                                    )}
                                    aria-label="download the cheat sheet"
                                >
                                    <a
                                        href={details.image}
                                        download={details.image.split('/').pop()}
                                        onClick={(event) => event.stopPropagation()}
                                        className={clsx('flex gap-3 items-center', 'px-3', 'py-2')}
                                    >
                                        <span className="hidden md:inline">Download</span>
                                        <Icon icon={IoMdDownload} size="text-xl 3xl:text-2xl" aria-hidden={true} />
                                    </a>
                                </button>
                            </div>
                        </header>
                        <div className={clsx('grow overflow-hidden', 'flex justify-center')}>
                            <figure
                                className={clsx(
                                    'relative h-full w-full lg:w-11/12 overflow-hidden',
                                    isLoading && 'flex items-center justify-center'
                                )}
                            >
                                {isLoading ? (
                                    <CircularLoader title="cheat sheet image" />
                                ) : (
                                    <Image src={details.image} alt={details.title} fill quality={55} className="object-contain" />
                                )}
                            </figure>
                        </div>
                    </section>
                </Modal>
            )}
        </>
    );
};

export default CheatsheetModal;
