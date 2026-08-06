import ArrowUpRight from "@/components/ArrowUpRight";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import imgFrame427318995 from "@/imports/Desktop1/3eb90e10b19e878743d40bcb6bdede0203fad155.png";
import svgPaths from "@/imports/Desktop1/svg-8fadhi2yqu";
import { onImgError } from "@/lib/image";
import type { Page } from "@/types";

const skills = [
  {
    label: "UX Research",
    desc: "User interviews, usability testing, heuristic evaluation",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
    ),
  },
  {
    label: "Product Design",
    desc: "End-to-end design from wireframe to polished UI",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    label: "Prototyping",
    desc: "Interactive prototypes and micro-interaction design",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3"/>
      </svg>
    ),
  },
  {
    label: "Web Design",
    desc: "Responsive landing pages and marketing sites",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
  },
  {
    label: "Design Systems",
    desc: "Scalable component libraries and style guides",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
      </svg>
    ),
  },
  {
    label: "Brand Identity",
    desc: "Visual identity, typography, and color systems",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
      </svg>
    ),
  },
];

const tools = ["Figma", "FigJam", "Notion", "Lovable", "Antigravity", "Dribbble", "Behance", "Framer"];

function ToolIcon({ name }: { name: string }) {
  if (name === "Figma") return (
    <svg width="16" height="16" viewBox="0 0 24 36" fill="none">
      <path d="M12 18a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" fill="#1ABCFE"/>
      <path d="M0 30a6 6 0 0 1 6-6h6v6a6 6 0 0 1-12 0z" fill="#0ACF83"/>
      <path d="M12 0v12h6a6 6 0 0 0 0-12z" fill="#FF7262"/>
      <path d="M0 6a6 6 0 0 0 6 6h6V0H6A6 6 0 0 0 0 6z" fill="#F24E1E"/>
      <path d="M0 18a6 6 0 0 0 6 6h6V12H6a6 6 0 0 0-6 6z" fill="#A259FF"/>
    </svg>
  );
  if (name === "FigJam") return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#F24E1E"/>
      <path d="M7 17L12 7L17 17H7Z" fill="white"/>
    </svg>
  );
  if (name === "Notion") return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="white"/>
      <path d="M6 4h9l4 4v12H6V4zm2 2v12h10V9l-3-3H8zm1 3h7v1H9V9zm0 3h7v1H9v-1zm0 3h5v1H9v-1z" fill="#191919"/>
    </svg>
  );
  if (name === "Lovable") return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#FF4B6E"/>
      <path d="M12 18s-6-3.8-6-7.5C6 8.57 7.57 7 9.5 7c1.1 0 2.1.57 2.5 1.5C12.4 7.57 13.4 7 15.5 7 17.43 7 19 8.57 19 10.5 19 14.2 12 18 12 18z" fill="white"/>
    </svg>
  );
  if (name === "Antigravity") return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#2a2730"/>
      <path d="M12 5l5.5 13H6.5L12 5z" fill="white"/>
    </svg>
  );
  if (name === "Dribbble") return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#EA4C89"/>
      <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm5.66 4.95a8 8 0 011.2 3.9c-.56-.1-2.83-.5-4.74-.18a19 19 0 00-.46-1.02 24 24 0 003.99-2.7zM12 4a8 8 0 015.05 1.8 22 22 0 01-3.8 2.6A26 26 0 0011 4.05 8.1 8.1 0 0112 4zm-2.6.6A24 24 0 0111.8 8.8c-2.6.7-5 .67-5.3.66A8.1 8.1 0 019.4 4.6zM4 12l.1-.2c.58.01 3.5-.05 6.28-.95.12.24.22.5.33.74-.1.03-.2.06-.3.09a20 20 0 00-4.6 3.76A8 8 0 014 12zm3.37 5.4a18 18 0 014.4-3.7 24 24 0 011.12 4.13A8 8 0 017.37 17.4zm5.65.95a25 25 0 00-1.1-3.96c1.77-.3 4.1.23 4.35.3a8 8 0 01-3.25 3.66z" fill="white"/>
    </svg>
  );
  if (name === "Behance") return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#1769FF"/>
      <path d="M5 7h5c2 0 3 1 3 2.5S12 12 10 12H5V7zm0 5h5.5c2.5 0 3.5 1 3.5 2.5S13 17 10.5 17H5v-5zm2 1.5v2h3c.8 0 1.5-.3 1.5-1s-.7-1-1.5-1H7zm0-4v2h2.5c.8 0 1.5-.3 1.5-1s-.7-1-1.5-1H7zm8.5-.5h3v1h-3V9zM15 13c0-2 1.5-3.5 3.5-3.5S22 11 22 13v.5h-5c.1 1 .8 1.5 1.5 1.5.6 0 1-.3 1.2-.8h2a3.3 3.3 0 01-3.2 2.3C16.5 16.5 15 15 15 13zm2.1-.8h2.8c-.1-.8-.6-1.2-1.4-1.2s-1.3.4-1.4 1.2z" fill="white"/>
    </svg>
  );
  if (name === "Framer") return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#0055FF"/>
      <path d="M7 6h10v5h-5L7 6zm0 5h5l5 6H7v-6z" fill="white"/>
    </svg>
  );
  return <span className="w-4 h-4 rounded-sm bg-white/30" />;
}

export default function AboutPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <div className="flex flex-col">

      {/* ── Hero ── */}
      <section className="max-w-[1280px] mx-auto px-6 sm:px-[80px] pt-[120px] sm:pt-[140px] pb-[60px] sm:pb-[80px] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2.5 border border-[#5f51a4] rounded-full px-4 py-2.5 w-fit">
              <svg width="18" height="18" viewBox="0 0 22.5027 22.5027" fill="none" className="opacity-70">
                <path d={svgPaths.p214cbe70} fill="#6B47D3" />
              </svg>
              <span className="font-['Montserrat',sans-serif] font-medium text-[14px] text-[#5f51a4]">
                The Designer Behind The Work
              </span>
            </div>

            <h1 className="font-['Montserrat',sans-serif] text-[34px] sm:text-[44px] lg:text-[52px] leading-[1.12] text-black">
              <span className="font-medium">I'm </span>
              <span className="font-['Playfair_Display',serif] font-bold italic">Oyinloluwa,</span>
              <br />
              <span className="font-['Playfair_Display',serif] font-bold italic">a Product Designer</span>
              <br />
              <span className="font-medium">creating meaningful</span>
              <br />
              <span className="font-medium">digital experiences.</span>
            </h1>

            <p className="font-['Montserrat',sans-serif] font-medium text-[#555] text-[15px] sm:text-[17px] leading-relaxed max-w-[520px]">
              I design thoughtful digital products that combine research, strategy, and beautiful interfaces to solve real business and user problems. With over 1 year of experience, I've partnered with startups and brands to bring meaningful ideas to life.
            </p>

            <div className="flex items-center gap-3 flex-wrap">
              {[
                { stat: "1+", label: "Year of Experience" },
                { stat: "5+", label: "Projects Delivered" },
                { stat: "3", label: "Happy Clients" },
              ].map(({ stat, label }) => (
                <div key={label} className="border border-[#e8e8e8] rounded-[16px] px-5 py-3.5 flex flex-col gap-0.5 hover:border-[#6751a4] transition-colors duration-300">
                  <p className="font-['Montserrat',sans-serif] font-bold text-[26px] text-black leading-none">{stat}</p>
                  <p className="font-['Montserrat',sans-serif] font-medium text-[12px] text-[#777]">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Photo card */}
          <div className="relative h-[380px] sm:h-[480px] lg:h-[540px] rounded-[32px] overflow-hidden group">
            <img
              alt="Oyinloluwa"
              src={imgFrame427318995}
              loading="lazy"
              decoding="async"
              onError={onImgError}
              className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-600"
            />
            {/* Glass quote card */}
            <div
              className="absolute bottom-5 left-5 right-5 rounded-[14px] p-5 backdrop-blur-md"
              style={{
                backgroundImage: "linear-gradient(270deg, rgba(51,51,51,0.25) 0%, rgba(103,81,164,0.25) 32.692%), linear-gradient(90deg, rgba(245,249,255,0.1) 0%, rgba(245,249,255,0.1) 100%)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <p className="font-['Montserrat',sans-serif] font-semibold text-[13px] text-white leading-relaxed">
                "Design is not just how it looks — it's how it works, feels, and solves real problems."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="bg-[#f0eeff] py-[60px] sm:py-[80px] px-6 sm:px-[80px]">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col gap-3 mb-12">
            <p className="font-['Playfair_Display',serif] italic text-[#717171] text-[20px] sm:text-[22px]">What I do</p>
            <h2 className="font-['Montserrat',sans-serif] font-semibold text-[30px] sm:text-[40px] text-black">Skills & Expertise</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((skill) => (
              <div
                key={skill.label}
                className="group flex flex-col gap-4 p-6 bg-white rounded-[20px] border border-[#ebebeb] hover:border-[#6751a4] hover:shadow-[0_4px_24px_rgba(103,81,164,0.08)] transition-all duration-300 cursor-default"
              >
                <div className="w-10 h-10 rounded-[10px] bg-[#f4f1ff] flex items-center justify-center text-[#6751a4] group-hover:bg-[#6751a4] group-hover:text-white transition-colors duration-300">
                  {skill.icon}
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="font-['Montserrat',sans-serif] font-semibold text-[17px] text-black">{skill.label}</p>
                  <p className="font-['Montserrat',sans-serif] font-medium text-[13px] text-[#666] leading-relaxed">{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tools ── */}
      <section className="py-[60px] sm:py-[80px] px-6 sm:px-[80px]">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div className="flex flex-col gap-3">
              <p className="font-['Playfair_Display',serif] italic text-[#717171] text-[20px] sm:text-[22px]">My Stack</p>
              <h2 className="font-['Montserrat',sans-serif] font-semibold text-[30px] sm:text-[40px] text-black">Tools I work with</h2>
            </div>
            <a
              href="https://docs.google.com/document/d/1Q3-IaiUvbQVL6w2QzXNDdYUMG-nNdHQ0B5zuRU4WFhI/edit?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-fit flex items-center gap-[10px] rounded-[40px] px-[16px] py-[10px] bg-[#201e21] hover:bg-[#6751a4] transition-all duration-300 cursor-pointer"
            >
              <span className="font-['Montserrat',sans-serif] font-semibold text-[16px] sm:text-[20px] leading-[24px] sm:leading-[32px] text-white whitespace-nowrap">
                See Resume
              </span>
              <span className="rounded-full p-[10px] flex items-center shrink-0 bg-white group-hover:scale-110 transition-transform duration-300">
                <ArrowUpRight size={13} color="black" />
              </span>
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, i) => (
              <div
                key={tool}
                className="group flex items-center gap-[10px] bg-[#201e21] hover:bg-[#6751a4] rounded-[12px] px-[16px] py-[12px] transition-all duration-300 cursor-default"
                style={{ transitionDelay: `${i * 20}ms` }}
              >
                <span className="shrink-0 flex items-center">
                  <ToolIcon name={tool} />
                </span>
                <p className="font-['Montserrat',sans-serif] font-medium text-[15px] text-white whitespace-nowrap">{tool}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      <ExperienceSection />

      {/* ── Footer ── */}
      <div className="mt-[50px] sm:mt-[80px]">
        <Footer onNavigate={onNavigate} />
      </div>
    </div>
  );
}
