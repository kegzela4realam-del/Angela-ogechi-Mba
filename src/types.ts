export interface PageItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface SkillItem {
  name: string;
  category: "Technical" | "Professional" | "Creative";
  percentage: number;
  description: string;
}

export interface BeadProduct {
  id: string;
  name: string;
  category: "Waist Beads" | "Wrist Beads" | "Neck Beads" | "Special Sets";
  image: string;
  price?: string;
  meaning: string;
  materials: string[];
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  projectDetail?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
}
