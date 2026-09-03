export interface Property {
  id: string;
  title: string;
  price: string;
  address: string;
  beds: number;
  baths: number;
  sqft: string;
  image: string;
  featured?: boolean;
}

export interface LandListing {
  id: string;
  title: string;
  acres: string;
  price: string;
  location: string;
  description: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  experience: string;
  image: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  details: string[];
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}
