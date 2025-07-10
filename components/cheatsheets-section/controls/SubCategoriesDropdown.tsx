import React from 'react';

import type { Categories } from '@/types/cheatsheets';

import { useCategory } from '@/hooks/useCategory';
import { usePagination } from '@/hooks/usePagination';
import { fetchSubCategories } from '@/utils/fetchSubCategories';

// components
import Dropdown from '@/components/ui/Dropdown';

const SubCategoriesDropdown = () => {
    const { activeCategory, setActiveSubCategoryHandler, cheatsheets } = useCategory();
    const { resetCurrentPage, scrollToPageTop } = usePagination({ data: cheatsheets });

    const subCategories = fetchSubCategories(activeCategory.topic).map((item) => item.title);

    const setSelectedOptionHandler = (option: string) => {
        const category = option as Categories;
        setActiveSubCategoryHandler(category);
        resetCurrentPage();
        scrollToPageTop();
    };

    return (
        <>
            <Dropdown
                data={subCategories}
                label="category"
                labelClassname="min-w-[145px] xl:min-w-[160px]"
                selectedOption={activeCategory.category}
                setSelectedOption={setSelectedOptionHandler}
            />
        </>
    );
};

export default SubCategoriesDropdown;
