import React, { useRef, useEffect } from 'react';
import clsx from 'clsx';

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
            <div className={clsx('absolute w-full h-full -z-10', variants[backdrop])} onClick={onClose}></div>
            {children}
        </div>
    );
};

export default Modal;
