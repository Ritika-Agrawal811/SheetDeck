import { useState, useEffect, useCallback } from 'react';

export const useScreenBreakpoint = () => {
    const [screenWidth, setScreenWidth] = useState<number | null>(null);

    /**
     * Handles window resize event to update screen width.
     */
    const handleWindowResize = useCallback(() => {
        setScreenWidth(window.innerWidth);
    }, []);

    /**
     * Sets up the resize event listener on window object to get screen width.
     */
    useEffect(() => {
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [handleWindowResize]);

    /**
     * Gets the screen breakpoint based on the width.
     * @param width - screen width
     * @returns breakpoint string
     */
    const getBreakpoint = useCallback((width: number) => {
        if (width < 640) return 'xs';
        if (width < 768) return 'sm';
        if (width < 1024) return 'md';
        if (width < 1280) return 'lg';
        if (width < 1536) return 'xl';
        return '2xl';
    }, []);

    return {
        screenWidth,
        breakpoint: screenWidth === null ? null : getBreakpoint(screenWidth),
    };
};
