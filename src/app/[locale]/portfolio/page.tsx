import { getTranslations, getLocale } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft, ExternalLink } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("portfolio");
  return { title: t("pageTitle") };
}

export default async function PortfolioPage() {
  const t = await getTranslations("portfolio");
  const tc = await getTranslations("companies");
  const locale = await getLocale();
  const isRtl = locale === "ar";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;
  const localePath = (href: string) => `/${locale}${href}`;

  const stats = [
    { value: "3", label: t("stat1Label") },
    { value: "5", label: t("stat2Label") },
    { value: "2024", label: t("stat3Label") },
    { value: "KSA", label: t("stat4Label") },
  ];

  const portfolioItems = [
    {
      name: tc("preem.name"),
      nameEn: tc("preem.nameEn"),
      tagline: tc("preem.tagline"),
      industry: tc("preem.industry"),
      status: tc("preem.status"),
      website: "https://preemsa.com",
      year: "2024",
      bgDark: "#0A2342",
    },
    {
      name: tc("frashah.name"),
      nameEn: tc("frashah.nameEn"),
      tagline: tc("frashah.tagline"),
      industry: tc("frashah.industry"),
      status: tc("frashah.status"),
      website: "https://frashahsa.com",
      year: "2025",
      bgDark: "#1A0A2E",
    },
    {
      name: tc("noor.name"),
      nameEn: tc("noor.nameEn"),
      tagline: tc("noor.tagline"),
      industry: tc("noor.industry"),
      status: tc("noor.status"),
      website: null,
      year: "2025",
      bgDark: "#0A1A0A",
    },
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="bg-[var(--black)] pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 diamond-pattern opacity-20" />
        <div className="container-nah relative z-10">
          <span className="gold-line mb-6 inline-block" />
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5">
            {t("pageTitle")}
          </h1>
          <p className="text-white/50 text-base sm:text-lg max-w-xl leading-relaxed">
            {t("pageSubtitle")}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--white)] to-transparent" />
      </section>

      {/* Stats */}
      <section className="bg-[var(--white)] py-0">
        <div className="container-nah">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--gray-200)] border border-[var(--gray-200)]">
            {stats.map((stat, i) => (
              <div key={i} className="bg-[var(--white)] py-10 px-6 text-center">
                <p className="font-display text-3xl sm:text-4xl font-bold text-[var(--gold)] mb-2">
                  {stat.value}
                </p>
                <p className="text-[var(--gray-600)] text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-[var(--off-white)]">
        <div className="container-nah">
          <p className="text-[var(--gray-600)] text-base leading-relaxed max-w-2xl border-s-4 border-[var(--gold)] ps-6">
            {t("introText")}
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-[var(--white)]">
        <div className="container-nah">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioItems.map((item, i) => (
              <div
                key={i}
                className="card-hover group flex flex-col overflow-hidden"
                style={{ backgroundColor: item.bgDark }}
              >
                {/* Top */}
                <div className="p-8 flex-1">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-white text-2xl font-bold mb-1">{item.name}</h3>
                      <p className="text-white/30 text-xs">{item.nameEn}</p>
                    </div>
                    <span className="text-[var(--gold)] text-xs font-mono opacity-50">{item.year}</span>
                  </div>
                  <div className="w-8 h-px bg-[var(--gold)] mb-5" />
                  <p className="text-[var(--gold)] text-sm font-medium mb-3">{item.tagline}</p>
                  <p className="text-white/40 text-xs uppercase tracking-wider">{item.industry}</p>
                </div>

                {/* Bottom */}
                <div className="px-8 py-5 border-t border-white/10 flex items-center justify-between">
                  {item.status === "active" ? (
                    <span className="flex items-center gap-2 text-[var(--gold)] text-xs font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] animate-pulse" />
                      {tc("activeLabel")}
                    </span>
                  ) : (
                    <span className="text-white/30 text-xs">{tc("launchingSoonLabel")}</span>
                  )}
                  {item.website && (
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/40 hover:text-[var(--gold)] transition-colors"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future */}
      <section className="section-padding bg-[var(--black)] relative overflow-hidden">
        <div className="absolute inset-0 diamond-pattern opacity-20" />
        <div className="container-nah relative z-10 text-center">
          <span className="gold-line mx-auto mb-6 inline-block" />
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-5">
            {t("futureTitle")}
          </h2>
          <p className="text-white/50 text-base max-w-xl mx-auto leading-relaxed mb-8">
            {t("futureText")}
          </p>
          <Link href={localePath("/contact")} className="btn-primary">
            {locale === "ar" ? "تواصل للاستثمار" : "Discuss Investment"}
            <Arrow size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
