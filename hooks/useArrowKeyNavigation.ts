import { useRef, useState, useCallback } from 'react';

type Option = {
    loop?: boolean;
    orientation?: 'horizontal' | 'vertical';
    initialIndex?: number;
};

export const useArrowKeyNavigation = (itemsCount: number, options?: Option) => {
    const { loop = false, orientation = 'horizontal', initialIndex = 0 } = options ?? {};

    const [activeIndex, setActiveIndex] = useState(initialIndex);
    const itemRefs = useRef<HTMLElement[]>([]);

    /**
     * Registers item refs for navigation.
     * @param elem - HTML element reference
     * @param index - index of the item
     */
    const registerItemRef = useCallback((elem: HTMLLIElement | null, index: number) => {
        if (!elem) return;

        itemRefs.current[index] = elem;
    }, []);

    /**
     * Focuses the first item in the list.
     */
    const focusFirstItem = useCallback(() => {
        itemRefs.current?.[0]?.focus();
    }, []);

    /**
     * Sets the current active index.
     * @param index - index to set as active
     */
    const setCurrentIndex = useCallback((index: number) => {
        setActiveIndex(index);
    }, []);

    /**
     * Handles keyboard navigation for arrow keys.
     * @param event - keyboard event
     */
    const handleKeysNavigation = (event: React.KeyboardEvent) => {
        const key = event.key;
        const isHorizontal = orientation === 'horizontal';

        let newIndex = activeIndex;

        switch (key) {
            case 'ArrowRight':
                if (isHorizontal) {
                    newIndex = activeIndex + 1;
                    if (newIndex > itemsCount) newIndex = loop ? 0 : itemsCount - 1;
                }
                break;
            case 'ArrowLeft':
                if (isHorizontal) {
                    newIndex = activeIndex - 1;
                    if (newIndex < 0) newIndex = loop ? itemsCount - 1 : 0;
                }
                break;
            case 'ArrowDown':
                if (!isHorizontal) {
                    newIndex = activeIndex + 1;
                    if (newIndex > itemsCount) newIndex = loop ? 0 : itemsCount - 1;
                }
                break;
            case 'ArrowUp':
                if (!isHorizontal) {
                    newIndex = activeIndex - 1;
                    if (newIndex < 0) newIndex = loop ? itemsCount - 1 : 0;
                }
                break;
            case 'Home':
                newIndex = 0;
                break;
            case 'End':
                newIndex = itemsCount - 1;
                break;
            default:
                return;
        }

        event.preventDefault();
        setActiveIndex(newIndex);
        itemRefs.current[newIndex]?.focus();
    };

    return {
        registerItemRef,
        handleKeysNavigation,
        setCurrentIndex,
        focusFirstItem,
    };
};
