export const metadata = {
  title: 'Dating — Meet Habesha Singles Near You',
  description:
    'Connect with Ethiopian, Eritrean & Somali singles for meaningful relationships. Habesha dating made easy.',
  openGraph: {
    title: 'Dating | HabeshaHub',
    description:
      'Connect with Ethiopian, Eritrean & Somali singles for meaningful relationships.',
    url: 'https://habeshahub-web-production.up.railway.app/dating',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'HabeshaHub Dating' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dating | HabeshaHub',
    description: 'Meet Habesha singles near you.',
    images: ['/og-image.png'],
  },
};

export default function DatingLayout({ children }) {
  return children;
}
