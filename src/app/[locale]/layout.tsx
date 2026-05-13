import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const locales = ["ar", "en"];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";

  return {
    title: {
      default: isAr
        ? "شركة نواة الألماس القابضة"
        : "Nawat Alalmas Holding Company",
      template: isAr
        ? "%s | شركة نواة الألماس القابضة"
        : "%s | Nawat Alalmas Holding",
    },
    description: isAr
      ? "شركة قابضة سعودية خاصة تبني محفظة متنوعة من العلامات التجارية والمنصات الرقمية في التقنية والصحة والتنقل والتجارة."
      : "A private Saudi holding company building a diversified portfolio of brands and digital platforms across technology, health, mobility, and commerce.",
    keywords: isAr
      ? ["شركة قابضة", "نواة الألماس", "استثمار", "السعودية", "تقنية", "صحة", "تنقل"]
      : ["holding company", "Nawat Alalmas", "investment", "Saudi Arabia", "technology", "health", "mobility"],
    authors: [{ name: "Nawat Alalmas Holding Company" }],
    metadataBase: new URL("https://nah.sa"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ar: "/ar",
        en: "/en",
      },
    },
    openGraph: {
      type: "website",
      locale: isAr ? "ar_SA" : "en_US",
      url: `https://nah.sa/${locale}`,
      siteName: isAr
        ? "شركة نواة الألماس القابضة"
        : "Nawat Alalmas Holding Company",
      title: isAr
        ? "شركة نواة الألماس القابضة"
        : "Nawat Alalmas Holding Company",
      description: isAr
        ? "شركة قابضة سعودية خاصة تبني علامات تجارية رائدة في التقنية والصحة والتنقل والتجارة."
        : "A private Saudi holding company building leading brands across technology, health, mobility, and commerce.",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--white)]">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
