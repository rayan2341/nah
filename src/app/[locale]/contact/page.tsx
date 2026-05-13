import { getTranslations, getLocale } from "next-intl/server";
import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import { MapPin, Mail, Hash } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("contact");
  return { title: t("pageTitle") };
}

export default async function ContactPage() {
  const t = await getTranslations("contact");
  const locale = await getLocale();

  const infoItems = [
    {
      icon: MapPin,
      label: t("addressLabel"),
      value: t("addressValue"),
      href: null,
    },
    {
      icon: Mail,
      label: t("emailContactLabel"),
      value: t("emailContactValue"),
      href: "mailto:admin@nah.sa",
    },
    {
      icon: Hash,
      label: t("registrationLabel"),
      value: t("registrationValue"),
      href: null,
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

      {/* Contact section */}
      <section className="section-padding bg-[var(--white)]">
        <div className="container-nah">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="font-display text-2xl font-bold text-[var(--black)] mb-8">
                {t("formTitle")}
              </h2>
              <ContactForm locale={locale} />
            </div>

            {/* Info */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-[var(--black)] mb-8">
                {t("infoTitle")}
              </h2>
              <div className="space-y-8">
                {infoItems.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 border border-[var(--gold)] flex items-center justify-center">
                      <Icon size={16} className="text-[var(--gold)]" />
                    </div>
                    <div>
                      <p className="text-[var(--gray-400)] text-xs uppercase tracking-widest mb-1">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-[var(--black)] text-sm font-medium hover:text-[var(--gold)] transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-[var(--black)] text-sm font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Gold divider */}
              <div className="divider-gold my-10" />

              <div className="bg-[var(--off-white)] p-6 border-s-2 border-[var(--gold)]">
                <p className="text-[var(--gray-600)] text-sm leading-relaxed">
                  {locale === "ar"
                    ? "نرد على جميع الاستفسارات خلال يومي عمل. للأمور العاجلة، تواصل مباشرة عبر البريد الإلكتروني."
                    : "We respond to all inquiries within two business days. For urgent matters, contact us directly via email."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
