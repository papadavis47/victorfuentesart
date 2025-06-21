// Shared type definitions for the Victor Fuentes Art portfolio

export interface PoemLine {
  id: number;
  englishLine: string;
  spanishLine: string;
}

export interface PoemCollection {
  [key: string]: PoemLine[];
}

export interface HeroProps {
  title: string;
}

export interface LinkProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export interface NavigationProps {
  children: React.ReactNode;
}