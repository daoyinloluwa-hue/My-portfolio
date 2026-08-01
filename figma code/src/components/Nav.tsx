type Page = "home" | "about" | "works" | "contact";

type NavProps = {
  current: Page;
  onNavigate: (page: Page) => void;
};

export default function Nav({ current, onNavigate }: NavProps) {
  return (
    <nav className="fixed left-1/2 -translate-x-1/2 top-[28px] z-50 flex items-center gap-4 bg-[#201e21] rounded-[60px] px-5 py-4">
      <NavItem label="Home" active={current === "home"} onClick={() => onNavigate("home")} />
      <NavItem label="Work" active={current === "works"} onClick={() => onNavigate("works")} />
      <NavItem label="About" active={current === "about"} onClick={() => onNavigate("about")} />
      <button
        onClick={() => onNavigate("contact")}
        className="flex items-center gap-2.5 bg-[#f3ecec] rounded-[40px] px-4 py-2.5 cursor-pointer hover:bg-white transition-colors"
      >
        <span className="font-['Montserrat',sans-serif] font-semibold text-[20px] leading-8 text-black whitespace-nowrap">
          Contact Me
        </span>
        <span className="bg-black rounded-full p-2.5 flex items-center justify-center">
          <svg width="13.5" height="13.5" viewBox="0 0 13.5004 13.5004" fill="none">
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
      className={`px-2.5 py-2.5 cursor-pointer transition-colors font-['Montserrat',sans-serif] font-semibold text-[20px] leading-8 whitespace-nowrap ${
        active ? "text-[rgba(103,81,164,0.8)]" : "text-white hover:text-[rgba(103,81,164,0.6)]"
      }`}
    >
      {label}
    </button>
  );
}
