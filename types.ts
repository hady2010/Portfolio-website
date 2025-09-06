export interface PersonalInfo {
  name: string;
  title: string;
  address: string;
  phone: string[];
  email: string;
  nationality: string;
  maritalStatus: string;
  dateOfBirth: string;
  linkedin: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  details: string[];
}

export interface Project {
  title: string;
  category: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  grade: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  skills: string;
  verification?: string;
}

export type SkillCategory = 'Technical Skills' | 'Software Proficiency' | 'Languages' | 'Leadership';

export type Skills = {
  [key in SkillCategory]: string[];
};
