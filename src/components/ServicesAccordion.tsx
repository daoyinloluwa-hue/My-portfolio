import { useState } from "react";
import PillButton from "@/components/PillButton";
import { services } from "@/data/services";
import { onImgError } from "@/lib/image";

export default function ServicesAccordion({ onContact }: { onContact: () => void }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full px-6 sm:px-[80px] py-[50px] sm:py-[60px] max-w-[1440px] mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-[148px] mb-[50px] md:mb-[60px] w-full">
        <div className="flex flex-col gap-[16px] w-full md:w-[927px]">
          <p className="font-['Playfair_Display',serif] italic text-[#717171] text-[20px] sm:text-[24px] leading-normal">
            Services
          </p>
          <h2 className="font-['Montserrat',sans-serif] font-semibold text-[30px] sm:text-[40px] text-black leading-normal">
            My Services
          </h2>
          <p className="font-['Montserrat',sans-serif] font-medium text-[#333] text-[15px] sm:text-[20px] w-full sm:max-w-[742px] leading-normal">
            Helping brands build modern, high-performing websites that combine strategy, design, and seamless user experiences.
          </p>
        </div>
        <PillButton label="Contact Me" dark onClick={onContact} />
      </div>

      {/* Accordion rows */}
      <div className="flex flex-col gap-[60px] md:gap-[80px]">
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
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setOpen(isOpen ? null : i);
                }
              }}
              className={`relative cursor-pointer overflow-hidden border-b border-b-[#3d3d3d] transition-all duration-500 ease-in-out group/row ${
                isOpen
                  ? "h-[680px] sm:h-[740px] xl:h-[380px]"
                  : "h-[64px] sm:h-[78px]"
              }`}
            >
              {/* Collapsed label — hover: last word turns purple, + icon slides in */}
              <div
                className="absolute inset-0 flex items-center justify-between pr-[12px] sm:pr-[20px] py-[8px] transition-opacity duration-300"
                style={{ opacity: isOpen ? 0 : 1, pointerEvents: isOpen ? "none" : "auto" }}
              >
                <p className="font-['Montserrat',sans-serif] font-semibold text-[20px] sm:text-[28px] text-black leading-normal whitespace-nowrap transition-colors duration-300">
                  <span>{svc.titleParts[0]}</span>
                  <span className={`transition-colors duration-300 ${isOther ? "text-[#6751a4]" : "text-black group-hover/row:text-[#6751a4]"}`}>
                    {svc.titleParts[1]}
                  </span>
                </p>
                {/* + / × icon — always visible on touch, slides in on hover */}
                <span
                  className="flex items-center justify-center w-[40px] sm:w-[48px] h-[40px] sm:h-[48px] rounded-full border border-[#ccc] shrink-0 opacity-100 md:opacity-0 md:group-hover/row:opacity-100 translate-x-0 md:translate-x-4 md:group-hover/row:translate-x-0 transition-all duration-300"
                  style={{ background: "transparent" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </div>

              {/* Expanded content */}
              <div
                className="absolute inset-0 flex flex-col xl:flex-row items-start justify-between gap-6 xl:gap-0 pb-[8px] pr-0 xl:pr-[20px] pt-[16px] transition-opacity duration-300 overflow-y-auto xl:overflow-visible"
                style={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? "auto" : "none" }}
              >
                {/* Left block */}
                <div className="flex flex-col gap-[28px] xl:gap-[32px] xl:h-[340px] w-full xl:w-[558px] items-start shrink-0">
                  <div className="flex flex-col gap-[10px] w-full">
                    <p className="font-['Montserrat',sans-serif] font-semibold text-[22px] sm:text-[24px] text-black leading-normal whitespace-nowrap">
                      {svc.title}
                    </p>
                    <p className="font-['Montserrat',sans-serif] font-medium text-[#333] text-[14px] w-full xl:w-[444px] leading-normal">
                      {svc.description}
                    </p>
                  </div>
                  {/* Bullets */}
                  <div className="flex flex-col gap-[10px] w-full xl:w-[255px] leading-[0]">
                    {svc.bullets.map((b, bi) => (
                      <ul key={bi} className="block w-full">
                        <li className="list-disc ms-[21px] font-['Montserrat',sans-serif] font-medium text-[14px] text-black leading-normal">
                          {b}
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
                {/* Project image */}
                <div className="h-[240px] sm:h-[300px] xl:h-[340px] w-full xl:w-[522px] rounded-[20px] overflow-hidden shrink-0">
                  <img
                    alt={svc.title}
                    src={svc.image}
                    loading="lazy"
                    decoding="async"
                    onError={onImgError}
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
