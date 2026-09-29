export interface University {
  id: string;
  name: string;
  country: string;
  description: string;
  image: string;
  popularAreas: string[];
  level: string;
  url: string;
}

export const UNIVERSITIES: University[] = [
  {
    id: "oxford-brookes",
    name: "Oxford Brookes University",
    country: "United Kingdom",
    description: "A globally recognized university offering diverse programs and exceptional learning experiences.",
    image: "/images/universities/oxford-brookes.jpg",
    popularAreas: ["Business", "Architecture", "Hospitality"],
    level: "Undergraduate & Postgraduate",
    url: "https://www.brookes.ac.uk/",
  },
  {
    id: "monash-university",
    name: "Monash University",
    country: "Australia",
    description: "A leading global university known for innovation, research and real-world impact.",
    image: "/images/universities/monash.jpg",
    popularAreas: ["Engineering", "Medicine", "IT"],
    level: "All Levels",
    url: "https://www.monash.edu/",
  },
  {
    id: "university-toronto",
    name: "University of Toronto",
    country: "Canada",
    description: "One of the world's top research universities, driving innovation and excellence.",
    image: "/images/universities/toronto.jpg",
    popularAreas: ["Computer Science", "Finance", "Life Sciences"],
    level: "All Levels",
    url: "https://www.utoronto.ca/",
  },
  {
    id: "university-manchester",
    name: "University of Manchester",
    country: "United Kingdom",
    description: "A pioneer in research and innovation with a strong global reputation.",
    image: "/images/universities/manchester.jpg",
    popularAreas: ["Data Science", "Engineering", "Business"],
    level: "Undergraduate & Postgraduate",
    url: "https://www.manchester.ac.uk/",
  },
  {
    id: "university-melbourne",
    name: "University of Melbourne",
    country: "Australia",
    description: "A world-leading university known for academic excellence and vibrant campus life.",
    image: "/images/universities/melbourne.jpg",
    popularAreas: ["Medicine", "Law", "Arts"],
    level: "Undergraduate & Postgraduate",
    url: "https://www.unimelb.edu.au/",
  },
  {
    id: "mcgill-university",
    name: "McGill University",
    country: "Canada",
    description: "A prestigious institution offering a diverse range of programs and global opportunities.",
    image: "/images/universities/mcgill.jpg",
    popularAreas: ["Political Science", "Economics", "Life Sciences"],
    level: "All Levels",
    url: "https://www.mcgill.ca/",
  },
  {
    id: "tum-germany",
    name: "Technical University of Munich",
    country: "Europe",
    description: "One of Europe's top universities for engineering, natural sciences, and technology innovation.",
    image: "/images/universities/tum.jpg",
    popularAreas: ["Engineering", "Physics", "Informatics"],
    level: "Undergraduate & Postgraduate",
    url: "https://www.tum.de/en/",
  },
  {
    id: "university-tokyo",
    name: "The University of Tokyo",
    country: "Japan",
    description: "Japan's premier institution renowned for cutting-edge research and global academic impact.",
    image: "/images/universities/tokyo.jpg",
    popularAreas: ["Robotics", "Economics", "Arts"],
    level: "Undergraduate & Postgraduate",
    url: "https://www.u-tokyo.ac.jp/en/",
  },
  {
    id: "nus-singapore",
    name: "National University of Singapore",
    country: "Asia",
    description: "A leading global university shaping future leaders across enterprise and technology.",
    image: "/images/universities/nus.jpg",
    popularAreas: ["Business Analytics", "Engineering", "Law"],
    level: "All Levels",
    url: "https://nus.edu.sg/",
  },
];

