"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/config";
import { whatsappLink } from "@/lib/whatsapp";
import BrandMark from "./BrandMark";

const links = [
  { href: "#catalogo", label: "Catálogo" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "border-b border-sage/20 bg-cream-light/90 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5 leading-none">
          <BrandMark className="h-9 w-9 shrink-0 text-olive" />
          <span className="flex flex-col">
            <span className="block font-display text-2xl tracking-tight text-olive">
              {site.name}
            </span>
            <span className="eyebrow text-[0.58rem] text-sage-dark">Florería</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-olive/70 transition hover:text-olive"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-olive px-5 py-2 text-sm text-cream-light transition hover:bg-olive-dark"
          >
            WhatsApp
          </a>
        </nav>

        <a
          href="#catalogo"
          className="rounded-full bg-olive px-4 py-2 text-sm text-cream-light md:hidden"
        >
          Ver catálogo
        </a>
      </div>
    </header>
  );
}
