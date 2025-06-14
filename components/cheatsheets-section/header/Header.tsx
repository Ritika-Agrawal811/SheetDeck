// components
import Categories from './Categories';
import SubCategories from './SubCategories';

const Header = () => {
    return (
        <header>
            <nav className="space-y-10">
                <Categories />
                <SubCategories />
            </nav>
        </header>
    );
};

export default Header;
