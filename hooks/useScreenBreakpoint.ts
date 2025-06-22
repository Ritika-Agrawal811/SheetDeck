import { useState, useEffect, useCallback } from 'react';

export const useScreenBreakpoint = () => {
    const [screenWidth, setScreenWidth] = useState<number | null>(null);

    const handleWindowResize = useCallback(() => {
        setScreenWidth(window.innerWidth);
    }, []);

    useEffect(() => {
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [handleWindowResize]);

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
