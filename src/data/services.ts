import imgImage19 from "@/imports/Desktop1/0cfc52a2c77997eca1c9245e9ec11e0f7c3b05fd.png";
import imgLandingPage from "@/imports/landing-page.png";
import imgImage22 from "@/imports/Desktop1/8ee7c0e0b04b04b6f42ecba7d562c1f2fc11e64e.png";
import imgFrame427318624 from "@/imports/Desktop1/38c0921037dc7f6a775e5359eed7b12da4978ce5.png";

export interface Service {
  title: string;
  titleParts: [string, string];
  description: string;
  bullets: string[];
  image: string;
}

export const services: Service[] = [
  {
    title: "Website Redesign",
    titleParts: ["Website ", "Redesign"],
    description:
      "Transforming outdated websites into modern digital experiences that improve engagement and strengthen brand presence.",
    bullets: [
      "UX/UI Improvements",
      "Modern Visual Design",
      "Content Structure Review",
      "Performance Enhancement",
      "Responsive Experience",
    ],
    image: imgImage19,
  },
  {
    title: "Landing Page Design",
    titleParts: ["Landing Page ", "Design"],
    description:
      "Strategic landing pages designed to capture attention, communicate value, and increase conversions.",
    bullets: [
      "Conversion-Focused Design",
      "Custom Visual Direction",
      "Mobile Optimization",
      "Clear User Flows",
      "CTA Optimization",
    ],
    image: imgLandingPage,
  },
  {
    title: "Antigravity Development",
    titleParts: ["Antigravity ", "Development"],
    description:
      "Fast, responsive, and immersive websites that combine exceptional user experiences with smooth interactions and high-performance execution.",
    bullets: [
      "Custom Antigravity Development",
      "Responsive Web Experiences",
      "Advanced Interactions & Animations",
      "Performance Optimization",
    ],
    image: imgImage22,
  },
  {
    title: "Mobile App Design",
    titleParts: ["Mobile App ", "Design"],
    description:
      "Designing intuitive, high-quality mobile experiences that feel native and delight users from first tap to checkout.",
    bullets: [
      "iOS & Android UI Design",
      "User Flow & Wireframing",
      "Interactive Prototyping",
      "Design System Setup",
      "Usability Testing",
    ],
    image: imgFrame427318624,
  },
];
