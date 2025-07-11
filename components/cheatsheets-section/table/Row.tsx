import React from 'react';
import clsx from 'clsx';

import type { Cheatsheet } from '@/types/cheatsheets';
import { TAGS_INFO } from '@/lib/cheatsheets/constants';

// components
import Badge from '@/components/ui/Badge';
import { IoMdDownload, IoMdEye } from 'react-icons/io';
import Icon from '@/components/ui/Icon';

type RowProps = {
    onClick: () => void;
} & Cheatsheet;

const Row: React.FC<RowProps> = ({ title, tag, image, onClick }) => {
    const downloadFileName = image.split('/').pop();

    return (
        <tr className="border-b border-gray-200 sm:border-none">
            <td
                className={clsx('px-4 py-5 lg:p-4 3xl:px-6 font-medium', 'cursor-pointer hover:text-purple-800', 'text-base 3xl:text-lg')}
                onClick={onClick}
            >
                {title}
                <Badge size="tiny" color={TAGS_INFO[tag].color} shape="rounded" className="mt-2 sm:hidden">
                    {tag}
                </Badge>
            </td>
            <td className={clsx('px-4 py-5 sm:p-43xl:px-6', 'hidden sm:table-cell')}>
                <Badge size="small" color={TAGS_INFO[tag].color} shape="pill" className="3xl:text-base">
                    {tag}
                </Badge>
            </td>
            <td className={clsx('px-4 py-5 sm:p-4 3xl:px-6', 'flex items-center justify-start', 'gap-3 sm:gap-4 3xl:gap-5')}>
                <button
                    className={clsx(
                        'bg-white text-purple-800',
                        'border border-purple-800',
                        'rounded-md cursor-pointer',
                        'group transition-colors duration-150 hover:bg-purple-800 hover:text-white',
                        '3xl:text-lg',
                        'focus:outline-none focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-blue-400'
                    )}
                >
                    <a
                        href={image}
                        download={downloadFileName}
                        onClick={(event) => event.stopPropagation()}
                        className={clsx('flex gap-2 items-center', 'p-1.5 lg:p-2 shadow')}
                        tabIndex={-1}
                    >
                        <span className="hidden lg:inline">Download</span>
                        <Icon icon={IoMdDownload} aria-hidden={true} size="text-xl xs:text-[22px] lg:text-2xl 3xl:text-[26px]" />
                    </a>
                </button>
                <button
                    className={clsx(
                        'p-1.5 lg:p-2 shadow',
                        'text-emerald-700 bg-white border border-gray-200',
                        'rounded-md cursor-pointer group transition duration-300',
                        'hover:bg-purple-50 hover:border-transparent',
                        'flex gap-2 items-center',
                        'focus:outline-none focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-blue-400'
                    )}
                    onClick={onClick}
                >
                    <span className="sr-only">View details for cheat sheet: {title}</span>
                    <Icon
                        icon={IoMdEye}
                        size="text-xl xs:text-[22px] lg:text-2xl 3xl:text-[26px]"
                        className="group-hover:scale-115 transition duration-300"
                        aria-hidden={true}
                    />
                </button>
            </td>
        </tr>
    );
};

export default Row;
