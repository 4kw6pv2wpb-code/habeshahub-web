import { Inter } from 'next/font/google';
import { AuthProvider } from '@/lib/auth-context';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: {
    default: 'HabeshaHub — The Diaspora Super App',
    template: '%s | HabeshaHub',
  },
  description:
    'The all-in-one platform for Ethiopian, Eritrean, and Somali diaspora communities. Jobs, housing, events, marketplace, dating, immigration resources, remittance, and more — all in one place.',
  keywords: [
    'habesha',
    'Ethiopian diaspora',
    'Eritrean diaspora',
    'Somali diaspora',
    'habesha app',
    'African diaspora',
    'ethiopian jobs',
    'habesha dating',
    'remittance ethiopia',
    'habesha community',
    'horn of africa diaspora',
    'jobs',
    'housing',
    'events',
    'marketplace',
    'dating',
    'immigration',
    'remittance',
    'community',
  ],
  authors: [{ name: 'HabeshaHub' }],
  creator: 'HabeshaHub',
  publisher: 'HabeshaHub',
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
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: '/apple-icon.svg',
  },
  metadataBase: new URL('https://habeshahub-web-production.up.railway.app'),
  openGraph: {
    title: 'HabeshaHub — The Diaspora Super App',
    description:
      'Connect with the Ethiopian, Eritrean, and Somali diaspora. Jobs, housing, events, marketplace, dating, immigration help, and more.',
    siteName: 'HabeshaHub',
    url: 'https://habeshahub-web-production.up.railway.app',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HabeshaHub — The Diaspora Super App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HabeshaHub — The Diaspora Super App',
    description:
      'Connect with the Ethiopian, Eritrean, and Somali diaspora. Jobs, housing, events, marketplace, dating, immigration help, and more.',
    images: ['/og-image.png'],
    creator: '@habeshahubapp',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
