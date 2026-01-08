"use client";

import React from 'react';
import SectionTitle from './ui/SectionTitle';
import Card from './ui/Card';

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <SectionTitle id="experience-title">🚀 Experience</SectionTitle>
        
        <div className="space-y-12">
          {experiences.map((job, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              {/* Timeline Line (Desktop) */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-300 dark:bg-slate-800 -translate-x-1/2"></div>
              
              <div className={`md:flex items-start justify-between gap-12 group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-white dark:bg-slate-800 border-2 border-blue-500 -translate-x-[5px] md:-translate-x-1/2 mt-1.5 z-10 group-hover:bg-blue-500 transition-colors"></div>

                {/* Date (Desktop) */}
                <div className={`hidden md:block w-1/2 py-1 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <span className="text-slate-600 dark:text-slate-400 font-mono text-sm">{job.period}</span>
                </div>

                {/* Content Card */}
                <div className="md:w-1/2">
                  <Card className="relative hover:-translate-y-1 transition-transform">
                    {/* Date (Mobile) */}
                    <div className="md:hidden text-slate-600 dark:text-slate-400 font-mono text-xs mb-2">{job.period}</div>
                    
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{job.role}</h3>
                    <div className="text-blue-600 dark:text-blue-400 font-medium mb-4 flex items-center gap-2">
                      {job.company}
                      {index === 0 && <span className="text-[10px] bg-blue-500/20 text-blue-600 dark:text-blue-300 px-2 py-0.5 rounded-full">Current</span>}
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                      {job.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {job.highlights.map((highlight, i) => (
                        <li key={i} className="text-slate-700 dark:text-slate-300 text-sm flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {job.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs text-slate-700 dark:text-slate-400 border border-slate-300 dark:border-slate-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
