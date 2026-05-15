import { getTranslations, getLocale } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft, ExternalLink } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("companies");
  return { title: t("pageTitle") };
}

export default async function CompaniesPage() {
  const t = await getTranslations("companies");
  const locale = await getLocale();
  const isRtl = locale === "ar";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;
  const localePath = (href: string) => `/${locale}${href}`;

  const brands = [
    {
      key: "preem",
      name: t("preem.name"),
      nameEn: t("preem.nameEn"),
      tagline: t("preem.tagline"),
      description: t("preem.description"),
      industry: t("preem.industry"),
      status: t("preem.status"),
      website: "https://preemsa.com",
      accentColor: "#C9A84C",
      bgColor: "#0A2342",
      number: "01",
      logo: "/logos/preem.png",
    },
    {
      key: "frashah",
      name: t("frashah.name"),
      nameEn: t("frashah.nameEn"),
      tagline: t("frashah.tagline"),
      description: t("frashah.description"),
      industry: t("frashah.industry"),
      status: t("frashah.status"),
      website: "https://frashahsa.com",
      accentColor: "#C9A84C",
      bgColor: "#1A0A2E",
      number: "02",
      logo: "/logos/frashah.png",
    },
    {
      key: "noor",
      name: t("noor.name"),
      nameEn: t("noor.nameEn"),
      tagline: t("noor.tagline"),
      description: t("noor.description"),
      industry: t("noor.industry"),
      status: t("noor.status"),
      website: null,
      accentColor: "#C9A84C",
      bgColor: "#0A1A0A",
      number: "03",
      logo: null,
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
          <p className="text-white/50 text-base sm:text-lg max-w-2xl leading-relaxed">
            {t("pageSubtitle")}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--white)] to-transparent" />
      </section>

      {/* Brands */}
      <section className="section-padding bg-[var(--white)]">
        <div className="container-nah">
          <div className="space-y-8">
            {brands.map((brand, i) => (
              <div
                key={brand.key}
                className="group grid grid-cols-1 lg:grid-cols-5 overflow-hidden border border-[var(--gray-100)] hover:border-[var(--gold)] transition-all duration-500"
              >
                {/* Brand color panel */}
                <div
                  className="lg:col-span-2 p-10 flex flex-col justify-between min-h-64"
                  style={{ backgroundColor: brand.bgColor }}
                >
                  <div>
                    <p className="text-[var(--gold)] text-5xl font-bold opacity-20 mb-4">
                      {brand.number}
                    </p>
                    {brand.logo && (
                      <div className="bg-white inline-block px-3 py-2 mb-5">
                        <Image
                          src={brand.logo}
                          alt={brand.nameEn}
                          width={120}
                          height={56}
                          className="object-contain h-12 w-auto"
                        />
                      </div>
                    )}
                  <h2 className="text-white text-3xl font-bold mb-1">
                      {brand.name}
                    </h2>
                    <p className="text-white/40 text-sm mb-5">{brand.nameEn}</p>
                    <div className="w-8 h-px bg-[var(--gold)] mb-4" />
                    <p className="text-[var(--gold)] text-sm font-medium">
                      {brand.tagline}
                    </p>
                  </div>

                  {/* Status */}
                  <div className="mt-8">
                    {brand.status === "active" ? (
                      <span className="inline-flex items-center gap-2 text-[var(--gold)] text-xs font-semibold tracking-widest uppercase">
                        <span className="w-2 h-2 rounded-full bg-[var(--gold)] animate-pulse" />
                        {t("activeLabel")}
                      </span>
                    ) : (
                      <span className="text-white/30 text-xs font-semibold tracking-widest uppercase">
                        {t("launchingSoonLabel")}
                      </span>
                    )}
                  </div>
                </div>

                {/* Brand details */}
                <div className="lg:col-span-3 p-10 bg-[var(--white)] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-[var(--gray-400)] text-xs font-semibold tracking-widest uppercase">
                        {brand.industry}
                      </span>
                    </div>
                    <p className="text-[var(--gray-600)] text-base leading-relaxed mb-8">
                      {brand.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {brand.website ? (
                      <a
                        href={brand.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 btn-primary text-sm"
                      >
                        {t("visitWebsite")}
                        <ExternalLink size={14} />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-[var(--gray-400)] text-sm">
                        {t("launchingSoonLabel")}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[var(--gold-subtle)]">
        <div className="container-nah text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--black)] mb-4">
            {locale === "ar" ? "هل تريد الاستثمار معنا؟" : "Interested in investing with us?"}
          </h2>
          <p className="text-[var(--gray-600)] text-base mb-8 max-w-xl mx-auto">
            {locale === "ar"
              ? "محفظتنا في نمو مستمر. تواصل معنا لاستكشاف فرص الشراكة والاستثمار."
              : "Our portfolio is continuously growing. Reach out to explore partnership and investment opportunities."}
          </p>
          <Link href={localePath("/contact")} className="btn-primary">
            {locale === "ar" ? "تواصل معنا" : "Contact Us"}
            <Arrow size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
