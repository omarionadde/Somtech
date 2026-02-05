import { BLOG_POSTS, SERVICES, PROJECTS, TEAM, TESTIMONIALS } from '../constants';
import { BlogPost, Service, Project, TeamMember, Testimonial } from '../types';

export interface Inquiry {
  id: number;
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  status: 'new' | 'read';
}

const KEYS = {
  INQUIRIES: 'somtech_db_inquiries',
  POSTS: 'somtech_db_posts',
  SERVICES: 'somtech_db_services',
  PROJECTS: 'somtech_db_projects',
  TEAM: 'somtech_db_team',
  TESTIMONIALS: 'somtech_db_testimonials'
};

// Helper to get data or seed
function getOrSeed<T>(key: string, seedData: T[]): T[] {
  try {
    const data = localStorage.getItem(key);
    if (!data) {
      localStorage.setItem(key, JSON.stringify(seedData));
      return seedData;
    }
    return JSON.parse(data);
  } catch (e) {
    return seedData;
  }
}

// Helper to save
function save(key: string, data: any) {
  localStorage.setItem(key, JSON.stringify(data));
}

export const db = {
  // Inquiries
  getInquiries: (): Inquiry[] => {
    try {
      const data = localStorage.getItem(KEYS.INQUIRIES);
      return data ? JSON.parse(data) : [];
    } catch (e) { return []; }
  },
  
  addInquiry: (data: { name: string; phone: string; email: string; subject: string; message: string }) => {
    const inquiries = db.getInquiries();
    const newInquiry: Inquiry = {
      ...data,
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      status: 'new'
    };
    save(KEYS.INQUIRIES, [newInquiry, ...inquiries]);
    return newInquiry;
  },

  // Services
  getServices: (): Service[] => getOrSeed(KEYS.SERVICES, SERVICES),
  getServiceById: (id: string): Service | undefined => {
    const list = db.getServices();
    return list.find(s => s.id === id);
  },
  addService: (item: Service) => {
    const list = db.getServices();
    save(KEYS.SERVICES, [...list, item]);
  },
  deleteService: (id: string) => {
    const list = db.getServices();
    save(KEYS.SERVICES, list.filter(i => i.id !== id));
  },

  // Projects
  getProjects: (): Project[] => getOrSeed(KEYS.PROJECTS, PROJECTS),
  addProject: (item: Project) => {
    const list = db.getProjects();
    save(KEYS.PROJECTS, [item, ...list]); // Newest first
  },
  deleteProject: (id: string) => {
    const list = db.getProjects();
    save(KEYS.PROJECTS, list.filter(i => i.id !== id));
  },

  // Team
  getTeam: (): TeamMember[] => getOrSeed(KEYS.TEAM, TEAM),
  addTeamMember: (item: TeamMember) => {
    const list = db.getTeam();
    save(KEYS.TEAM, [...list, item]);
  },
  deleteTeamMember: (id: number) => {
    const list = db.getTeam();
    save(KEYS.TEAM, list.filter(i => i.id !== id));
  },

  // Testimonials
  getTestimonials: (): Testimonial[] => getOrSeed(KEYS.TESTIMONIALS, TESTIMONIALS),
  addTestimonial: (item: Testimonial) => {
    const list = db.getTestimonials();
    save(KEYS.TESTIMONIALS, [item, ...list]);
  },
  deleteTestimonial: (id: number) => {
    const list = db.getTestimonials();
    save(KEYS.TESTIMONIALS, list.filter(i => i.id !== id));
  },

  // Blog Posts
  getPosts: (): BlogPost[] => getOrSeed(KEYS.POSTS, BLOG_POSTS),
  addPost: (post: Omit<BlogPost, 'id' | 'date'>) => {
    const posts = db.getPosts();
    const newPost: BlogPost = {
      ...post,
      id: Date.now(),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };
    save(KEYS.POSTS, [newPost, ...posts]);
    return newPost;
  },
  deletePost: (id: number) => {
    const posts = db.getPosts();
    save(KEYS.POSTS, posts.filter(i => i.id !== id));
  },

  // Dashboard Stats
  getStats: () => {
    return {
      inquiriesCount: db.getInquiries().length,
      newInquiriesCount: db.getInquiries().filter(i => i.status === 'new').length,
      postsCount: db.getPosts().length,
      projectsCount: db.getProjects().length,
      servicesCount: db.getServices().length
    };
  }
};