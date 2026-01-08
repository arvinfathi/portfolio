import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-300 text-xs font-medium rounded-full border border-blue-500/20">
      {children}
    </span>
  );
}

