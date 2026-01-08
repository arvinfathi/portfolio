"use client";

import React from 'react';
import { Mail, Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

interface NavigationProps {
  activeSection: string;
  scrolled: boolean;
  scrollTo: (id: string) => void;
  email: string;
}

export default function Navigation({ activeSection, scrolled, scrollTo, email }: NavigationProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800' : 'bg-transparent'}`}>
      <div className="relative max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
          Rwin<span className="text-blue-500">.UK</span>
        </div>
        
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex gap-8 text-sm font-medium">
          {['Home', 'Experience', 'Skills', 'About'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className={`hover:text-blue-400 transition-colors ${activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-slate-600 dark:text-slate-400'}`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors border border-slate-200 dark:border-slate-700"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <a 
            href={email ? `mailto:${email}` : '#'}
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-lg transition-colors text-sm font-medium border border-slate-200 dark:border-slate-700"
          >
            <Mail size={20} />
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
}
