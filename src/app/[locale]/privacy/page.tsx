import { getLocale } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: locale === "ar" ? "سياسة الخصوصية" : "Privacy Policy",
    description:
      locale === "ar"
        ? "سياسة الخصوصية لشركة نواة الألماس القابضة وفقاً لنظام حماية البيانات الشخصية"
        : "Privacy Policy of Nawat Alalmas Holding Company in accordance with the Personal Data Protection Law",
  };
}

interface Section {
  number: string;
  title: string;
  content: React.ReactNode;
}

function PolicyPage({
  locale,
  sections,
  hero,
  contactNote,
}: {
  locale: string;
  sections: Section[];
  hero: { title: string; subtitle: string; updated: string };
  contactNote: React.ReactNode;
}) {
  return (
    <>
      <section className="bg-[var(--black)] pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 diamond-pattern opacity-20" />
        <div className="container-nah relative z-10">
          <span className="gold-line mb-6 inline-block" />
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5">
            {hero.title}
          </h1>
          <p className="text-white/50 text-base sm:text-lg max-w-xl leading-relaxed">
            {hero.subtitle}
          </p>
          <p className="text-white/30 text-xs mt-4">{hero.updated}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--white)] to-transparent" />
      </section>

      <section className="section-padding bg-[var(--white)]">
        <div className="container-nah">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-10">
              {sections.map((section) => (
                <div key={section.number} className="group">
                  <h2 className="font-display text-xl font-bold text-[var(--black)] mb-4 flex items-start gap-3">
                    <span className="text-[var(--gold)] text-sm font-mono mt-1 flex-shrink-0">
                      {section.number}
                    </span>
                    {section.title}
                  </h2>
                  <div className="text-[var(--gray-600)] text-sm leading-relaxed ps-8 space-y-3">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-[var(--gray-100)]">
              <div className="bg-[var(--off-white)] p-6 border-s-2 border-[var(--gold)]">
                {contactNote}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default async function PrivacyPage() {
  const locale = await getLocale();

  if (locale === "ar") {
    const sections: Section[] = [
      {
        number: "01",
        title: "المقدمة",
        content: (
          <>
            <p>
              تُصدر هذه السياسة عن شركة نواة الألماس القابضة (يُشار إليها فيما يلي بـ"الشركة"، أو "نحن"، أو "نواة الألماس")، وهي شركة مساهمة مسجّلة في المملكة العربية السعودية، وتعمل وفق أحكام نظام الشركات ولوائحه التنفيذية.
            </p>
            <p>
              نلتزم في الشركة بحماية الخصوصية وصون البيانات الشخصية للمستخدمين، بما يتوافق مع نظام حماية البيانات الشخصية الصادر بالمرسوم الملكي رقم م/19 بتاريخ 1443/2/9هـ، ولوائحه التنفيذية الصادرة عن الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا).
            </p>
            <p>
              تُوضّح هذه السياسة كيفية جمعنا للبيانات الشخصية، واستخدامها، وتخزينها، وحمايتها، والحقوق المتاحة لك بشأنها.
            </p>
          </>
        ),
      },
      {
        number: "02",
        title: "البيانات التي نجمعها",
        content: (
          <>
            <p>قد نجمع الأنواع التالية من البيانات:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>
                <strong>بيانات الحساب:</strong> الاسم الكامل، البريد الإلكتروني، رقم الجوال، المسمى الوظيفي، اسم الجهة.
              </li>
              <li>
                <strong>بيانات الاستخدام:</strong> الصفحات التي تزورها، مدة التصفح، الروابط التي تنقر عليها.
              </li>
              <li>
                <strong>البيانات التقنية:</strong> عنوان IP، نوع المتصفح، نظام التشغيل، بيانات ملفات تعريف الارتباط.
              </li>
              <li>
                <strong>بيانات التواصل:</strong> المراسلات والاستفسارات التي ترسلها عبر نماذج التواصل أو البريد الإلكتروني.
              </li>
              <li>
                <strong>البيانات غير الشخصية:</strong> بيانات مُجمَّعة أو مُجهَّلة الهوية تُستخدم لأغراض إحصائية وتحليلية.
              </li>
            </ul>
          </>
        ),
      },
      {
        number: "03",
        title: "كيف نستخدم بياناتك",
        content: (
          <>
            <p>نستخدم البيانات التي نجمعها للأغراض التالية:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>تقديم الخدمات وتشغيل المنصات الرقمية وتحسينها.</li>
              <li>الرد على استفساراتك وطلباتك وتقديم الدعم اللازم.</li>
              <li>إرسال المعلومات والتحديثات ذات الصلة بموافقتك.</li>
              <li>الامتثال للمتطلبات القانونية والتنظيمية المعمول بها في المملكة العربية السعودية.</li>
              <li>تحليل أنماط الاستخدام لتطوير خدماتنا.</li>
            </ul>
            <p className="mt-2">
              لا نتخذ أي قرارات آلية تؤثر على مصالحك دون تدخل بشري مناسب.
            </p>
          </>
        ),
      },
      {
        number: "04",
        title: "ملفات تعريف الارتباط (Cookies)",
        content: (
          <>
            <p>
              تستخدم منصاتنا ملفات تعريف الارتباط (Cookies) لتحسين تجربة المستخدم وتحليل أنماط الاستخدام. وتشمل أنواع الكوكيز المستخدمة:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li><strong>الكوكيز الضرورية:</strong> لازمة لتشغيل الموقع.</li>
              <li><strong>كوكيز الأداء:</strong> لتحليل طريقة استخدام الموقع.</li>
              <li><strong>كوكيز التفضيلات:</strong> لتذكّر إعداداتك وتفضيلاتك.</li>
            </ul>
            <p className="mt-2">
              يمكنك التحكم في إعدادات ملفات الارتباط من خلال إعدادات متصفحك، مع العلم أن تعطيل بعض ملفات الارتباط قد يؤثر على وظائف الموقع.
            </p>
          </>
        ),
      },
      {
        number: "05",
        title: "مشاركة البيانات مع أطراف ثالثة",
        content: (
          <>
            <p>
              لا نبيع بياناتك الشخصية ولا نؤجّرها لأي طرف ثالث. قد نشارك بياناتك في الحالات التالية حصراً:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>مزودو الخدمات والتقنية الذين يعملون نيابةً عنا وفق عقود سرية صارمة.</li>
              <li>الجهات الحكومية والتنظيمية عند الضرورة القانونية.</li>
              <li>الشركات التابعة لنواة الألماس لتقديم الخدمات المتكاملة.</li>
            </ul>
            <p className="mt-2">
              في جميع الحالات، نضمن أن هذه الأطراف تلتزم بمعايير حماية البيانات المعتمدة لدينا.
            </p>
          </>
        ),
      },
      {
        number: "06",
        title: "نقل البيانات خارج المملكة العربية السعودية",
        content: (
          <>
            <p>
              قد تُنقل بعض البيانات خارج المملكة العربية السعودية عند الضرورة التقنية أو التشغيلية، وذلك وفق الضوابط التالية:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>التحقق من توفر مستوى كافٍ من حماية البيانات في الدولة المستقبِلة.</li>
              <li>إبرام اتفاقيات معالجة البيانات مع مزودي الخدمة الدوليين.</li>
              <li>الالتزام بإشعار الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا) وفقاً للأنظمة المعمول بها.</li>
            </ul>
          </>
        ),
      },
      {
        number: "07",
        title: "الأمان وحماية البيانات",
        content: (
          <>
            <p>
              نتخذ جميع التدابير التقنية والتنظيمية المناسبة لحماية بياناتك الشخصية، وتشمل:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>تشفير البيانات أثناء النقل باستخدام بروتوكول SSL/TLS.</li>
              <li>تشفير البيانات المخزنة باستخدام معايير التشفير المعتمدة.</li>
              <li>جدران حماية (Firewalls) وأنظمة كشف التسلل.</li>
              <li>ضوابط وصول صارمة تقتصر على الموظفين المخوّلين.</li>
              <li>مراجعات أمنية دورية.</li>
            </ul>
            <p className="mt-2">
              في حال وقوع أي اختراق أمني قد يُلحق ضرراً بخصوصيتك، سنُخطرك ونُخطر الجهات المختصة وفقاً للمتطلبات النظامية.
            </p>
          </>
        ),
      },
      {
        number: "08",
        title: "مدة الاحتفاظ بالبيانات",
        content: (
          <>
            <p>
              نحتفظ ببياناتك الشخصية للمدة اللازمة لتحقيق الأغراض المذكورة في هذه السياسة، وبحد أقصى ثلاث (3) سنوات من تاريخ إغلاق حسابك أو انتهاء علاقتك بالشركة، ما لم يستوجب القانون مدة احتفاظ أطول.
            </p>
            <p className="mt-2">
              بعد انتهاء مدة الاحتفاظ، يتم حذف البيانات أو إتلافها أو إخضاعها لإجراءات إخفاء الهوية بصورة آمنة.
            </p>
          </>
        ),
      },
      {
        number: "09",
        title: "حقوقك",
        content: (
          <>
            <p>
              وفقاً لنظام حماية البيانات الشخصية، تتمتع بالحقوق التالية:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li><strong>الاطلاع:</strong> الحق في معرفة البيانات التي نحتفظ بها عنك.</li>
              <li><strong>التصحيح:</strong> الحق في تصحيح أي بيانات غير دقيقة أو ناقصة.</li>
              <li><strong>الحذف:</strong> الحق في طلب حذف بياناتك في الحالات المقررة نظاماً.</li>
              <li><strong>سحب الموافقة:</strong> الحق في سحب موافقتك في أي وقت دون التأثير على مشروعية المعالجة السابقة.</li>
              <li><strong>الاعتراض:</strong> الحق في الاعتراض على معالجة بياناتك لأغراض معينة.</li>
              <li><strong>تقييد المعالجة:</strong> الحق في طلب تقييد معالجة بياناتك في حالات معينة.</li>
            </ul>
            <p className="mt-2">
              لممارسة أي من هذه الحقوق، يُرجى التواصل معنا عبر: <strong>admin@nah.sa</strong>. سنستجيب لطلبك خلال مدة لا تتجاوز ثلاثين (30) يوماً من تاريخ استلامه.
            </p>
          </>
        ),
      },
      {
        number: "10",
        title: "سياسة القاصرين",
        content: (
          <p>
            لا تستهدف منصاتنا الأفراد دون سن الثامنة عشرة (18) عاماً، ولا نجمع بيانات شخصية من القاصرين عن قصد. إن اكتشفنا أننا جمعنا بيانات من قاصر دون موافقة مسبقة من وليّ أمره، سنعمل فوراً على حذف تلك البيانات.
          </p>
        ),
      },
      {
        number: "11",
        title: "التعديلات على السياسة",
        content: (
          <>
            <p>
              نحتفظ بحق تحديث هذه السياسة دورياً لتعكس أي تغييرات في ممارساتنا أو في المتطلبات القانونية. سيتم إخطارك بأي تعديلات جوهرية عبر:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>نشر السياسة المُحدَّثة على موقعنا الإلكتروني مع ذكر تاريخ آخر تحديث.</li>
              <li>إشعار مباشر عبر البريد الإلكتروني عند الاقتضاء.</li>
            </ul>
            <p className="mt-2">
              استمرارك في استخدام منصاتنا بعد نشر التعديلات يُعدّ قبولاً للسياسة المُحدَّثة.
            </p>
          </>
        ),
      },
      {
        number: "12",
        title: "التواصل معنا",
        content: (
          <>
            <p>
              لأي استفسار أو ملاحظة أو طلب يتعلق بسياسة الخصوصية أو بياناتك الشخصية، يُرجى التواصل مع مسؤول حماية البيانات لدينا:
            </p>
            <ul className="list-none space-y-1 mt-2">
              <li>
                <strong>البريد الإلكتروني:</strong>{" "}
                <a href="mailto:admin@nah.sa" className="text-[var(--gold)] hover:underline">
                  admin@nah.sa
                </a>
              </li>
              <li>
                <strong>الموقع الإلكتروني:</strong>{" "}
                <a href="https://nah.sa" className="text-[var(--gold)] hover:underline">
                  nah.sa
                </a>
              </li>
              <li>
                <strong>المملكة العربية السعودية — الرياض</strong>
              </li>
            </ul>
          </>
        ),
      },
    ];

    return (
      <PolicyPage
        locale="ar"
        sections={sections}
        hero={{
          title: "سياسة الخصوصية",
          subtitle: "نلتزم بحماية بياناتك الشخصية وفقاً لأحكام نظام حماية البيانات الشخصية (PDPL) في المملكة العربية السعودية",
          updated: "آخر تحديث: مايو 2025",
        }}
        contactNote={
          <p className="text-[var(--gray-600)] text-sm leading-relaxed">
            للاستفسار عن سياسة الخصوصية أو ممارسة حقوقك، تواصل معنا على{" "}
            <a href="mailto:admin@nah.sa" className="text-[var(--gold)] font-medium hover:underline">
              admin@nah.sa
            </a>
          </p>
        }
      />
    );
  }

  // English version
  const sections: Section[] = [
    {
      number: "01",
      title: "Introduction",
      content: (
        <>
          <p>
            This Privacy Policy is issued by Nawat Alalmas Holding Company (hereinafter referred to as "the Company," "we," or "Nawat Alalmas"), a joint-stock company registered in the Kingdom of Saudi Arabia, operating in accordance with the Companies Law and its implementing regulations.
          </p>
          <p>
            We are committed to protecting privacy and safeguarding the personal data of our users, in full compliance with the Personal Data Protection Law issued under Royal Decree No. M/19 dated 9/2/1443H, and its implementing regulations issued by the Saudi Data and Artificial Intelligence Authority (SDAIA).
          </p>
          <p>
            This Policy explains how we collect, use, store, and protect your personal data, and outlines the rights available to you in this regard.
          </p>
        </>
      ),
    },
    {
      number: "02",
      title: "Data We Collect",
      content: (
        <>
          <p>We may collect the following types of data:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>
              <strong>Account Data:</strong> Full name, email address, phone number, job title, and organization name.
            </li>
            <li>
              <strong>Usage Data:</strong> Pages you visit, browsing duration, and links you click.
            </li>
            <li>
              <strong>Technical Data:</strong> IP address, browser type, operating system, and cookie data.
            </li>
            <li>
              <strong>Communication Data:</strong> Correspondence and inquiries you submit via contact forms or email.
            </li>
            <li>
              <strong>Non-Personal Data:</strong> Aggregated or anonymized data used for statistical and analytical purposes.
            </li>
          </ul>
        </>
      ),
    },
    {
      number: "03",
      title: "How We Use Your Data",
      content: (
        <>
          <p>We use the data we collect for the following purposes:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Providing services and operating and improving our digital platforms.</li>
            <li>Responding to your inquiries and requests and providing necessary support.</li>
            <li>Sending relevant information and updates with your consent.</li>
            <li>Complying with legal and regulatory requirements applicable in the Kingdom of Saudi Arabia.</li>
            <li>Analyzing usage patterns to develop our services.</li>
          </ul>
          <p className="mt-2">
            We do not make any automated decisions that affect your interests without appropriate human intervention.
          </p>
        </>
      ),
    },
    {
      number: "04",
      title: "Cookies",
      content: (
        <>
          <p>
            Our platforms use cookies to enhance user experience and analyze usage patterns. Types of cookies used include:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Necessary Cookies:</strong> Required for the website to function.</li>
            <li><strong>Performance Cookies:</strong> To analyze how the website is used.</li>
            <li><strong>Preference Cookies:</strong> To remember your settings and preferences.</li>
          </ul>
          <p className="mt-2">
            You can control cookie settings through your browser preferences. Please note that disabling certain cookies may affect website functionality.
          </p>
        </>
      ),
    },
    {
      number: "05",
      title: "Sharing Data with Third Parties",
      content: (
        <>
          <p>
            We do not sell or rent your personal data to any third party. We may share your data exclusively in the following cases:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Service and technology providers acting on our behalf under strict confidentiality agreements.</li>
            <li>Government and regulatory authorities when legally required.</li>
            <li>Nawat Alalmas subsidiary companies for the provision of integrated services.</li>
          </ul>
          <p className="mt-2">
            In all cases, we ensure that these parties adhere to our adopted data protection standards.
          </p>
        </>
      ),
    },
    {
      number: "06",
      title: "International Data Transfers",
      content: (
        <>
          <p>
            Some data may be transferred outside the Kingdom of Saudi Arabia when technically or operationally necessary, subject to the following controls:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Verifying that the receiving country provides an adequate level of data protection.</li>
            <li>Entering into data processing agreements with international service providers.</li>
            <li>Notifying the Saudi Data and Artificial Intelligence Authority (SDAIA) as required by applicable regulations.</li>
          </ul>
        </>
      ),
    },
    {
      number: "07",
      title: "Security and Data Protection",
      content: (
        <>
          <p>
            We take all appropriate technical and organizational measures to protect your personal data, including:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Encrypting data in transit using SSL/TLS protocol.</li>
            <li>Encrypting stored data using approved encryption standards.</li>
            <li>Firewalls and intrusion detection systems.</li>
            <li>Strict access controls limited to authorized personnel.</li>
            <li>Regular security audits and reviews.</li>
          </ul>
          <p className="mt-2">
            In the event of a security breach that may harm your privacy, we will notify you and the relevant authorities in accordance with regulatory requirements.
          </p>
        </>
      ),
    },
    {
      number: "08",
      title: "Data Retention",
      content: (
        <>
          <p>
            We retain your personal data for the period necessary to fulfill the purposes outlined in this Policy, with a maximum of three (3) years from the date of account closure or termination of your relationship with the Company, unless the law requires a longer retention period.
          </p>
          <p className="mt-2">
            Upon expiry of the retention period, data is securely deleted, destroyed, or anonymized.
          </p>
        </>
      ),
    },
    {
      number: "09",
      title: "Your Rights",
      content: (
        <>
          <p>
            Under the Personal Data Protection Law, you have the following rights:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Access:</strong> The right to know what data we hold about you.</li>
            <li><strong>Rectification:</strong> The right to correct any inaccurate or incomplete data.</li>
            <li><strong>Erasure:</strong> The right to request deletion of your data in cases prescribed by law.</li>
            <li><strong>Withdrawal of Consent:</strong> The right to withdraw your consent at any time without affecting the lawfulness of prior processing.</li>
            <li><strong>Objection:</strong> The right to object to the processing of your data for certain purposes.</li>
            <li><strong>Restriction:</strong> The right to request restriction of processing of your data in certain cases.</li>
          </ul>
          <p className="mt-2">
            To exercise any of these rights, please contact us at: <strong>admin@nah.sa</strong>. We will respond to your request within no more than thirty (30) days from the date of receipt.
          </p>
        </>
      ),
    },
    {
      number: "10",
      title: "Minors Policy",
      content: (
        <p>
          Our platforms are not directed at individuals under the age of eighteen (18), and we do not knowingly collect personal data from minors. If we discover that we have collected data from a minor without prior consent from their guardian, we will immediately proceed to delete that data.
        </p>
      ),
    },
    {
      number: "11",
      title: "Policy Amendments",
      content: (
        <>
          <p>
            We reserve the right to update this Policy periodically to reflect any changes in our practices or legal requirements. You will be notified of any material amendments via:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Publishing the updated Policy on our website with the date of the latest update.</li>
            <li>Direct notification via email when appropriate.</li>
          </ul>
          <p className="mt-2">
            Your continued use of our platforms after amendments are published constitutes acceptance of the updated Policy.
          </p>
        </>
      ),
    },
    {
      number: "12",
      title: "Contact Us",
      content: (
        <>
          <p>
            For any inquiry, feedback, or request related to this Privacy Policy or your personal data, please contact our Data Protection Officer:
          </p>
          <ul className="list-none space-y-1 mt-2">
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:admin@nah.sa" className="text-[var(--gold)] hover:underline">
                admin@nah.sa
              </a>
            </li>
            <li>
              <strong>Website:</strong>{" "}
              <a href="https://nah.sa" className="text-[var(--gold)] hover:underline">
                nah.sa
              </a>
            </li>
            <li>
              <strong>Kingdom of Saudi Arabia — Riyadh</strong>
            </li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <PolicyPage
      locale="en"
      sections={sections}
      hero={{
        title: "Privacy Policy",
        subtitle: "We are committed to protecting your personal data in accordance with the Personal Data Protection Law (PDPL) of the Kingdom of Saudi Arabia",
        updated: "Last Updated: May 2025",
      }}
      contactNote={
        <p className="text-[var(--gray-600)] text-sm leading-relaxed">
          For inquiries about this Privacy Policy or to exercise your rights, contact us at{" "}
          <a href="mailto:admin@nah.sa" className="text-[var(--gold)] font-medium hover:underline">
            admin@nah.sa
          </a>
        </p>
      }
    />
  );
}
