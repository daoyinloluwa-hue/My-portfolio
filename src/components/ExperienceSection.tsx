import { experience } from "@/data/experience";

export default function ExperienceSection({ className = "" }: { className?: string }) {
  return (
    <section className={`bg-[#201e21] rounded-tl-[40px] sm:rounded-tl-[80px] rounded-tr-[40px] sm:rounded-tr-[80px] px-6 sm:px-[80px] py-[60px] sm:py-[80px] ${className}`}>
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-[66px] items-start">
        {/* Left sidebar */}
        <div className="lg:sticky lg:top-[100px] w-full lg:w-[429px] lg:shrink-0 flex flex-col gap-[16px]">
          <p className="font-['Playfair_Display',serif] italic text-[#717171] text-[22px] sm:text-[24px]">Experiences</p>
          <h2 className="font-['Montserrat',sans-serif] font-semibold text-[30px] sm:text-[40px] text-white capitalize leading-normal">
            Take a look at my past Experience
          </h2>
          <p className="font-['Montserrat',sans-serif] font-medium text-[rgba(255,255,255,0.5)] text-[15px] sm:text-[16px] leading-relaxed">
            Helping brands build premium digital experiences through modern design and development.
          </p>
        </div>

        {/* Right cards */}
        <div className="flex flex-col gap-[24px] flex-1 py-[8px]">
          {experience.map((exp, i) => (
            <div
              key={exp.title}
              className="sticky rounded-[20px] px-[20px] sm:px-[32px] py-[24px] sm:py-[28px] flex flex-col gap-[20px]"
              style={{
                top: `${90 + i * 14}px`,
                zIndex: i + 1,
                background: `hsl(${270 + i * 4}, 8%, ${13 + i * 3}%)`,
                border: "1px solid rgba(255,255,255,0.12)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              }}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-white gap-4 border-b border-[#949393] pb-[20px]">
                <div className="flex flex-col gap-[6px]">
                  <p className="font-['Montserrat',sans-serif] font-bold text-[22px] sm:text-[28px] leading-normal">{exp.title}</p>
                  <p className="font-['Montserrat',sans-serif] font-medium text-[16px] sm:text-[18px] text-[rgba(255,255,255,0.7)]">{exp.role}</p>
                </div>
                <span className="font-['Montserrat',sans-serif] font-medium text-[13px] sm:text-[15px] text-[rgba(255,255,255,0.5)] bg-[rgba(255,255,255,0.06)] px-[14px] py-[6px] rounded-full whitespace-nowrap mt-0 sm:mt-1 border border-[rgba(255,255,255,0.1)]">
                  {exp.period}
                </span>
              </div>
              <p className="font-['Montserrat',sans-serif] font-medium text-[#c2c2c2] text-[14px] sm:text-[15px] leading-relaxed">
                {exp.desc}
              </p>
              <div className="flex flex-wrap gap-[8px]">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-['Montserrat',sans-serif] font-medium text-[12px] sm:text-[13px] text-white bg-[#333] rounded-[10px] px-[14px] py-[8px]"
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
  );
}
