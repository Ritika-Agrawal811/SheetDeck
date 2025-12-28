import clsx from 'clsx';

import type { Cheatsheet } from '@/types/cheatsheets';
import { TAGS_INFO } from '@/lib/cheatsheets/constants';
import { useAnalytics } from '@/hooks/useAnalytics';

// components
import Badge from '@/components/ui/Badge';
import { IoMdDownload, IoMdEye } from 'react-icons/io';
import Icon from '@/components/ui/Icon';

type RowProps = {
    viewDetails: () => void;
} & Cheatsheet;

const Row: React.FC<RowProps> = ({ id, title, tag, image, viewDetails }) => {
    const { recordEvent } = useAnalytics();

    const downloadFileName = image.split('/').pop();

    /**
     * Handles mouse click to open the cheat sheet modal and makes an event api call for 'click'
     */
    const onClickHandler = () => {
        viewDetails();

        recordEvent({
            route: window.location.pathname,
            cheatsheetSlug: id,
            eventType: 'click',
        });
    };

    /**
     * Sends an event api call for 'download'
     * @param event - mouse event
     */
    const onDownloadHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.stopPropagation();

        recordEvent({
            route: window.location.pathname,
            cheatsheetSlug: id,
            eventType: 'download',
        });
    };

    return (
        <tr className="border-b border-gray-200 dark:border-gray-600 sm:border-none">
            {/* Cheat sheet Title */}
            <td
                className={clsx(
                    'px-4 py-5 lg:p-4 4xl:px-6 font-medium',
                    'cursor-pointer hover:text-purple-800 dark:hover:text-purple-300',
                    'text-base 4xl:text-lg'
                )}
                onClick={onClickHandler}
            >
                {title}

                {/* Topic Badge for mobiles and tablets only */}
                <Badge size="tiny" color={TAGS_INFO[tag].color} shape="pill" className="mt-2 sm:hidden">
                    {TAGS_INFO[tag].title}
                </Badge>
            </td>

            {/* Topic Badge */}
            <td className={clsx('px-4 py-5 sm:p-4 4xl:px-6', 'hidden sm:table-cell')}>
                <Badge size="small" color={TAGS_INFO[tag].color} shape="pill" className="4xl:text-base">
                    {TAGS_INFO[tag].title}
                </Badge>
            </td>

            {/* Actions Column */}
            <td className={clsx('px-4 py-5 sm:p-4 4xl:px-6', 'flex items-center justify-start', 'gap-3 sm:gap-4 4xl:gap-5')}>
                {/* Download Button */}
                <button
                    className={clsx(
                        'bg-white dark:bg-neutral-900 text-purple-800 dark:text-purple-300',
                        'border border-purple-800 dark:border-purple-300',
                        'rounded-md cursor-pointer',
                        'group transition-colors duration-150 hover:bg-purple-800 hover:text-white',
                        '4xl:text-lg',
                        'focus:outline-none focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-blue-400'
                    )}
                >
                    <a
                        href={image}
                        download={downloadFileName}
                        onClick={onDownloadHandler}
                        className={clsx('flex gap-2 items-center', 'p-2 xl:p-2.5 shadow')}
                        tabIndex={-1}
                    >
                        <span className="hidden lg:inline">Download</span>
                        <Icon icon={IoMdDownload} aria-hidden={true} size="text-xl xs:text-[22px] lg:text-xl 3xl:text-2xl" />
                    </a>
                </button>

                {/* View Cheat sheet Details Button */}
                <button
                    className={clsx(
                        'p-2 xl:p-2.5 shadow',
                        'text-emerald-700 dark:text-emerald-500 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
                        'rounded-md cursor-pointer group transition duration-300',
                        'hover:bg-emerald-50 dark:hover:bg-gray-700 hover:border-transparent',
                        'flex gap-2 items-center',
                        'focus:outline-none focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-blue-400'
                    )}
                    onClick={onClickHandler}
                >
                    <span className="sr-only">View details for cheat sheet: {title}</span>
                    <Icon
                        icon={IoMdEye}
                        size="text-xl xs:text-[22px] lg:text-xl 3xl:text-2xl"
                        className="group-hover:scale-115 transition duration-300"
                        aria-hidden={true}
                    />
                </button>
            </td>
        </tr>
    );
};

export default Row;
