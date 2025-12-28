import type { Metadata } from 'next';

export const siteMetadata: Metadata = {
    metadataBase: new URL('https://sheetdeck.vercel.app'),
    title: 'SheetDeck | Master the Web One Sheet at a Time',
    description: 'Developer-friendly cheat sheets for HTML, CSS, JavaScript and more. Simple. Fast. Reference-ready.',
    applicationName: 'SheetDeck',
    authors: [{ name: 'Ritika Agrawal', url: 'https://x.com/RitikaAgrawal08' }],
    keywords: [
        'cheat sheets',
        'web development',
        'html cheat sheet',
        'css cheat sheet',
        'javascript cheat sheet',
        'react cheat sheet',
        'react reference',
        'programming shortcuts',
        'quick reference',
        'quick notes',
    ],
    openGraph: {
        title: 'SheetDeck | Master the Web One Sheet at a Time',
        description: 'Developer-friendly cheat sheets for HTML, CSS, JavaScript and more. Simple. Fast. Reference-ready.',
        url: 'https://sheetdeck.vercel.app',
        siteName: 'SheetDeck',
        images: [
            {
                url: '/assets/og-image.webp',
                width: 1200,
                height: 630,
                alt: 'SheetDeck cheat sheet preview',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'SheetDeck | Master the Web One Sheet at a Time',
        description: 'Developer-friendly cheat sheets for HTML, CSS, JavaScript and more. Simple. Fast. Reference-ready.',
        images: ['/assets/og-image.webp'],
        creator: '@RitikaAgrawal08',
    },
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: [
            { url: '/favicon.ico' },
            { url: '/assets/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/assets/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        ],
        apple: '/assets/favicon/apple-touch-icon.png',
    },
    manifest: '/assets/favicon/site.webmanifest',
};
