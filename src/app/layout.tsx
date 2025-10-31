import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { moglanDemo, athelas } from '@/fonts/font';
import { Montserrat } from 'next/font/google';
import { Bodoni_Moda } from 'next/font/google';
import { Junge } from 'next/font/google';
import { Loader } from '@/components/UI/Loader/Loader';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-montserrat',
  display: 'swap',
  preload: true,
});
const bodoniModa = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bodoni-moda',
  display: 'swap',
  preload: false,
});
const junge = Junge({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-junge',
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: 'Akers Advisory - Strategic Advisory & Private Office Services',
    template: '%s | Akers Advisory',
  },
  description:
    "Boutique consultancy offering strategic advisory, crisis navigation, fractional chief of staff, and private office services. Discretion, trust, and results for those who can't afford mistakes.",
  keywords: [
    'strategic advisory',
    'crisis management',
    'fractional chief of staff',
    'private office services',
    'executive consulting',
    'discretionary services',
    'high-net-worth advisory',
    'confidential consulting',
    'strategic planning',
    'executive support',
  ],
  authors: [{ name: 'Akers Advisory' }],
  creator: 'Akers Advisory',
  publisher: 'Akers Advisory',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://akersadvisory.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Akers Advisory - Strategic Advisory & Private Office Services',
    description:
      "Boutique consultancy offering strategic advisory, crisis navigation, fractional chief of staff, and private office services. Discretion, trust, and results for those who can't afford mistakes.",
    url: 'https://akersadvisory.com',
    siteName: 'Akers Advisory',
    images: [
      {
        url: '/img/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Akers Advisory - Strategic Advisory Services',
        type: 'image/webp',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akers Advisory - Strategic Advisory & Private Office Services',
    description:
      'Boutique consultancy offering strategic advisory, crisis navigation, fractional chief of staff, and private office services.',
    images: ['/img/twitter-image.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [{ url: '/img/favicon.svg', type: 'image/svg+xml' }],
    apple: [
      {
        url: '/img/apple-touch-icon.webp',
        sizes: '180x180',
        type: 'image/webp',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="theme-color" content="#141414" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body
        className={`${montserrat.variable} ${bodoniModa.variable} ${moglanDemo.variable} ${athelas.variable} ${junge.variable}`}
      >
        <Loader />
        <Header />
        {children} <Footer />
      </body>
    </html>
  );
}
