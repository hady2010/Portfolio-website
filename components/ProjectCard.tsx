import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
      <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/50 px-2 py-1 rounded-full">{project.category}</span>
      <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mt-3">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm leading-relaxed">{project.description}</p>
    </div>
  );
};

export default ProjectCard;