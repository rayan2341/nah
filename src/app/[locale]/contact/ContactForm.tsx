"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

interface ContactFormProps {
  locale: string;
}

export default function ContactForm({ locale }: ContactFormProps) {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, locale }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle size={48} className="text-[var(--gold)] mb-4" />
        <h3 className="font-display text-xl font-bold text-[var(--black)] mb-3">
          {t("successTitle")}
        </h3>
        <p className="text-[var(--gray-600)] text-sm">{t("successText")}</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-[var(--gold)] text-sm underline underline-offset-4 hover:text-[var(--gold-dark)] transition-colors"
        >
          {locale === "ar" ? "إرسال رسالة أخرى" : "Send another message"}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="label-nah">{t("nameLabel")}</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder={t("namePlaceholder")}
            required
            className="input-nah"
          />
        </div>
        <div>
          <label className="label-nah">{t("emailLabel")}</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder={t("emailPlaceholder")}
            required
            className="input-nah"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="label-nah">{t("phoneLabel")}</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder={t("phonePlaceholder")}
            className="input-nah"
            dir="ltr"
          />
        </div>
        <div>
          <label className="label-nah">{t("subjectLabel")}</label>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder={t("subjectPlaceholder")}
            required
            className="input-nah"
          />
        </div>
      </div>

      <div>
        <label className="label-nah">{t("messageLabel")}</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder={t("messagePlaceholder")}
          required
          className="input-nah"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-600 text-sm">
          <AlertCircle size={16} />
          {t("errorText")}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full sm:w-auto justify-center sm:justify-start"
      >
        {status === "sending" ? t("sending") : t("submitButton")}
        <Send size={14} />
      </button>
    </form>
  );
}
