import { useState } from "react";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/ProjectModal";
import { Project, projects } from "@/data/work";
import imgImage19 from "@/imports/Desktop1/0cfc52a2c77997eca1c9245e9ec11e0f7c3b05fd.png";
import imgImage22 from "@/imports/Desktop1/8ee7c0e0b04b04b6f42ecba7d562c1f2fc11e64e.png";
import imgLandingPage from "@/imports/Landing Page.png";
import imgWhatsApp from "@/imports/Desktop1/1f5966cb2a51fcf0db121c8e875607001e68b36b.png";
import imgImage2 from "@/imports/Desktop1/04a4175d61916ad339d54536c582f1d7d949d717.png";
import imgImage3 from "@/imports/Desktop1/fef05d0c2bf7fdc1ff7225cea865f75dd23ceeb2.png";
import imgImage4 from "@/imports/Desktop1/53fa5ba34e4d7b4a8bba4fc52e5792f0effa82f0.png";
import imgImage5 from "@/imports/Desktop1/5d340730fa39abae7d01409ef7a29f861c78c18b.png";
import img278 from "@/imports/Desktop1/2c483670d684a4c12ad0592c842f2565471dbf66.png";
import imgFrame427318995 from "@/imports/Desktop1/3eb90e10b19e878743d40bcb6bdede0203fad155.png";
import imgFrame427318621 from "@/imports/Desktop1/7254f38842d41ede4b4982086d9bf3a8c4831271.png";
import imgFrame427318622 from "@/imports/Desktop1/794a5d50c55bde00e63505983d8cfbdbb9909259.png";
import imgFrame427318623 from "@/imports/Desktop1/8ac9e8cfb551c6721a9307dbef95a28a85607315.png";
import imgFrame427318624 from "@/imports/Desktop1/38c0921037dc7f6a775e5359eed7b12da4978ce5.png";
import svgPaths from "@/imports/Desktop1/svg-8fadhi2yqu";

type Page = "home" | "about" | "works" | "contact";

// ─── Reusable pill button ─────────────────────────────────────────────────────
function PillBtn({
  label,
  dark = true,
  onClick,
}: {
  label: string;
  dark?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`group w-fit flex items-center gap-[10px] rounded-[40px] px-[16px] py-[10px] cursor-pointer transition-all duration-300 ${
        dark
          ? "bg-[#201e21] hover:bg-[#6751a4]"
          : "bg-[#f3ecec] hover:bg-white"
      }`}
    >
      <span
        className={`font-['Montserrat',sans-serif] font-semibold text-[20px] leading-[32px] whitespace-nowrap ${
          dark ? "text-white" : "text-black"
        }`}
      >
        {label}
      </span>
      <span
        className={`rounded-full p-[10px] flex items-center shrink-0 group-hover:scale-110 transition-transform duration-300 ${
          dark ? "bg-white" : "bg-black"
        }`}
      >
        <svg width="13" height="13" viewBox="0 0 13.5004 13.5004" fill="none">
          <path d={svgPaths.p34838800} fill={dark ? "black" : "white"} />
        </svg>
      </span>
    </button>
  );
}

// ─── Stars ────────────────────────────────────────────────────────────────────
function Stars() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="15.4" viewBox="0 0 17.5118 16.873" fill="none">
          <path d={svgPaths.p2a3b1d00} fill="#38323D" fillOpacity="0.8" />
        </svg>
      ))}
    </div>
  );
}

// ─── Image marquee ────────────────────────────────────────────────────────────
const marqueeImages = [
  imgLandingPage, imgWhatsApp, imgImage2, imgImage3,
  imgImage4, imgImage5, img278,
];

function ImageMarquee() {
  const doubled = [...marqueeImages, ...marqueeImages];
  return (
    <div className="overflow-hidden w-full h-[280px]">
      <div className="flex gap-[32px] animate-marquee" style={{ width: "max-content" }}>
        {doubled.map((src, i) => (
          <div key={i} className="relative rounded-[32px] shrink-0 w-[280px] h-[280px] bg-[#eee]">
            <img
              alt=""
              src={src}
              className="absolute inset-0 w-full h-full object-cover rounded-[32px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Services accordion ───────────────────────────────────────────────────────
type Service = {
  title: string;
  titleParts: [string, string];
  description: string;
  bullets: string[];
  image: string;
};

const services: Service[] = [
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

function ServicesAccordion({ onContact }: { onContact: () => void }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full px-[80px] py-[60px] max-w-[1440px] mx-auto">
      {/* Header — matches Figma: text block w-[927px], gap-[148px] to button */}
      <div className="flex items-center justify-end gap-[148px] mb-[60px] w-full">
        <div className="flex flex-col gap-[16px] w-[927px]">
          <p className="font-['Playfair_Display',serif] italic text-[#717171] text-[24px] leading-normal">
            Services
          </p>
          <h2 className="font-['Montserrat',sans-serif] font-semibold text-[40px] text-black leading-normal">
            My Services
          </h2>
          <p className="font-['Montserrat',sans-serif] font-medium text-[#333] text-[20px] w-[742px] leading-normal">
            Helping brands build modern, high-performing websites that combine strategy, design, and seamless user experiences.
          </p>
        </div>
        <PillBtn label="Contact Me" dark onClick={onContact} />
      </div>

      {/* Accordion rows — gap-[80px] between rows, Figma-exact */}
      <div className="flex flex-col gap-[80px]">
        {services.map((svc, i) => {
          const isOpen = open === i;
          const anyOpen = open !== null;
          const isOther = anyOpen && !isOpen;

          return (
            <div
              key={i}
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              onKeyDown={(e) => e.key === "Enter" && setOpen(isOpen ? null : i)}
              className="relative cursor-pointer overflow-hidden transition-all duration-500 ease-in-out group/row"
              style={{
                height: isOpen ? "380px" : "78px",
                borderBottom: "1px solid #3d3d3d",
              }}
            >
              {/* Collapsed label — hover: last word turns purple, + icon slides in */}
              <div
                className="absolute inset-0 flex items-center justify-between pr-[20px] py-[8px] transition-opacity duration-300"
                style={{ opacity: isOpen ? 0 : 1, pointerEvents: isOpen ? "none" : "auto" }}
              >
                <p className="font-['Montserrat',sans-serif] font-semibold text-[28px] text-black leading-normal whitespace-nowrap transition-colors duration-300">
                  <span>{svc.titleParts[0]}</span>
                  <span className={`transition-colors duration-300 ${isOther ? "text-[#6751a4]" : "text-black group-hover/row:text-[#6751a4]"}`}>
                    {svc.titleParts[1]}
                  </span>
                </p>
                {/* + / × icon — slides in on hover */}
                <span
                  className="flex items-center justify-center w-[48px] h-[48px] rounded-full border border-[#ccc] shrink-0 opacity-0 group-hover/row:opacity-100 translate-x-4 group-hover/row:translate-x-0 transition-all duration-300"
                  style={{ background: "transparent" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </div>

              {/* Expanded content — exact Figma spec */}
              <div
                className="absolute inset-0 flex items-start justify-between pb-[8px] pr-[20px] pt-[16px] transition-opacity duration-300"
                style={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? "auto" : "none" }}
              >
                {/* Left block — h-[268px] w-[558px] gap-[32px] */}
                <div className="flex flex-col gap-[32px] h-[340px] w-[558px] items-start shrink-0">
                  <div className="flex flex-col gap-[10px] w-full">
                    <p className="font-['Montserrat',sans-serif] font-semibold text-[24px] text-black leading-normal whitespace-nowrap">
                      {svc.title}
                    </p>
                    <p className="font-['Montserrat',sans-serif] font-medium text-[#333] text-[14px] w-[444px] leading-normal">
                      {svc.description}
                    </p>
                  </div>
                  {/* Bullets — w-[255px], each in own ul, leading-[0] */}
                  <div className="flex flex-col gap-[10px] w-[255px] leading-[0]">
                    {svc.bullets.map((b, bi) => (
                      <ul key={bi} className="block w-full">
                        <li className="list-disc ms-[21px] font-['Montserrat',sans-serif] font-medium text-[14px] text-black leading-normal">
                          {b}
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
                {/* Project image — h-[276px] w-[522px] */}
                <div className="h-[340px] w-[522px] rounded-[20px] overflow-hidden shrink-0">
                  <img
                    alt={svc.title}
                    src={svc.image}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ─── Testimonials marquee ─────────────────────────────────────────────────────
const testimonials = [
  {
    initials: "FA",
    from: "Founder, AfriReuse",
    text: `"Working with Oyin was a refreshing experience. She quickly understood our vision of making community reuse simple and accessible, then translated it into an intuitive product that felt welcoming from the first interaction."`,
  },
  {
    initials: "FC",
    from: "Founder, Cammy",
    text: `"Oyin transformed a complex order management workflow into a dashboard that feels effortless to use. She has a strong eye for information hierarchy and user experience, making even data-heavy interfaces clean and intuitive."`,
  },
  {
    initials: "FG",
    from: "Founder, Grabby",
    text: `"From inventory management to customer relationships, our platform had many moving parts. Oyin approached every challenge thoughtfully, creating a seamless experience without sacrificing functionality."`,
  },
  {
    initials: "Fi",
    from: "Founder, iexplore",
    text: `"Oyin understood that our product wasn't just about finding places — it was about helping people feel confident and excited. She crafted an experience that feels modern, intuitive, and engaging while keeping user trust at the center."`,
  },
];

function TestimonialsMarquee() {
  const doubled = [...testimonials, ...testimonials];
  return (
    <div className="overflow-hidden w-full">
      <div className="flex gap-[28px] animate-marquee-slow" style={{ width: "max-content" }}>
        {doubled.map((t, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 p-6 rounded-[16px] shrink-0 w-[340px]"
            style={{
              backgroundImage:
                "linear-gradient(270deg, rgba(51,51,51,0.18) 0%, rgba(103,81,164,0.18) 32.692%), linear-gradient(90deg, rgba(245,249,255,0.06) 0%, rgba(245,249,255,0.06) 100%)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.14)",
              boxShadow: "0px 16px 32px 0px rgba(0,0,0,0.12), inset 0px 1px 8px 0px rgba(255,255,255,0.08)",
            }}
          >
            <Stars />
            <p className="font-['Montserrat',sans-serif] font-medium text-[13px] text-[rgba(56,50,61,0.85)] leading-relaxed flex-1">
              {t.text}
            </p>
            <div className="flex gap-2.5 items-center pt-2 border-t border-[rgba(255,255,255,0.1)]">
              <div className="bg-[#d9d9d9] rounded-full w-9 h-9 flex items-center justify-center shrink-0">
                <p className="font-['Montserrat',sans-serif] font-semibold text-[13px] text-[rgba(56,50,61,0.8)] leading-none">{t.initials}</p>
              </div>
              <p className="font-['Montserrat',sans-serif] font-semibold text-[14px] text-[rgba(56,50,61,0.8)]">{t.from}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


// ─── Experience ───────────────────────────────────────────────────────────────
const experience = [
  {
    title: "Maxx Connection",
    role: "Product Designer",
    period: "2025 – Present",
    desc: "Designing user-centered digital experiences and supporting experiential marketing campaigns for leading brands including Coca-Cola, Monster Energy, Dettol, Airtel, Plazma and more.",
    tags: ["Product Design", "Strategy", "Collaboration", "Client Service"],
  },
  {
    title: "Freelancer",
    role: "Product Designer",
    period: "2025",
    desc: "Partnered with startups to design intuitive mobile apps, SaaS platforms, and responsive websites from concept to launch.",
    tags: ["Prototyping", "SaaS", "Product Design", "Web Design"],
  },
  {
    title: "UI/UX Designer Trainee",
    role: "Product Designer",
    period: "2024 – 2025",
    desc: "Completed intensive training in product design principles with hands-on projects focused on user research, wireframing, prototyping and UI design.",
    tags: ["Product Design", "Strategy", "Collaboration", "Client Service"],
  },
];

// ─── HomePage ─────────────────────────────────────────────────────────────────
export default function HomePage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="w-full">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative w-full flex flex-col items-center justify-center text-center pt-[160px] pb-[100px] px-6 overflow-hidden">
        {/* Subtle radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[480px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, rgba(103,81,164,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="relative flex flex-col items-center gap-8 max-w-[760px]">
          {/* Available badge */}
          <div className="inline-flex items-center gap-2 border border-[#5f51a4] rounded-full px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-[#6751a4] animate-pulse" />
            <span className="font-['Montserrat',sans-serif] font-medium text-[13px] text-[#6751a4] tracking-wide">
              Available for new projects
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-['Montserrat',sans-serif] text-[54px] leading-[1.15] text-black">
            <span className="font-medium">I'm</span>{" "}
            <span className="font-['Playfair_Display',serif] font-bold italic">Oyinloluwa,</span>
            <br />
            <span className="font-['Playfair_Display',serif] italic font-medium">a </span>
            <span className="font-['Playfair_Display',serif] font-bold italic">Product Designer</span>
          </h1>

          <p className="font-['Montserrat',sans-serif] font-medium text-[#555] text-[17px] leading-relaxed max-w-[560px]">
            I design thoughtful digital products that combine research, strategy, and beautiful interfaces to solve real business and user problems.
          </p>

          <div className="flex items-center gap-4 mt-2">
            <PillBtn label="Contact Me" dark onClick={() => onNavigate("contact")} />
            <button
              onClick={() => onNavigate("works")}
              className="font-['Montserrat',sans-serif] font-semibold text-[18px] bg-[#f0eff0] rounded-[40px] px-6 py-3 text-black hover:bg-[#201e21] hover:text-white transition-all duration-300"
            >
              View Works
            </button>
          </div>
        </div>
      </section>

      {/* ── Image marquee ─────────────────────────────────────── */}
      <section className="w-full overflow-hidden">
        <ImageMarquee />
      </section>

      {/* ── About preview (dark card) ─────────────────────────── */}
      <section className="w-full px-[80px] py-[80px]">
        <div className="max-w-[1280px] mx-auto bg-[#201e21] rounded-[40px] h-[617px] relative overflow-hidden">
          {/* Right photo */}
          <div className="absolute right-0 top-0 h-full w-[580px] overflow-hidden rounded-bl-[40px] rounded-tl-[40px]">
            <img
              alt="Oyinloluwa"
              src={imgFrame427318995}
              className="absolute h-[125%] left-0 top-[-6.23%] w-full object-cover"
            />
          </div>

          {/* Left content */}
          <div className="absolute left-[64px] top-[60px] flex flex-col gap-8 w-[560px]">
            <div className="inline-flex items-center gap-2 border border-[#5f51a4] rounded-[40px] px-4 py-3 w-fit">
              <svg width="18" height="18" viewBox="0 0 22.5027 22.5027" fill="none" className="opacity-70">
                <path d={svgPaths.p214cbe70} fill="#6B47D3" />
              </svg>
              <span className="font-['Montserrat',sans-serif] font-medium text-[14px] text-white">
                The Designer Behind The Work
              </span>
            </div>

            <p className="font-['Montserrat',sans-serif] font-medium text-[15px] text-[rgba(255,255,255,0.8)] leading-relaxed">
              I believe great design begins with understanding people, not pixels. Every product I design starts with research, empathy, and a clear understanding of the business problem. My goal is to create intuitive digital experiences that feel effortless for users while delivering measurable value for the people behind the product.
            </p>

            <div className="flex gap-4">
              {[
                { stat: "1+", label: "Year of Experience" },
                { stat: "5+", label: "Projects Delivered" },
              ].map(({ stat, label }) => (
                <div key={label} className="bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.12)] rounded-[16px] px-5 py-4 flex flex-col gap-1">
                  <p className="font-['Montserrat',sans-serif] font-bold text-[28px] text-white leading-none">{stat}</p>
                  <p className="font-['Montserrat',sans-serif] font-medium text-[13px] text-[rgba(255,255,255,0.6)]">{label}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavigate("about")}
              className="group self-start flex items-center gap-2.5 border border-[rgba(255,255,255,0.25)] rounded-[40px] px-5 py-2.5 text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <span className="font-['Montserrat',sans-serif] font-semibold text-[15px]">Learn more about me</span>
              <svg width="13" height="13" viewBox="0 0 13.5004 13.5004" fill="none" className="group-hover:translate-x-0.5 transition-transform duration-300">
                <path d={svgPaths.p34838800} fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ── Services accordion ────────────────────────────────── */}
      <ServicesAccordion onContact={() => onNavigate("contact")} />

      {/* ── Selected Works ────────────────────────────────────── */}
      <section className="w-full px-[80px] py-[60px]">
        <div className="max-w-[1280px] mx-auto flex gap-[17px] items-start">
          {/* Sticky left sidebar — w-[701px] matches Figma */}
          <div className="sticky top-0 w-[701px] shrink-0 flex flex-col gap-[24px]">
            <p className="font-['Playfair_Display',serif] italic text-[#717171] text-[24px]">Selected Works</p>
            <h2 className="font-['Montserrat',sans-serif] font-semibold text-[40px] text-black leading-normal w-[592px]">
              A selection of interfaces I've designed across mobile and web.
            </h2>
            <PillBtn label="Contact Me" dark onClick={() => onNavigate("contact")} />
          </div>

          {/* Right card column */}
          <div className="flex flex-col gap-[40px] px-[54px] py-[32px] w-[562px]">
            {projects.map((w, i) => (
              <div
                key={w.id || i}
                onClick={() => setSelectedProject(w)}
                className="bg-[#ccc] flex flex-col gap-[16px] px-[16px] py-[20px] rounded-[40px] sticky top-0 w-[454px] cursor-pointer group hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="h-[275px] rounded-[40px] overflow-hidden w-full relative">
                  {w.secondImage && (
                    <img alt="" src={w.secondImage} className="absolute inset-0 w-full h-full object-cover" />
                  )}
                  <img
                    alt={w.title}
                    src={w.image}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3.5 py-1">
                    <span className="font-['Montserrat',sans-serif] font-semibold text-[12px] text-black">
                      {w.type}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-['Montserrat',sans-serif] font-semibold text-[12px] bg-[#201e21] text-white px-3.5 py-1.5 rounded-full shadow-md">
                      View Case Study ↗
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-[8px] px-[4px]">
                  <p className="font-['Montserrat',sans-serif] font-bold text-[24px] text-black leading-normal">{w.title}</p>
                  <p className="font-['Montserrat',sans-serif] font-medium text-[16px] text-black leading-[1.4] line-clamp-2">{w.description}</p>
                  <p className="font-['Montserrat',sans-serif] font-semibold text-[15px] text-black">
                    {w.category} · {w.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────── */}
      <section className="w-full py-[80px]">
        <div className="max-w-[1280px] mx-auto px-[80px] mb-10 text-center">
          <p className="font-['Playfair_Display',serif] italic text-[#717171] text-[22px] mb-3">Testimonials</p>
          <h2 className="font-['Montserrat',sans-serif] font-semibold text-[40px] text-black mx-auto max-w-[760px] leading-tight">
            A few words from people I've worked with on different projects.
          </h2>
        </div>
        <TestimonialsMarquee />
      </section>

      {/* ── Experience ────────────────────────────────────────── */}
      <section className="bg-[#201e21] rounded-tl-[80px] rounded-tr-[80px] px-[80px] py-[80px] mt-[80px]">
        <div className="max-w-[1280px] mx-auto flex gap-[66px] items-start">
          {/* Left sidebar — sticky, w-[429px] */}
          <div className="sticky top-[100px] w-[429px] shrink-0 flex flex-col gap-[16px]">
            <p className="font-['Playfair_Display',serif] italic text-[#717171] text-[24px]">Experiences</p>
            <h2 className="font-['Montserrat',sans-serif] font-semibold text-[40px] text-white capitalize leading-normal">
              Take a look at my past Experience
            </h2>
            <p className="font-['Montserrat',sans-serif] font-medium text-[rgba(255,255,255,0.5)] text-[16px] leading-relaxed">
              Helping brands build premium digital experiences through modern design and development.
            </p>
          </div>

          {/* Right cards — stacking sticky: each card sticks at top, z-index increases so new cards cover old */}
          <div className="flex flex-col gap-[24px] flex-1 py-[8px]">
            {experience.map((exp, i) => (
              <div
                key={i}
                className="sticky rounded-[20px] px-[32px] py-[28px] flex flex-col gap-[20px]"
                style={{
                  top: `${100 + i * 16}px`,
                  zIndex: i + 1,
                  background: `hsl(${270 + i * 4}, 8%, ${13 + i * 3}%)`,
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                }}
              >
                <div className="flex items-start justify-between text-white gap-4 border-b border-[#949393] pb-[20px]">
                  <div className="flex flex-col gap-[6px]">
                    <p className="font-['Montserrat',sans-serif] font-bold text-[28px] leading-normal">{exp.title}</p>
                    <p className="font-['Montserrat',sans-serif] font-medium text-[18px] text-[rgba(255,255,255,0.7)]">{exp.role}</p>
                  </div>
                  <span className="font-['Montserrat',sans-serif] font-medium text-[15px] text-[rgba(255,255,255,0.5)] bg-[rgba(255,255,255,0.06)] px-[14px] py-[6px] rounded-full whitespace-nowrap mt-1 border border-[rgba(255,255,255,0.1)]">
                    {exp.period}
                  </span>
                </div>
                <p className="font-['Montserrat',sans-serif] font-medium text-[#c2c2c2] text-[15px] leading-relaxed">
                  {exp.desc}
                </p>
                <div className="flex flex-wrap gap-[8px]">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-['Montserrat',sans-serif] font-medium text-[13px] text-white bg-[#333] rounded-[10px] px-[14px] py-[8px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Project Modal ── */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
        onNavigateContact={() => onNavigate("contact")}
      />

      {/* ── Footer ────────────────────────────────────────────── */}
      <div className="mt-[80px]">
        <Footer onNavigate={onNavigate} />
      </div>
    </div>
  );
}
