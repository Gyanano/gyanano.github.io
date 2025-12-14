export interface NavItem {
  id: string;
  label: string;
  path: string;
}

export interface Project {
  id: number;
  title: string;
  category: string; // e.g., "Embedded", "Web", "IoT"
  description: string;
  tech: string[];
  link?: string;
}

export type CursorVariant = "default" | "hover" | "text";

export interface MousePosition {
  x: number;
  y: number;
}