import { useEffect, useRef } from 'react';
import { useAtom } from 'jotai';
import { darkThemeAtom } from '@/atoms/theme';

export const useTheme = () => {
    const [isDark, setIsDark] = useAtom(darkThemeAtom);
    const hasMounted = useRef(false);

    // On first client-side load, sync from localStorage
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setIsDark(storedTheme === 'dark');
        }
    }, [setIsDark]);

    /* set the theme when the state changes */
    useEffect(() => {
        if (!hasMounted.current) {
            hasMounted.current = true;
            return;
        }

        document.documentElement.classList.toggle('dark', isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    const toggleTheme = (setDark: boolean) => setIsDark(setDark);

    return {
        isDark,
        toggleTheme,
        hasMounted: hasMounted.current,
    };
};
