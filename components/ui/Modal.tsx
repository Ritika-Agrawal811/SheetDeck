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
                    'absolute right-6 top-6',
                    'cursor-pointer',
                    'p-2 rounded-full',
                    'hover:bg-black transition duration-75'
                )}
                onClick={onClose}
            >
                <Icon icon={IoClose} size={24} />
            </span>
            <section>{children}</section>
        </div>
    );
};

export default Modal;
