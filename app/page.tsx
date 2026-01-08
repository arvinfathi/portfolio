"use client";

import React, { useState, useEffect } from 'react';
import { 
  Code2,
  Terminal,
  Server,
  Database,
  Cpu,
  Layers,
} from 'lucide-react';

import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

// --- Data based on your CV ---

const PERSONAL_INFO = {
  name: "Arvin Fathi",
  role: "Software Engineer & Full-Stack Developer",
  tagline: "Architecting scalable digital infrastructure & distributed applications.",
  location: "London, UK",
  email: "fathi.arvin@gmail.com",
  github: "https://github.com/arvinfathi",
  linkedin: "https://www.linkedin.com/in/arvinfathi/",
  cvLink: "#", // Placeholder for actual PDF link
};

const EXPERIENCE = [
  {
    company: "CityFibre",
    role: "Software Engineer",
    period: "June 2021 – Present",
    description: "Architecting critical APIs and microservices for network diagnostics. Migrated legacy monoliths to Event-Driven Architecture (Kafka), ensuring high availability across the UK.",
    highlights: [
      "Saved ~£500K/year by replacing external platforms with an in-house Finance Portal (NetSuite/Vue.js).",
      "Boosted developer velocity by 40% through a shared Vue.js component library.",
      "Achieved TMF developer certification & adopted MuleSoft for unified API documentation."
    ],
    tech: ["TypeScript", "Kafka", "AWS", "MuleSoft", "Vue.js", "Docker"]
  },
  {
    company: "Self-Employed",
    role: "Software Engineer & Consultant",
    period: "Sep 2018 – Aug 2020",
    description: "Delivered full-stack solutions ranging from computer vision to FinTech risk assessment for various clients.",
    highlights: [
      "Built a Gesture Recognition App using Python & Google MediaPipe.",
      "Designed a real-time Trading Risk Calculator with Next.js.",
      "Created an interactive AR marketing tool using Unity & Vuforia."
    ],
    tech: ["React", "Next.js", "Python", "Node.js", "Unity"]
  },
  {
    company: "Ferdowsi University of Mashhad",
    role: "Software Engineer & Researcher",
    period: "Sep 2014 – Aug 2019",
    description: "Strategic Planner for Nexus Simulation Lab and Researcher in Web Technology Lab.",
    highlights: [
      "3rd Place at Iran Open 2015 & Top Tier at RoboCup Int. 2015 (China).",
      "Developed an academic search engine using Apache Nutch, Solr, and HBase."
    ],
    tech: ["C++", "Java", "Solr", "HBase", "Robotics"]
  }
];

const SKILLS = [
  { category: "Languages", icon: <Code2 size={20} />, items: ["TypeScript", "JavaScript", "PHP", "Python", "C++", "Java", "SQL"] },
  { category: "Frontend", icon: <Terminal size={20} />, items: ["React", "Next.js", "Vue.js", "Vuex", "Tailwind CSS"] },
  { category: "Backend", icon: <Server size={20} />, items: ["Node.js", "Laravel", "Flask", "MuleSoft Anypoint", "SuiteScript"] },
  { category: "Cloud & DevOps", icon: <Cpu size={20} />, items: ["AWS (Lambda, EC2, S3)", "Docker", "Kafka", "CI/CD", "Jenkins"] },
  { category: "Architecture", icon: <Layers size={20} />, items: ["Event-Driven (EDA)", "Microservices", "REST", "TM Forum (SID/ODF)"] },
  { category: "Data", icon: <Database size={20} />, items: ["DynamoDB", "MySQL", "HBase", "Solr"] },
];

const CERTIFICATIONS = [
  "TM Forum Open API Practitioners Level (2025)",
  "TM Forum Foundation SID, ODA, ODF (2024)",
  "EuroCert C++ & Android Dev (2016)"
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for navbar styling and active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'experience', 'skills', 'about'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-300 selection:bg-blue-500/30 font-sans">
      <Navigation 
        activeSection={activeSection}
        scrolled={scrolled}
        scrollTo={scrollTo}
        email={PERSONAL_INFO.email}
      />
      
      <HeroSection 
        personalInfo={PERSONAL_INFO}
        scrollTo={scrollTo}
      />
      
      <ExperienceSection experiences={EXPERIENCE} />
      
      <SkillsSection 
        skills={SKILLS}
        certifications={CERTIFICATIONS}
      />
      
      <AboutSection />
      
      <Footer 
        github={PERSONAL_INFO.github}
        linkedin={PERSONAL_INFO.linkedin}
        email={PERSONAL_INFO.email}
      />
    </div>
  );
}