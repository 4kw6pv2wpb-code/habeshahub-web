'use client';

import { useState } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { EventCard } from '@/components/events/EventCard';
import { Button } from '@/components/ui/Button';
import { FiPlus, FiSearch } from 'react-icons/fi';

const TABS = ['Upcoming', 'This Week', 'This Month', 'Past'];

const MOCK_EVENTS = [
  { id: '1', title: 'Seattle Habesha Night', month: 'MAR', day: '15', time: 'Sat, Mar 15 · 8:00 PM', venue: 'The Showbox, Seattle', attendees: 234, price: '$25', imageBg: 'bg-gradient-to-br from-primary/30 to-habesha-red/30' },
  { id: '2', title: 'Ethiopian New Year Celebration', month: 'SEP', day: '11', time: 'Thu, Sep 11 · 6:00 PM', venue: 'Ethiopian Community Center, DC', attendees: 500, price: 'Free', imageBg: 'bg-gradient-to-br from-habesha-green/30 to-habesha-yellow/30' },
  { id: '3', title: 'Eritrean Independence Day Concert', month: 'MAY', day: '24', time: 'Sat, May 24 · 7:00 PM', venue: 'The Fillmore, LA', attendees: 350, price: '$35', imageBg: 'bg-gradient-to-br from-eritrean-blue/30 to-habesha-red/30' },
  { id: '4', title: 'Injera Making Workshop', month: 'MAR', day: '20', time: 'Thu, Mar 20 · 2:00 PM', venue: 'Community Kitchen, Seattle', attendees: 28, price: '$15', imageBg: 'bg-gradient-to-br from-primary/20 to-habesha-green/20' },
  { id: '5', title: 'Diaspora Business Networking', month: 'MAR', day: '25', time: 'Tue, Mar 25 · 6:30 PM', venue: 'WeWork Capitol Hill, Seattle', attendees: 75, price: 'Free', imageBg: 'bg-gradient-to-br from-accent/20 to-primary/20' },
  { id: '6', title: 'Cultural Fashion Show', month: 'APR', day: '12', time: 'Sat, Apr 12 · 7:00 PM', venue: 'The Neptune, Seattle', attendees: 180, price: '$30', imageBg: 'bg-gradient-to-br from-habesha-red/30 to-primary/30' },
  { id: '7', title: 'Coffee Ceremony Gathering', month: 'MAR', day: '22', time: 'Sat, Mar 22 · 3:00 PM', venue: 'Buna Coffee House, DC', attendees: 40, price: 'Free', imageBg: 'bg-gradient-to-br from-amber-200/50 to-primary/20' },
  { id: '8', title: 'Youth Basketball Tournament', month: 'APR', day: '5', time: 'Sat, Apr 5 · 10:00 AM', venue: 'Rainier Community Center, Seattle', attendees: 120, price: 'Free', imageBg: 'bg-gradient-to-br from-habesha-green/20 to-eritrean-blue/20' },
];

export default function EventsPage() {
  const [tab, setTab] = useState('Upcoming');
  const [search, setSearch] = useState('');

  const filtered = MOCK_EVENTS.filter(e => {
    if (search && !e.title.toLowerCase().includes(search.toLowerCase()) && !e.venue.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  // Featured event
  const featured = MOCK_EVENTS[0];

  return (
    <AppLayout>
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Events</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Discover happenings in the Habesha community</p>
          </div>
          <Button><FiPlus size={16} className="mr-1" /> Create Event</Button>
        </div>

        {/* Featured */}
        <div className={`mb-6 overflow-hidden rounded-2xl ${featured.imageBg} p-8`}>
          <div className="max-w-lg">
            <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">Featured</span>
            <h2 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">{featured.title}</h2>
            <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{featured.time} · {featured.venue}</p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{featured.attendees} people going</p>
            <Button className="mt-4" size="lg">RSVP Now</Button>
          </div>
        </div>

        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input type="text" placeholder="Search events..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary dark:border-dark-600 dark:bg-dark-800 dark:text-white" />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {TABS.map(t => <button key={t} onClick={() => setTab(t)} className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${tab === t ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-300'}`}>{t}</button>)}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(e => <EventCard key={e.id} event={e} />)}
        </div>
      </div>
    </AppLayout>
  );
}
