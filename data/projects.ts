export interface MediaReport {
  id: number;
  title: string;
  date: string;
  imageUrl?: string;
  downloadUrl?: string;
}

export interface Project {
  slug: string;
  name: string;
  city: string;
  tagline: string;
  description: string;
  images: string[];
  features: string[];
  location: string;
  price: string;
  status: "Completed" | "Ongoing" | "Upcoming";
  area: string;
  // Project-specific details
  projectDetails: {
    location: string;
    surfaceArea: string;
    yearCompleted: string;
    value: string;
    architect: string;
  };
  // Media reports for this project
  mediaReports: MediaReport[];
}

export const projects: Project[] = [
  {
    slug: "jmv-homes-tonk-road",
    name: "JMV Homes Tonk Road",
    city: "shyam vihar",
    tagline: "Luxury Living in the Heart of Manhattan",
    description:
      "For over a decade, Shyam Vihar has been helping families find quality homes and plots in desirable locations, creating spaces where memories are built. Catering to both urban and suburban lifestyles, the company focuses on customer satisfaction, innovation, and modern construction practices. With strong local expertise and global standards, Shyam Vihar is committed to quality, safety, sustainability, and developing premium residential and commercial projects, primarily in Jaipur, Rajasthan.",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      "https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&q=80",
    ],
    features: [
      "10+ Years Experience",
      "Prime Locations",
      "Urban & Suburban Projects",
      "Customer-Centric Approach",
      "Modern Construction",
      "Premium Developments",
    ],
    location: "Jaipur, Rajasthan",
    price: "Starting from $500,000",
    status: "Ongoing",
    area: "2500 sqft",
    projectDetails: {
      location: "Near Yamuna Expressway",
      surfaceArea: "133780 meter Sq",
      yearCompleted: "March 2019",
      value: "826500000",
      architect: "Jason & Perry",
    },
    mediaReports: [
      { id: 1, title: "Project Launch Coverage", date: "Jan 2019" },
      { id: 2, title: "Infrastructure Development News", date: "Feb 2019" },
      { id: 3, title: "Real Estate Excellence Award", date: "Mar 2019" },
    ],
  },
  {
    slug: "starx-city-bhiwadi",
    name: "Starx City Bhiwadi",
    city: "Bhiwadi",
    tagline: "Modern Architecture Meets British Elegance",
    description: "",
    images: [
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
      "https://images.unsplash.com/photo-1551884831-bbf3ddd77565?w=800&q=80",
    ],
    features: [
      "Concierge Service",
      "Rooftop Garden",
      "Business Center",
      "Underground Parking",
    ],
    location: "Westminster, London, UK",
    price: "Starting from £450,000",
    status: "Completed",
    area: "2200 sqft",
    projectDetails: {
      location: "Near Thames River",
      surfaceArea: "98500 meter Sq",
      yearCompleted: "June 2018",
      value: "650000000",
      architect: "Foster & Partners",
    },
    mediaReports: [
      { id: 1, title: "London Property Awards Winner", date: "Mar 2018" },
      { id: 2, title: "Sustainable Building Feature", date: "May 2018" },
      { id: 3, title: "Architectural Digest Coverage", date: "Jul 2018" },
    ],
  },
  {
    slug: "shyam-vihar-mahalaxmi-temple",
    name: "Shyam Vihar Mahalaxmi Temple",
    city: "Bhiwadi",
    tagline: "Innovation and Tradition Combined",
    description: "",
    images: [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
      "https://images.unsplash.com/photo-1528114039593-43664da1e714?w=800&q=80",
    ],
    features: [
      "Smart Home Technology",
      "Onsen Spa",
      "Zen Garden",
      "High-Speed Elevators",
    ],
    location: "Shibuya, Tokyo, Japan",
    price: "Starting from ¥60,000,000",
    status: "Upcoming",
    area: "2000 sqft",
    projectDetails: {
      location: "Shibuya District",
      surfaceArea: "75000 meter Sq",
      yearCompleted: "December 2024",
      value: "950000000",
      architect: "Kengo Kuma & Associates",
    },
    mediaReports: [
      { id: 1, title: "Tokyo Real Estate Preview", date: "Aug 2023" },
      { id: 2, title: "Innovation in Housing Feature", date: "Oct 2023" },
      { id: 3, title: "Future Living Magazine", date: "Dec 2023" },
    ],
  },
  {
    slug: "shyam-vihar-samota-ka-bas",
    name: "Shyam Vihar Samota Ka Bas, Manda Mor",
    city: "shyam vihar",
    tagline: "Luxury Redefined in the Desert",
    description: "",
    images: [
      "https://images.unsplash.com/photo-1512453979798-5ea904ac66de?w=800&q=80",
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80",
    ],
    features: ["Private Beach", "Yacht Club", "Infinity Pool", "Valet Parking"],
    location: "Dubai Marina, UAE",
    price: "Starting from AED 2,000,000",
    status: "Ongoing",
    area: "3000 sqft",
    projectDetails: {
      location: "Dubai Marina Waterfront",
      surfaceArea: "185000 meter Sq",
      yearCompleted: "September 2020",
      value: "1200000000",
      architect: "Zaha Hadid Architects",
    },
    mediaReports: [
      { id: 1, title: "Dubai Luxury Property Awards", date: "Jan 2020" },
      { id: 2, title: "Marina Development News", date: "Apr 2020" },
      { id: 3, title: "Gulf Business Feature", date: "Jun 2020" },
    ],
  },
  {
    slug: "agriculture",
    name: "Agriculture",
    city: "Singapore",
    tagline: "Green Living in the Garden City",
    description: "",
    images: [
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80",
      "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=800&q=80",
    ],
    features: [
      "Vertical Gardens",
      "Eco-Friendly Design",
      "Sky Bridge",
      "Solar Panels",
    ],
    location: "Marina Bay, Singapore",
    price: "Starting from SGD 800,000",
    status: "Completed",
    area: "2400 sqft",
    projectDetails: {
      location: "Marina Bay District",
      surfaceArea: "112000 meter Sq",
      yearCompleted: "April 2021",
      value: "780000000",
      architect: "WOHA Architects",
    },
    mediaReports: [
      { id: 1, title: "Green Building Certification", date: "Feb 2021" },
      { id: 2, title: "Sustainable Living Feature", date: "May 2021" },
      { id: 3, title: "Singapore Property Times", date: "Aug 2021" },
    ],
  },
  {
    slug: "harit-homes-bhiwadi",
    name: "Harit Homes",
    city: "Bhiwadi",
    tagline: "Luxury Redefined in the Desert",
    description: "",
    images: [
      "https://images.unsplash.com/photo-1512453979798-5ea904ac66de?w=800&q=80",
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80",
    ],
    features: ["Private Beach", "Yacht Club", "Infinity Pool", "Valet Parking"],
    location: "Dubai Marina, UAE",
    price: "Starting from AED 2,000,000",
    status: "Ongoing",
    area: "3000 sqft",
    projectDetails: {
      location: "Dubai Marina Waterfront",
      surfaceArea: "185000 meter Sq",
      yearCompleted: "September 2020",
      value: "1200000000",
      architect: "Zaha Hadid Architects",
    },
    mediaReports: [
      { id: 1, title: "Dubai Luxury Property Awards", date: "Jan 2020" },
      { id: 2, title: "Marina Development News", date: "Apr 2020" },
      { id: 3, title: "Gulf Business Feature", date: "Jun 2020" },
    ],
  },
  {
    slug: "jewer-airport-noida",
    name: "Jewer Airport, Noida",
    city: "shyam vihar",
    tagline: "Luxury Redefined in the Desert",
    description: "",
    images: [
      "https://images.unsplash.com/photo-1512453979798-5ea904ac66de?w=800&q=80",
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80",
    ],
    features: ["Private Beach", "Yacht Club", "Infinity Pool", "Valet Parking"],
    location: "Dubai Marina, UAE",
    price: "Starting from AED 2,000,000",
    status: "Ongoing",
    area: "3000 sqft",
    projectDetails: {
      location: "Dubai Marina Waterfront",
      surfaceArea: "185000 meter Sq",
      yearCompleted: "September 2020",
      value: "1200000000",
      architect: "Zaha Hadid Architects",
    },
    mediaReports: [
      { id: 1, title: "Dubai Luxury Property Awards", date: "Jan 2020" },
      { id: 2, title: "Marina Development News", date: "Apr 2020" },
      { id: 3, title: "Gulf Business Feature", date: "Jun 2020" },
    ],
  },
];
