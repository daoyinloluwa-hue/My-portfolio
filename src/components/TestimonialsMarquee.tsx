import { testimonials } from "@/data/testimonials";
import svgPaths from "@/imports/Desktop1/svg-8fadhi2yqu";

function Stars() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="15.4" viewBox="0 0 17.5118 16.873" fill="none">
          <path d={svgPaths.p2a3b1d00} fill="#38323D" fillOpacity="0.8" className="dark:fill-[#a99bbd]" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsMarquee() {
  const doubled = [...testimonials, ...testimonials];
  return (
    <div className="overflow-hidden w-full">
      <div className="flex gap-[20px] sm:gap-[28px] animate-marquee-slow" style={{ width: "max-content" }}>
        {doubled.map((t, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 p-5 sm:p-6 rounded-[16px] shrink-0 w-[300px] sm:w-[340px]"
            style={{
              backgroundImage:
                "linear-gradient(270deg, rgba(51,51,51,0.18) 0%, rgba(103,81,164,0.18) 32.692%), linear-gradient(90deg, rgba(245,249,255,0.06) 0%, rgba(245,249,255,0.06) 100%)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.14)",
              boxShadow: "0px 16px 32px 0px rgba(0,0,0,0.12), inset 0px 1px 8px 0px rgba(255,255,255,0.08)",
            }}
          >
            <Stars />
            <p className="font-['Montserrat',sans-serif] font-medium text-[13px] text-[rgba(56,50,61,0.85)] dark:text-[rgba(255,255,255,0.85)] leading-relaxed flex-1">
              {t.text}
            </p>
            <div className="flex gap-2.5 items-center pt-2 border-t border-[rgba(255,255,255,0.1)]">
              <div className="bg-[#d9d9d9] dark:bg-[#3a3740] rounded-full w-9 h-9 flex items-center justify-center shrink-0">
                <p className="font-['Montserrat',sans-serif] font-semibold text-[13px] text-[rgba(56,50,61,0.8)] dark:text-[rgba(255,255,255,0.85)] leading-none">{t.initials}</p>
              </div>
              <p className="font-['Montserrat',sans-serif] font-semibold text-[14px] text-[rgba(56,50,61,0.8)] dark:text-[rgba(255,255,255,0.85)]">{t.from}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
