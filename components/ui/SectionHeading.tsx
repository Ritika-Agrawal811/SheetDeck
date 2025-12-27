import clsx from 'clsx';
import { platypi } from '@/app/font';

interface SectionHeadingProps {
    content: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ content }) => {
    return (
        <h2
            className={clsx(
                'text-purple-800 dark:text-purple-300',
                'text-lg sm:text-xl 3xl:text-[22px] font-medium',
                'flex justify-center items-center gap-1 md:gap-1.5',
                `${platypi.variable} font-platypi`
            )}
        >
            {/* circles on left */}
            {[4, 6, 8].map((size, index) => {
                return (
                    <span
                        key={`circle-${index}`}
                        aria-hidden={true}
                        className={clsx('inline-block rounded-full', 'bg-emerald-700 dark:bg-emerald-400')}
                        style={{ width: `${size}px`, height: `${size}px` }}
                    ></span>
                );
            })}

            {/* content */}
            <span className="mx-1 md:mx-2 -mt-1.5 whitespace-nowrap">{content}</span>

            {/* circles on right */}
            {[8, 6, 4].map((size, index) => {
                return (
                    <span
                        key={`circle-${index}`}
                        aria-hidden={true}
                        className={clsx('inline-block rounded-full', 'bg-emerald-700 dark:bg-emerald-400')}
                        style={{ width: `${size}px`, height: `${size}px` }}
                    ></span>
                );
            })}
        </h2>
    );
};

export default SectionHeading;
