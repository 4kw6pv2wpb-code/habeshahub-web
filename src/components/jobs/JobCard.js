'use client';

import { FiMapPin, FiClock, FiDollarSign, FiBookmark } from 'react-icons/fi';
import { Badge } from '@/components/ui/Badge';
import Link from 'next/link';

export function JobCard({ job }) {
  const typeColors = { 'Full-time': 'green', 'Part-time': 'blue', 'Remote': 'primary', 'Contract': 'accent' };
  return (
    <Link href={`/jobs/${job.id}`} className="block rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md dark:border-dark-700 dark:bg-dark-800">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${job.logoBg} text-lg font-bold text-white`}>
            {job.company[0]}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">{job.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{job.company}</p>
          </div>
        </div>
        <button onClick={(e) => { e.preventDefault(); }} className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-primary dark:hover:bg-dark-700">
          <FiBookmark size={18} />
        </button>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <Badge variant={typeColors[job.type] || 'gray'}>{job.type}</Badge>
        <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400"><FiMapPin size={12} /> {job.location}</span>
        <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400"><FiDollarSign size={12} /> {job.salary}</span>
      </div>
      <p className="mt-2 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">{job.description}</p>
      <div className="mt-3 flex items-center justify-between">
        <span className="flex items-center gap-1 text-xs text-gray-400"><FiClock size={12} /> {job.posted}</span>
        <span className="rounded-lg bg-primary px-4 py-1.5 text-xs font-semibold text-white hover:bg-primary/90">Apply</span>
      </div>
    </Link>
  );
}
