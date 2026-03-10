'use client';

import { useState } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { ProfileCard } from '@/components/dating/ProfileCard';
import { MatchesList } from '@/components/dating/MatchesList';
import { FiHeart, FiX, FiStar, FiUser, FiSettings } from 'react-icons/fi';

const MOCK_PROFILES = [
  {
    id: 'p1',
    name: 'Selam',
    age: 27,
    heritage: 'Ethiopian',
    location: 'Washington, DC',
    distance: '3 mi',
    bio: 'Proud Habesha. Coffee lover, med student, and weekend injera maker. Looking for someone who values family, faith, and good conversation over buna.',
    interests: ['Coffee', 'Medicine', 'Cooking', 'Travel'],
    languages: ['Amharic', 'English'],
  },
  {
    id: 'p2',
    name: 'Dawit',
    age: 30,
    heritage: 'Eritrean',
    location: 'Silver Spring, MD',
    distance: '8 mi',
    bio: 'Software engineer by day, amateur chef by night. I can make a mean zigni. Looking for my other half to explore the diaspora life together.',
    interests: ['Tech', 'Cooking', 'Soccer', 'Music'],
    languages: ['Tigrinya', 'English'],
  },
  {
    id: 'p3',
    name: 'Hiwet',
    age: 25,
    heritage: 'Eritrean',
    location: 'Arlington, VA',
    distance: '5 mi',
    bio: 'First-gen, proud of my roots. Love hiking, reading, and a good coffee ceremony. Seeking someone who respects tradition but embraces the future.',
    interests: ['Hiking', 'Reading', 'Photography', 'Yoga'],
    languages: ['Tigrinya', 'English', 'Italian'],
  },
  {
    id: 'p4',
    name: 'Yonas',
    age: 29,
    heritage: 'Ethiopian',
    location: 'Bethesda, MD',
    distance: '10 mi',
    bio: "Dentist who loves to laugh. Big family guy — Sunday dinners at my mom's are non-negotiable. Looking for someone kind, ambitious, and who loves Habesha culture.",
    interests: ['Family', 'Basketball', 'Movies', 'Volunteering'],
    languages: ['Amharic', 'English'],
  },
  {
    id: 'p5',
    name: 'Meron',
    age: 26,
    heritage: 'Ethiopian',
    location: 'Alexandria, VA',
    distance: '12 mi',
    bio: "Creative soul — graphic designer and part-time painter. My art is inspired by our beautiful culture. Let's grab coffee and talk about life.",
    interests: ['Art', 'Design', 'Coffee', 'Dance'],
    languages: ['Amharic', 'Oromiffa', 'English'],
  },
];

export default function DatingPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasProfile, setHasProfile] = useState(true);
  const [lastAction, setLastAction] = useState(null);

  const currentProfile = MOCK_PROFILES[currentIndex];
  const isOutOfProfiles = currentIndex >= MOCK_PROFILES.length;

  const handleAction = (action) => {
    setLastAction(action);
    setTimeout(() => {
      setLastAction(null);
      setCurrentIndex((prev) => prev + 1);
    }, 300);
  };

  // Setup card for users without a dating profile
  if (!hasProfile) {
    return (
      <AppLayout>
        <div className="mx-auto max-w-lg px-4 py-12">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center dark:border-dark-700 dark:bg-dark-800">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <FiHeart size={36} className="text-primary" />
            </div>
            <h1 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">
              Habesha<span className="text-primary">Match</span>
            </h1>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
              Find your other half in the diaspora
            </p>
            <div className="mb-6 rounded-xl bg-gray-50 p-4 dark:bg-dark-700">
              <div className="mx-auto mb-3 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-amber-100 dark:from-primary/30 dark:to-amber-900/20">
                <FiUser size={40} className="text-primary/40" />
              </div>
              <h3 className="mb-1 text-base font-semibold text-gray-900 dark:text-white">
                Create Your Dating Profile
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Tell the community about yourself — your heritage, interests, and what you&apos;re looking for.
              </p>
            </div>
            <button
              onClick={() => setHasProfile(true)}
              className="w-full rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
            >
              Get Started
            </button>
          </div>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="mx-auto max-w-lg px-4 py-6">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <FiHeart size={22} className="text-primary" />
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                Habesha<span className="text-primary">Match</span>
              </h1>
            </div>
            <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
              Find your other half in the diaspora
            </p>
          </div>
          <button className="rounded-full p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-dark-700">
            <FiSettings size={20} />
          </button>
        </div>

        {/* Matches row */}
        <MatchesList />

        {/* Ethiopian tricolor divider */}
        <div className="mb-4 flex h-0.5 overflow-hidden rounded-full">
          <div className="flex-1 bg-habesha-green" />
          <div className="flex-1 bg-habesha-yellow" />
          <div className="flex-1 bg-habesha-red" />
        </div>

        {/* Profile card or out-of-profiles state */}
        {isOutOfProfiles ? (
          <div className="rounded-2xl border border-gray-200 bg-white py-16 text-center dark:border-dark-700 dark:bg-dark-800">
            <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <FiHeart size={28} className="text-primary" />
            </div>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              That&apos;s everyone for now!
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Check back later for new profiles in your area.
            </p>
          </div>
        ) : (
          <>
            {/* Card with animation */}
            <div
              className={`transition-all duration-300 ${
                lastAction === 'pass'
                  ? '-translate-x-8 opacity-0'
                  : lastAction === 'like'
                    ? 'translate-x-8 opacity-0'
                    : lastAction === 'superlike'
                      ? '-translate-y-4 scale-105 opacity-0'
                      : ''
              }`}
            >
              <ProfileCard profile={currentProfile} />
            </div>

            {/* Action buttons */}
            <div className="mt-5 flex items-center justify-center gap-5">
              {/* Pass */}
              <button
                onClick={() => handleAction('pass')}
                className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-habesha-red/30 bg-white text-habesha-red shadow-md transition-all hover:scale-110 hover:border-habesha-red hover:shadow-lg active:scale-95 dark:bg-dark-800"
              >
                <FiX size={28} strokeWidth={3} />
              </button>

              {/* Super Like */}
              <button
                onClick={() => handleAction('superlike')}
                className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/30 bg-white text-primary shadow-md transition-all hover:scale-110 hover:border-primary hover:shadow-lg active:scale-95 dark:bg-dark-800"
              >
                <FiStar size={22} strokeWidth={2.5} />
              </button>

              {/* Like */}
              <button
                onClick={() => handleAction('like')}
                className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-habesha-green/30 bg-white text-habesha-green shadow-md transition-all hover:scale-110 hover:border-habesha-green hover:shadow-lg active:scale-95 dark:bg-dark-800"
              >
                <FiHeart size={28} strokeWidth={2.5} />
              </button>
            </div>
          </>
        )}
      </div>
    </AppLayout>
  );
}
