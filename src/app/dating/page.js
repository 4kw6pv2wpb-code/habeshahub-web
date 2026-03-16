'use client';

import { useState, useEffect } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { ProfileCard } from '@/components/dating/ProfileCard';
import { MatchesList } from '@/components/dating/MatchesList';
import { FiHeart, FiX, FiStar, FiUser, FiSettings, FiLoader } from 'react-icons/fi';
import { datingApi } from '@/lib/api';

const TABS = ['Discover', 'Matches'];

export default function DatingPage() {
  const [tab, setTab] = useState('Discover');
  const [profiles, setProfiles] = useState([]);
  const [matches, setMatches] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        if (tab === 'Discover') {
          const res = await datingApi.getDiscover();
          setProfiles(res.data?.data || res.data || []);
          setCurrentIdx(0);
        } else {
          const res = await datingApi.getMatches();
          setMatches(res.data?.data || res.data || []);
        }
      } catch (err) {
        setError('Could not load profiles.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [tab]);

  const handleLike = async () => {
    if (profiles[currentIdx]) {
      try {
        await datingApi.likeProfile(profiles[currentIdx].id);
      } catch (err) { console.error(err); }
      setCurrentIdx(prev => prev + 1);
    }
  };

  const handlePass = async () => {
    if (profiles[currentIdx]) {
      try {
        await datingApi.passProfile(profiles[currentIdx].id);
      } catch (err) { console.error(err); }
      setCurrentIdx(prev => prev + 1);
    }
  };

  const current = profiles[currentIdx];

  return (
    <AppLayout>
      <div className="mx-auto max-w-lg px-4 py-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">HabeshaMatch</h1>
          <button><FiSettings className="text-gray-500" /></button>
        </div>

        <div className="mb-6 flex gap-2">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 rounded-full py-2 text-sm font-medium transition ${
                tab === t ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {loading && (
          <div className="flex justify-center py-12">
            <FiLoader className="w-8 h-8 animate-spin text-primary" />
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-center my-4">{error}</div>
        )}

        {tab === 'Discover' && !loading && (
          current ? (
            <div className="space-y-4">
              <ProfileCard profile={current} />
              <div className="flex justify-center gap-6">
                <button onClick={handlePass} className="rounded-full bg-gray-100 p-4 text-gray-500 hover:bg-red-50 hover:text-red-500 transition">
                  <FiX className="w-8 h-8" />
                </button>
                <button onClick={handleLike} className="rounded-full bg-primary/10 p-4 text-primary hover:bg-primary hover:text-white transition">
                  <FiHeart className="w-8 h-8" />
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm p-8 text-center text-gray-500">
              <FiUser className="w-12 h-12 mx-auto mb-3 text-gray-300" />
              <p className="text-lg font-medium">No more profiles</p>
              <p className="mt-1">Check back later for new people!</p>
            </div>
          )
        )}

        {tab === 'Matches' && !loading && (
          matches.length > 0 ? (
            <MatchesList matches={matches} />
          ) : (
            <div className="bg-white rounded-xl shadow-sm p-8 text-center text-gray-500">
              <FiHeart className="w-12 h-12 mx-auto mb-3 text-gray-300" />
              <p className="text-lg font-medium">No matches yet</p>
              <p className="mt-1">Keep swiping to find your match!</p>
            </div>
          )
        )}
      </div>
    </AppLayout>
  );
}
