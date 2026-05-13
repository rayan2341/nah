import { getTranslations, getLocale } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft, ChevronDown } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations("home");
  return {
    title: locale === "ar" ? "الرئيسية" : "Home",
    description:
      locale === "ar"
        ? t("heroSubtitle")
        : t("heroSubtitle"),
  };
}

export default async function HomePage() {
  const t = await getTranslations("home");
  const tc = await getTranslations("companies");
  const locale = await getLocale();
  const isRtl = locale === "ar";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  const localePath = (href: string) => `/${locale}${href}`;

  const stats = [
    { value: t("stat1Value"), label: t("stat1Label") },
    { value: t("stat2Value"), label: t("stat2Label") },
    { value: t("stat3Value"), label: t("stat3Label") },
    { value: t("stat4Value"), label: t("stat4Label") },
  ];

  const sectors = [
    t("sector1"),
    t("sector2"),
    t("sector3"),
    t("sector4"),
    t("sector5"),
  ];

  const brands = [
    {
      key: "preem",
      name: tc("preem.name"),
      nameEn: tc("preem.nameEn"),
      tagline: tc("preem.tagline"),
      industry: tc("preem.industry"),
      status: tc("preem.status"),
      website: "https://preemsa.com",
      color: "#0A2342",
    },
    {
      key: "frashah",
      name: tc("frashah.name"),
      nameEn: tc("frashah.nameEn"),
      tagline: tc("frashah.tagline"),
      industry: tc("frashah.industry"),
      status: tc("frashah.status"),
      website: "https://frashahsa.com",
      color: "#1A0A2E",
    },
    {
      key: "noor",
      name: tc("noor.name"),
      nameEn: tc("noor.nameEn"),
      tagline: tc("noor.tagline"),
      industry: tc("noor.industry"),
      status: tc("noor.status"),
      website: null,
      color: "#0A1A0A",
    },
  ];

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-gradient min-h-screen flex flex-col relative overflow-hidden">
        {/* Background diamond pattern */}
        <div className="absolute inset-0 diamond-pattern opacity-40" />

        {/* Gold accent line left/right */}
        <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--gold)] to-transparent opacity-10 left-[5%]" />
        <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--gold)] to-transparent opacity-10 right-[5%]" />

        <div className="container-nah flex-1 flex flex-col justify-center pt-32 pb-20 relative z-10">
          <div className="max-w-4xl">
            {/* Tagline badge */}
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-[var(--gold)]" />
              <span className="text-[var(--gold)] text-xs font-semibold tracking-[0.2em] uppercase">
                {t("heroTagline")}
              </span>
            </div>

            {/* Hero title */}
            <h1 className="font-display text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 whitespace-pre-line">
              {t("heroTitle")}
            </h1>

            {/* Subtitle */}
            <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-2xl mb-12">
              {t("heroSubtitle")}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href={localePath("/companies")} className="btn-primary">
                {t("heroCTA")}
                <Arrow size={16} />
              </Link>
              <Link href={localePath("/contact")} className="btn-outline-white">
                {t("heroSecondaryCTA")}
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="container-nah pb-10 relative z-10">
          <div className="flex justify-center">
            <div className="flex flex-col items-center gap-2 text-white/30 animate-bounce">
              <ChevronDown size={20} />
            </div>
          </div>
        </div>

        {/* Gold gradient fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--white)] to-transparent" />
      </section>

      {/* ── INTRO ── */}
      <section className="section-padding bg-[var(--white)]">
        <div className="container-nah">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="gold-line mb-6 inline-block" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--black)] leading-tight mb-6">
                {t("introTitle")}
              </h2>
              <p className="text-[var(--gray-600)] text-base leading-relaxed mb-8">
                {t("introText")}
              </p>
              <Link
                href={localePath("/about")}
                className="inline-flex items-center gap-2 text-[var(--gold)] text-sm font-semibold tracking-wide uppercase hover:gap-3 transition-all duration-200"
              >
                {t("introLinkText")}
                <Arrow size={16} />
              </Link>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-px bg-[var(--gray-200)]">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-[var(--white)] p-8 text-center"
                >
                  <p className="font-display text-3xl sm:text-4xl font-bold text-[var(--gold)] mb-2">
                    {stat.value}
                  </p>
                  <p className="text-[var(--gray-600)] text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BRANDS ── */}
      <section className="section-padding bg-[var(--off-white)]">
        <div className="container-nah">
          <div className="text-center mb-14">
            <span className="gold-line mx-auto mb-6 inline-block" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--black)] mb-4">
              {t("brandsTitle")}
            </h2>
            <p className="text-[var(--gray-600)] text-base max-w-xl mx-auto">
              {t("brandsSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {brands.map((brand) => (
              <div
                key={brand.key}
                className="card-hover group relative overflow-hidden"
                style={{ backgroundColor: brand.color }}
              >
                {/* Status badge */}
                <div className="absolute top-4 end-4 z-10">
                  {brand.status === "active" ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[var(--gold)]/20 border border-[var(--gold)]/40 text-[var(--gold)] text-xs font-semibold tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] animate-pulse" />
                      {tc("activeLabel")}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/10 border border-white/20 text-white/60 text-xs font-semibold tracking-wider">
                      {tc("launchingSoonLabel")}
                    </span>
                  )}
                </div>

                <div className="p-8 pt-14">
                  {/* Brand name */}
                  <h3 className="text-white text-2xl font-bold mb-1">
                    {brand.name}
                  </h3>
                  <p className="text-white/40 text-sm mb-4">{brand.nameEn}</p>

                  {/* Gold line */}
                  <div className="w-8 h-px bg-[var(--gold)] mb-4" />

                  <p className="text-[var(--gold)] text-sm font-medium mb-3">
                    {brand.tagline}
                  </p>
                  <p className="text-white/40 text-xs uppercase tracking-wider">
                    {brand.industry}
                  </p>

                  {/* Bottom action */}
                  <div className="mt-8 pt-6 border-t border-white/10">
                    {brand.website ? (
                      <a
                        href={brand.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white/60 text-sm hover:text-[var(--gold)] transition-colors group-hover:text-[var(--gold)]"
                      >
                        {tc("visitWebsite")}
                        <Arrow size={14} />
                      </a>
                    ) : (
                      <span className="text-white/20 text-sm">{tc("launchingSoonLabel")}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href={localePath("/companies")} className="btn-outline">
              {t("brandsLinkText")}
              <Arrow size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── VISION STATEMENT ── */}
      <section className="section-padding bg-[var(--black)] relative overflow-hidden">
        <div className="absolute inset-0 diamond-pattern opacity-20" />
        <div className="container-nah relative z-10 text-center">
          <span className="gold-line mx-auto mb-8 inline-block" />
          <p className="text-[var(--gold)] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            {t("visionTitle")}
          </p>
          <blockquote className="font-display text-white text-2xl sm:text-3xl md:text-4xl font-light leading-relaxed max-w-4xl mx-auto">
            &ldquo;{t("visionText")}&rdquo;
          </blockquote>
          <div className="mt-10">
            <Link href={localePath("/vision")} className="btn-outline">
              {locale === "ar" ? "اقرأ رؤيتنا كاملة" : "Read Our Full Vision"}
              <Arrow size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTORS ── */}
      <section className="section-padding bg-[var(--white)]">
        <div className="container-nah">
          <div className="mb-12">
            <span className="gold-line mb-6 inline-block" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--black)] mb-4">
              {t("sectorsTitle")}
            </h2>
            <p className="text-[var(--gray-600)] text-base max-w-xl">
              {t("sectorsSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--gray-200)]">
            {sectors.map((sector, i) => (
              <div
                key={i}
                className="bg-[var(--white)] p-8 group hover:bg-[var(--black)] transition-all duration-300"
              >
                <p className="text-[var(--gold)] text-3xl font-bold mb-3 opacity-40 group-hover:opacity-100 transition-opacity">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="text-[var(--black)] group-hover:text-white font-medium leading-snug transition-colors duration-300">
                  {sector}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding bg-[var(--gold-subtle)]">
        <div className="container-nah text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--black)] mb-5">
            {t("ctaTitle")}
          </h2>
          <p className="text-[var(--gray-600)] text-base max-w-2xl mx-auto mb-10">
            {t("ctaText")}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={localePath("/contact")} className="btn-primary">
              {t("ctaPrimary")}
              <Arrow size={16} />
            </Link>
            <Link href={localePath("/careers")} className="btn-outline">
              {t("ctaSecondary")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
