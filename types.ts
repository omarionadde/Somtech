import { LucideIcon } from 'lucide-react';

export type Language = 'en' | 'so';

export interface NavLink {
  label: {
    en: string;
    so: string;
  };
  path: string;
}

export interface Service {
  id: string;
  title: {
    en: string;
    so: string;
  };
  description: {
    en: string;
    so: string;
  };
  iconName: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: {
    en: string;
    so: string;
  };
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: {
    en: string;
    so: string;
  };
  image: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}
