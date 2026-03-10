'use client';

import { useState } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { JobCard } from '@/components/jobs/JobCard';
import { FiSearch, FiPlus } from 'react-icons/fi';
import { Button } from '@/components/ui/Button';

const FILTERS = ['All', 'Full-time', 'Part-time', 'Remote', 'Contract'];

const MOCK_JOBS = [
  { id: '1', title: 'Software Engineer', company: 'Habesha Tech Solutions', location: 'Seattle, WA', salary: '$120k–$160k', type: 'Full-time', posted: '2 days ago', logoBg: 'bg-primary', description: 'Join our team building technology solutions for the East African diaspora. Experience with React, Node.js, and cloud services required.' },
  { id: '2', title: 'Restaurant Manager', company: 'Addis Kitchen', location: 'Washington, DC', salary: '$55k–$70k', type: 'Full-time', posted: '3 days ago', logoBg: 'bg-habesha-green', description: 'Manage our award-winning Ethiopian restaurant in DC. Experience in hospitality and knowledge of Ethiopian cuisine preferred.' },
  { id: '3', title: 'Marketing Lead', company: 'Eritrean Cultural Center', location: 'Los Angeles, CA', salary: '$65k–$85k', type: 'Full-time', posted: '1 week ago', logoBg: 'bg-eritrean-blue', description: 'Lead marketing and outreach efforts for our cultural center. Build community engagement and grow our programs.' },
  { id: '4', title: 'Accountant', company: 'Horn of Africa Imports', location: 'Minneapolis, MN', salary: '$60k–$75k', type: 'Full-time', posted: '4 days ago', logoBg: 'bg-habesha-red', description: 'Handle financial reporting, tax prep, and bookkeeping for our import/export business specializing in East African goods.' },
  { id: '5', title: 'Freelance Translator', company: 'DiasporaConnect', location: 'Remote', salary: '$35–$60/hr', type: 'Contract', posted: '1 day ago', logoBg: 'bg-accent', description: 'Translate documents and content between Amharic/Tigrinya and English. Legal and medical translation experience a plus.' },
  { id: '6', title: 'Community Outreach Coordinator', company: 'Habesha Youth Foundation', location: 'Seattle, WA', salary: '$45k–$55k', type: 'Full-time', posted: '5 days ago', logoBg: 'bg-primary', description: 'Coordinate youth programs and mentorship initiatives. Bilingual in Amharic or Tigrinya strongly preferred.' },
  { id: '7', title: 'Graphic Designer', company: 'Teff & Co Branding', location: 'Remote', salary: '$50k–$70k', type: 'Remote', posted: '2 days ago', logoBg: 'bg-habesha-green', description: 'Create visual branding for African diaspora businesses. Portfolio with cultural design work preferred.' },
  { id: '8', title: 'Part-time Barista', company: 'Buna Coffee House', location: 'Washington, DC', salary: '$18–$22/hr', type: 'Part-time', posted: '6 days ago', logoBg: 'bg-amber-600', description: 'Serve Ethiopian coffee with traditional ceremony experience. Flexible hours, tips, and a warm community vibe.' },
];

export default function JobsPage() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = MOCK_JOBS.filter(j => {
    if (filter !== 'All' && j.type !== filter) return false;
    if (search && !j.title.toLowerCase().includes(search.toLowerCase()) && !j.company.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <AppLayout>
      <div className="mx-auto max-w-5xl px-4 py-6">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Jobs Board</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Find opportunities in the Habesha community</p>
          </div>
          <Button size="md"><FiPlus size={16} className="mr-1" /> Post a Job</Button>
        </div>

        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input type="text" placeholder="Search jobs..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary dark:border-dark-600 dark:bg-dark-800 dark:text-white" />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {FILTERS.map((f) => (
              <button key={f} onClick={() => setFilter(f)} className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${filter === f ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-300'}`}>{f}</button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((job) => <JobCard key={job.id} job={job} />)}
        </div>
        {filtered.length === 0 && <div className="py-16 text-center text-gray-500 dark:text-gray-400">No jobs found matching your criteria</div>}
      </div>
    </AppLayout>
  );
}
