export interface GameImage {
  url: string;
  alt: string;
}

export interface Game {
  id: number;
  slug: string;
  name: string;
  description: string;
  released: string;
  image: string; 
  genre: string[];
}