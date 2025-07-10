import { useRef, useState, useCallback, useEffect } from 'react';

export const useHorizontalScroll = (breakpoint: string | null) => {
    const scrollContainerRef = useRef<HTMLUListElement | null>(null);
    const [scrollButton, setScrollButton] = useState({ left: false, right: false });

    const registerScrollRef = (elem: HTMLUListElement | null) => {
        scrollContainerRef.current = elem;
    };

    /* 
        scrollLeft: numbers of pixels by which the element has been scrolled to the left
        clientWidth: visible width of the scrollable area
        scrollWidth: total scrollable width of the element

        Hence maximum value of clientWidth + scrollLeft represents the rightmost edge of the element
    */
    const checkButtonVisibility = useCallback(() => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setScrollButton({
                left: scrollLeft > 0,
                right: scrollLeft + clientWidth < scrollWidth - 1,
            });
        }
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = scrollContainerRef.current.clientWidth * getScrollAmount(breakpoint ?? '');
            scrollContainerRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    const getScrollAmount = (breakpoint: string) => {
        switch (breakpoint) {
            case 'xs':
                return 0.5;
            case 'sm':
                return 0.3333;
            case 'md':
                return 0.25;
            default:
                return 0;
        }
    };

    useEffect(() => {
        const currentRef = scrollContainerRef.current;

        checkButtonVisibility();

        // add event listners for scroll and resize
        if (currentRef) {
            currentRef.addEventListener('scroll', checkButtonVisibility);
        }
        window.addEventListener('resize', checkButtonVisibility);

        // cleanup function
        return () => {
            if (currentRef) {
                currentRef.removeEventListener('scroll', checkButtonVisibility);
            }
            window.removeEventListener('resize', checkButtonVisibility);
        };
    }, [checkButtonVisibility]);

    return {
        registerScrollRef,
        scroll,
        scrollButton,
    };
};
