import { 
  Briefcase, 
  TrendingUp, 
  Cpu, 
  Truck, 
  HardHat, 
  Sparkles, 
  ShieldCheck,
  Building2,
  Users,
  Globe,
  Phone,
  LayoutGrid,
  Settings,
  Lightbulb,
  Anchor
} from 'lucide-react';
import { NavLink, Service, Project, Testimonial, TeamMember, BlogPost } from './types';

// Icon Map for dynamic rendering
export const ICON_MAP: Record<string, any> = {
  Briefcase,
  TrendingUp,
  Cpu,
  Truck,
  HardHat,
  Sparkles,
  ShieldCheck,
  Building2,
  Users,
  Globe,
  LayoutGrid,
  Settings,
  Lightbulb,
  Anchor
};

export const AVAILABLE_ICONS = Object.keys(ICON_MAP);

// Company Details
export const COMPANY_NAME = "Somtech";
export const COMPANY_TAGLINE = "Innovate. Connect. Future.";
export const WHATSAPP_NUMBER = "+252620000959";
export const CONTACT_EMAIL = "info@somyunimah.com";
// User provided logo link
export const LOGO_URL = "https://uploads.onecompiler.io/43zuwrmdd/44cqgnn4p/1000262328.png"; 

// Navigation
export const NAV_LINKS: NavLink[] = [
  { label: { en: "Home", so: "Hoyga" }, path: "/" },
  { label: { en: "About Us", so: "Nagu Saabsan" }, path: "/about" },
  { label: { en: "Services", so: "Adeegyada" }, path: "/services" },
  { label: { en: "Projects", so: "Mashaariicda" }, path: "/projects" },
  { label: { en: "Blog", so: "Blog-ga" }, path: "/blog" },
  { label: { en: "Pricing", so: "Qiimaha" }, path: "/pricing" },
  { label: { en: "Contact", so: "Xiriirka" }, path: "/contact" },
];

// Services Data (Seed Data)
export const SERVICES: Service[] = [
  {
    id: "business",
    title: { en: "Business & Corporate Services", so: "Adeegyada Ganacsiga & Shirkadaha" },
    description: { en: "Strategic planning, registration, and corporate governance solutions.", so: "Qorshaynta istiraatiijiga ah, diiwaangelinta, iyo xalalka maamulka shirkadaha." },
    iconName: "Briefcase"
  },
  {
    id: "financial",
    title: { en: "Financial & Advisory", so: "Maaliyadda & La-talinta" },
    description: { en: "Expert financial auditing, tax consultancy, and investment advice.", so: "Hanti-dhawrka maaliyadeed, la-talinta canshuuraha, iyo talooyinka maalgashiga." },
    iconName: "TrendingUp"
  },
  {
    id: "tech",
    title: { en: "IT & Technology Solutions", so: "Xalalka IT-ga & Teknoolojiyadda" },
    description: { en: "Software development, network infrastructure, and digital transformation.", so: "Horumarinta softiweerka, kaabayaasha shabakadda, iyo isbeddelka dhijitaalka ah." },
    iconName: "Cpu"
  },
  {
    id: "logistics",
    title: { en: "Logistics & Supply Chain", so: "Sahayda & Saadka" },
    description: { en: "Efficient freight, warehousing, and procurement services.", so: "Xamuulka hufan, kaydinta, iyo adeegyada iibsiga." },
    iconName: "Truck"
  },
  {
    id: "construction",
    title: { en: "Construction & Maintenance", so: "Dhismaha & Dayactirka" },
    description: { en: "Commercial construction, renovation, and property maintenance.", so: "Dhismaha ganacsiga, dayactirka, iyo daryeelka hantida." },
    iconName: "HardHat"
  },
  {
    id: "cleaning",
    title: { en: "Cleaning & Facility Mgmt", so: "Nadiifinta & Maamulka Xarumaha" },
    description: { en: "Professional cleaning services for offices and industrial sites.", so: "Adeegyada nadiifinta xirfadaysan ee xafiisyada iyo goobaha warshadaha." },
    iconName: "Sparkles"
  },
  {
    id: "security",
    title: { en: "Security & Consultancy", so: "Amniga & La-talinta" },
    description: { en: "Risk assessment, security personnel, and safety systems.", so: "Qiimaynta khatarta, shaqaalaha amniga, iyo nidaamyada badbaadada." },
    iconName: "ShieldCheck"
  }
];

// Projects Data (Seed Data)
export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Mogadishu Port Logistics Upgrade",
    category: "Logistics",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    description: { en: "Modernizing supply chain tracking systems.", so: "Casriyeynta nidaamyada raadraaca silsiladda saadka." }
  },
  {
    id: "2",
    title: "Somali National Bank IT Infrastructure",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2070&auto=format&fit=crop",
    description: { en: "Full-scale network implementation and security.", so: "Hirgelinta shabakad dhamaystiran iyo amniga." }
  },
  {
    id: "3",
    title: "Jazeera Estate Construction",
    category: "Construction",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    description: { en: "Residential complex development.", so: "Dhismaha guryaha la deggan yahay." }
  }
];

// Testimonials (Seed Data)
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Ahmed Hassan",
    role: "CEO, Horn Trade",
    text: { en: "Somtech transformed our logistics operations. Highly professional team.", so: "Somtech waxay beddeshay hawlgalladayada saadka. Koox aad u xirfad leh." },
    image: "https://i.pravatar.cc/150?u=ahmed"
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Director, NGO Aid",
    text: { en: "Reliable partners for our field operations in remote areas.", so: "Waa shuraako lagu kalsoonaan karo hawlgalladayada goobaha fogfog." },
    image: "https://i.pravatar.cc/150?u=sarah"
  }
];

// Team (Seed Data)
export const TEAM: TeamMember[] = [
  { id: 1, name: "Mohamed Abdi", role: "General Manager", image: "https://i.pravatar.cc/300?u=mo" },
  { id: 2, name: "Layla Omar", role: "Head of Operations", image: "https://i.pravatar.cc/300?u=layla" },
  { id: 3, name: "James Smith", role: "Technical Director", image: "https://i.pravatar.cc/300?u=james" }
];

// Blog (Seed Data)
export const BLOG_POSTS: BlogPost[] = [
  { id: 1, title: "The Future of Tech in East Africa", excerpt: "Exploring how digital transformation is shaping the region.", date: "Oct 12, 2024", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop" },
  { id: 2, title: "Sustainable Construction Practices", excerpt: "Building for tomorrow with eco-friendly materials.", date: "Nov 05, 2024", image: "https://images.unsplash.com/photo-1503387762-592dea58ef21?q=80&w=2070&auto=format&fit=crop" }
];
