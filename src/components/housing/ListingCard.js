'use client';

import { FiMapPin, FiBookmark, FiMaximize } from 'react-icons/fi';
import { Badge } from '@/components/ui/Badge';
import { Avatar } from '@/components/ui/Avatar';
import Link from 'next/link';

export function ListingCard({ listing }) {
  return (
    <Link href={`/housing/${listing.id}`} className="group block overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-md dark:border-dark-700 dark:bg-dark-800">
      <div className={`relative h-48 ${listing.imageBg}`}>
        <div className="absolute left-3 top-3"><Badge variant={listing.type === 'Apartment' ? 'blue' : listing.type === 'Room' ? 'green' : 'primary'}>{listing.type}</Badge></div>
        <button onClick={(e) => e.preventDefault()} className="absolute right-3 top-3 rounded-full bg-white/80 p-2 text-gray-600 hover:bg-white hover:text-primary dark:bg-dark-800/80"><FiBookmark size={16} /></button>
      </div>
      <div className="p-4">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-lg font-bold text-primary">${listing.price}<span className="text-sm font-normal text-gray-500">/mo</span></span>
          <span className="flex items-center gap-1 text-xs text-gray-500"><FiMaximize size={12} /> {listing.sqft} sqft</span>
        </div>
        <h3 className="font-semibold text-gray-900 dark:text-white">{listing.title}</h3>
        <p className="mt-0.5 flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400"><FiMapPin size={12} /> {listing.location}</p>
        <div className="mt-2 flex gap-3 text-xs text-gray-500 dark:text-gray-400">
          <span>{listing.beds} bed</span><span>{listing.baths} bath</span>
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3 dark:border-dark-700">
          <div className="flex items-center gap-2"><Avatar name={listing.poster} size="sm" /><span className="text-xs text-gray-600 dark:text-gray-400">{listing.poster}</span></div>
          <span className="text-xs text-gray-400">{listing.posted}</span>
        </div>
      </div>
    </Link>
  );
}
