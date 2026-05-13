import { getTranslations, getLocale } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("services");
  return { title: t("pageTitle") };
}

export default async function ServicesPage() {
  const t = await getTranslations("services");
  const locale = await getLocale();
  const isRtl = locale === "ar";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;
  const localePath = (href: string) => `/${locale}${href}`;

  const services = [
    { title: t("service1Title"), text: t("service1Text"), number: "01" },
    { title: t("service2Title"), text: t("service2Text"), number: "02" },
    { title: t("service3Title"), text: t("service3Text"), number: "03" },
    { title: t("service4Title"), text: t("service4Text"), number: "04" },
  ];

  const sectors = [
    { name: locale === "ar" ? "التقنية والمنصات الرقمية" : "Technology & Digital Platforms", active: true },
    { name: locale === "ar" ? "الصحة والعناية" : "Health & Wellness", active: true },
    { name: locale === "ar" ? "التنقل والسيارات" : "Mobility & Automotive", active: true },
    { name: locale === "ar" ? "التجارة الإلكترونية" : "E-Commerce", active: true },
    { name: locale === "ar" ? "الغذاء والضيافة" : "Food & Hospitality", active: true },
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

      {/* Intro */}
      <section className="section-padding bg-[var(--white)]">
        <div className="container-nah">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="gold-line mb-6 inline-block" />
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--black)] mb-5">
                {t("introTitle")}
              </h2>
              <p className="text-[var(--gray-600)] text-base leading-relaxed">
                {t("introText")}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["01", "02", "03", "04"].map((n) => (
                <div key={n} className="h-20 border border-[var(--gray-200)] flex items-center justify-center">
                  <span className="text-[var(--gold)] text-2xl font-bold opacity-30">{n}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-[var(--off-white)]">
        <div className="container-nah">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--gray-200)]">
            {services.map((svc) => (
              <div
                key={svc.number}
                className="bg-[var(--white)] p-10 group hover:bg-[var(--black)] transition-all duration-300"
              >
                <p className="text-[var(--gold)] text-4xl font-bold opacity-15 group-hover:opacity-40 mb-6 transition-opacity">
                  {svc.number}
                </p>
                <h3 className="text-[var(--black)] group-hover:text-white font-bold text-xl mb-4 transition-colors duration-300">
                  {svc.title}
                </h3>
                <p className="text-[var(--gray-600)] group-hover:text-white/60 text-sm leading-relaxed transition-colors duration-300">
                  {svc.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="section-padding bg-[var(--white)]">
        <div className="container-nah">
          <div className="mb-10">
            <span className="gold-line mb-6 inline-block" />
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--black)]">
              {t("sectorsTitle")}
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {sectors.map((sector) => (
              <div
                key={sector.name}
                className="px-5 py-3 border border-[var(--gold)] text-[var(--gold)] text-sm font-medium"
              >
                {sector.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="section-padding bg-[var(--black)] relative overflow-hidden">
        <div className="absolute inset-0 diamond-pattern opacity-20" />
        <div className="container-nah relative z-10">
          <div className="max-w-2xl">
            <span className="gold-line mb-6 inline-block" />
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-5">
              {t("partnerTitle")}
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-8">
              {t("partnerText")}
            </p>
            <Link href={localePath("/contact")} className="btn-primary">
              {locale === "ar" ? "تواصل معنا" : "Contact Us"}
              <Arrow size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
