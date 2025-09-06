import React from 'react';
import { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="relative">
      <div className="absolute w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full -left-[41px] rtl:left-auto rtl:-right-[41px] top-1.5 border-4 border-white dark:border-slate-900"></div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
        <div className="flex justify-between items-start gap-4">
            <div className="flex-grow">
                <h3 className="text-xl font-bold text-blue-800 dark:text-blue-400">{experience.role}</h3>
                <p className="font-semibold text-gray-700 dark:text-gray-200">{experience.company} - {experience.location}</p>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium whitespace-nowrap">{experience.period}</p>
        </div>
        <ul className="mt-4 list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
          {experience.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;