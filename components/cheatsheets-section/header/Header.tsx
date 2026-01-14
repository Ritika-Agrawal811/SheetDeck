// components
import Categories from './category/Categories';
import SubCategoriesMobile from './sub-category/SubCategoriesMobile';
import SubCategories from './sub-category/SubCategories';

const Header = () => {
    return (
        <header>
            <nav className="space-y-10 w-full md:w-11/12 2xl:w-[85%] 3xl:w-4/5 max-w-screen-3xl mx-auto">
                <Categories />
                <SubCategories />
                <SubCategoriesMobile />
            </nav>
        </header>
    );
};

export default Header;
