import { useState } from "react";
import Nav from "@/components/Nav";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import WorksPage from "@/pages/WorksPage";
import ContactPage from "@/pages/ContactPage";
import type { Page } from "@/types";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  function navigate(p: Page) {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="relative min-h-screen">
      <Nav current={page} onNavigate={navigate} />
      {page === "home"    && <HomePage    onNavigate={navigate} />}
      {page === "about"   && <AboutPage   onNavigate={navigate} />}
      {page === "works"   && <WorksPage   onNavigate={navigate} />}
      {page === "contact" && <ContactPage onNavigate={navigate} />}
    </div>
  );
}
