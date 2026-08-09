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
    title: "Product Engineering",
    titleParts: ["Product ", "Engineering"],
    description:
      "End-to-end product engineering that turns ideas into reliable, scalable software — clean frontend builds, thoughtful architecture, and launch-ready execution.",
    bullets: [
      "End-to-End Product Development",
      "Frontend Engineering",
      "Rapid Prototyping & MVPs",
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
