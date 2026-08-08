import type { Page } from "@/types";

type NavProps = {
  current: Page;
  onNavigate: (page: Page) => void;
};

export default function Nav({ current, onNavigate }: NavProps) {
  return (
    <nav className="fixed left-1/2 -translate-x-1/2 top-3 sm:top-[28px] z-40 flex items-center justify-between sm:justify-start gap-1 sm:gap-4 bg-[#201e21]/95 backdrop-blur-md rounded-[60px] px-2.5 sm:px-5 py-2 sm:py-3.5 shadow-2xl border border-white/10 w-[calc(100vw-24px)] max-w-[95vw] sm:w-fit sm:max-w-[98vw]">
      <NavItem label="Home" active={current === "home"} onClick={() => onNavigate("home")} />
      <NavItem label="Work" active={current === "works"} onClick={() => onNavigate("works")} />
      <NavItem label="About" active={current === "about"} onClick={() => onNavigate("about")} />
      <button
        onClick={() => onNavigate("contact")}
        className="flex items-center gap-1.5 sm:gap-2.5 bg-[#f3ecec] rounded-[40px] px-3 sm:px-4 py-2 sm:py-2.5 cursor-pointer hover:bg-white transition-all duration-300 group ml-0.5 sm:ml-1"
      >
        <span className="font-['Montserrat',sans-serif] font-semibold text-[13px] sm:text-[18px] text-black whitespace-nowrap">
          Contact Me
        </span>
        <span className="bg-black rounded-full p-1.5 sm:p-2 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
          <svg width="10" height="10" viewBox="0 0 13.5004 13.5004" fill="none" className="sm:w-[12px] sm:h-[12px]">
            <path
              d="M2.25 11.25L11.25 2.25M11.25 2.25H4.5M11.25 2.25V9"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
    </nav>
  );
}

function NavItem({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-2 sm:px-3 py-2 sm:py-2 cursor-pointer transition-all duration-200 font-['Montserrat',sans-serif] font-semibold text-[13px] sm:text-[18px] whitespace-nowrap rounded-full ${
        active ? "text-[#a99bbd] bg-white/10" : "text-white/90 hover:text-white hover:bg-white/5"
      }`}
    >
      {label}
    </button>
  );
}
