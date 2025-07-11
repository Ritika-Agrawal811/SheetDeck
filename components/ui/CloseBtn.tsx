import React from 'react';
import clsx from 'clsx';

// components
import { IoClose } from 'react-icons/io5';
import Icon from './Icon';

const variants = {
    theme: {
        light: 'text-white hover:bg-black',
        dark: 'bg-black/10 hover:bg-black/30',
    },
};

interface CloseBtnProps {
    theme?: keyof typeof variants.theme;
    onClose: () => void;
}

const CloseBtn: React.FC<CloseBtnProps> = ({ onClose, theme = 'dark' }) => {
    return (
        <button
            className={clsx(
                'cursor-pointer',
                'p-0.5 rounded-full border-2 border-transparent',
                'transition duration-75',
                'focus:outline-none focus-visible:border-blue-500',
                variants.theme[theme]
            )}
            onClick={onClose}
        >
            <span className="sr-only">Close modal</span>
            <Icon icon={IoClose} size="text-xl 2xl:text-2xl 3xl:text-3xl" aria-hidden={true} />
        </button>
    );
};

export default CloseBtn;
