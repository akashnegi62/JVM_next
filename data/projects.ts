export interface Project {
  slug: string;
  name: string;
  city: string;
  description: string;
  images: string[];
  features: string[];
  location: string;
  price: string;
  status: "Completed" | "Ongoing" | "Upcoming";
  surfaceArea: string;
  yearCompleted: string;
  value: string;
  architect: string;
}

export const projects: Project[] = [
  {
    slug: "jmv-homes-tonk-road",
    name: "JMV Homes Tonk Road",
    city: "shyam vihar",
    description:
      "For over a decade, Shyam Vihar has been helping families find quality homes and plots in desirable locations, creating spaces where memories are built. Catering to both urban and suburban lifestyles, the company focuses on customer satisfaction, innovation, and modern construction practices. With strong local expertise and global standards, Shyam Vihar is committed to quality, safety, sustainability, and developing premium residential and commercial projects, primarily in Jaipur, Rajasthan.",
    images: ["/project1.avif", "/project1.avif"],
    features: ["10+ Years Experience", "Urban & Suburban Projects"],
    location: "Jaipur, Rajasthan",
    price: "Starting from $500,000",
    status: "Ongoing",
    surfaceArea: "133780 meter Sq",
    yearCompleted: "March 2019",
    value: "826500000",
    architect: "Jason & Perry",
  },
  {
    slug: "starx-city-bhiwadi",
    name: "Starx City Bhiwadi",
    city: "Bhiwadi",
    description: "",
    images: ["/project2.avif", "/project2.avif"],
    features: ["Concierge Service", "Rooftop Garden"],
    location: "Westminster, London, UK",
    price: "Starting from £450,000",
    status: "Completed",
    surfaceArea: "133780 meter Sq",
    yearCompleted: "March 2019",
    value: "826500000",
    architect: "Jason & Perry",
  },
  {
    slug: "shyam-vihar-mahalaxmi-temple",
    name: "Shyam Vihar Mahalaxmi Temple",
    city: "Bhiwadi",
    description: "",
    images: ["/project3.avif", "/project3.avif"],
    features: ["Smart Home Technology", "Onsen Spa"],
    location: "Shibuya, Tokyo, Japan",
    price: "Starting from ¥60,000,000",
    status: "Upcoming",
    surfaceArea: "133780 meter Sq",
    yearCompleted: "March 2019",
    value: "826500000",
    architect: "Jason & Perry",
  },
  {
    slug: "shyam-vihar-samota-ka-bas",
    name: "Shyam Vihar Samota Ka Bas, Manda Mor",
    city: "shyam vihar",
    description: "",
    images: ["/project4.avif", "/project4.avif"],
    features: ["Private Beach", "Yacht Club"],
    location: "Dubai Marina, UAE",
    price: "Starting from AED 2,000,000",
    status: "Ongoing",
    surfaceArea: "133780 meter Sq",
    yearCompleted: "March 2019",
    value: "826500000",
    architect: "Jason & Perry",
  },
  {
    slug: "agriculture",
    name: "Agriculture",
    city: "Singapore",
    description: "",
    images: ["/project5.avif", "/project5.avif"],
    features: ["Vertical Gardens", "Eco-Friendly Design"],
    location: "Marina Bay, Singapore",
    price: "Starting from SGD 800,000",
    status: "Completed",
    surfaceArea: "133780 meter Sq",
    yearCompleted: "March 2019",
    value: "826500000",
    architect: "Jason & Perry",
  },
  {
    slug: "harit-homes-bhiwadi",
    name: "Harit Homes",
    city: "Bhiwadi",
    description: "",
    images: ["/project6.avif", "/project6.avif"],
    features: ["Private Beach", "Yacht Club"],
    location: "Dubai Marina, UAE",
    price: "Starting from AED 2,000,000",
    status: "Ongoing",
    surfaceArea: "133780 meter Sq",
    yearCompleted: "March 2019",
    value: "826500000",
    architect: "Jason & Perry",
  },
  {
    slug: "jewer-airport-noida",
    name: "Jewer Airport, Noida",
    city: "shyam vihar",
    description: "",
    images: ["/project7.webp", "/project7.webp"],
    features: ["Private Beach", "Yacht Club"],
    location: "Dubai Marina, UAE",
    price: "Starting from AED 2,000,000",
    status: "Ongoing",
    surfaceArea: "133780 meter Sq",
    yearCompleted: "March 2019",
    value: "826500000",
    architect: "Jason & Perry",
  },
];
