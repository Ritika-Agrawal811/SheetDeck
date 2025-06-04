import clsx from 'clsx';

// components
import Categories from './Categories';
import SubCategories from './SubCategories';

const Header = () => {
    return (
        <header className={clsx('w-4/5 mx-auto', 'flex flex-col gap-10')}>
            <Categories />
            <SubCategories />
        </header>
    );
};

export default Header;
