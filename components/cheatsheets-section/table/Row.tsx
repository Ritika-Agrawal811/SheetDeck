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
        <tr className="">
            <td className={clsx('p-4 font-medium', 'cursor-pointer hover:text-purple-800')} onClick={onClick}>
                {title}
            </td>
            <td className="p-4">
                <Badge size="small" color={TAGS_INFO[tag].color} shape="pill">
                    {tag}
                </Badge>
            </td>
            <td className="p-4 flex gap-4 items-center justify-start">
                <button
                    className={clsx(
                        'bg-white text-purple-800',
                        'border border-purple-800',
                        'rounded-md cursor-pointer',
                        'group transition-colors duration-150 hover:bg-purple-800 hover:text-white'
                    )}
                >
                    <a
                        href={image}
                        download={downloadFileName}
                        tabIndex={0}
                        onClick={(event) => event.stopPropagation()}
                        className={clsx('flex gap-2 items-center', 'p-2 shadow')}
                    >
                        Download
                        <Icon icon={IoMdDownload} size={24} />
                    </a>
                </button>
                <button
                    className={clsx(
                        'p-2 shadow',
                        'text-emerald-700 bg-white border border-gray-200',
                        'rounded-md cursor-pointer group transition duration-300',
                        'hover:bg-purple-50 hover:border-transparent',
                        'flex gap-2 items-center'
                    )}
                    onClick={onClick}
                >
                    <Icon icon={IoMdEye} size={24} className="group-hover:scale-115 transition duration-300" />
                </button>
            </td>
        </tr>
    );
};

export default Row;
