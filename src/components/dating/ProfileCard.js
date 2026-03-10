'use client';

import { FiMapPin, FiUser } from 'react-icons/fi';

export function ProfileCard({ profile }) {
  return (
    <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md dark:border-dark-700 dark:bg-dark-800">
      {/* Photo area */}
      <div className="relative flex h-96 items-end bg-gradient-to-b from-primary/20 via-primary/10 to-primary/30 dark:from-primary/30 dark:via-primary/10 dark:to-dark-900/80">
        {/* Silhouette placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <FiUser size={80} className="text-primary/20" />
        </div>

        {/* Gradient overlay at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />

        {/* Info overlay */}
        <div className="relative z-10 w-full p-4">
          <div className="mb-1 flex items-center gap-2">
            <h2 className="text-2xl font-bold text-white">
              {profile.name}, {profile.age}
            </h2>
          </div>

          {/* Heritage badge */}
          <div className="mb-2 flex items-center gap-2">
            <span
              className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                profile.heritage === 'Ethiopian'
                  ? 'bg-habesha-green/20 text-habesha-green'
                  : profile.heritage === 'Eritrean'
                    ? 'bg-eritrean-blue/20 text-eritrean-blue'
                    : 'bg-primary/20 text-primary'
              }`}
            >
              {profile.heritage}
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-300">
              <FiMapPin size={12} />
              {profile.location}
              {profile.distance && ` · ${profile.distance}`}
            </span>
          </div>

          {/* Bio snippet */}
          <p className="mb-2 line-clamp-2 text-sm text-gray-200">{profile.bio}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {profile.interests?.map((interest) => (
              <span
                key={interest}
                className="rounded-full bg-white/15 px-2 py-0.5 text-xs text-white backdrop-blur-sm"
              >
                {interest}
              </span>
            ))}
            {profile.languages?.map((lang) => (
              <span
                key={lang}
                className="rounded-full bg-primary/20 px-2 py-0.5 text-xs text-primary backdrop-blur-sm"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
