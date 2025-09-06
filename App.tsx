import React, { useState, useEffect } from 'react';
import { siteData, uiStrings } from './data';
import Header from './components/Header';
import Section from './components/Section';
import ExperienceCard from './components/ExperienceCard';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';
import MoonIcon from './components/icons/MoonIcon';
import SunIcon from './components/icons/SunIcon';

const App: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const currentData = siteData[language];
  const t = uiStrings[language];

  return (
    <div className={`min-h-screen text-gray-800 dark:text-gray-200 antialiased ${language === 'ar' ? 'font-cairo' : 'font-sans'} bg-gray-50 dark:bg-slate-900`}>
      
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
        <button 
          onClick={toggleTheme} 
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-2 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-110 transition-transform"
          aria-label={t.toggleTheme}
        >
          {theme === 'light' ? <MoonIcon className="w-5 h-5 text-gray-700" /> : <SunIcon className="w-5 h-5 text-yellow-400" />}
        </button>
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-1 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex text-sm font-bold">
          <button onClick={() => setLanguage('en')} className={`px-3 py-1 rounded-full transition-colors ${language === 'en' ? 'bg-blue-600 text-white' : 'text-gray-600 dark:text-gray-300'}`}>EN</button>
          <button onClick={() => setLanguage('ar')} className={`px-3 py-1 rounded-full transition-colors ${language === 'ar' ? 'bg-blue-600 text-white' : 'text-gray-600 dark:text-gray-300'}`}>AR</button>
        </div>
      </div>

      <main className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        <Header personalInfo={currentData.personalInfo} />

        <Section title={t.professionalSummary}>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{currentData.professionalSummary}</p>
        </Section>

        <Section title={t.professionalExperience}>
          <div className="relative border-l-2 rtl:border-l-0 rtl:border-r-2 border-blue-200 dark:border-blue-800 pl-8 rtl:pl-0 rtl:pr-8 space-y-10">
            {currentData.experiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} />
            ))}
          </div>
        </Section>

        <Section title={t.keyProjects}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentData.keyProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </Section>

        <Section title={t.skills}>
          {Object.entries(currentData.skills).map(([category, skillList]) => (
            <div key={category} className="mb-4">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">{t[category]}</h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </Section>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Section title={t.education}>
                {currentData.education.map((edu, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                        <h3 className="font-bold text-blue-800 dark:text-blue-400">{edu.degree}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{edu.period} | {t.grade}: {edu.grade}</p>
                    </div>
                ))}
            </Section>

            <Section title={t.certifications}>
                <div className="space-y-4">
                    {currentData.certifications.map((cert, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                        <h3 className="font-bold text-blue-800 dark:text-blue-400">{cert.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{cert.issuer} | {cert.date}</p>
                         {cert.verification && <a href={cert.verification} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline dark:text-blue-400">{t.verify}</a>}
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{t.skills}: {cert.skills}</p>
                    </div>
                    ))}
                </div>
            </Section>
        </div>

        <footer className="text-center mt-12 text-gray-500 dark:text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} {currentData.personalInfo.name}. {t.allRightsReserved}</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
