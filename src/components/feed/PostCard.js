'use client';

import { useState } from 'react';
import { FiHeart, FiMessageCircle, FiShare2, FiBookmark, FiMoreHorizontal } from 'react-icons/fi';
import { Avatar } from '@/components/ui/Avatar';

export function PostCard({ post }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes || 0);

  const toggleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-dark-700 dark:bg-dark-800">
      {/* Header */}
      <div className="mb-3 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <Avatar name={post.author} size="md" />
          <div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">{post.author}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{post.time} · {post.location}</p>
          </div>
        </div>
        <button className="rounded-lg p-1 text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-700"><FiMoreHorizontal size={18} /></button>
      </div>

      {/* Content */}
      <p className="mb-3 text-sm leading-relaxed text-gray-800 dark:text-gray-200">{post.content}</p>

      {post.image && (
        <div className="mb-3 overflow-hidden rounded-xl">
          <div className={`flex h-64 items-center justify-center ${post.imageBg || 'bg-gradient-to-br from-primary/20 to-habesha-green/20'}`}>
            <span className="text-sm text-gray-500">{post.imageAlt || '📷 Photo'}</span>
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="mb-2 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
        <span>{likeCount} likes</span>
        <span>{post.comments || 0} comments · {post.shares || 0} shares</span>
      </div>

      <div className="border-t border-gray-100 pt-2 dark:border-dark-700">
        <div className="flex items-center justify-between">
          <button onClick={toggleLike} className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${liked ? 'text-accent' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-dark-700'}`}>
            <FiHeart size={18} className={liked ? 'fill-accent' : ''} /> Like
          </button>
          <button className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-dark-700">
            <FiMessageCircle size={18} /> Comment
          </button>
          <button className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-dark-700">
            <FiShare2 size={18} /> Share
          </button>
          <button onClick={() => setSaved(!saved)} className={`rounded-lg p-1.5 transition-colors ${saved ? 'text-primary' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-dark-700'}`}>
            <FiBookmark size={18} className={saved ? 'fill-primary' : ''} />
          </button>
        </div>
      </div>
    </div>
  );
}
