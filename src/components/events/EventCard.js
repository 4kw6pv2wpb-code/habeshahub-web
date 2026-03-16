'use client';

import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { FiMapPin, FiUsers, FiClock, FiCalendar } from 'react-icons/fi';
import { format } from 'date-fns';

export function EventCard({ event }) {
  // Parse date from API
  let month = event.month || '';
  let day = event.day || '';
  let time = event.time || '';
  let venue = event.venue || event.location || '';
  let attendees = event.attendees || event._count?.attendees || 0;
  let coverUrl = event.coverUrl || null;
  let city = event.city || '';

  if (event.date && !month) {
    try {
      const d = new Date(event.date);
      month = format(d, 'MMM').toUpperCase();
      day = format(d, 'd');
      time = format(d, 'EEE, MMM d \u00B7 h:mm a');
    } catch {}
  }

  if (!venue && city) {
    venue = city + (event.country ? `, ${event.country}` : '');
  }

  const price = event.price || 'Free';

  return (
    <Link href={`/events/${event.id}`} className="group block overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:border-primary/30 hover:shadow-md dark:border-dark-700 dark:bg-dark-800 dark:hover:border-primary/40">
      {/* Cover image */}
      <div className="relative h-40">
        {coverUrl ? (
          <img src={coverUrl} alt={event.title} className="h-full w-full object-cover" />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-primary/20 to-amber-100 dark:from-primary/30 dark:to-amber-900/20" />
        )}
        {/* Date badge */}
        <div className="absolute left-3 top-3 flex h-14 w-14 flex-col items-center justify-center rounded-xl bg-white shadow-md dark:bg-dark-800">
          <span className="text-xs font-bold uppercase text-primary">{month}</span>
          <span className="text-xl font-bold text-gray-900 dark:text-white">{day}</span>
        </div>
        {price && (
          <div className="absolute right-3 top-3">
            <Badge variant={price === 'Free' ? 'green' : 'default'}>{price}</Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 group-hover:text-primary dark:text-white">{event.title}</h3>
        <div className="mt-2 space-y-1 text-sm text-gray-500 dark:text-gray-400">
          {time && (
            <p className="flex items-center gap-1.5"><FiClock size={13} /> {time}</p>
          )}
          {venue && (
            <p className="flex items-center gap-1.5"><FiMapPin size={13} /> {venue}</p>
          )}
          <p className="flex items-center gap-1.5"><FiUsers size={13} /> {attendees} going{event.maxAttendees ? ` / ${event.maxAttendees} spots` : ''}</p>
        </div>
        <div className="mt-3">
          <button className="w-full rounded-lg bg-primary/10 py-2 text-sm font-semibold text-primary hover:bg-primary/20 transition">
            RSVP
          </button>
        </div>
      </div>
    </Link>
  );
}
