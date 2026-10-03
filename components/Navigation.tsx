"use client";

import { useState } from "react";

const links = [
  { href: "#top", label: "Início" },
  { href: "#work", label: "Projetos" },
  { href: "#experience", label: "Experiência" },
  { href: "#stack", label: "Stack" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav
      className="relative z-50 w-full navbar"
      aria-label="Navegação principal"
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1400px] items-center justify-between px-5 sm:h-[78px] sm:px-8 lg:px-12">
        {/* LEFT — PHOTO */}
        <a
          href="#top"
          onClick={closeMenu}
          aria-label="Voltar ao início"
          className="group flex shrink-0 items-center"
        >
          <div className="h-9 w-9 overflow-hidden rounded-full">
            <img
              src="/william.jpeg"
              alt="William Humbwavali"
              className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </a>

        {/* CENTER — DESKTOP LINKS */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center justify-center gap-7 md:flex lg:gap-9">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-['Inter_Tight'] text-[13px] font-medium tracking-[-0.01em] text-white/45 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* RIGHT */}
        <div className="flex shrink-0 items-center justify-end">
          {/* DESKTOP CONTACT */}
          <a
            href="#contact"
            className="bt p hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-[12px] font-medium tracking-[-0.01em] text-[#07080A] transition-transform duration-200 hover:scale-[1.03] md:inline-flex"
          >
            Contacto
          </a>

          {/* MOBILE HAMBURGER — ONLY MOBILE */}
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="flex h-10 w-10 appearance-none flex-col items-center justify-center gap-[6px] border-0 bg-transparent p-0 outline-none shadow-none focus:border-0 focus:outline-none focus:ring-0 active:border-0 active:outline-none md:hidden"
          >
            <span
              className={`block h-[2px] w-[20px] bg-white transition-transform duration-200 ${open ? "translate-y-[4px] rotate-45" : ""
                }`}
            />

            <span
              className={`block h-[2px] w-[20px] bg-white transition-transform duration-200 ${open ? "-translate-y-[4px] -rotate-45" : ""
                }`}
            />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`absolute left-0 right-0 top-full px-5 transition-all duration-300 md:hidden ${open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
          }`}
      >
        <div className="mx-auto w-full max-w-[500px] overflow-hidden rounded-2xl bg-[#101114] p-2 shadow-xl shadow-black/30">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="flex items-center justify-between rounded-xl px-4 py-3.5 font-['Inter_Tight'] text-[14px] font-medium text-white/65 transition-colors hover:bg-white/5 hover:text-white"
            >
              <span>{link.label}</span>

              <span className="text-xs text-white/25">
                ↗
              </span>
            </a>
          ))}

          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-1 flex items-center justify-between rounded-xl bg-white px-4 py-3.5 font-['Inter_Tight'] text-[14px] font-medium text-[#07080A]"
          >
            <span>Contacto</span>

            <span className="text-xs">↗</span>
          </a>
        </div>
      </div>
    </nav>
  );
}