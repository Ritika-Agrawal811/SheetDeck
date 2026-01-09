import clsx from 'clsx';

// components
import Logo from '@/components/hero-section/navbar/Logo';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            role="contentinfo"
            className={clsx(
                'py-3 mt-16',
                'border-t border-b border-secondary',
                'relative',
                'before:absolute before:content-[""] before:w-px before:h-[150%] before:bg-[var(--color-secondary)] before:left-10 before:-top-10',
                'after:absolute after:content-[""] after:w-px after:h-[150%] after:bg-[var(--color-secondary)] after:right-10 after:-top-10'
            )}
        >
            <div
                className={clsx(
                    'w-full md:w-11/12 2xl:w-[85%] 3xl:w-4/5 max-w-screen-3xl mx-auto',
                    'flex flex-col sm:flex-row items-start sm:items-center justify-between',
                    'bg-primary md:rounded-xl',
                    'p-6 xl:p-4 3xl:p-6',
                    'text-sm lg:text-base 4xl:text-lg',
                    'gap-4 sm:gap-0'
                )}
            >
                <Logo />
                <p className="mt-1">
                    {/* copy right year and author */}
                    &copy; {currentYear} <span className="text-purple-800 dark:text-purple-300">Ritika Agrawal</span>. All rights reserved{' '}
                    <br className="md:hidden" />|{' '}
                    <Link href="/terms-and-conditions" className="text-purple-800 dark:text-purple-300 hover:underline underline-offset-4">
                        Terms and Conditions.
                    </Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
