import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

import type { Cheatsheet } from '@/types/cheatsheets';
// import { TAGS_INFO } from '@/lib/cheatsheets/constants';

// components
import Modal from '@/components/ui/Modal';
// import Badge from '@/components/ui/Badge';
// import { IoMdDownload } from 'react-icons/io';
// import Icon from '@/components/ui/Icon';
import Image from 'next/image';
import CircularLoader from '@/components/ui/CircularLoader';

interface CheatsheetModalProps {
    open: boolean;
    details: Cheatsheet | null;
    onClose: () => void;
}

const CheatsheetModal: React.FC<CheatsheetModalProps> = ({ open, details, onClose }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 300);
    }, []);

    return (
        <>
            {details && (
                <Modal open={open} onClose={onClose}>
                    <section className={clsx('w-[85%] xl:w-4/5 mx-auto', 'h-screen flex flex-col')} onClick={onClose}>
                        {/* <header className={clsx('pt-8 pb-6 sm:pb-0 lg:pt-6', 'flex items-center justify-between')}>
                            <div className="space-y-2 lg:space-y-3 3xl:space-y-4">
                                <h3 className="text-white text-lg sm:text-xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl">{details.title}</h3>
                                <Badge size="small" color={TAGS_INFO[details.tag].color} shape="pill" className="3xl:text-base">
                                    {TAGS_INFO[details.tag].title}
                                </Badge>
                            </div>

                            <button
                                className={clsx(
                                    'bg-purple-800 lg:text-lg 2xl:text-xl 3xl:text-2xl text-white',
                                    'rounded-md cursor-pointer border-2 border-transparent',
                                    'transition duration-150 hover:bg-purple-900',
                                    'focus:outline-none focus:border-blue-500'
                                )}
                                aria-label="download the cheat sheet"
                            >
                                <a
                                    href={details.image}
                                    download={details.image.split('/').pop()}
                                    onClick={(event) => event.stopPropagation()}
                                    className={clsx('flex gap-2 lg:gap-4 items-center', 'px-2 sm:px-3 2xl:px-4 3xl:px-5', 'py-2 3xl:py-3')}
                                >
                                    Download
                                    <Icon icon={IoMdDownload} size="text-xl 2xl:text-2xl 3xl:text-3xl" aria-hidden={true} />
                                </a>
                            </button>
                        </header> */}
                        <figure className={clsx('relative grow overflow-hidden', isLoading && 'flex items-center justify-center')}>
                            {isLoading ? (
                                <CircularLoader title="cheat sheet image" />
                            ) : (
                                <Image src={details.image} alt={details.title} fill quality={55} className="object-contain" />
                            )}
                        </figure>
                    </section>
                </Modal>
            )}
        </>
    );
};

export default CheatsheetModal;
