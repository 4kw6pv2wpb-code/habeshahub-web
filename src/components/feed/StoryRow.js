'use client';

import { FiPlus } from 'react-icons/fi';

const MOCK_STORIES = [
  { id: 1, name: 'Selam T.', color: 'from-primary to-habesha-red' },
  { id: 2, name: 'Dawit M.', color: 'from-habesha-green to-eritrean-blue' },
  { id: 3, name: 'Hiwet G.', color: 'from-accent to-primary' },
  { id: 4, name: 'Kidist A.', color: 'from-eritrean-blue to-habesha-green' },
  { id: 5, name: 'Yonas H.', color: 'from-habesha-red to-primary' },
  { id: 6, name: 'Meron B.', color: 'from-primary to-accent' },
  { id: 7, name: 'Abel K.', color: 'from-habesha-green to-primary' },
];

export function StoryRow() {
  return (
    <div className="mb-4 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
      {/* Add Story */}
      <div className="flex shrink-0 flex-col items-center gap-1">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-gray-300 dark:border-dark-600">
          <FiPlus size={20} className="text-gray-400" />
        </div>
        <span className="text-xs text-gray-500">Add Story</span>
      </div>
      {/* Stories */}
      {MOCK_STORIES.map((s) => (
        <div key={s.id} className="flex shrink-0 cursor-pointer flex-col items-center gap-1">
          <div className={`rounded-full bg-gradient-to-br ${s.color} p-0.5`}>
            <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-white bg-gray-200 text-sm font-semibold text-gray-600 dark:border-dark-800 dark:bg-dark-700 dark:text-gray-300">
              {s.name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>
          <span className="max-w-[64px] truncate text-xs text-gray-600 dark:text-gray-400">{s.name}</span>
        </div>
      ))}
    </div>
  );
}
