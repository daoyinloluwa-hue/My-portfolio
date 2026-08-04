import { useState } from "react";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import ImageMarquee from "@/components/ImageMarquee";
import PillButton from "@/components/PillButton";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import ServicesAccordion from "@/components/ServicesAccordion";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import ArrowUpRight from "@/components/ArrowUpRight";
import { getAdjacentProjects, Project, projects } from "@/data/work";
import imgFrame427318995 from "@/imports/Desktop1/3eb90e10b19e878743d40bcb6bdede0203fad155.png";
import svgPaths from "@/imports/Desktop1/svg-8fadhi2yqu";
import { onImgError } from "@/lib/image";
import type { Page } from "@/types";

export default function HomePage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const adjacent = selectedProject ? getAdjacentProjects(selectedProject.id) : null;

  return (
    <div className="w-full">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative w-full flex flex-col items-center justify-center text-center pt-[140px] sm:pt-[160px] pb-[80px] sm:pb-[100px] px-6 overflow-hidden">
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
            <span className="font-['Montserrat',sans-serif] font-medium text-[12px] sm:text-[13px] text-[#6751a4] tracking-wide">
              Available for new projects
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-['Montserrat',sans-serif] text-[32px] sm:text-[42px] md:text-[54px] leading-[1.15] text-black">
            <span className="font-medium">I'm</span>{" "}
            <span className="font-['Playfair_Display',serif] font-bold italic">Oyinloluwa,</span>
            <br />
            <span className="font-['Playfair_Display',serif] italic font-medium">a </span>
            <span className="font-['Playfair_Display',serif] font-bold italic">Product Designer</span>
          </h1>

          <p className="font-['Montserrat',sans-serif] font-medium text-[#555] text-[15px] sm:text-[17px] leading-relaxed max-w-[560px]">
            I design thoughtful digital products that combine research, strategy, and beautiful interfaces to solve real business and user problems.
          </p>

          <div className="flex items-center gap-3 sm:gap-4 mt-2">
            <PillButton label="Contact Me" dark onClick={() => onNavigate("contact")} />
            <button
              onClick={() => onNavigate("works")}
              className="font-['Montserrat',sans-serif] font-semibold text-[15px] sm:text-[18px] bg-[#f0eff0] rounded-[40px] px-5 sm:px-6 py-2.5 sm:py-3 text-black hover:bg-[#201e21] hover:text-white transition-all duration-300"
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
      <section className="w-full px-6 sm:px-[80px] py-[60px] sm:py-[80px]">
        <div className="max-w-[1280px] mx-auto bg-[#201e21] rounded-[40px] min-h-[617px] relative overflow-hidden">
          {/* Right photo */}
          <div className="absolute right-0 top-0 h-full w-full md:w-[580px] overflow-hidden rounded-b-[40px] rounded-t-[40px] md:rounded-bl-[40px] md:rounded-tl-[40px] opacity-20 md:opacity-100">
            <img
              alt="Oyinloluwa"
              src={imgFrame427318995}
              loading="lazy"
              decoding="async"
              onError={onImgError}
              className="absolute h-[125%] left-0 top-[-6.23%] w-full object-cover"
            />
          </div>

          {/* Left content */}
          <div className="relative md:absolute md:left-[64px] md:top-[60px] flex flex-col gap-8 w-full md:w-[560px] p-8 sm:p-12 md:p-0">
            <div className="inline-flex items-center gap-2 border border-[#5f51a4] rounded-[40px] px-4 py-3 w-fit">
              <svg width="18" height="18" viewBox="0 0 22.5027 22.5027" fill="none" className="opacity-70">
                <path d={svgPaths.p214cbe70} fill="#6B47D3" />
              </svg>
              <span className="font-['Montserrat',sans-serif] font-medium text-[14px] text-white">
                The Designer Behind The Work
              </span>
            </div>

            <p className="font-['Montserrat',sans-serif] font-medium text-[14px] sm:text-[15px] text-[rgba(255,255,255,0.8)] leading-relaxed">
              I believe great design begins with understanding people, not pixels. Every product I design starts with research, empathy, and a clear understanding of the business problem. My goal is to create intuitive digital experiences that feel effortless for users while delivering measurable value for the people behind the product.
            </p>

            <div className="flex gap-4 flex-wrap">
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
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* ── Services accordion ────────────────────────────────── */}
      <ServicesAccordion onContact={() => onNavigate("contact")} />

      {/* ── Selected Works ────────────────────────────────────── */}
      <section className="w-full px-6 sm:px-[80px] py-[50px] sm:py-[60px]">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-10 md:gap-[17px] items-start">
          {/* Sticky left sidebar */}
          <div className="md:sticky md:top-0 w-full md:w-[701px] md:shrink-0 flex flex-col gap-[24px]">
            <p className="font-['Playfair_Display',serif] italic text-[#717171] text-[22px] sm:text-[24px]">Selected Works</p>
            <h2 className="font-['Montserrat',sans-serif] font-semibold text-[30px] sm:text-[40px] text-black leading-normal w-full sm:w-[592px]">
              A selection of interfaces I've designed across mobile and web.
            </h2>
            <PillButton label="Contact Me" dark onClick={() => onNavigate("contact")} />
          </div>

          {/* Right card column */}
          <div className="flex flex-col gap-[32px] sm:gap-[40px] px-0 sm:px-[54px] py-[32px] w-full sm:w-[562px]">
            {projects.map((w) => (
              <ProjectCard
                key={w.id}
                project={w}
                variant="feature"
                onClick={() => setSelectedProject(w)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────── */}
      <section className="w-full py-[60px] sm:py-[80px]">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-[80px] mb-10 text-center">
          <p className="font-['Playfair_Display',serif] italic text-[#717171] text-[20px] sm:text-[22px] mb-3">Testimonials</p>
          <h2 className="font-['Montserrat',sans-serif] font-semibold text-[28px] sm:text-[40px] text-black mx-auto max-w-[760px] leading-tight">
            A few words from people I've worked with on different projects.
          </h2>
        </div>
        <TestimonialsMarquee />
      </section>

      {/* ── Experience ────────────────────────────────────────── */}
      <ExperienceSection className="mt-[60px] sm:mt-[80px]" />

      {/* ── Project Modal ── */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
        onNavigateContact={() => onNavigate("contact")}
        prevProject={adjacent?.prev}
        nextProject={adjacent?.next}
      />

      {/* ── Footer ────────────────────────────────────────────── */}
      <div className="mt-[50px] sm:mt-[80px]">
        <Footer onNavigate={onNavigate} />
      </div>
    </div>
  );
}
