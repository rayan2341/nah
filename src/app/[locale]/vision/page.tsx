import { getTranslations, getLocale } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("vision");
  return { title: t("pageTitle") };
}

export default async function VisionPage() {
  const t = await getTranslations("vision");
  const locale = await getLocale();
  const isRtl = locale === "ar";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;
  const localePath = (href: string) => `/${locale}${href}`;

  const pillars = [
    { title: t("pillar1Title"), text: t("pillar1Text") },
    { title: t("pillar2Title"), text: t("pillar2Text") },
    { title: t("pillar3Title"), text: t("pillar3Text") },
    { title: t("pillar4Title"), text: t("pillar4Text") },
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

      {/* Vision */}
      <section className="section-padding bg-[var(--white)]">
        <div className="container-nah">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Vision block */}
            <div className="border-s-4 border-[var(--gold)] ps-8">
              <p className="text-[var(--gold)] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                {t("visionLabel")}
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--black)] mb-5">
                {t("visionTitle")}
              </h2>
              <p className="text-[var(--gray-600)] text-base leading-relaxed">
                {t("visionText")}
              </p>
            </div>

            {/* Mission block */}
            <div className="border-s-4 border-[var(--black)] ps-8">
              <p className="text-[var(--black)] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                {t("missionLabel")}
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--black)] mb-5">
                {t("missionTitle")}
              </h2>
              <p className="text-[var(--gray-600)] text-base leading-relaxed">
                {t("missionText")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision 2030 */}
      <section className="section-padding bg-[var(--black)] relative overflow-hidden">
        <div className="absolute inset-0 diamond-pattern opacity-20" />
        <div className="container-nah relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[var(--gold)] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                {t("vision2030Title")}
              </p>
              <p className="text-white text-lg leading-relaxed">
                {t("vision2030Text")}
              </p>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="text-center">
                <p className="font-display text-[var(--gold)] text-8xl font-bold opacity-20">
                  2030
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="section-padding bg-[var(--off-white)]">
        <div className="container-nah">
          <div className="mb-12">
            <span className="gold-line mb-6 inline-block" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--black)]">
              {t("pillarsTitle")}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[var(--gray-200)]">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="bg-[var(--white)] p-10 group hover:bg-[var(--black)] transition-all duration-300"
              >
                <p className="text-[var(--gold)] text-4xl font-bold opacity-15 group-hover:opacity-40 mb-4 transition-opacity">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-[var(--black)] group-hover:text-white font-bold text-xl mb-3 transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-[var(--gray-600)] group-hover:text-white/60 text-sm leading-relaxed transition-colors duration-300">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[var(--white)]">
        <div className="container-nah text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--black)] mb-4">
            {locale === "ar" ? "شاركنا في بناء هذا المستقبل" : "Join Us in Building This Future"}
          </h2>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link href={localePath("/contact")} className="btn-primary">
              {locale === "ar" ? "تواصل معنا" : "Contact Us"}
              <Arrow size={16} />
            </Link>
            <Link href={localePath("/careers")} className="btn-outline">
              {locale === "ar" ? "انضم للفريق" : "Join the Team"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
