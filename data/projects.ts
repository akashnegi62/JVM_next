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
}

export const projects: Project[] = [
  {
    slug: "jmv-homes-tonk-road",
    name: "JMV Homes Tonk Road",
    city: "shyam vihar",
    tagline: "Luxury Living in the Heart of Manhattan",
    description:
      "For over a decade, Shyam Vihar has been helping families find quality homes and plots in desirable locations, creating spaces where memories are built. Catering to both urban and suburban lifestyles, the company focuses on customer satisfaction, innovation, and modern construction practices. With strong local expertise and global standards, Shyam Vihar is committed to quality, safety, sustainability, and developing premium residential and commercial projects, primarily in Jaipur, Rajasthan.",
    images: ["/project1.avif", "/project1.avif"],
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
  },
  {
    slug: "starx-city-bhiwadi",
    name: "Starx City Bhiwadi",
    city: "Bhiwadi",
    tagline: "Modern Architecture Meets British Elegance",
    description: "",
    images: ["/project2.avif", "/project2.avif"],
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
  },
  {
    slug: "shyam-vihar-mahalaxmi-temple",
    name: "Shyam Vihar Mahalaxmi Temple",
    city: "Bhiwadi",
    tagline: "Innovation and Tradition Combined",
    description: "",
    images: ["/project3.avif", "/project3.avif"],
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
  },
  {
    slug: "shyam-vihar-samota-ka-bas",
    name: "Shyam Vihar Samota Ka Bas, Manda Mor",
    city: "shyam vihar",
    tagline: "Luxury Redefined in the Desert",
    description: "",
    images: ["/project4.avif", "/project4.avif"],
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
  },
  {
    slug: "agriculture",
    name: "Agriculture",
    city: "Singapore",
    tagline: "Green Living in the Garden City",
    description: "",
    images: ["/project5.avif", "/project5.avif"],
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
  },
  {
    slug: "harit-homes-bhiwadi",
    name: "Harit Homes",
    city: "Bhiwadi",
    tagline: "Luxury Redefined in the Desert",
    description: "",
    images: ["/project6.avif", "/project6.avif"],
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
  },
  {
    slug: "jewer-airport-noida",
    name: "Jewer Airport, Noida",
    city: "shyam vihar",
    tagline: "Luxury Redefined in the Desert",
    description: "",
    images: ["/project7.webp", "/project7.webp"],
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
  },
];
