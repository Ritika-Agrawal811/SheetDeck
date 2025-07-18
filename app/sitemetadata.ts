import type { Metadata } from 'next';

export const siteMetadata: Metadata = {
    title: 'SheetDeck | Master the Web One Sheet at a Time',
    description: 'Developer-friendly cheat sheets for HTML, CSS, JavaScript, React, and more. Simple. Fast. Reference-ready.',
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
    authors: [{ name: 'Ritika Agrawal', url: 'https://sheetdeck.vercel.app' }],
    metadataBase: new URL('https://sheetdeck.vercel.app'),
    openGraph: {
        title: 'SheetDeck | Master the Web One Sheet at a Time',
        description: 'Developer-friendly cheat sheets for HTML, CSS, JavaScript, React, and more. Simple. Fast. Reference-ready.',
        url: 'https://sheetdeck.vercel.app',
        siteName: 'SheetDeck',
        images: [
            {
                url: '/og-image.png',
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
        description: 'Developer-friendly cheat sheets for HTML, CSS, JavaScript, React, and more.',
        images: ['/og-image.png'],
        creator: '@RitikaAgrawal08',
    },
    robots: {
        index: true,
        follow: true,
    },
};
