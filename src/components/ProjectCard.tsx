import type { Project } from "@/data/work";
import { onImgError } from "@/lib/image";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  variant?: "grid" | "feature";
}

function ProjectImage({ project }: { project: Project }) {
  return (
    <div className="relative overflow-hidden w-full h-full">
      {project.secondImage && (
        <img alt="" src={project.secondImage} loading="lazy" decoding="async" onError={onImgError} className="absolute inset-0 w-full h-full object-cover" />
      )}
      <img
        alt={project.title}
        src={project.image}
        loading="lazy"
        decoding="async"
        onError={onImgError}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
      />
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
        <span className="font-['Montserrat',sans-serif] font-semibold text-[12px] text-black">
          {project.type}
        </span>
      </div>
      <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="font-['Montserrat',sans-serif] font-semibold text-[12px] bg-[#201e21] text-white px-3.5 py-1.5 rounded-full shadow-md">
          View Case Study ↗
        </span>
      </div>
    </div>
  );
}

export default function ProjectCard({ project, onClick, variant = "grid" }: ProjectCardProps) {
  if (variant === "feature") {
    return (
      <div
        onClick={onClick}
        className="bg-[#ccc] flex flex-col gap-[16px] px-[16px] py-[20px] rounded-[32px] sm:rounded-[40px] w-full lg:sticky lg:top-[100px] cursor-pointer group hover:-translate-y-1.5 transition-all duration-300"
      >
        <div className="h-[200px] sm:h-[260px] lg:h-[320px] rounded-[28px] sm:rounded-[40px] overflow-hidden w-full relative">
          <ProjectImage project={project} />
        </div>
        <div className="flex flex-col gap-[8px] px-[4px]">
          <p className="font-['Montserrat',sans-serif] font-bold text-[22px] sm:text-[24px] text-black leading-normal">{project.title}</p>
          <p className="font-['Montserrat',sans-serif] font-medium text-[15px] sm:text-[16px] text-black leading-[1.4] line-clamp-2">{project.description}</p>
          <p className="font-['Montserrat',sans-serif] font-semibold text-[15px] text-black">
            {project.category} · {project.type}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className="group rounded-[28px] overflow-hidden flex flex-col gap-0 bg-[#d8d8d8] cursor-pointer hover:-translate-y-1.5 transition-all duration-350 shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)]"
    >
      <div className="h-[280px] relative overflow-hidden bg-[#c0c0c0]">
        <ProjectImage project={project} />
      </div>
      <div className="flex flex-col gap-4 p-6">
        <div className="flex flex-col gap-2">
          <p className="font-['Montserrat',sans-serif] font-bold text-[22px] text-black leading-tight">
            {project.title}
          </p>
          <p className="font-['Montserrat',sans-serif] font-medium text-[14px] text-[#444] leading-relaxed line-clamp-2">
            {project.description}
          </p>
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
