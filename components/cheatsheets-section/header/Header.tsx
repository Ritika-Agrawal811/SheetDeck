// components
import Categories from './category/Categories';
import Controls from './controls/Controls';
import SubCategories from './SubCategories';

interface HeaderProps {
    view: 'grid' | 'list';
    setViewHandler: (view: 'grid' | 'list') => void;
}

const Header: React.FC<HeaderProps> = ({ view, setViewHandler }) => {
    return (
        <header>
            <nav className="space-y-10">
                <Categories />
                <SubCategories />
                <Controls view={view} setViewHandler={setViewHandler} />
            </nav>
        </header>
    );
};

export default Header;
