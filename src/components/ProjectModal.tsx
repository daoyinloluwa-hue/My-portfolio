import { useEffect, useState } from "react";
import { Project, projects } from "@/data/work";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject?: (project: Project) => void;
  onNavigateContact?: () => void;
}

export default function ProjectModal({
  project,
  onClose,
  onSelectProject,
  onNavigateContact,
}: ProjectModalProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        if (activeImage) {
          setActiveImage(null);
        } else {
          onClose();
        }
      }
    }
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, activeImage, onClose]);

  if (!project) return null;

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Main Modal Container */}
      <div className="relative w-full max-w-[960px] bg-[#1a181c] text-white rounded-[32px] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.5)] overflow-hidden my-auto max-h-[90vh] flex flex-col z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Sticky Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#1a181c]/90 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="font-['Montserrat',sans-serif] font-semibold text-[12px] bg-[#6751a4] text-white px-3 py-1 rounded-full uppercase tracking-wider">
              {project.category}
            </span>
            <span className="font-['Montserrat',sans-serif] font-medium text-[13px] text-white/60">
              {project.year}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 md:p-10 space-y-10">
          
          {/* Header Title Section */}
          <div className="space-y-4">
            <h2 className="font-['Montserrat',sans-serif] font-bold text-[36px] sm:text-[44px] text-white leading-tight">
              {project.title}
            </h2>
            <p className="font-['Playfair_Display',serif] italic text-[20px] sm:text-[24px] text-[#a99bbd]">
              {project.subtitle}
            </p>
            <p className="font-['Montserrat',sans-serif] font-medium text-[16px] text-white/80 leading-relaxed max-w-[800px]">
              {project.fullDescription}
            </p>
          </div>

          {/* Quick Meta Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-[20px] bg-white/5 border border-white/10">
            <div>
              <p className="font-['Montserrat',sans-serif] font-semibold text-[11px] text-white/40 uppercase tracking-wider">Role</p>
              <p className="font-['Montserrat',sans-serif] font-semibold text-[15px] text-white mt-1">{project.role}</p>
            </div>
            <div>
              <p className="font-['Montserrat',sans-serif] font-semibold text-[11px] text-white/40 uppercase tracking-wider">Client</p>
              <p className="font-['Montserrat',sans-serif] font-semibold text-[15px] text-white mt-1">{project.client}</p>
            </div>
            <div>
              <p className="font-['Montserrat',sans-serif] font-semibold text-[11px] text-white/40 uppercase tracking-wider">Duration</p>
              <p className="font-['Montserrat',sans-serif] font-semibold text-[15px] text-white mt-1">{project.duration}</p>
            </div>
            <div>
              <p className="font-['Montserrat',sans-serif] font-semibold text-[11px] text-white/40 uppercase tracking-wider">Platform</p>
              <p className="font-['Montserrat',sans-serif] font-semibold text-[15px] text-white mt-1">{project.type}</p>
            </div>
          </div>

          {/* Featured Hero Banner */}
          <div className="relative rounded-[24px] overflow-hidden bg-black/40 border border-white/10 group cursor-pointer" onClick={() => setActiveImage(project.image)}>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[320px] sm:h-[440px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <span className="font-['Montserrat',sans-serif] font-medium text-[13px] bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white">
                Click to expand view ↗
              </span>
            </div>
          </div>

          {/* Challenge & Solution Dual Column */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-[24px] bg-white/[0.03] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-[#ff7262]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <h3 className="font-['Montserrat',sans-serif] font-bold text-[18px] text-white">The Challenge</h3>
              </div>
              <p className="font-['Montserrat',sans-serif] font-medium text-[14px] text-white/70 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-6 rounded-[24px] bg-white/[0.03] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-[#0acf83]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <h3 className="font-['Montserrat',sans-serif] font-bold text-[18px] text-white">The Solution</h3>
              </div>
              <p className="font-['Montserrat',sans-serif] font-medium text-[14px] text-white/70 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="space-y-4">
            <h3 className="font-['Montserrat',sans-serif] font-bold text-[20px] text-white">Key Highlights & Features</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-[16px] bg-white/5 border border-white/10">
                  <span className="w-6 h-6 rounded-full bg-[#6751a4]/30 text-[#a99bbd] flex items-center justify-center font-bold text-[12px] shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="font-['Montserrat',sans-serif] font-medium text-[14px] text-white/80 leading-snug">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery Showcase */}
          {project.galleryImages && project.galleryImages.length > 1 && (
            <div className="space-y-4">
              <h3 className="font-['Montserrat',sans-serif] font-bold text-[20px] text-white">Interface Gallery</h3>
              <div className="grid grid-cols-2 gap-4">
                {project.galleryImages.map((imgSrc, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveImage(imgSrc)}
                    className="relative h-[200px] sm:h-[260px] rounded-[20px] overflow-hidden bg-black/30 border border-white/10 cursor-pointer group"
                  >
                    <img src={imgSrc} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-xs font-semibold bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full">Expand</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span key={tag} className="font-['Montserrat',sans-serif] font-medium text-[12px] text-white/70 bg-white/10 px-3.5 py-1.5 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Bottom Footer Navigation */}
        <div className="sticky bottom-0 z-20 flex flex-wrap items-center justify-between gap-3 px-6 py-4 bg-[#1a181c] border-t border-white/10">
          <button
            onClick={() => onSelectProject && onSelectProject(prevProject)}
            className="flex items-center gap-2 font-['Montserrat',sans-serif] font-semibold text-[13px] sm:text-[14px] text-white/70 hover:text-white transition-colors cursor-pointer max-w-[30%] sm:max-w-[26%] truncate"
          >
            ← {prevProject.title}
          </button>

          {onNavigateContact && (
            <button
              onClick={() => {
                onClose();
                onNavigateContact();
              }}
              className="bg-[#6751a4] hover:bg-[#574194] text-white font-['Montserrat',sans-serif] font-semibold text-[12px] sm:text-[14px] px-4 sm:px-5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap"
            >
              Discuss a similar project →
            </button>
          )}

          <button
            onClick={() => onSelectProject && onSelectProject(nextProject)}
            className="flex items-center gap-2 font-['Montserrat',sans-serif] font-semibold text-[13px] sm:text-[14px] text-white/70 hover:text-white transition-colors cursor-pointer max-w-[30%] sm:max-w-[26%] truncate"
          >
            {nextProject.title} →
          </button>
        </div>
      </div>

      {/* High Res Lightbox */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-60 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
        >
          <img src={activeImage} alt="Expanded view" className="max-w-full max-h-full object-contain rounded-lg" />
        </div>
      )}
    </div>
  );
}
