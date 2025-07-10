import React from 'react';

import type { Tags } from '@/types/cheatsheets';
import { TAGS_INFO } from '@/lib/cheatsheets/constants';
import { useCategory } from '@/hooks/useCategory';
import { usePagination } from '@/hooks/usePagination';

// components
import Dropdown from '@/components/ui/Dropdown';

const TopicsDropdown = () => {
    const { topics, activeCategory, setActiveTopicHandler, cheatsheets } = useCategory();
    const { resetCurrentPage, scrollToPageTop } = usePagination({ data: cheatsheets });

    const formattedTopics = topics.map((item) => TAGS_INFO[item].title);

    const setSelectedOptionHandler = (option: string) => {
        const topic = option.toLowerCase() as Tags;
        setActiveTopicHandler(topic);
        resetCurrentPage();
        scrollToPageTop();
    };

    return (
        <>
            <Dropdown
                data={formattedTopics}
                label="topic"
                selectedOption={TAGS_INFO[activeCategory.topic].title}
                setSelectedOption={setSelectedOptionHandler}
                labelStyle={{ backgroundColor: TAGS_INFO[activeCategory.topic].color, color: '#fff' }}
                labelClassname="min-w-[100px] xl:min-w-[115px]"
            />
        </>
    );
};

export default TopicsDropdown;
