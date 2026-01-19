"use client";

import React from 'react';
import { Download, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import SocialLink from './ui/SocialLink';

interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  cvLink: string;
}

interface HeroSectionProps {
  personalInfo: PersonalInfo;
  scrollTo: (id: string) => void;
}

export default function HeroSection({ personalInfo, scrollTo }: HeroSectionProps) {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-8 animate-fade-in-up">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium border border-blue-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Open to new opportunities
            </div>
            
            {/* Personalized Greeting */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
                Hi <span className="inline-block animate-wave">👋</span>
              </h1>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 animate-gradient">
                  {personalInfo.name}
                </span>
              </h2>
            </div>
            
            <p className="text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-300">
              {personalInfo.role}
            </p>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              {personalInfo.tagline} I specialize in scalable microservices, Event-Driven Architecture, and enterprise integration. Currently optimizing network technology at CityFibre.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href={personalInfo.cvLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2"
              >
                <Download size={20} />
                Download CV
              </a>
              <div className="flex gap-3">
                <SocialLink href={personalInfo.github} icon={Github} label="GitHub" />
                <SocialLink href={personalInfo.linkedin} icon={Linkedin} label="LinkedIn" />
                <SocialLink href={`mailto:${personalInfo.email}`} icon={Mail} label="Email" />
              </div>
            </div>
          </div>

          {/* Abstract Tech Visual */}
          <div className="flex-1 w-full min-w-0 max-w-full md:max-w-none relative">
            <div className="aspect-square rounded-full bg-gradient-to-tr from-blue-500/20 to-emerald-500/20 blur-3xl absolute inset-0 -z-10 animate-pulse"></div>
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 md:p-6 shadow-2xl relative overflow-hidden">
              <div className="flex items-center gap-2 mb-4 border-b border-slate-200 dark:border-slate-800 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                <span className="text-xs text-slate-600 dark:text-slate-500 ml-auto font-mono">portfolio.config.ts</span>
              </div>
              <div className="space-y-3 font-mono text-sm overflow-x-auto pb-2 custom-scrollbar">
                <div className="flex gap-2 whitespace-nowrap">
                  <span className="text-purple-400">const</span>
                  <span className="text-blue-400">engineer</span>
                  <span className="text-slate-600 dark:text-slate-400">=</span>
                  <span className="text-yellow-300">{"{"}</span>
                </div>
                <div className="pl-4 flex gap-2 whitespace-nowrap">
                  <span className="text-slate-600 dark:text-slate-400">name:</span>
                  <span className="text-green-400">"{personalInfo.name}"</span>,
                </div>
                <div className="pl-4 flex gap-2 whitespace-nowrap">
                  <span className="text-slate-600 dark:text-slate-400">focus:</span>
                  <span className="text-green-400">"Event-Driven Architecture"</span>,
                </div>
                <div className="pl-4 flex gap-2 whitespace-nowrap">
                  <span className="text-slate-600 dark:text-slate-400">stack:</span>
                  <span className="text-yellow-300">[</span>
                  <span className="text-green-400">"TypeScript"</span>,
                  <span className="text-green-400">"Kafka"</span>,
                  <span className="text-green-400">"AWS"</span>
                  <span className="text-yellow-300">]</span>,
                </div>
                <div className="pl-4 flex gap-2 whitespace-nowrap">
                  <span className="text-slate-600 dark:text-slate-400">location:</span>
                  <span className="text-green-400">"{personalInfo.location}"</span>
                </div>
                <div className="flex gap-2 whitespace-nowrap">
                  <span className="text-yellow-300">{"}"}</span>;
                </div>
                <div className="pt-4 text-slate-600 dark:text-slate-500 whitespace-nowrap">
                  // Ready to deploy scalable solutions...
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 flex justify-center animate-bounce text-slate-500">
          <button onClick={() => scrollTo('about')} aria-label="Scroll down">
            <ChevronDown size={24} />
          </button>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
        
        .animate-wave {
          animation: wave 2.5s infinite;
          transform-origin: 70% 70%;
          display: inline-block;
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }
      `}</style>
    </section>
  );
}
