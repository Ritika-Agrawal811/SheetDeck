import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { darkThemeAtom } from '@/atoms/theme';

export const useTheme = () => {
    const [isDark, setIsDark] = useAtom(darkThemeAtom);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDark);
    }, [isDark]);

    const toggleTheme = (setDark: boolean) => setIsDark(setDark);

    return {
        isDark,
        toggleTheme,
    };
};
