import React from 'react';
import clsx from 'clsx';

// components
import { IoSearch } from 'react-icons/io5';
import Icon from '@/components/ui/Icon';

const SearchBox = () => {
    return (
        <form
            role="search"
            aria-label="search for cheat sheets"
            className={clsx('border border-gray-200 shadow rounded-md', 'flex', 'relative w-[350px] h-12')}
        >
            <label htmlFor="cheatsheets-search" className="sr-only">
                search for cheat sheets:
            </label>
            <input
                type="search"
                id="cheatsheets-search"
                name="cheatsheet"
                placeholder="Search for a cheat sheet"
                className={clsx('h-full grow', 'px-4')}
            />
            <button
                type="submit"
                className={clsx(
                    'flex items-center justify-center',
                    'px-2 cursor-pointer',
                    'bg-emerald-700 text-white rounded-r-md',
                    'border border-emerald-700'
                )}
            >
                <Icon icon={IoSearch} size={24} />
            </button>
        </form>
    );
};

export default SearchBox;
