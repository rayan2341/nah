import { getTranslations, getLocale } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("chairman");
  return { title: t("pageTitle") };
}

export default async function ChairmanPage() {
  const t = await getTranslations("chairman");
  const locale = await getLocale();
  const isRtl = locale === "ar";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;
  const localePath = (href: string) => `/${locale}${href}`;

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
          <div className="max-w-2xl mx-auto text-center py-20">
            {/* Diamond decoration */}
            <div className="flex justify-center mb-10">
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 border border-[var(--gold)] opacity-30 rotate-45" />
                <div className="absolute inset-4 border border-[var(--gold)] opacity-60 rotate-45" />
                <div className="absolute inset-8 bg-[var(--gold)] opacity-80 rotate-45" />
              </div>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--black)] mb-5">
              {t("comingSoonTitle")}
            </h2>
            <p className="text-[var(--gray-600)] text-base leading-relaxed mb-10">
              {t("comingSoonText")}
            </p>

            <Link href={localePath("/about")} className="btn-outline">
              {locale === "ar" ? "تعرف على شركتنا" : "Learn About Our Company"}
              <Arrow size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
