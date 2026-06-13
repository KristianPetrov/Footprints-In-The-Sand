import type { Metadata } from "next";
import Link from "next/link";
import { HeroNav } from "../components/HeroNav";
import { PHONE_DISPLAY, PHONE_TEL } from "../lib/contact";
import { buildPageMetadata, LEGAL_NAME } from "../lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy | Footprints In The Sand 2 Recovery Center",
  description:
    "Learn how Footprints In The Sand 2 Recovery Center protects website, intake, and treatment-related privacy for people seeking recovery care.",
  path: "/privacy-policy",
});

const policySections = [
  {
    title: "Information we may collect",
    body: [
      "Contact details you choose to provide, including your name, phone number, email address, preferred contact method, and message.",
      "Intake or admissions information you submit, which may include recovery goals, insurance details, substance use history, mental health concerns, scheduling preferences, and emergency contact information.",
      "Website usage information such as pages visited, browser type, device information, referring pages, and approximate location data collected through standard analytics or security tools.",
      "Communication records from calls, emails, text messages, forms, or other interactions with our admissions and care coordination team.",
    ],
  },
  {
    title: "How we use information",
    body: [
      "To respond to questions, schedule consultations, verify insurance benefits, coordinate admissions, and help determine whether our PHP or IOP services may be appropriate.",
      "To provide, document, improve, and coordinate care when a person becomes a client of the center.",
      "To maintain website security, understand how visitors use the site, improve accessibility, and make our content more useful.",
      "To comply with legal, regulatory, licensing, accreditation, insurance, quality assurance, and patient safety responsibilities.",
    ],
  },
  {
    title: "Recovery-care confidentiality",
    body: [
      "We understand that seeking addiction treatment or mental health support is sensitive. We limit access to personal information to team members and service providers who need it for legitimate care, operational, legal, or safety reasons.",
      "When applicable, protected health information is handled under HIPAA, and substance use disorder treatment records may receive additional protection under 42 CFR Part 2 and related state privacy laws.",
      "We do not sell personal health information. We do not use recovery-related information for public marketing testimonials without written authorization.",
      "If there is a difference between this website policy and a formal Notice of Privacy Practices provided during treatment, the formal Notice of Privacy Practices controls for protected health information.",
    ],
  },
  {
    title: "When information may be shared",
    body: [
      "With treatment, admissions, billing, insurance, and care coordination partners when needed to support services you request or receive.",
      "With contracted vendors who help us operate the website, communications, records, scheduling, billing, analytics, security, or other business functions, subject to appropriate confidentiality expectations.",
      "With your consent or written authorization when required, including for certain releases of treatment records.",
      "When required or permitted by law, including medical emergencies, safety concerns, abuse or neglect reporting, court orders, audits, licensing reviews, or other legally recognized obligations.",
    ],
  },
  {
    title: "Your choices and rights",
    body: [
      "You may ask us to update contact information, change communication preferences, or stop non-essential outreach.",
      "Depending on the type of information and applicable law, you may have rights to access, amend, restrict, or receive an accounting of certain disclosures of health information.",
      "You may choose not to provide information through the website, though that may limit our ability to respond, verify benefits, or coordinate services.",
      "For privacy requests, contact us directly so we can verify the request and route it to the appropriate team member.",
    ],
  },
  {
    title: "Website analytics, cookies, and security",
    body: [
      "Our website may use cookies, analytics, and similar technologies to understand traffic patterns, measure performance, prevent abuse, and improve user experience.",
      "You can adjust browser settings to limit cookies, but some site features may not work as expected.",
      "We use reasonable administrative, technical, and physical safeguards designed to protect information. No website, email, text message, or online form can be guaranteed completely secure.",
    ],
  },
  {
    title: "Minors",
    body: [
      "Our website and outpatient services are intended for adults unless we clearly state otherwise. We do not knowingly collect personal information from children through this website.",
      "If you believe a child provided personal information through the site, contact us so we can review and delete it when appropriate.",
    ],
  },
  {
    title: "Policy updates",
    body: [
      "We may update this Privacy Policy as our services, technology, or legal obligations change. The latest version will be posted on this page with the updated date.",
    ],
  },
];

export default function PrivacyPolicyPage ()
{
  return (
    <main className="beach-sky grain-overlay min-h-screen w-full overflow-hidden text-[#1f2a2e]">
      <HeroNav />
      <div className="relative mx-auto flex max-w-5xl flex-col gap-10 px-6 pb-16 pt-24 sm:px-8 lg:px-12 lg:pb-24 lg:pt-32">
        <header className="hero-header glass-panel relative z-10 overflow-hidden p-8 sm:p-10 lg:p-14">
          <div className="flex flex-col gap-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#b87745]">
              Privacy Policy
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-[#0f2f38] sm:text-5xl">
              Privacy, dignity, and confidentiality in recovery care
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-8 text-[#33545d]">
              This policy explains how {LEGAL_NAME} collects, uses, protects, and shares
              information from people who visit our website, contact our team, or begin
              the admissions process.
            </p>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#5f777e]">
              Last updated June 12, 2026
            </p>
          </div>
        </header>

        <section className="relative z-10 rounded-3xl border border-white/60 bg-white/90 p-8 shadow-[0_20px_60px_rgba(14,49,63,0.12)] sm:p-10">
          <div className="max-w-none">
            <p className="text-lg leading-8 text-[#2e454c]">
              This Privacy Policy applies to information collected through this website and
              related communications. It is written to support transparency for people
              exploring addiction treatment, mental health support, PHP, IOP, or other
              recovery services.
            </p>
            <p className="mt-4 rounded-2xl border border-[#1b5a6d1f] bg-[#f5fbfc] p-5 text-sm leading-7 text-[#34545c]">
              If you are experiencing a medical or mental health emergency, call 911 or go
              to the nearest emergency department. This website is not monitored as an
              emergency service.
            </p>
          </div>
        </section>

        <section className="relative z-10 grid gap-6" aria-label="Privacy policy sections">
          {policySections.map((section) => (
            <article
              key={section.title}
              className="rounded-3xl border border-white/60 bg-white/90 p-8 shadow-[0_20px_60px_rgba(14,49,63,0.12)]"
            >
              <h2 className="text-2xl font-semibold text-[#0f2f38]">{section.title}</h2>
              <ul className="mt-5 list-disc space-y-3 pl-5 leading-7 text-[#2e454c]">
                {section.body.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="relative z-10 rounded-3xl border border-white/60 bg-white/70 p-8 text-center shadow-inner">
          <h2 className="text-2xl font-semibold text-[#0f2f38]">Privacy questions</h2>
          <p className="mx-auto mt-4 max-w-3xl leading-7 text-[#2e454c]">
            To ask a privacy question, request a communication change, or reach our team
            about information you submitted, call{" "}
            <Link href={PHONE_TEL} className="font-semibold text-[#1b5a6d]">
              {PHONE_DISPLAY}
            </Link>{" "}
            or email{" "}
            <Link
              href="mailto:info@footprintsrecovery.net"
              className="font-semibold text-[#1b5a6d]"
            >
              info@footprintsrecovery.net
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
