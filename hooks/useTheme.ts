import { useEffect, useRef } from 'react';
import { useAtom } from 'jotai';
import { darkThemeAtom } from '@/atoms/theme';

export const useTheme = () => {
    const [isDark, setIsDark] = useAtom(darkThemeAtom);
    const hasMounted = useRef(false);

    /**
     * Get the theme mode from the local storage and set it
     */
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');

        if (storedTheme) {
            setIsDark(storedTheme === 'dark');
        }
    }, [setIsDark]);

    /**
     * Handle theme change when the state changes
     */
    useEffect(() => {
        if (!hasMounted.current) {
            hasMounted.current = true;
            return;
        }

        document.documentElement.classList.toggle('dark', isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    /**
     * Sets the theme mode state - true for dark and false for light
     * @param setDark boolean
     */
    const toggleTheme = (setDark: boolean) => setIsDark(setDark);

    return {
        isDark,
        toggleTheme,
        hasMounted: hasMounted.current,
    };
};
