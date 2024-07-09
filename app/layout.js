import './globals.css';

import { SiteConfig } from '@/lib/config/site';
import CustomHead from '@/components/common/head';
import Navbar from '@/components/common/navbar';
import Footer from '@/components/common/footer';
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata = {
    title: SiteConfig.name,
    description: SiteConfig.description,
    keywords: SiteConfig.keywords,
    authors: SiteConfig.authors,
    creator: SiteConfig.creator,
    icons: SiteConfig.icons,
    metadataBase: SiteConfig.metadataBase,
    openGraph: SiteConfig.openGraph,
    twitter: SiteConfig.twitter,
};

export default async function RootLayout({ children }) {
    return (
        <html
            lang='en'
        >
            <head>
                <CustomHead />
            </head>
            <body>
                <ThemeProvider>
                    <div className='w-full min-h-svh text-base-content bg-base-100'>
                        <Navbar />
                        <div className='px-5'>{children}</div>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
