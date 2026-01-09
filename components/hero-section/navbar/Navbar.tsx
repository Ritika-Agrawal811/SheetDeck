import clsx from 'clsx';

// components
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    return (
        <nav className={clsx('pt-6 pb-4', 'flex items-center justify-between', 'border-b border-secondary')}>
            <div className={clsx('w-11/12 4xl:w-4/5 max-w-screen-2xl mx-auto', 'flex items-center justify-between')}>
                <Logo />
                <ThemeToggle />
            </div>
        </nav>
    );
};

export default Navbar;
