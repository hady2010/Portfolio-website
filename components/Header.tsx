import React from 'react';
import { PersonalInfo } from '../types';
import EnvelopeIcon from './icons/EnvelopeIcon';
import PhoneIcon from './icons/PhoneIcon';
import LocationIcon from './icons/LocationIcon';
import LinkedInIcon from './icons/LinkedInIcon';

interface HeaderProps {
  personalInfo: PersonalInfo;
}

const Header: React.FC<HeaderProps> = ({ personalInfo }) => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
      <div>
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">{personalInfo.name}</h1>
        <h2 className="text-xl font-medium text-blue-600 dark:text-blue-400 mt-1">{personalInfo.title}</h2>
      </div>
      <div className="mt-6 md:mt-0 text-sm text-gray-600 dark:text-gray-300 space-y-2 text-left md:text-right rtl:text-right rtl:md:text-left">
        <a href={`mailto:${personalInfo.email}`} className="flex items-center justify-start md:justify-end rtl:justify-start rtl:md:justify-end gap-2 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
          <EnvelopeIcon className="w-4 h-4" />
          <span>{personalInfo.email}</span>
        </a>
        <div className="flex items-center justify-start md:justify-end rtl:justify-start rtl:md:justify-end gap-2">
            <PhoneIcon className="w-4 h-4" />
            <span>{personalInfo.phone.join(' / ')}</span>
        </div>
        <div className="flex items-center justify-start md:justify-end rtl:justify-start rtl:md:justify-end gap-2">
          <LocationIcon className="w-4 h-4" />
          <span>{personalInfo.address}</span>
        </div>
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-start md:justify-end rtl:justify-start rtl:md:justify-end gap-2 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
          <LinkedInIcon className="w-4 h-4" />
          <span className="whitespace-nowrap">LinkedIn Profile</span>
        </a>
      </div>
    </header>
  );
};

export default Header;