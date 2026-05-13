import { getTranslations, getLocale } from "next-intl/server";
import type { Metadata } from "next";
import CareersForm from "./CareersForm";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("careers");
  return { title: t("pageTitle") };
}

export default async function CareersPage() {
  const t = await getTranslations("careers");
  const locale = await getLocale();

  const perks = [
    { title: t("perk1Title"), text: t("perk1Text") },
    { title: t("perk2Title"), text: t("perk2Text") },
    { title: t("perk3Title"), text: t("perk3Text") },
    { title: t("perk4Title"), text: t("perk4Text") },
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

      {/* EVP */}
      <section className="section-padding bg-[var(--white)]">
        <div className="container-nah">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="gold-line mb-6 inline-block" />
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--black)] mb-5">
                {t("evpTitle")}
              </h2>
              <p className="text-[var(--gray-600)] text-base leading-relaxed">
                {t("evpText")}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-[var(--gray-200)]">
              {perks.map((perk, i) => (
                <div
                  key={i}
                  className="bg-[var(--white)] p-6 group hover:bg-[var(--black)] transition-all duration-300"
                >
                  <h3 className="text-[var(--black)] group-hover:text-[var(--gold)] font-bold text-sm mb-2 transition-colors duration-300">
                    {perk.title}
                  </h3>
                  <p className="text-[var(--gray-600)] group-hover:text-white/50 text-xs leading-relaxed transition-colors duration-300">
                    {perk.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Application */}
      <section className="section-padding bg-[var(--off-white)]">
        <div className="container-nah">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="gold-line mb-6 inline-block" />
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--black)] mb-4">
                {t("applyTitle")}
              </h2>
              <p className="text-[var(--gray-600)] text-base leading-relaxed mb-8">
                {t("applyText")}
              </p>

              {/* Brands mentioned */}
              <div className="space-y-3">
                {["Preem — بريم", "Frashah — فراشة", "Noor Auto Hub — نور"].map((brand) => (
                  <div key={brand} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[var(--gold)]" />
                    <span className="text-[var(--black)] text-sm font-medium">{brand}</span>
                  </div>
                ))}
              </div>
            </div>

            <CareersForm locale={locale} />
          </div>
        </div>
      </section>
    </>
  );
}
