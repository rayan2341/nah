import Link from "next/link";
import { getTranslations, getLocale } from "next-intl/server";
import NahLogo from "@/components/icons/NahLogo";

export default async function Footer() {
  const t = await getTranslations("footer");
  const tn = await getTranslations("nav");
  const locale = await getLocale();
  const year = new Date().getFullYear();

  const localePath = (href: string) => `/${locale}${href}`;

  const quickLinks = [
    { key: "home", href: "/" },
    { key: "about", href: "/about" },
    { key: "vision", href: "/vision" },
    { key: "chairman", href: "/chairman" },
    { key: "services", href: "/services" },
    { key: "portfolio", href: "/portfolio" },
    { key: "news", href: "/news" },
    { key: "careers", href: "/careers" },
    { key: "contact", href: "/contact" },
    { key: "privacy", href: "/privacy" },
  ] as const;

  const brands = [
    { name: "Preem — بريم", href: "https://preemsa.com" },
    { name: "Frashah — فراشة", href: "https://frashahsa.com" },
    { name: "Noor Auto Hub — نور", href: "#" },
  ];

  return (
    <footer className="bg-[var(--black)] text-white">
      {/* Gold top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-40" />

      <div className="container-nah py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <NahLogo color="white" size="sm" className="mb-5" />
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mt-4">
              {t("tagline")}
            </p>
            <div className="mt-6">
              <p className="text-[var(--gold)] text-xs font-semibold tracking-widest uppercase mb-1">
                {t("nationalNumber")}
              </p>
              <p className="text-white/40 text-sm font-mono">7053486549</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xs font-semibold tracking-widest uppercase mb-6 pb-2 border-b border-white/10">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={localePath(href)}
                    className="text-white/50 text-sm hover:text-[var(--gold)] transition-colors duration-200"
                  >
                    {tn(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Brands */}
          <div>
            <h3 className="text-white text-xs font-semibold tracking-widest uppercase mb-6 pb-2 border-b border-white/10">
              {t("ourBrands")}
            </h3>
            <ul className="space-y-3">
              {brands.map((brand) => (
                <li key={brand.name}>
                  {brand.href === "#" ? (
                    <span className="text-white/30 text-sm">{brand.name}</span>
                  ) : (
                    <a
                      href={brand.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/50 text-sm hover:text-[var(--gold)] transition-colors duration-200"
                    >
                      {brand.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xs font-semibold tracking-widest uppercase mb-6 pb-2 border-b border-white/10">
              {t("contactUs")}
            </h3>
            <ul className="space-y-3">
              <li>
                <p className="text-white/30 text-xs uppercase tracking-wider mb-1">
                  {locale === "ar" ? "العنوان" : "Address"}
                </p>
                <p className="text-white/50 text-sm">{t("address")}</p>
              </li>
              <li>
                <p className="text-white/30 text-xs uppercase tracking-wider mb-1">
                  {locale === "ar" ? "البريد الإلكتروني" : "Email"}
                </p>
                <a
                  href="mailto:admin@nah.sa"
                  className="text-[var(--gold)] text-sm hover:text-[var(--gold-light)] transition-colors duration-200"
                >
                  admin@nah.sa
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container-nah py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            &copy; {year} {t("company")}. {t("allRights")}.
          </p>
          <Link
            href={localePath("/privacy")}
            className="text-white/25 text-xs hover:text-white/50 transition-colors"
          >
            {t("privacyPolicy")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
