"use client";

import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/50 dark:to-slate-950">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">About Me</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
          I am a passionate Software Engineer based in London with a Master's in Advanced Computer Science. 
          My journey began with robotics simulations in the RoboCup leagues and has evolved into building 
          enterprise-scale distributed systems. I thrive on solving complex architectural challenges, 
          optimizing legacy infrastructure, and mentoring the next generation of developers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">M.Sc.</div>
            <div className="text-sm text-slate-600 dark:text-slate-500">Advanced Computer Science</div>
            <div className="text-xs text-blue-500 mt-1">University of Hertfordshire</div>
          </div>
          <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">5+</div>
            <div className="text-sm text-slate-600 dark:text-slate-500">Years Commercial Experience</div>
          </div>
          <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">London</div>
            <div className="text-sm text-slate-600 dark:text-slate-500">Based in UK</div>
          </div>
        </div>
      </div>
    </section>
  );
}
