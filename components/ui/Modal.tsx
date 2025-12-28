import { useRef, useEffect } from 'react';
import clsx from 'clsx';

const variants = {
    light: 'bg-black/40 dark:bg-black/80',
    dark: 'bg-black/92',
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
        if (!open) return;

        /**
         * Sets the ref for previous focus element to re-focus it when modal closes
         */
        previouslyFocusedElement.current = document.activeElement as HTMLElement;

        const modal = modalRef.current;
        const focusableElements = modal?.querySelectorAll<HTMLElement>('button:not([disabled])');

        const first = focusableElements?.[0];
        const last = focusableElements?.[focusableElements.length - 1];

        /**
         * Focus the appropriate action elements in order when 'Tab' is clicked
         */
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

            /**
             * Close the modal when 'Escape' button in clicked
             */
            if (event.key === 'Escape') {
                event.preventDefault();
                onClose();
            }
        };

        first?.focus();
        document.addEventListener('keydown', keyDownHandler);

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
            className={clsx('fixed h-screen w-screen', 'z-50 top-0 left-0', open ? 'block' : 'hidden')}
        >
            <div className={clsx('absolute w-full h-full -z-10 cursor-pointer', variants[backdrop])} onClick={onClose}></div>
            {children}
        </div>
    );
};

export default Modal;
