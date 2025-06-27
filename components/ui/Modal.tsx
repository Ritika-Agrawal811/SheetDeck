import React from 'react';
import clsx from 'clsx';

// components
import { IoClose } from 'react-icons/io5';
import Icon from './Icon';

interface ModalProps {
    children: React.ReactNode;
    open: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, open, onClose }) => {
    return (
        <div className={clsx('fixed w-screen', 'backdrop-blur-xs bg-black/90', 'z-50 top-0 left-0', open ? 'block' : 'hidden')}>
            <span
                className={clsx(
                    'text-white',
                    'absolute right-1 top-2 sm:right-3 sm:top-3 xl:right-4 xl:top-4 2xl:right-5 2xl:top-5',
                    'cursor-pointer',
                    'p-2 rounded-full',
                    'hover:bg-black transition duration-75'
                )}
                onClick={onClose}
            >
                <Icon icon={IoClose} size="text-xl 2xl:text-2xl 3xl:text-3xl" />
            </span>
            <section>{children}</section>
        </div>
    );
};

export default Modal;
