import imgFrame427318621 from "@/imports/Desktop1/7254f38842d41ede4b4982086d9bf3a8c4831271.png";
import imgFrame427318622 from "@/imports/Desktop1/794a5d50c55bde00e63505983d8cfbdbb9909259.png";
import imgFrame427318623 from "@/imports/Desktop1/8ac9e8cfb551c6721a9307dbef95a28a85607315.png";
import imgFrame427318624 from "@/imports/Desktop1/38c0921037dc7f6a775e5359eed7b12da4978ce5.png";
import img278 from "@/imports/Desktop1/2c483670d684a4c12ad0592c842f2565471dbf66.png";
import imgImage19 from "@/imports/Desktop1/0cfc52a2c77997eca1c9245e9ec11e0f7c3b05fd.png";
import imgImage22 from "@/imports/Desktop1/8ee7c0e0b04b04b6f42ecba7d562c1f2fc11e64e.png";
import imgWhatsApp from "@/imports/Desktop1/1f5966cb2a51fcf0db121c8e875607001e68b36b.png";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  category: string;
  type: "Mobile App" | "Dashboard";
  image: string;
  secondImage?: string;
  galleryImages?: string[];
  year: string;
  role: string;
  duration: string;
  client: string;
  tags: string[];
  challenge: string;
  solution: string;
  highlights: string[];
}

export function getAdjacentProjects(id: string): { prev?: Project; next?: Project } {
  const index = projects.findIndex((p) => p.id === id);
  if (index === -1) return {};
  const length = projects.length;
  return {
    prev: projects[(index - 1 + length) % length],
    next: projects[(index + 1) % length],
  };
}

export const projects: Project[] = [
  {
    id: "iexplore",
    title: "iexplore",
    subtitle: "Reinventing Nightlife Discovery & Personal Safety",
    description:
      "Designed to eliminate the social friction of planning, safety, and venue discovery in nightlife experiences.",
    fullDescription:
      "iexplore is a mobile solution crafted for nightlife enthusiasts who want to discover vibrant venues, organize group outings smoothly, and stay safe during late-night adventures. The app blends real-time crowd insights, verified venue atmosphere ratings, and integrated safety signals into an intuitive, polished mobile experience.",
    category: "Nightlife",
    type: "Mobile App",
    image: imgFrame427318621,
    secondImage: img278,
    galleryImages: [imgFrame427318621, img278, imgWhatsApp],
    year: "2025",
    role: "Lead Product Designer",
    duration: "8 weeks",
    client: "iexplore Inc.",
    tags: ["Nightlife", "Mobile App", "Social Safety", "UX/UI Design"],
    challenge:
      "Users often experience anxiety when planning night outs due to unpredictable venue crowds, safety concerns, and fragmented group communication.",
    solution:
      "Created a streamlined mobile interface featuring live atmosphere meters, emergency contact quick-actions, and collaborative trip itineraries.",
    highlights: [
      "Real-time venue vibe indicators & crowd density maps",
      "One-tap Emergency Buddy safety alerts with location sharing",
      "Seamless group RSVP & split-bill venue reservations",
      "Modern dark-mode aesthetic tailored for low-light environments",
    ],
  },
  {
    id: "grabby",
    title: "Grabby",
    subtitle: "All-in-One Business Management for Emerging SMEs",
    description:
      "An all-in-one SaaS platform helping SMEs manage sales, inventory, and customer relationships in a single application.",
    fullDescription:
      "Grabby simplifies daily operations for small and medium enterprises by consolidating point-of-sale operations, stock tracking, sales reporting, and CRM into one unified mobile platform. It replaces cluttered paper logs and disjointed software with a sleek, user-friendly interface designed for rapid daily transactions.",
    category: "SaaS",
    type: "Mobile App",
    image: imgFrame427318622,
    secondImage: imgImage19,
    galleryImages: [imgFrame427318622, imgImage19],
    year: "2025",
    role: "Product Designer",
    duration: "6 weeks",
    client: "Grabby Commerce",
    tags: ["SaaS", "Mobile App", "Inventory", "FinTech"],
    challenge:
      "Small retail owners struggle with complex multi-system setups that slow down checkout queues and cause inventory tracking errors.",
    solution:
      "Engineered an intuitive mobile workflow that enables fast item scanning, instant invoice generation, and automated stock reorder alerts.",
    highlights: [
      "Sub-second checkout flow optimized for touch screens",
      "Automated low-stock notifications & supplier management",
      "Real-time revenue & top-seller analytical dashboards",
      "Offline sync capabilities for uninterrupted retail operations",
    ],
  },
  {
    id: "cammy",
    title: "Cammy",
    subtitle: "Streamlined Order Management & Analytics Dashboard",
    description:
      "A modern Order Management Dashboard UI that simplifies product selection and streamlines the checkout experience.",
    fullDescription:
      "Cammy is a high-performance web dashboard engineered for e-commerce store managers to process high-volume orders, monitor live inventory statuses, and evaluate customer buying trends. The interface prioritizes high information density with exceptional visual clarity, reducing order processing time significantly.",
    category: "Product Design",
    type: "Dashboard",
    image: imgFrame427318623,
    secondImage: imgImage22,
    galleryImages: [imgFrame427318623, imgImage22],
    year: "2025",
    role: "UI/UX Designer",
    duration: "5 weeks",
    client: "Cammy Commerce",
    tags: ["Product Design", "Dashboard", "Web App", "Analytics"],
    challenge:
      "Operations managers suffered from cognitive overload navigating convoluted, multi-page order tables with poor visual hierarchy.",
    solution:
      "Designed a clean modular dashboard with customizable data grids, quick batch status updates, and actionable analytics cards.",
    highlights: [
      "Customizable multi-filter data tables with bulk actions",
      "Visual funnel tracking from order placement to final delivery",
      "Interactive inventory forecasting widgets",
      "Keyboard shortcuts for lightning-fast power user workflows",
    ],
  },
  {
    id: "afrireuse",
    title: "AfriReuse",
    subtitle: "Making Circular Economy & Sustainability Social",
    description:
      "A community reuse app where people give and receive items for free — making sustainability social.",
    fullDescription:
      "AfriReuse is a eco-conscious social platform connecting local community members to gift pre-loved household goods, books, electronics, and clothing. By combining hyper-local geo-discovery with social trust verification, the app makes giving away items effortless and rewards sustainable habits.",
    category: "Product Design",
    type: "Mobile App",
    image: imgFrame427318624,
    secondImage: imgFrame427318621,
    galleryImages: [imgFrame427318624, imgFrame427318621],
    year: "2024",
    role: "Lead UI/UX Designer",
    duration: "7 weeks",
    client: "AfriReuse Foundation",
    tags: ["Product Design", "Mobile App", "Sustainability", "Community"],
    challenge:
      "Traditional secondhand platforms focus on transactional selling, creating friction for users who simply want to donate items quickly and safely.",
    solution:
      "Designed a zero-friction listing experience allowing users to snap a photo and publish free listings in under 30 seconds with automated pickup scheduling.",
    highlights: [
      "3-step photo-first listing creation workflow",
      "Hyper-local radius matching and secure chat messaging",
      "Community impact metrics tracking items saved from landfills",
      "Verified user trust badges and neighborhood rating system",
    ],
  },
];
