import { getTranslations, getLocale } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("privacy");
  return { title: t("pageTitle") };
}

export default async function PrivacyPage() {
  const t = await getTranslations("privacy");

  const sections = [
    { title: t("section1Title"), text: t("section1Text") },
    { title: t("section2Title"), text: t("section2Text") },
    { title: t("section3Title"), text: t("section3Text") },
    { title: t("section4Title"), text: t("section4Text") },
    { title: t("section5Title"), text: t("section5Text") },
    { title: t("section6Title"), text: t("section6Text") },
    { title: t("section7Title"), text: t("section7Text") },
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
          <p className="text-white/30 text-xs mt-4">
            {t("lastUpdated")}: {new Date().toLocaleDateString("ar-SA", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--white)] to-transparent" />
      </section>

      {/* Content */}
      <section className="section-padding bg-[var(--white)]">
        <div className="container-nah">
          <div className="max-w-3xl mx-auto">
            {/* Intro */}
            <p className="text-[var(--gray-600)] text-base leading-relaxed mb-12 pb-8 border-b border-[var(--gray-100)]">
              {t("intro")}
            </p>

            {/* Sections */}
            <div className="space-y-10">
              {sections.map((section, i) => (
                <div key={i} className="group">
                  <h2 className="font-display text-xl font-bold text-[var(--black)] mb-4 flex items-start gap-3">
                    <span className="text-[var(--gold)] text-sm font-mono mt-1 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {section.title}
                  </h2>
                  <p className="text-[var(--gray-600)] text-sm leading-relaxed ps-8">
                    {section.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact note */}
            <div className="mt-12 pt-8 border-t border-[var(--gray-100)]">
              <div className="bg-[var(--off-white)] p-6 border-s-2 border-[var(--gold)]">
                <p className="text-[var(--gray-600)] text-sm leading-relaxed">
                  <a
                    href="mailto:admin@nah.sa"
                    className="text-[var(--gold)] font-medium hover:underline"
                  >
                    admin@nah.sa
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
