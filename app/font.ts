import { Inter, Anta, Platypi, Castoro_Titling } from 'next/font/google';

export const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
    preload: true,
});

export const anta = Anta({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-anta',
    display: 'swap',
    preload: false,
});

export const platypi = Platypi({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-platypi',
    display: 'swap',
    preload: false,
});

export const castoro = Castoro_Titling({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-castoro',
    display: 'swap',
    preload: false,
});
