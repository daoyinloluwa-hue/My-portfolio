import { useState } from "react";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { getAdjacentProjects, Project, projects } from "@/data/work";
import type { Page } from "@/types";

type FilterType = "All" | Project["type"];

const filters: FilterType[] = ["All", "Mobile App", "Dashboard", "Website"];

export default function WorksPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const adjacent = selectedProject ? getAdjacentProjects(selectedProject.id) : null;

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.type === activeFilter);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        {/* ── Header ── */}
        <section className="max-w-[1280px] mx-auto px-6 sm:px-[80px] pt-[120px] sm:pt-[140px] pb-[50px] sm:pb-[60px]">
          <div className="flex flex-col gap-5">
            <p className="font-['Playfair_Display',serif] italic text-[#717171] text-[20px] sm:text-[22px]">Selected Works</p>
            <h1 className="font-['Montserrat',sans-serif] font-semibold text-[32px] sm:text-[44px] lg:text-[52px] text-black leading-[1.1] max-w-[680px]">
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
        prevProject={adjacent?.prev}
        nextProject={adjacent?.next}
      />

      {/* ── Footer ── */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
