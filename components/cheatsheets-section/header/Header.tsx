// components
import Categories from './category/Categories';
import SubCategoriesMobile from './sub-category/SubCategoriesMobile';
import SubCategories from './sub-category/SubCategories';

const Header = () => {
    return (
        <header>
            <nav className="space-y-10">
                <Categories />
                <SubCategories />
                <SubCategoriesMobile />
            </nav>
        </header>
    );
};

export default Header;
