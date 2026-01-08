import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  id?: string;
}

export default function SectionTitle({ children, id }: SectionTitleProps) {
  return (
    <h2 id={id} className="text-3xl md:text-4xl font-bold mb-12 text-slate-900 dark:text-slate-100 flex items-center gap-3">
      {/* <span className="w-8 h-1 bg-blue-500 rounded-full"></span> */}
      {children}
    </h2>
  );
}

