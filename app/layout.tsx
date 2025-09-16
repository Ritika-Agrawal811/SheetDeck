import { Analytics } from '@vercel/analytics/next';
import { siteMetadata } from './sitemetadata';
import { inter } from './font';
import './globals.css';

import Footer from '@/components/footer/Footer';
import Navbar from '@/components/hero-section/navbar/Navbar';
import { Providers } from './providers';

export const metadata = siteMetadata;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} antialiased overflow-x-hidden text-gray-800`}>
                <Providers>
                    <Navbar />
                    {children}
                    <Footer />
                </Providers>
                <Analytics />
            </body>
        </html>
    );
}
