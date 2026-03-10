'use client';

import { useState } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Avatar } from '@/components/ui/Avatar';
import { Button } from '@/components/ui/Button';
import { PostCard } from '@/components/feed/PostCard';
import { Badge } from '@/components/ui/Badge';
import { FiMapPin, FiCalendar, FiEdit2, FiBriefcase, FiGlobe } from 'react-icons/fi';

const TABS = ['Posts', 'About', 'Photos', 'Connections'];

const MOCK_PROFILE = {
  name: 'Eyob T.', bio: 'First-gen Eritrean-American 🇪🇷 | Seattle | Tech & Community Builder', location: 'Seattle, WA', heritage: 'Eritrean',
  joined: 'January 2024', work: 'Software Engineer at HabeshaHub', education: 'University of Washington', languages: ['English', 'Tigrinya', 'Amharic'],
  followers: 234, following: 189, posts: 47,
};

const MOCK_POSTS = [
  { id: 1, author: 'Eyob T.', time: '3h ago', location: 'Seattle, WA', content: 'Just shipped a new feature on HabeshaHub — the translation tool now supports Tigrinya! 🎉 Building for our community is the most rewarding work. Try it out and let me know what you think.', likes: 56, comments: 14, shares: 8 },
  { id: 2, author: 'Eyob T.', time: '2d ago', location: 'Seattle, WA', content: 'Beautiful day at Alki Beach. Reminded me of the Red Sea coast stories my parents used to tell. Seattle sunsets hit different when you carry two homes in your heart. 🌅', likes: 89, comments: 22, shares: 5, image: true, imageAlt: '🌅 Sunset photo', imageBg: 'bg-gradient-to-br from-orange-200/50 to-accent/20' },
];

export default function ProfilePage() {
  const [tab, setTab] = useState('Posts');

  return (
    <AppLayout>
      <div className="mx-auto max-w-4xl">
        {/* Cover */}
        <div className="h-48 bg-gradient-to-r from-primary/30 via-eritrean-blue/20 to-habesha-green/30 sm:h-56" />

        {/* Profile Info */}
        <div className="relative px-4">
          <div className="-mt-16 flex flex-col items-center sm:flex-row sm:items-end sm:gap-4">
            <div className="rounded-full border-4 border-white bg-white dark:border-dark-900">
              <Avatar name={MOCK_PROFILE.name} size="xl" className="!h-32 !w-32 !text-3xl" />
            </div>
            <div className="mt-2 flex-1 text-center sm:mb-2 sm:text-left">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{MOCK_PROFILE.name}</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">{MOCK_PROFILE.bio}</p>
              <div className="mt-1 flex flex-wrap items-center justify-center gap-3 text-xs text-gray-500 dark:text-gray-400 sm:justify-start">
                <span className="flex items-center gap-1"><FiMapPin size={12} /> {MOCK_PROFILE.location}</span>
                <span className="flex items-center gap-1"><FiCalendar size={12} /> Joined {MOCK_PROFILE.joined}</span>
                <Badge variant="blue">{MOCK_PROFILE.heritage}</Badge>
              </div>
            </div>
            <Button variant="secondary" size="md" className="mt-3 sm:mt-0 sm:mb-2"><FiEdit2 size={14} className="mr-1" /> Edit Profile</Button>
          </div>

          {/* Stats */}
          <div className="mt-4 flex justify-center gap-6 border-b border-gray-200 pb-4 dark:border-dark-700 sm:justify-start">
            <div className="text-center"><span className="block text-lg font-bold text-gray-900 dark:text-white">{MOCK_PROFILE.posts}</span><span className="text-xs text-gray-500">Posts</span></div>
            <div className="text-center"><span className="block text-lg font-bold text-gray-900 dark:text-white">{MOCK_PROFILE.followers}</span><span className="text-xs text-gray-500">Followers</span></div>
            <div className="text-center"><span className="block text-lg font-bold text-gray-900 dark:text-white">{MOCK_PROFILE.following}</span><span className="text-xs text-gray-500">Following</span></div>
          </div>

          {/* Tabs */}
          <div className="mt-2 flex gap-1 overflow-x-auto">
            {TABS.map(t => <button key={t} onClick={() => setTab(t)} className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${tab === t ? 'bg-primary/10 text-primary' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-dark-800'}`}>{t}</button>)}
          </div>
        </div>

        {/* Tab Content */}
        <div className="px-4 py-4">
          {tab === 'Posts' && (
            <div className="mx-auto max-w-2xl space-y-4">
              {MOCK_POSTS.map(p => <PostCard key={p.id} post={p} />)}
            </div>
          )}
          {tab === 'About' && (
            <div className="mx-auto max-w-2xl rounded-xl border border-gray-200 bg-white p-6 dark:border-dark-700 dark:bg-dark-800">
              <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">About</h3>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <p className="flex items-center gap-2"><FiBriefcase size={16} className="text-gray-400" /> {MOCK_PROFILE.work}</p>
                <p className="flex items-center gap-2"><FiCalendar size={16} className="text-gray-400" /> {MOCK_PROFILE.education}</p>
                <p className="flex items-center gap-2"><FiMapPin size={16} className="text-gray-400" /> {MOCK_PROFILE.location}</p>
                <p className="flex items-center gap-2"><FiGlobe size={16} className="text-gray-400" /> {MOCK_PROFILE.languages.join(', ')}</p>
              </div>
            </div>
          )}
          {tab === 'Photos' && (
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
              {Array.from({ length: 8 }, (_, i) => (
                <div key={i} className={`aspect-square rounded-xl bg-gradient-to-br ${['from-primary/20 to-habesha-green/20', 'from-accent/20 to-primary/20', 'from-eritrean-blue/20 to-primary/20', 'from-habesha-red/20 to-habesha-yellow/20'][i % 4]}`} />
              ))}
            </div>
          )}
          {tab === 'Connections' && (
            <div className="mx-auto max-w-2xl grid gap-3 sm:grid-cols-2">
              {['Selam Tekle', 'Dawit Mekonnen', 'Hiwet G.', 'Kidist Abebe', 'Yonas Haile', 'Meron Berhe'].map(name => (
                <div key={name} className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 dark:border-dark-700 dark:bg-dark-800">
                  <Avatar name={name} size="md" />
                  <div className="flex-1"><p className="text-sm font-semibold text-gray-900 dark:text-white">{name}</p></div>
                  <Button variant="ghost" size="sm">Following</Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
