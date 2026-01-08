"use client";

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import SocialLink from './ui/SocialLink';

interface FooterProps {
  github: string;
  linkedin: string;
  email: string;
}

export default function Footer({ github, linkedin, email }: FooterProps) {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-center px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Let's Connect</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          Currently available for interesting opportunities in distributed systems and backend engineering.
        </p>
        
        <div className="flex justify-center gap-6 mb-12">
          <SocialLink href={github} icon={Github} label="GitHub" />
          <SocialLink href={linkedin} icon={Linkedin} label="LinkedIn" />
          <SocialLink href={`mailto:${email}`} icon={Mail} label="Email" />
        </div>
        
        <div className="text-slate-500 dark:text-slate-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Arvin Fathi. All rights reserved.</p>
          <p className="mt-2">Built with Next.js, React & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
