'use client';

import { useState } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { DiscussionCard } from '@/components/community/DiscussionCard';
import { FiPlus, FiTrendingUp, FiHash } from 'react-icons/fi';

const TABS = ['All Posts', 'Questions', 'Discussions', 'Announcements'];

const TRENDING_TOPICS = [
  { tag: 'RemittanceTips', count: 124 },
  { tag: 'HabeshaFood', count: 98 },
  { tag: 'DiasporaLife', count: 87 },
  { tag: 'StartupAdvice', count: 65 },
  { tag: 'CulturalIdentity', count: 54 },
  { tag: 'LearnAmharic', count: 43 },
  { tag: 'SeattleHabesha', count: 38 },
  { tag: 'EritreaNews', count: 31 },
];

const MOCK_POSTS = [
  {
    id: '1',
    tag: 'Question',
    title: 'Best Habesha restaurants in Seattle?',
    preview:
      'Just moved to Seattle and craving some good injera. Any recommendations for authentic Ethiopian or Eritrean restaurants? Bonus if they have a good veggie combo for fasting days.',
    author: { name: 'Kidist Alemayehu', avatar: null },
    replyCount: 23,
    likeCount: 45,
    views: 312,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '2',
    tag: 'Advice',
    title: 'Tips for sending money back home',
    preview:
      'I have been using different services to send money to family in Addis. Here are my experiences with fees, exchange rates, and speed. Hope this helps others in the community.',
    author: { name: 'Dawit Tesfaye', avatar: null },
    replyCount: 56,
    likeCount: 128,
    views: 890,
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '3',
    tag: 'Discussion',
    title: 'Cultural identity as a first-gen diaspora kid',
    preview:
      'Growing up between two worlds is beautiful but challenging. How do you all maintain your Habesha identity while also embracing where you grew up? Would love to hear your stories.',
    author: { name: 'Meron Haile', avatar: null },
    replyCount: 89,
    likeCount: 234,
    views: 1520,
    createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '4',
    tag: 'Language',
    title: 'Learning Tigrinya resources — what works?',
    preview:
      'I want to improve my Tigrinya. My parents speak it but I never learned properly. Any good apps, YouTube channels, or tutors you recommend? I am based in DC.',
    author: { name: 'Yonas Berhe', avatar: null },
    replyCount: 34,
    likeCount: 67,
    views: 445,
    createdAt: new Date(Date.now() - 18 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '5',
    tag: 'Business',
    title: 'Starting a business — advice needed from the community',
    preview:
      'Thinking of opening a small Habesha grocery store in Minneapolis. Anyone here who has started a business? Would appreciate advice on suppliers, licensing, and finding the right location.',
    author: { name: 'Selam Gebremedhin', avatar: null },
    replyCount: 41,
    likeCount: 89,
    views: 678,
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '6',
    tag: 'Food',
    title: 'My injera recipe — finally perfected it!',
    preview:
      'After years of trial and error, I finally have a foolproof injera recipe that tastes just like back home. The secret is the fermentation time and the right teff flour. Let me share...',
    author: { name: 'Tigist Wolde', avatar: null },
    replyCount: 67,
    likeCount: 203,
    views: 1234,
    createdAt: new Date(Date.now() - 36 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '7',
    tag: 'Announcement',
    title: 'Ethiopian New Year celebration in DC — Sept 11!',
    preview:
      'The Ethiopian Community Association of DC is organizing a big Enkutatash celebration. Live music, traditional food, and cultural performances. All Habesha families welcome!',
    author: { name: 'Abebe Kebede', avatar: null },
    replyCount: 18,
    likeCount: 156,
    views: 892,
    createdAt: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '8',
    tag: 'Culture',
    title: 'Preserving our coffee ceremony tradition',
    preview:
      'The coffee ceremony is so much more than just making coffee. It is about community, conversation, and connection. How do you keep this tradition alive in your household?',
    author: { name: 'Hiwet Tekle', avatar: null },
    replyCount: 52,
    likeCount: 178,
    views: 1045,
    createdAt: new Date(Date.now() - 72 * 60 * 60 * 1000).toISOString(),
  },
];

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState('All Posts');

  const filteredPosts = MOCK_POSTS.filter((post) => {
    if (activeTab === 'All Posts') return true;
    if (activeTab === 'Questions') return post.tag === 'Question';
    if (activeTab === 'Discussions') return post.tag === 'Discussion' || post.tag === 'Culture';
    if (activeTab === 'Announcements') return post.tag === 'Announcement';
    return true;
  });

  return (
    <AppLayout>
      <div className="mx-auto max-w-7xl px-4 py-6">
        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Community</h1>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Connect with fellow Habesha around the world
            </p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary/90">
            <FiPlus size={18} />
            Start a Discussion
          </button>
        </div>

        {/* Tabs */}
        <div className="mb-6 flex gap-1 overflow-x-auto rounded-xl border border-gray-200 bg-white p-1 dark:border-dark-700 dark:bg-dark-800">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-primary text-white'
                  : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-dark-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex gap-6">
          {/* Main feed */}
          <div className="flex-1">
            <div className="flex flex-col gap-3">
              {filteredPosts.map((post) => (
                <DiscussionCard key={post.id} post={post} />
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="rounded-xl border border-gray-200 bg-white py-16 text-center dark:border-dark-700 dark:bg-dark-800">
                <FiHash className="mx-auto mb-3 text-gray-300 dark:text-dark-600" size={48} />
                <p className="text-gray-500 dark:text-gray-400">No posts in this category yet.</p>
              </div>
            )}
          </div>

          {/* Trending sidebar (desktop) */}
          <div className="hidden w-72 shrink-0 lg:block">
            <div className="sticky top-20 rounded-xl border border-gray-200 bg-white p-4 dark:border-dark-700 dark:bg-dark-800">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white">
                <FiTrendingUp size={16} className="text-primary" />
                Trending Topics
              </div>
              <div className="flex flex-col gap-2">
                {TRENDING_TOPICS.map((topic) => (
                  <button
                    key={topic.tag}
                    className="flex items-center justify-between rounded-lg px-2 py-1.5 text-left text-sm transition-colors hover:bg-gray-50 dark:hover:bg-dark-700"
                  >
                    <span className="text-gray-700 dark:text-gray-300">#{topic.tag}</span>
                    <span className="text-xs text-gray-400">{topic.count} posts</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Ethiopian tricolor divider */}
            <div className="mt-4 flex h-1 overflow-hidden rounded-full">
              <div className="flex-1 bg-habesha-green" />
              <div className="flex-1 bg-habesha-yellow" />
              <div className="flex-1 bg-habesha-red" />
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
