"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import NahLogo from "@/components/icons/NahLogo";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "companies", href: "/companies" },
  { key: "vision", href: "/vision" },
  { key: "chairman", href: "/chairman" },
  { key: "services", href: "/services" },
  { key: "portfolio", href: "/portfolio" },
  { key: "news", href: "/news" },
  { key: "careers", href: "/careers" },
  { key: "contact", href: "/contact" },
] as const;

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isRtl = locale === "ar";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const switchLocale = () => {
    const newLocale = locale === "ar" ? "en" : "ar";
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/") || "/");
  };

  const localePath = (href: string) => `/${locale}${href}`;

  const isActive = (href: string) => {
    const full = localePath(href);
    if (href === "/") return pathname === full;
    return pathname.startsWith(full);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container-nah">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href={localePath("/")} className="flex-shrink-0" aria-label="NAH Home">
              <NahLogo
                color={scrolled ? "black" : "white"}
                size="sm"
                className="transition-all duration-300"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6" dir={isRtl ? "rtl" : "ltr"}>
              {NAV_ITEMS.map(({ key, href }) => (
                <Link
                  key={key}
                  href={localePath(href)}
                  className={`nav-link text-sm font-medium tracking-wide transition-colors duration-200 ${
                    scrolled
                      ? isActive(href)
                        ? "text-[var(--gold)]"
                        : "text-[var(--black)]"
                      : isActive(href)
                      ? "text-[var(--gold)]"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {t(key)}
                </Link>
              ))}
            </nav>

            {/* Right section */}
            <div className="flex items-center gap-4">
              {/* Language switcher */}
              <button
                onClick={switchLocale}
                className={`hidden lg:block text-xs font-semibold tracking-widest uppercase px-3 py-1.5 border transition-all duration-200 ${
                  scrolled
                    ? "border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black"
                    : "border-white/40 text-white/80 hover:border-white hover:text-white"
                }`}
              >
                {t("language")}
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`lg:hidden p-2 transition-colors ${
                  scrolled ? "text-[var(--black)]" : "text-white"
                }`}
                aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[var(--black)] transition-all duration-400 flex flex-col lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        dir={isRtl ? "rtl" : "ltr"}
      >
        <div className="container-nah pt-28 pb-12 flex flex-col h-full">
          <nav className="flex flex-col gap-1 flex-1">
            {NAV_ITEMS.map(({ key, href }, i) => (
              <Link
                key={key}
                href={localePath(href)}
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-light py-3 border-b border-white/5 text-white/70 hover:text-[var(--gold)] transition-all duration-200 ${
                  isActive(href) ? "text-[var(--gold)]" : ""
                }`}
                style={{ transitionDelay: menuOpen ? `${i * 40}ms` : "0ms" }}
              >
                {t(key)}
              </Link>
            ))}
          </nav>

          <div className="pt-8 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={() => { switchLocale(); setMenuOpen(false); }}
              className="text-sm font-semibold tracking-widest uppercase text-[var(--gold)] border border-[var(--gold)] px-4 py-2"
            >
              {t("language")}
            </button>
            <span className="text-white/30 text-xs">NAH.sa</span>
          </div>
        </div>
      </div>
    </>
  );
}
