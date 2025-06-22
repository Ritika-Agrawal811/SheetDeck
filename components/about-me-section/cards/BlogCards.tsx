import React from 'react';

// components
import SocialCard from './SocialCard';
import { FaDev, FaMedium } from 'react-icons/fa6';

const BlogCards = () => {
    return (
        <div className="flex gap-4 2xl:gap-6 mt-4">
            <SocialCard
                label="Read my Articles"
                icon={FaDev}
                profile="Dev.to"
                socialURL="https://dev.to/ritikaagrawal08"
                size="small"
                orientation="horizontal"
                className="grow bg-white"
            />
            <SocialCard
                icon={FaMedium}
                profile="Medium"
                socialURL="https://medium.com/@RitikaAgrawal08"
                orientation="horizontal"
                className="bg-gray-800 text-white"
            />
        </div>
    );
};

export default BlogCards;
