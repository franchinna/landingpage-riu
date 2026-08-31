import experiences from './experiences.json';

export interface Experience {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  brochure: string;
}

export const EXPERIENCES: Experience[] = experiences;
