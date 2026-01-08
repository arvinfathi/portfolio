"use client";

import React from 'react';
import { Code2, Terminal, Server, Cpu, Layers, Database, LucideIcon } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import Card from './ui/Card';
import Badge from './ui/Badge';

interface SkillGroup {
  category: string;
  icon: React.ReactElement<LucideIcon>;
  items: string[];
}

interface SkillsSectionProps {
  skills: SkillGroup[];
  certifications: string[];
}

export default function SkillsSection({ skills, certifications }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle id="skills-title">🛠 Technical Arsenal</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <Card key={index} className="h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg">
                  {skillGroup.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{skillGroup.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications Mini-Section */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Certifications & Awards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 text-sm text-slate-700 dark:text-slate-300">
                <div className="w-1 h-8 bg-emerald-500 rounded-full"></div>
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
