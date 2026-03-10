'use client';

import { useState } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { ListingCard } from '@/components/housing/ListingCard';
import { FiSearch, FiPlus } from 'react-icons/fi';
import { Button } from '@/components/ui/Button';

const TABS = ['All', 'Apartments', 'Rooms', 'Houses', 'Sublets'];

const MOCK_LISTINGS = [
  { id: '1', title: '2BR Near Little Ethiopia', type: 'Apartment', price: 1800, location: 'Los Angeles, CA', beds: 2, baths: 1, sqft: 850, poster: 'Hiwet G.', posted: '1 day ago', imageBg: 'bg-gradient-to-br from-eritrean-blue/20 to-habesha-green/20' },
  { id: '2', title: 'Room in Habesha Household', type: 'Room', price: 800, location: 'Seattle, WA', beds: 1, baths: 1, sqft: 300, poster: 'Yonas H.', posted: '2 days ago', imageBg: 'bg-gradient-to-br from-primary/20 to-accent/20' },
  { id: '3', title: 'Spacious 3BR Family Home', type: 'House', price: 2400, location: 'Washington, DC', beds: 3, baths: 2, sqft: 1400, poster: 'Dawit M.', posted: '3 days ago', imageBg: 'bg-gradient-to-br from-habesha-green/20 to-primary/20' },
  { id: '4', title: 'Studio Near Habesha Shops', type: 'Apartment', price: 1200, location: 'Minneapolis, MN', beds: 0, baths: 1, sqft: 450, poster: 'Kidist A.', posted: '4 days ago', imageBg: 'bg-gradient-to-br from-accent/20 to-eritrean-blue/20' },
  { id: '5', title: 'Summer Sublet — Furnished', type: 'Sublet', price: 950, location: 'Seattle, WA', beds: 1, baths: 1, sqft: 550, poster: 'Selam T.', posted: '5 days ago', imageBg: 'bg-gradient-to-br from-habesha-yellow/20 to-habesha-red/20' },
  { id: '6', title: '1BR Columbia Heights', type: 'Apartment', price: 1600, location: 'Washington, DC', beds: 1, baths: 1, sqft: 650, poster: 'Abel K.', posted: '1 week ago', imageBg: 'bg-gradient-to-br from-primary/20 to-habesha-green/20' },
  { id: '7', title: 'Room Available — Eritrean Home', type: 'Room', price: 700, location: 'Dallas, TX', beds: 1, baths: 1, sqft: 280, poster: 'Semhar T.', posted: '3 days ago', imageBg: 'bg-gradient-to-br from-eritrean-blue/20 to-primary/20' },
  { id: '8', title: 'Modern 2BR Downtown', type: 'Apartment', price: 2100, location: 'Seattle, WA', beds: 2, baths: 2, sqft: 950, poster: 'Meron B.', posted: '6 days ago', imageBg: 'bg-gradient-to-br from-habesha-red/20 to-primary/20' },
  { id: '9', title: 'Cozy Basement Apartment', type: 'Apartment', price: 1100, location: 'Silver Spring, MD', beds: 1, baths: 1, sqft: 500, poster: 'Tigist W.', posted: '2 days ago', imageBg: 'bg-gradient-to-br from-habesha-green/30 to-eritrean-blue/20' },
];

export default function HousingPage() {
  const [tab, setTab] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = MOCK_LISTINGS.filter(l => {
    if (tab !== 'All' && tab !== l.type + 's' && tab !== l.type) return false;
    if (search && !l.title.toLowerCase().includes(search.toLowerCase()) && !l.location.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <AppLayout>
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Housing</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Find your next home in the community</p>
          </div>
          <Button><FiPlus size={16} className="mr-1" /> Post a Listing</Button>
        </div>

        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input type="text" placeholder="Search by location, title..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary dark:border-dark-600 dark:bg-dark-800 dark:text-white" />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {TABS.map(t => <button key={t} onClick={() => setTab(t)} className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${tab === t ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-300'}`}>{t}</button>)}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(l => <ListingCard key={l.id} listing={l} />)}
        </div>
        {filtered.length === 0 && <div className="py-16 text-center text-gray-500 dark:text-gray-400">No listings found</div>}
      </div>
    </AppLayout>
  );
}
