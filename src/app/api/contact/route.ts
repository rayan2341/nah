import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  locale?: string;
  role?: string;
  type?: "contact" | "careers";
}

function buildHtml(data: ContactPayload): string {
  const isAr = data.locale === "ar";
  const isCareers = data.type === "careers";
  const dir = isAr ? "rtl" : "ltr";
  const label = {
    name: isAr ? "الاسم" : "Name",
    email: isAr ? "البريد الإلكتروني" : "Email",
    phone: isAr ? "الهاتف" : "Phone",
    subject: isAr ? "الموضوع" : "Subject",
    role: isAr ? "المجال" : "Area",
    message: isAr ? "الرسالة" : "Message",
    type: isAr ? "نوع الطلب" : "Request Type",
    typeValue: isCareers
      ? isAr ? "طلب وظيفة" : "Career Application"
      : isAr ? "استفسار عام" : "General Inquiry",
  };

  return `
<!DOCTYPE html>
<html dir="${dir}" lang="${data.locale ?? "en"}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: ${isAr ? "Cairo, Arial" : "Inter, Arial"}, sans-serif; background: #F4F2EE; margin: 0; padding: 20px; }
    .card { max-width: 600px; margin: 0 auto; background: #fff; border-top: 3px solid #C9A84C; }
    .header { background: #0A0A0A; padding: 28px 32px; }
    .header h1 { color: #C9A84C; font-size: 18px; margin: 0; letter-spacing: 0.1em; }
    .header p { color: rgba(255,255,255,0.4); font-size: 12px; margin: 4px 0 0; }
    .body { padding: 32px; }
    .row { margin-bottom: 20px; }
    .row-label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; color: #9A9490; margin-bottom: 4px; }
    .row-value { font-size: 14px; color: #0A0A0A; }
    .message-box { background: #F4F2EE; padding: 16px; font-size: 14px; color: #3A3530; line-height: 1.7; white-space: pre-wrap; }
    .footer { padding: 16px 32px; border-top: 1px solid #E2DDD6; text-align: center; }
    .footer p { font-size: 11px; color: #9A9490; margin: 0; }
    hr { border: none; border-top: 1px solid #E2DDD6; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>${isAr ? "رسالة جديدة — نواة الألماس" : "New Message — Nawat Alalmas"}</h1>
      <p>NAH.sa | admin@nah.sa</p>
    </div>
    <div class="body">
      <div class="row">
        <div class="row-label">${label.type}</div>
        <div class="row-value">${label.typeValue}</div>
      </div>
      <hr>
      <div class="row">
        <div class="row-label">${label.name}</div>
        <div class="row-value">${data.name}</div>
      </div>
      <div class="row">
        <div class="row-label">${label.email}</div>
        <div class="row-value">${data.email}</div>
      </div>
      ${data.phone ? `<div class="row"><div class="row-label">${label.phone}</div><div class="row-value">${data.phone}</div></div>` : ""}
      ${data.role ? `<div class="row"><div class="row-label">${label.role}</div><div class="row-value">${data.role}</div></div>` : ""}
      <div class="row">
        <div class="row-label">${label.subject}</div>
        <div class="row-value">${data.subject}</div>
      </div>
      <hr>
      <div class="row">
        <div class="row-label">${label.message}</div>
        <div class="message-box">${data.message}</div>
      </div>
    </div>
    <div class="footer">
      <p>Nawat Alalmas Holding Company &bull; ${new Date().toLocaleDateString("en-SA", { year: "numeric", month: "long", day: "numeric" })}</p>
    </div>
  </div>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  try {
    const data: ContactPayload = await req.json();

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT ?? "587", 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const toEmail = process.env.CONTACT_EMAIL ?? "admin@nah.sa";

    if (!smtpHost || !smtpUser || !smtpPass) {
      console.error("SMTP environment variables not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const isAr = data.locale === "ar";
    const subjectPrefix = data.type === "careers"
      ? isAr ? "طلب وظيفة" : "Career Application"
      : isAr ? "استفسار" : "Inquiry";

    await transporter.sendMail({
      from: `"NAH Website" <${smtpUser}>`,
      to: toEmail,
      replyTo: data.email,
      subject: `[${subjectPrefix}] ${data.subject} — ${data.name}`,
      html: buildHtml(data),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
