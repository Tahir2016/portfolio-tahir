export type ExperienceAccent = "cyan" | "violet" | "blue" | "green" | "yellow";

export interface CurrentRole {
  label: string;
  role: string;
  company: string;
  location: string;
  tenure: string;
  description: string;
}

export interface CapabilityHighlight {
  id: string;
  label: string;
  icon: "layers" | "gauge" | "rocket" | "sparkles";
}

export interface ArchitectureLayer {
  label: string;
  accent: ExperienceAccent;
  lines: string[];
}

export interface Responsibility {
  number: string;
  title: string;
  icon: "layers" | "server" | "database" | "users";
  description: string;
}

export interface ProfessionalProject {
  number: string;
  title: string;
  purpose: string;
  features: string[];
  stack: string[];
  accent: ExperienceAccent;
  icon: "users" | "calendar-clock" | "graduation-cap" | "calendar-days";
}

export interface ExperienceSummaryItem {
  label: string;
  text: string;
}

export interface ContactInfo {
    phone? : string;
    email : string;
    location? : string;
    linkedin? : string;
    github? : string;
}

export interface AboutInfo {
    name : string;
    role : string;
    greeting : string;
    subheading : string;
    intro : string;
    capabilities : CapabilityItem[];
}

export interface CapabilityItem {
    id : string;
    category : string;
    title : string;
    description : string;
    tags : string[];
}

export type ProjectTier = "featured" | "secondary" | "compact";

export type ProjectVisualVariant =
  | "pipeline"
  | "chat"
  | "expense"
  | "todo"
  | "clock"
  | "calculator";

export interface ProjectItem {
  number: string;
  title: string;
  category: string;
  tier: ProjectTier;
  purpose: string;
  features: string[];
  stack: string[];
  primaryStack: string[];
  visual: ProjectVisualVariant;
  github?: string;
  link?: string;
}

export interface SkillCategory {
  name: string;
  icon?: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  location?: string;
  description?: string;
}
