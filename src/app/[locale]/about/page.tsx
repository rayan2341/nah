import { getTranslations, getLocale } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations("about");
  return { title: t("pageTitle") };
}

export default async function AboutPage() {
  const t = await getTranslations("about");
  const locale = await getLocale();
  const isRtl = locale === "ar";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;
  const localePath = (href: string) => `/${locale}${href}`;

  const values = [
    { title: t("value1Title"), text: t("value1Text") },
    { title: t("value2Title"), text: t("value2Text") },
    { title: t("value3Title"), text: t("value3Text") },
    { title: t("value4Title"), text: t("value4Text") },
    { title: t("value5Title"), text: t("value5Text") },
    { title: t("value6Title"), text: t("value6Text") },
  ];

  const timeline = [
    { year: t("timeline1Year"), title: t("timeline1Title"), text: t("timeline1Text") },
    { year: t("timeline2Year"), title: t("timeline2Title"), text: t("timeline2Text") },
    { year: t("timeline3Year"), title: t("timeline3Title"), text: t("timeline3Text") },
    { year: t("timeline4Year"), title: t("timeline4Title"), text: t("timeline4Text") },
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

      {/* Story */}
      <section className="section-padding bg-[var(--white)]">
        <div className="container-nah">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="gold-line mb-6 inline-block" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--black)] mb-8">
                {t("storyTitle")}
              </h2>
              <div className="space-y-5 text-[var(--gray-600)] text-base leading-relaxed">
                <p>{t("storyP1")}</p>
                <p>{t("storyP2")}</p>
                <p className="italic text-[var(--gold)] border-s-2 border-[var(--gold)] ps-4">
                  {t("storyP3")}
                </p>
              </div>
            </div>

            {/* Diamond visual */}
            <div className="flex items-center justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 border border-[var(--gold)] opacity-20 rotate-45 transform" />
                <div className="absolute inset-8 border border-[var(--gold)] opacity-40 rotate-45 transform" />
                <div className="absolute inset-16 border border-[var(--gold)] opacity-60 rotate-45 transform" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-display text-[var(--gold)] text-6xl font-bold leading-none">N</p>
                    <p className="text-[var(--black)] text-xs tracking-[0.2em] mt-2 uppercase">Nawat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-[var(--off-white)]">
        <div className="container-nah">
          <div className="mb-12">
            <span className="gold-line mb-6 inline-block" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--black)]">
              {t("valuesTitle")}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--gray-200)]">
            {values.map((value, i) => (
              <div
                key={i}
                className="bg-[var(--white)] p-8 group hover:bg-[var(--black)] transition-all duration-300"
              >
                <p className="text-[var(--gold)] text-xs font-mono mb-4 opacity-50 group-hover:opacity-100">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-[var(--black)] group-hover:text-white font-bold text-lg mb-3 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-[var(--gray-600)] group-hover:text-white/60 text-sm leading-relaxed transition-colors duration-300">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-[var(--white)]">
        <div className="container-nah">
          <div className="mb-12">
            <span className="gold-line mb-6 inline-block" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--black)]">
              {t("timelineTitle")}
            </h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute start-[3.5rem] top-0 bottom-0 w-px bg-[var(--gray-200)] hidden sm:block" />

            <div className="space-y-0">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-8 sm:gap-12 items-start pb-12 last:pb-0">
                  {/* Year bubble */}
                  <div className="flex-shrink-0 w-28 text-end sm:text-center relative z-10">
                    <span className="inline-block px-3 py-1 bg-[var(--gold)] text-[var(--black)] text-xs font-bold tracking-wider">
                      {item.year}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="flex-1 pt-0.5 pb-0 border-b border-[var(--gray-100)] last:border-0">
                    <h3 className="font-bold text-[var(--black)] text-lg mb-2">{item.title}</h3>
                    <p className="text-[var(--gray-600)] text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership placeholder */}
      <section className="section-padding bg-[var(--black)]">
        <div className="container-nah text-center">
          <span className="gold-line mx-auto mb-6 inline-block" />
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            {t("leadershipTitle")}
          </h2>
          <p className="text-white/40 text-sm max-w-md mx-auto mb-8">
            {t("leadershipComingSoon")}
          </p>
          <Link href={localePath("/chairman")} className="btn-outline">
            {locale === "ar" ? "كلمة الرئيس" : "Chairman's Message"}
            <Arrow size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
