// Project data for portfolio
export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  images: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "drilling-machine",
    title: "Drilling Machine",
    description: "Designed from concept to functional prototype, this precision drilling machine integrates adjustable depth control and ergonomic handling. Developed entirely in SolidWorks and optimized for manufacturability, it demonstrates mechanical reliability for workshop and industrial use.",
    category: "Industrial Equipment",
    images: ["/image/drilling machine.jpg", "/image/1.jpg"],
    featured: true,
  },
  {
    id: "mobile-classroom-bus",
    title: "Customized Mobile Classroom Bus",
    description: "A reimagined school bus converted into a mobile learning space equipped with digital tools, workstations, and power systems. The design focuses on flexibility, accessibility, and modularity — enabling education to reach remote communities efficiently.",
    category: "Education & Innovation",
    images: [
      "/image/Customized mobile classroom bus.jpg",
      "/image/Customized mobile classroom bus-draw.jpg",
      "/image/Customized mobile classroom bus-inside bus.jpg",
      "/image/Customized mobile classroom bus-upper surface head area of bus.jpg",
    ],
    featured: true,
  },
  {
    id: "rice-milling-machine",
    title: "Rice Milling Machine",
    description: "A compact, energy-efficient rice milling system engineered for small-scale farmers. Its design prioritizes performance, cost efficiency, and ease of maintenance, transforming traditional milling processes into modern, localized production.",
    category: "Agricultural Equipment",
    images: [
      "/image/Rice milling machine-final design.jpg",
      "/image/Rice milling machine-draw design.jpg",
    ],
    featured: true,
  },
  {
    id: "refrigerated-tricycle",
    title: "Tricycle (Refrigerated Milk Transport)",
    description: "An electric tricycle designed to transport cold milk safely using a built-in refrigeration system. Engineered for Rwandan terrain, it includes a lightweight chassis, battery cooling integration, and manufacturing-ready drawings for production.",
    category: "Transportation & Logistics",
    images: ["/image/Tricycle (refrigerated milk transport)-final design.jpg"],
    featured: true,
  },
  {
    id: "isuzu-tender-truck",
    title: "ISUZU Customized Tender Truck",
    description: "A tender-ready truck design tailored for industrial and logistics applications. The project involved CAD customization of chassis, bodywork, and functional compartments to meet client specifications while maintaining structural integrity and aesthetic appeal.",
    category: "Transportation & Logistics",
    images: [
      "/image/ISUZU customized tender truck-final dsign.jpg",
      "/image/ISUZU customized tender truck-first-design draw.jpg",
      "/image/ISUZU customized tender truck-second-design draw.jpg",
      "/image/ISUZU customized tender truck-third-design draw.jpg",
    ],
    featured: false,
  },
  {
    id: "wrist-brace",
    title: "Wrist Brace (Parametric)",
    description: "A parametric wrist brace that adapts dynamically to patient dimensions, ensuring personalized fit and comfort. Designed for additive manufacturing, it combines biomedical engineering principles with digital fabrication for medical rehabilitation.",
    category: "Medical & Healthcare",
    images: [
      "/image/Wrist brace (parametric)-first-draw-design.jpg",
      "/image/Wrist brace (parametric)-second-draw-design.jpg",
      "/image/Wrist brace (parametric)-third-draw-design.jpg",
    ],
    featured: false,
  },
  {
    id: "wet-scrubber",
    title: "Wet Scrubber",
    description: "An industrial air-cleaning system designed to remove particulate matter and pollutants using fluid dynamics optimization. Developed in SolidWorks with a working prototype, it demonstrates environmental innovation through precision engineering.",
    category: "Environmental Technology",
    images: [
      "/image/Wet scrubber-final-design.jpg",
      "/image/Wet scrubber-draw-design.jpg",
    ],
    featured: false,
  },
  {
    id: "travel-mug",
    title: "Travel Mug",
    description: "A modern, ergonomically designed travel mug combining durability, insulation, and manufacturability. Developed from concept to functional prototype, it showcases Delight Consultancy's end-to-end product development capability — from 3D design to real product.",
    category: "Consumer Products",
    images: [
      "/image/Travel mug-final design.jpg",
      "/image/Travel mug-first-draw-design.jpg",
      "/image/Travel mug-second-draw-design.jpg",
    ],
    featured: false,
  },
];

// Services data
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

export const services: Service[] = [
  {
    id: "research-development",
    title: "Research & Product Development",
    description: "Comprehensive research-driven approach to transform your ideas into viable product concepts with market potential.",
    icon: "",
    benefits: [
      "Market research and feasibility studies",
      "Concept ideation and validation",
      "Technical documentation",
    ],
  },
  {
    id: "product-design",
    title: "Product Design & Engineering",
    description: "Expert CAD design and engineering services using industry-standard tools like SolidWorks for precision and manufacturability.",
    icon: "",
    benefits: [
      "3D CAD modeling and simulation",
      "Design optimization",
      "Engineering analysis and validation",
    ],
  },
  {
    id: "prototyping",
    title: "Prototyping & Fabrication",
    description: "From digital models to physical prototypes, we bring your designs to life for testing and validation.",
    icon: "",
    benefits: [
      "Rapid prototyping",
      "Functional prototype development",
      "Testing and iteration support",
    ],
  },
  {
    id: "design-for-manufacturing",
    title: "Design for Manufacturing (DFM)",
    description: "Optimize your designs for mass production with cost-effective manufacturing processes and material selection.",
    icon: "",
    benefits: [
      "Manufacturing process optimization",
      "Cost reduction strategies",
      "Production-ready technical drawings",
    ],
  },
  {
    id: "global-manufacturing",
    title: "Global Manufacturing Support",
    description: "Connect with reliable manufacturing partners globally, with specialized Rwanda-China collaboration support.",
    icon: "",
    benefits: [
      "Manufacturing partner sourcing",
      "Quality control coordination",
      "International logistics support",
    ],
  },
  {
    id: "innovation-consulting",
    title: "Innovation Consulting & Startup Support",
    description: "Strategic guidance for entrepreneurs and startups to navigate the product development journey from idea to market.",
    icon: "",
    benefits: [
      "Business strategy consultation",
      "Product roadmap development",
      "Investor-ready documentation",
    ],
  },
];

// Company stats
export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export const stats: Stat[] = [
  { label: "Projects Executed", value: "50", suffix: "+" },
  { label: "Years Experience", value: "5", suffix: "+" },
  { label: "Happy Clients", value: "30", suffix: "+" },
  { label: "Industries Served", value: "8", suffix: "+" },
];

// Company information
export const companyInfo = {
  name: "Delight Consultancy Ltd",
  tagline: "From Idea to Market — We Design, Prototype, and Manufacture Your Innovation",
  description: "Delight Consultancy Ltd is a Rwandan-based engineering and innovation consultancy that helps inventors, startups, and industries transform ideas into manufacturable products. We combine research, design, prototyping, and global manufacturing support to deliver end-to-end product development services.",
  mission: "To deliver research-driven engineering and design solutions that bridge creativity, functionality, and manufacturability — helping clients build impactful, high-quality products that improve lives and drive industrial growth.",
  vision: "To become Africa's most trusted product innovation consultancy — connecting research, design, and global manufacturing to shape the next generation of engineered products.",
  location: "Kigali City, Rwanda",
  email: "info@delightconsultancy.rw",
  phone: "+250 798 584 384",
  socialMedia: {
    linkedin: "#",
    twitter: "#",
    facebook: "#",
    instagram: "#",
  },
};

// Process steps
export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Research & Ideation",
    description: "Understanding your vision, market research, and concept development.",
  },
  {
    id: 2,
    title: "Design & Simulation",
    description: "3D CAD modeling, engineering analysis, and design optimization.",
  },
  {
    id: 3,
    title: "Prototyping & Validation",
    description: "Creating functional prototypes and testing for performance validation.",
  },
  {
    id: 4,
    title: "Manufacturing Coordination",
    description: "Preparing production drawings and connecting with manufacturing partners.",
  },
  {
    id: 5,
    title: "Launch & Scaling",
    description: "Supporting your product launch and scaling production capabilities.",
  },
];

// Why choose us highlights
export interface Highlight {
  title: string;
  description: string;
  icon: string;
}

export const highlights: Highlight[] = [
  {
    title: "End-to-End Solutions",
    description: "From initial concept to market-ready product, we handle every stage of development.",
    icon: "",
  },
  {
    title: "Expert Engineering Team",
    description: "Skilled professionals with extensive experience in mechanical design and innovation.",
    icon: "",
  },
  {
    title: "Global Manufacturing Network",
    description: "Access to reliable manufacturing partners across Africa and Asia.",
    icon: "",
  },
  {
    title: "Cost-Effective Solutions",
    description: "Optimized processes that deliver quality results within your budget.",
    icon: "",
  },
];

