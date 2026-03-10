'use client';

const sizeMap = { sm: 'h-8 w-8 text-xs', md: 'h-10 w-10 text-sm', lg: 'h-12 w-12 text-base', xl: 'h-16 w-16 text-lg' };
const colors = ['bg-primary', 'bg-accent', 'bg-habesha-green', 'bg-eritrean-blue', 'bg-habesha-red'];

export function Avatar({ name = '', src, size = 'md', online = false, className = '' }) {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  const colorIdx = name.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % colors.length;
  return (
    <div className={`relative inline-flex shrink-0 items-center justify-center rounded-full ${sizeMap[size]} ${className}`}>
      {src ? (
        <img src={src} alt={name} className={`rounded-full object-cover ${sizeMap[size]}`} />
      ) : (
        <div className={`flex items-center justify-center rounded-full ${sizeMap[size]} ${colors[colorIdx]} font-semibold text-white`}>{initials || 'U'}</div>
      )}
      {online && <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500 dark:border-dark-800" />}
    </div>
  );
}
