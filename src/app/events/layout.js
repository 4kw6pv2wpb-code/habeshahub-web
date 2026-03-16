export const metadata = {
  title: 'Events — Habesha Community Events Near You',
  description:
    'Discover Ethiopian, Eritrean & Somali community events, festivals, cultural celebrations, and networking meetups across the US.',
  openGraph: {
    title: 'Events | HabeshaHub',
    description:
      'Discover Ethiopian, Eritrean & Somali community events, festivals, cultural celebrations, and networking meetups.',
    url: 'https://habeshahub-web-production.up.railway.app/events',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'HabeshaHub Events' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Events | HabeshaHub',
    description: 'Habesha community events, festivals & meetups.',
    images: ['/og-image.png'],
  },
};

export default function EventsLayout({ children }) {
  return children;
}
