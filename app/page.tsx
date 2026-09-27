"use client";

import React, { useState, useEffect } from 'react';
import { 
  Code2,
  Terminal,
  Server,
  Database,
  Cpu,
  Layers,
  Plug,
  Wrench,
  Sparkles,
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
  role: "Full-Stack Software Engineer",
  tagline: "Architecting scalable digital infrastructure & distributed applications.",
  location: "London, UK",
  email: "fathi.arvin@gmail.com",
  github: "https://github.com/arvinfathi",
  linkedin: "https://www.linkedin.com/in/arvinfathi/",
  cvLink: "https://drive.google.com/file/d/17K4wDWR0N7YbJdynK59s0EImzHgU0d2O/view",
};

const EXPERIENCE = [
  {
    company: "Foodsteps",
    role: "Software Engineer",
    period: "July 2026 – Present",
    description: "Product R&D team at a science-backed sustainability company whose platform measures the carbon footprint and environmental impact of food, from single ingredients to full recipes.",
    highlights: [
      "Building the core environmental impact engine in Python (Django) that scores ingredients and recipes, alongside Rust components and React front ends.",
      "Developing Django APIs, PostgreSQL data models and Celery workers behind the platform's impact data and background processing.",
      "Maintaining pytest suites and GitHub Actions CI/CD pipelines for automated testing and deployment.",
      "Introduced AI-assisted engineering with Claude Code to triage production defects faster and generate realistic QA test data from user stories."
    ],
    tech: ["Python", "Django", "Celery", "PostgreSQL", "Rust", "React", "GitHub Actions"]
  },
  {
    company: "CityFibre",
    role: "Software Engineer",
    period: "June 2021 – June 2026",
    description: "UK full-fibre network provider. Built internal finance portals and ERP automation, then customer-facing microservices for product ordering, network diagnostics and fault tolerance. Mentored junior developers through pair programming and code reviews.",
    highlights: [
      "Designed Product Ordering and Service Diagnostics APIs in Laravel handling 3,000+ orders a day.",
      "Migrated monolithic legacy applications to an event-driven architecture on Kafka, containerised with Docker.",
      "Saved ~£500K/year by replacing a third-party platform with an in-house Finance Portal integrated with Oracle NetSuite.",
      "Cut feature delivery time by 40% with a shared TypeScript component library (Vue.js, React).",
      "Introduced TDD with PHPUnit on legacy applications, reducing production bug reports by 25%."
    ],
    tech: ["PHP (Laravel)", "Python", "TypeScript", "Kafka", "AWS", "Terraform", "MuleSoft"]
  },
  {
    company: "Self-Employed",
    role: "Software Engineer & Consultant",
    period: "Sep 2018 – Aug 2020",
    description: "Delivered full-stack products end to end for clients in fintech, marketing and media, from architecture and build to cloud deployment on DigitalOcean.",
    highlights: [
      "Built a real-time Forex trading risk calculator in Next.js, giving traders instant risk assessment on their positions.",
      "Built a real-time body and hand gesture recognition app in Python with Google MediaPipe.",
      "Built a Python live-streaming tool using FFmpeg and RTMP to broadcast desktop video to mobile-first social platforms.",
      "Created an interactive AR marketing experience with Unity & Vuforia."
    ],
    tech: ["React", "Next.js", "Node.js", "Python", "FFmpeg", "Unity", "DigitalOcean"]
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
  { category: "Languages", icon: <Code2 size={20} />, items: ["Python", "TypeScript", "JavaScript", "PHP", "Rust", "Java", "C++", "SQL"] },
  { category: "Backend", icon: <Server size={20} />, items: ["Django", "Flask", "Celery", "Laravel", "Node.js", "REST APIs", "OpenAPI (Swagger)", "Auth0"] },
  { category: "Frontend", icon: <Terminal size={20} />, items: ["React", "Next.js", "Vue.js", "Vuex", "Tailwind CSS"] },
  { category: "Data & Messaging", icon: <Database size={20} />, items: ["PostgreSQL", "MySQL", "DynamoDB", "HBase", "Solr", "Kafka (Amazon MSK)"] },
  { category: "Cloud & DevOps", icon: <Cpu size={20} />, items: ["AWS (Lambda, EC2, S3, MSK)", "Terraform", "Packer", "Docker", "GitHub Actions", "Jenkins", "CI/CD"] },
  { category: "Architecture", icon: <Layers size={20} />, items: ["Microservices", "Event-Driven (EDA)", "Serverless", "SaaS", "TM Forum (SID/ODF)"] },
  { category: "Integrations", icon: <Plug size={20} />, items: ["Oracle NetSuite", "SuiteScript", "MuleSoft Anypoint"] },
  { category: "Practices & Tools", icon: <Wrench size={20} />, items: ["Agile (Scrum, Kanban)", "TDD", "pytest", "PHPUnit", "Code Review", "Jira", "Git", "Postman"] },
  { category: "AI-Assisted Development", icon: <Sparkles size={20} />, items: ["Claude Code", "GitHub Copilot", "Antigravity"] },
];

const CERTIFICATIONS = [
  "TM Forum Open API Practitioner Level (2025)",
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
