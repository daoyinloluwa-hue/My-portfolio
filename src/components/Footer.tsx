import ArrowUpRight from "@/components/ArrowUpRight";
import imgImage31 from "@/imports/Desktop1/85dfdd7937dcd17d509a9033f8dfdb6ccb67e3c5.png";
import imgImage29 from "@/imports/Desktop1/1d47b4541a677d60beeadc7b07e6268144aa0263.png";
import imgImage32 from "@/imports/Desktop1/4b7c46a9d28acf066612a7354c8d0bf1c20b19fe.png";
import { onImgError } from "@/lib/image";
import type { Page } from "@/types";

const navLinks: { label: string; page: Page }[] = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Work", page: "works" },
  { label: "Contact", page: "contact" },
];

const socials = [
  { label: "Behance", href: "https://www.behance.net/oyinloluwadaoduu", img: imgImage31 },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/oyinloluwa-daodu-2a99b037a", img: imgImage29 },
  { label: "Twitter", href: "https://x.com/tomiwa_23?s=11", img: imgImage32 },
];

export default function Footer({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <footer className="bg-[#201e21] rounded-tl-[40px] sm:rounded-tl-[100px] rounded-tr-[40px] sm:rounded-tr-[100px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-[80px] pt-[50px] sm:pt-[74px] pb-[30px] sm:pb-[48px]">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Left — CTA */}
          <div className="flex flex-col gap-8 sm:gap-10 max-w-[600px]">
            <div className="flex flex-col gap-4">
              <p className="font-['Montserrat',sans-serif] font-semibold text-[13px] sm:text-[15px] text-[rgba(255,255,255,0.5)] uppercase tracking-[0.12em]">
                Available for freelance work, contracts, and full time opportunities.
              </p>
              <h2 className="font-['Montserrat',sans-serif] font-bold text-[28px] sm:text-[38px] uppercase text-white leading-[1.15]">
                Every great experience begins with a conversation.
              </h2>
            </div>
            <button
              onClick={() => onNavigate("contact")}
              className="group self-start flex items-center gap-3 bg-[#f3ecec] rounded-[40px] px-5 py-3 cursor-pointer hover:bg-white transition-all duration-300"
            >
              <span className="font-['Montserrat',sans-serif] font-semibold text-[15px] sm:text-[18px] text-black">
                Start a conversation
              </span>
              <span className="bg-black rounded-full p-2.5 flex items-center group-hover:scale-110 transition-transform duration-300">
                <ArrowUpRight size={13.5} color="white" />
              </span>
            </button>
          </div>

          {/* Right — nav + socials */}
          <div className="flex gap-12 sm:gap-16 shrink-0 pt-2">
            <div className="flex flex-col gap-5">
              <p className="font-['Montserrat',sans-serif] font-semibold text-[13px] text-[#ccc] uppercase tracking-[0.14em]">
                Navigation
              </p>
              <nav className="flex flex-col gap-3">
                {navLinks.map(({ label, page }) => (
                  <button
                    key={label}
                    onClick={() => onNavigate(page)}
                    className="font-['Montserrat',sans-serif] font-semibold text-[16px] sm:text-[18px] text-white text-left hover:text-[#6751a4] transition-colors duration-200"
                  >
                    {label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-5">
              <p className="font-['Montserrat',sans-serif] font-semibold text-[13px] text-[#ccc] uppercase tracking-[0.14em]">
                Socials
              </p>
              <div className="flex flex-col gap-3">
                {socials.map(({ label, href, img }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2.5 rounded-[12px] py-1 hover:opacity-70 transition-opacity duration-200"
                  >
                    <img src={img} alt={label} loading="lazy" onError={onImgError} className="w-8 h-8 sm:w-9 sm:h-9 object-cover rounded-[8px]" />
                    <span className="font-['Montserrat',sans-serif] font-semibold text-[16px] sm:text-[18px] text-white">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-[rgba(255,255,255,0.08)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-['Montserrat',sans-serif] font-medium text-[12px] sm:text-[13px] text-[rgba(255,255,255,0.3)]">
            © 2026 Oyinloluwa Daodu — Designed with intention.
          </p>
          <p className="font-['Montserrat',sans-serif] font-medium text-[12px] sm:text-[13px] text-[rgba(255,255,255,0.3)]">
            Product Designer · Lagos, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
