'use client';

import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { FiMapPin, FiUsers, FiClock } from 'react-icons/fi';

export function EventCard({ event }) {
  return (
    <Link href={`/events/${event.id}`} className="group block overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-md dark:border-dark-700 dark:bg-dark-800">
      <div className={`relative h-40 ${event.imageBg}`}>
        <div className="absolute left-3 top-3 flex h-14 w-14 flex-col items-center justify-center rounded-xl bg-white/90 shadow-sm dark:bg-dark-800/90">
          <span className="text-xs font-bold uppercase text-primary">{event.month}</span>
          <span className="text-xl font-bold text-gray-900 dark:text-white">{event.day}</span>
        </div>
        {event.price && <div className="absolute right-3 top-3"><Badge variant={event.price === 'Free' ? 'green' : 'primary'}>{event.price}</Badge></div>}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 group-hover:text-primary dark:text-white">{event.title}</h3>
        <div className="mt-2 space-y-1 text-sm text-gray-500 dark:text-gray-400">
          <p className="flex items-center gap-1.5"><FiClock size={13} /> {event.time}</p>
          <p className="flex items-center gap-1.5"><FiMapPin size={13} /> {event.venue}</p>
          <p className="flex items-center gap-1.5"><FiUsers size={13} /> {event.attendees} going</p>
        </div>
        <div className="mt-3">
          <button className="w-full rounded-lg bg-primary/10 py-2 text-sm font-semibold text-primary hover:bg-primary/20 transition-colors">RSVP</button>
        </div>
      </div>
    </Link>
  );
}
