import { useState } from "react";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/ProjectModal";
import { Project, projects } from "@/data/work";

type Page = "home" | "about" | "works" | "contact";
type FilterType = "All" | "Mobile App" | "Dashboard";

const filters: FilterType[] = ["All", "Mobile App", "Dashboard"];

export default function WorksPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.type === activeFilter);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        {/* ── Header ── */}
        <section className="max-w-[1280px] mx-auto px-6 sm:px-[80px] pt-[140px] pb-[60px]">
          <div className="flex flex-col gap-5">
            <p className="font-['Playfair_Display',serif] italic text-[#717171] text-[22px]">Selected Works</p>
            <h1 className="font-['Montserrat',sans-serif] font-semibold text-[38px] sm:text-[52px] text-black leading-[1.1] max-w-[680px]">
              A selection of interfaces I've designed across mobile and web.
            </h1>
          </div>
        </section>

        {/* ── Filters ── */}
        <section className="max-w-[1280px] mx-auto px-6 sm:px-[80px] mb-12">
          <div className="flex items-center gap-3 flex-wrap">
            {filters.map((f) => {
              const count = f === "All"
                ? projects.length
                : projects.filter((p) => p.type === f).length;
              return (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`group flex items-center gap-2 font-['Montserrat',sans-serif] font-semibold text-[14px] px-5 py-2.5 rounded-full border transition-all duration-250 cursor-pointer ${
                    activeFilter === f
                      ? "bg-[#201e21] text-white border-[#201e21]"
                      : "bg-transparent text-black border-[#d0d0d0] hover:border-[#201e21]"
                  }`}
                >
                  {f}
                  <span
                    className={`text-[11px] font-medium rounded-full px-1.5 py-0.5 leading-none ${
                      activeFilter === f
                        ? "bg-white text-[#201e21]"
                        : "bg-[#f0f0f0] text-[#777] group-hover:bg-[#201e21] group-hover:text-white transition-colors duration-250"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* ── Grid ── */}
        <section className="max-w-[1280px] mx-auto px-6 sm:px-[80px] pb-[80px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-32 gap-4">
              <p className="font-['Montserrat',sans-serif] font-semibold text-[20px] text-[#999]">
                No projects in this category yet.
              </p>
            </div>
          )}
        </section>
      </div>

      {/* ── Project Modal ── */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
        onNavigateContact={() => onNavigate("contact")}
      />

      {/* ── Footer ── */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="group rounded-[28px] overflow-hidden flex flex-col gap-0 bg-[#d8d8d8] cursor-pointer hover:-translate-y-1.5 transition-all duration-350 shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)]"
    >
      {/* Image */}
      <div className="h-[280px] relative overflow-hidden bg-[#c0c0c0]">
        {project.secondImage && (
          <img
            alt=""
            src={project.secondImage}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <img
          alt={project.title}
          src={project.image}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
        />
        {/* Type badge on image */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
          <span className="font-['Montserrat',sans-serif] font-semibold text-[12px] text-black">
            {project.type}
          </span>
        </div>
        {/* View Case Study pill */}
        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="font-['Montserrat',sans-serif] font-semibold text-[12px] bg-[#201e21] text-white px-3.5 py-1.5 rounded-full shadow-md">
            View Case Study ↗
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <p className="font-['Montserrat',sans-serif] font-bold text-[22px] text-black leading-tight">
              {project.title}
            </p>
            <p className="font-['Montserrat',sans-serif] font-medium text-[14px] text-[#444] leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-[rgba(0,0,0,0.08)]">
          <div className="flex items-center gap-1.5 font-['Montserrat',sans-serif] font-semibold text-[13px] text-[#666]">
            <span>{project.category}</span>
            <span className="text-[#bbb]">·</span>
            <span>{project.type}</span>
          </div>
          <span className="font-['Montserrat',sans-serif] font-medium text-[12px] text-[#999]">
            {project.year}
          </span>
        </div>
      </div>
    </div>
  );
}
