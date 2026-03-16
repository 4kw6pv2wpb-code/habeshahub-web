export const metadata = {
  title: 'Marketplace — Buy & Sell in the Habesha Community',
  description:
    'Shop traditional items, spices, clothing, jewelry, art and more from Ethiopian, Eritrean & Somali sellers across the US.',
  openGraph: {
    title: 'Marketplace | HabeshaHub',
    description:
      'Shop traditional items, spices, clothing, jewelry, art and more from the Habesha community.',
    url: 'https://habeshahub-web-production.up.railway.app/marketplace',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'HabeshaHub Marketplace' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketplace | HabeshaHub',
    description: 'Habesha community marketplace — traditional items, spices & more.',
    images: ['/og-image.png'],
  },
};

export default function MarketplaceLayout({ children }) {
  return children;
}
