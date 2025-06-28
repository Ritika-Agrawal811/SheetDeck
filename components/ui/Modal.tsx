import React from 'react';
import clsx from 'clsx';

// components
import { IoClose } from 'react-icons/io5';
import Icon from './Icon';

const variants = {
    light: 'bg-black/40',
    dark: 'bg-black/90',
};

interface ModalProps {
    children: React.ReactNode;
    open: boolean;
    onClose: () => void;
    backdrop?: keyof typeof variants;
}

const Modal: React.FC<ModalProps> = ({ children, backdrop = 'dark', open, onClose }) => {
    return (
        <div className={clsx('fixed h-screen w-screen', '', 'z-50 top-0 left-0', open ? 'block' : 'hidden')}>
            <span
                className={clsx(
                    'absolute right-1 top-2 z-50',
                    'sm:right-3 sm:top-3 xl:right-4 xl:top-4 2xl:right-5 2xl:top-5',
                    'cursor-pointer text-white',
                    'p-2 rounded-full',
                    'hover:bg-black transition duration-75'
                )}
                onClick={onClose}
            >
                <Icon icon={IoClose} size="text-xl 2xl:text-2xl 3xl:text-3xl" />
            </span>
            <div className={clsx('absolute w-full h-full -z-10', variants[backdrop])} onClick={onClose}></div>
            {children}
        </div>
    );
};

export default Modal;
