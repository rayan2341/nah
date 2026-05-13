import { getTranslations, getLocale } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("news");
  return { title: t("pageTitle") };
}

export default async function NewsPage() {
  const t = await getTranslations("news");
  const locale = await getLocale();

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

      {/* Coming Soon */}
      <section className="section-padding bg-[var(--white)]">
        <div className="container-nah">
          <div className="max-w-xl mx-auto text-center py-16">
            {/* Decorative grid */}
            <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto mb-10 opacity-10">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="h-12 border border-[var(--gold)]" />
              ))}
            </div>

            <p className="text-[var(--gold)] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              {t("comingSoonTitle")}
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--black)] mb-5">
              {locale === "ar" ? "الأخبار في طريقها إليك" : "News On Its Way"}
            </h2>
            <p className="text-[var(--gray-600)] text-base leading-relaxed mb-10">
              {t("comingSoonText")}
            </p>

            {/* Press contact */}
            <div className="border border-[var(--gray-200)] p-6 text-start">
              <p className="text-[var(--gray-400)] text-xs uppercase tracking-widest mb-2">
                {t("pressContact")}
              </p>
              <a
                href={`mailto:${t("pressEmail")}`}
                className="text-[var(--gold)] text-sm font-medium hover:text-[var(--gold-dark)] transition-colors"
              >
                {t("pressEmail")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
