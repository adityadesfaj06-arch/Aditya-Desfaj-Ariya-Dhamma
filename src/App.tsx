/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ToolsSection } from './components/ToolsSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ExperienceEducation } from './components/ExperienceEducation';
import { FooterSection } from './components/FooterSection';
import { ProjectModal } from './components/ProjectModal';
import { ProjectItem } from './data/portfolioData';

function PortfolioApp() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <div className="min-h-screen bg-[#fafaff] text-slate-800 flex flex-col selection:bg-purple-200 selection:text-purple-900 font-sans">
      {/* Navigation Top Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
        <SkillsSection />
        <ToolsSection />
        <PhilosophySection />
        <ExperienceEducation />
      </main>

      {/* Footer & Connect */}
      <FooterSection />

      {/* Project Detail Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioApp />
    </LanguageProvider>
  );
}
