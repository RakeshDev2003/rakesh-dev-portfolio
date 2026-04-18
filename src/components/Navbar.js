"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/MobileMenu";

export default function Navbar({ brand, navItems }) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const updateFromHash = () => {
      const hashed = window.location.hash.replace("#", "");
      if (hashed && sectionIds.includes(hashed)) {
        setActiveSection(hashed);
      }
    };

    const updateFromScroll = () => {
      const offset = 140;
      const current =
        sections
          .filter((section) => section.getBoundingClientRect().top - offset <= 0)
          .at(-1)?.id || sectionIds[0];

      setActiveSection(current);
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateFromScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    updateFromHash();
    updateFromScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", updateFromHash);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", updateFromHash);
    };
  }, [navItems]);

  const handleNavClick = (href) => {
    setActiveSection(href.replace("#", ""));
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#home" className="text-lg font-semibold tracking-tight text-slate-900">
          {brand}
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white/90 p-1 lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-sky-50 text-sky-700"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="#contact" variant="primary" size="sm" className="hidden sm:inline-flex">
            Let’s Talk
          </Button>
          <MobileMenu
            items={navItems}
            activeSection={activeSection}
            onNavigate={handleNavClick}
          />
        </div>
      </div>
    </header>
  );
}
