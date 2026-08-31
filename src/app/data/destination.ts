import destinations from './destinations.json';

export interface Destination {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const DESTINATIONS: Destination[] = destinations;
