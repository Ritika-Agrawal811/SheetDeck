import { siteMetadata } from './sitemetadata';
import { inter } from './font';
import './globals.css';

export const metadata = siteMetadata;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} antialiased overflow-x-hidden text-gray-800`}>{children}</body>
        </html>
    );
}
