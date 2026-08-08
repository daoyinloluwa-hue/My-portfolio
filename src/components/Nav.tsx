import { useEffect, useState } from "react";
import type { Page } from "@/types";

type NavProps = {
  current: Page;
  onNavigate: (page: Page) => void;
};

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function Nav({ current, onNavigate }: NavProps) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

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
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/25 hover:scale-105 transition-all duration-300 cursor-pointer shrink-0 ml-0.5 sm:ml-1"
      >
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
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

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
