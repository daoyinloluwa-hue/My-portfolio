import { useState } from "react";
import Footer from "@/components/Footer";
import imgImage31 from "@/imports/Desktop1/85dfdd7937dcd17d509a9033f8dfdb6ccb67e3c5.png";
import imgImage29 from "@/imports/Desktop1/1d47b4541a677d60beeadc7b07e6268144aa0263.png";
import svgPaths from "@/imports/Desktop1/svg-8fadhi2yqu";

type Page = "home" | "about" | "works" | "contact";

const socials = [
  {
    name: "Behance",
    handle: "@oyinloluwadaoduu",
    href: "https://www.behance.net/oyinloluwadaoduu",
    img: imgImage31,
    color: "#1769ff",
  },
  {
    name: "LinkedIn",
    handle: "Oyinloluwa Daodu",
    href: "https://www.linkedin.com/in/oyinloluwa-daodu-2a99b037a",
    img: imgImage29,
    color: "#0077b5",
  },
  {
    name: "Email",
    handle: "oyinloluwadaodu@gmail.com",
    href: "mailto:oyinloluwadaodu@gmail.com",
    img: null,
    color: "#ea4335",
  },
];

export default function ContactPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const [form, setForm] = useState({ name: "", email: "", message: "", project: "" });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="flex flex-col">

      {/* ── Hero ── */}
      <section className="max-w-[1280px] mx-auto px-[80px] pt-[140px] pb-[80px] w-full">
        <div className="flex flex-col gap-5 mb-[72px]">
          <p className="font-['Playfair_Display',serif] italic text-[#717171] text-[22px]">Get in touch</p>
          <h1 className="font-['Montserrat',sans-serif] font-semibold text-[60px] text-black leading-[1.1] max-w-[760px]">
            Every great experience begins with a conversation.
          </h1>
          <p className="font-['Montserrat',sans-serif] font-medium text-[#555] text-[17px] max-w-[520px] leading-relaxed">
            Available for freelance work, contracts, and full-time opportunities.
          </p>
        </div>

        <div className="grid grid-cols-[1fr_400px] gap-[80px] items-start">
          {/* ── Form ── */}
          {sent ? (
            <div className="flex flex-col gap-6 items-center justify-center py-32 text-center">
              <div className="w-20 h-20 bg-[#201e21] rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(32,30,33,0.25)]">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17L4 12" />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-['Montserrat',sans-serif] font-semibold text-[32px] text-black">Message sent!</h2>
                <p className="font-['Montserrat',sans-serif] font-medium text-[#666] text-[16px] leading-relaxed max-w-[400px]">
                  Thanks for reaching out. I'll get back to you within 1–2 business days.
                </p>
              </div>
              <button
                onClick={() => setSent(false)}
                className="font-['Montserrat',sans-serif] font-semibold text-[15px] text-[#6751a4] hover:text-black transition-colors flex items-center gap-1.5"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M5 12l7-7M5 12l7 7"/>
                </svg>
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-5">
                <FormField
                  label="Your Name"
                  placeholder="Amara Johnson"
                  value={form.name}
                  focused={focused === "name"}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  onChange={(v) => setForm({ ...form, name: v })}
                  required
                />
                <FormField
                  label="Email Address"
                  type="email"
                  placeholder="amara@example.com"
                  value={form.email}
                  focused={focused === "email"}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  onChange={(v) => setForm({ ...form, email: v })}
                  required
                />
              </div>
              <FormField
                label="Project Type"
                placeholder="e.g. Mobile App, Website Redesign, Dashboard…"
                value={form.project}
                focused={focused === "project"}
                onFocus={() => setFocused("project")}
                onBlur={() => setFocused(null)}
                onChange={(v) => setForm({ ...form, project: v })}
              />
              <div className="flex flex-col gap-2">
                <label className="font-['Montserrat',sans-serif] font-semibold text-[15px] text-black">
                  Tell me about your project
                </label>
                <textarea
                  placeholder="Share as much or as little as you like — the problem you're solving, your timeline, your goals…"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  required
                  className="font-['Montserrat',sans-serif] font-medium text-[15px] text-black border rounded-[18px] px-5 py-4 resize-none outline-none transition-all duration-300 placeholder:text-[#bbb] bg-[#fafafa]"
                  style={{
                    borderColor: focused === "message" ? "#6751a4" : "#e8e8e8",
                    boxShadow: focused === "message" ? "0 0 0 3px rgba(103,81,164,0.08)" : "none",
                  }}
                />
              </div>
              <button
                type="submit"
                className="group self-start flex items-center gap-3 bg-[#201e21] rounded-[40px] px-6 py-3.5 cursor-pointer hover:bg-[#6751a4] transition-all duration-300"
              >
                <span className="font-['Montserrat',sans-serif] font-semibold text-[17px] text-white">Send Message</span>
                <span className="bg-white rounded-full p-2 flex items-center group-hover:scale-110 transition-transform duration-300">
                  <svg width="13" height="13" viewBox="0 0 13.5004 13.5004" fill="none">
                    <path d={svgPaths.p34838800} fill="black" />
                  </svg>
                </span>
              </button>
            </form>
          )}

          {/* ── Sidebar ── */}
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-3">
              <p className="font-['Montserrat',sans-serif] font-semibold text-[18px] text-black">Prefer to reach out directly?</p>
              <p className="font-['Montserrat',sans-serif] font-medium text-[14px] text-[#666] leading-relaxed">
                I typically respond within 24 hours on business days. Don't hesitate — even if you only have a rough idea.
              </p>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-3 p-4 rounded-[16px] bg-[#f0fff4] border border-[#d4f0de]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] shrink-0 animate-pulse" />
              <p className="font-['Montserrat',sans-serif] font-semibold text-[13px] text-[#166534]">
                Open to freelance & full-time opportunities
              </p>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-[18px] border border-[#ebebeb] hover:border-[#6751a4] hover:shadow-[0_4px_20px_rgba(103,81,164,0.1)] transition-all duration-300"
                >
                  {social.img ? (
                    <img src={social.img} alt={social.name} className="w-10 h-10 object-cover rounded-[10px]" />
                  ) : (
                    <div className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0" style={{ backgroundColor: social.color }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </div>
                  )}
                  <div className="flex flex-col gap-0.5 flex-1">
                    <p className="font-['Montserrat',sans-serif] font-semibold text-[15px] text-black group-hover:text-[#6751a4] transition-colors duration-200">{social.name}</p>
                    <p className="font-['Montserrat',sans-serif] font-medium text-[12px] text-[#888]">{social.handle}</p>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 13.5004 13.5004" fill="none" className="text-[#ccc] group-hover:text-[#6751a4] transition-colors duration-200 shrink-0">
                    <path d={svgPaths.p34838800} fill="currentColor" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

function FormField({
  label,
  placeholder,
  type = "text",
  value,
  focused,
  onChange,
  onFocus,
  onBlur,
  required,
}: {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  focused: boolean;
  onChange: (v: string) => void;
  onFocus: () => void;
  onBlur: () => void;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-['Montserrat',sans-serif] font-semibold text-[15px] text-black">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        required={required}
        className="font-['Montserrat',sans-serif] font-medium text-[15px] text-black rounded-[14px] px-5 py-4 outline-none transition-all duration-300 placeholder:text-[#bbb] bg-[#fafafa]"
        style={{
          border: `1px solid ${focused ? "#6751a4" : "#e8e8e8"}`,
          boxShadow: focused ? "0 0 0 3px rgba(103,81,164,0.08)" : "none",
        }}
      />
    </div>
  );
}
