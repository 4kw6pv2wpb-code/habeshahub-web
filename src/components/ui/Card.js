'use client';

export function Card({ children, className = '', onClick, hover = true }) {
  return (
    <div onClick={onClick} className={`rounded-xl border border-gray-200 bg-white shadow-sm dark:border-dark-700 dark:bg-dark-800 ${hover ? 'transition-shadow hover:shadow-md' : ''} ${onClick ? 'cursor-pointer' : ''} ${className}`}>
      {children}
    </div>
  );
}
