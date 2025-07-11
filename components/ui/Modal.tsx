import React, { useRef, useEffect } from 'react';
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
    const modalRef = useRef<HTMLDivElement>(null);
    const previouslyFocusedElement = useRef<HTMLElement | null>(null);

    useEffect(() => {
        // modal is not open, then return
        if (!open) return;

        // set the ref for previous focus element
        previouslyFocusedElement.current = document.activeElement as HTMLElement;

        const modal = modalRef.current;
        const focusableElements = modal?.querySelectorAll<HTMLElement>('button:not([disabled])');

        const first = focusableElements?.[0];
        const last = focusableElements?.[focusableElements.length - 1];

        const keyDownHandler = (event: KeyboardEvent) => {
            if (event.key === 'Tab' && focusableElements && first && last) {
                if (event.shiftKey) {
                    if (document.activeElement === first) {
                        event.preventDefault();
                        last.focus();
                    }
                } else {
                    if (document.activeElement === last) {
                        event.preventDefault();
                        first.focus();
                    }
                }
            }

            if (event.key === 'Escape') {
                event.preventDefault();
                onClose();
            }
        };

        // handle initial focus
        first?.focus();
        document.addEventListener('keydown', keyDownHandler);

        // clean up function
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
            previouslyFocusedElement.current?.focus();
        };
    }, [open, onClose]);

    return (
        <div
            role="dialog"
            aria-modal="true"
            ref={modalRef}
            className={clsx('fixed h-screen w-screen', '', 'z-50 top-0 left-0', open ? 'block' : 'hidden')}
        >
            <button
                className={clsx(
                    'absolute right-1 top-2 z-50',
                    'sm:right-3 sm:top-3 xl:right-4 xl:top-4 2xl:right-5 2xl:top-5',
                    'cursor-pointer text-white',
                    'p-2 rounded-full border-2 border-transparent',
                    'hover:bg-black transition duration-75',
                    'focus:outline-none focus-visible:border-blue-500'
                )}
                onClick={onClose}
            >
                <span className="sr-only">Close modal</span>
                <Icon icon={IoClose} size="text-xl 2xl:text-2xl 3xl:text-3xl" aria-hidden={true} />
            </button>
            <div className={clsx('absolute w-full h-full -z-10', variants[backdrop])} onClick={onClose}></div>
            {children}
        </div>
    );
};

export default Modal;
