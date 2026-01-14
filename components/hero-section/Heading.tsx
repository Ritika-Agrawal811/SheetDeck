import clsx from 'clsx';

// components
import { IoPaperPlane } from 'react-icons/io5';
import Icon from '@/components/ui/Icon';

const Heading = () => {
    return (
        /**
         * Hero Section Heading - "Code Faster. Learn Smarter. Concise Cheat Sheets for instant code reference."
         */
        <div className="transition duration-300">
            <p
                className={clsx(
                    'text-xl sm:text-2xl 4xl:text-3xl',
                    'mb-2 pl-6 sm:pl-8 md:pl-10 xl:pl-20 py-1 sm:py-1.5',
                    'font-medium text-purple-800 dark:text-purple-300'
                )}
            >
                Code Faster. Learn Smarter.
            </p>
            <h1
                className={clsx(
                    'text-[28px] sm:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl',
                    'pl-6 sm:pl-8 md:pl-10 xl:pl-20 py-6 xl:pb-16',
                    'border-t border-b border-secondary',
                    'space-y-1 sm:space-y-3 2xl:space-y-6'
                )}
            >
                <span className="block">
                    Concise
                    <span className={clsx('text-emerald-700 dark:text-emerald-500', 'mx-2 sm:mx-4 font-medium xl:font-normal')}>
                        Cheat Sheets
                    </span>
                </span>
                <span className="block">
                    for
                    <span
                        className={clsx(
                            'border-2 border-dashed border-slate-500 dark:border-slate-700',
                            'mx-4 xs:mx-3 sm:mx-5',
                            'rounded-xl sm:rounded-2xl xl:rounded-3xl',
                            'py-1 sm:py-3 px-3 sm:px-4 xl:px-6',
                            'inline-flex gap-2 sm:gap-4 items-center'
                        )}
                    >
                        instant
                        <Icon
                            icon={IoPaperPlane}
                            size="text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl"
                            className="text-purple-800 dark:text-purple-300"
                            aria-hidden={true}
                        />
                    </span>
                    <br className="xs:hidden" />
                    code reference.
                </span>
            </h1>
        </div>
    );
};

export default Heading;
