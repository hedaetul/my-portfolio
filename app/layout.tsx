import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hedaetul Islam - Web Developer Portfolio',
  description:
    'Welcome to the portfolio of Hedaetul Islam, a skilled web developer specializing in front-end technologies. Explore my projects, skills, and get in touch for collaboration.',
  openGraph: {
    title: 'Hedaetul Islam - Web Developer Portfolio',
    description:
      'Welcome to the portfolio of Hedaetul Islam, a skilled web developer specializing in front-end technologies. Explore my projects, skills, and get in touch for collaboration.',
    url: 'https://your-portfolio-url.com',
    type: 'website',
    images: [
      {
        url: 'https://your-portfolio-url.com/path-to-your-image.jpg',
        width: 800,
        height: 600,
        alt: 'Hedaetul Islam - Web Developer Portfolio',
      },
    ],
  },
  icons: {
    icon: '/app/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'Hedaetul Islam' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        {/* Favicon link not needed here if it's already in the metadata */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
