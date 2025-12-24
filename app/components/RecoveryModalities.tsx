import Link from "next/link"
const recoveryModalities = [
  {
    name: "Wellbriety",
    tagline: "A culturally centered pathway rooted in connection, culture, and community.",
    bullets: [
      "Supports sobriety through culturally informed teachings and community",
      "Often blends traditional healing perspectives with 12-step style peer support",
      "Helpful for people seeking recovery that honors identity and belonging",
    ],
    href: "https://wellbriety.com/",
    linkLabel: "Explore Wellbriety",
  },
  {
    name: "Alcoholics Anonymous (AA)",
    tagline: "A worldwide peer fellowship offering 12-step support for alcohol recovery.",
    bullets: [
      "Free, peer-led meetings in most communities (and online)",
      "Sponsors, steps, and shared experience for long-term support",
      "Many meeting formats (speaker, discussion, beginner, men’s/women’s, etc.)",
    ],
    href: "https://www.aa.org/",
    linkLabel: "Find AA resources",
  },
  {
    name: "SMART Recovery",
    tagline: "A science-informed, skills-based approach focused on self-empowerment.",
    bullets: [
      "Tools for urges, emotions, and behavior change (CBT-inspired)",
      "Meeting-based support without a spiritual requirement",
      "Works well alongside therapy, psychiatry, and structured aftercare",
    ],
    href: "https://www.smartrecovery.org/",
    linkLabel: "SMART Recovery",
  },
] as const;
export function RecoveryModalities ()
{
  return (<section
    id="recovery-modalities"
    className="relative z-10 overflow-hidden rounded-3xl bg-white/90 p-8 shadow-[0_20px_60px_rgba(14,49,63,0.12)]"
  >
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#b87745]/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#1c5a6b]/10 blur-3xl" />
    </div>

    <div className="relative flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#1b3b44]">
          Recovery Modalities
        </p>
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="text-3xl font-semibold text-[#0f2f38] sm:text-4xl">
            Multiple pathways to recovery—choose what fits
          </h2>
          <p className="max-w-xl text-base leading-7 text-[#2e454c]">
            There’s no single “right” way to build a life in recovery. We support evidence-based treatment
            alongside community-based programs like Wellbriety, AA, and SMART Recovery.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {recoveryModalities.map((modality) => (
          <article
            key={modality.name}
            className="group flex h-full flex-col gap-5 rounded-2xl border border-[#e3e9eb] bg-[#fefcf8] p-6 transition hover:-translate-y-0.5 hover:border-[#b87745]/40 hover:shadow-lg"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b87745]">
                  {modality.name}
                </p>
                <p className="text-base leading-7 text-[#445c63]">{modality.tagline}</p>
              </div>
              <Link
                href={modality.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-center justify-center rounded-full bg-[#1c5a6b] px-4 py-2 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(28,90,107,0.18)] transition hover:-translate-y-0.5 hover:bg-[#174652]"
              >
                {modality.linkLabel}
              </Link>
            </div>

            <ul className="grid gap-3 text-sm text-[#2f4b53]">
              {modality.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#1c5a6b]/10 text-[#1c5a6b]">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="leading-6">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm leading-6 text-[#445c63]">
              {`If you’re not sure where to start, we’ll help you identify ${modality.name} meetings and supports that match your
                  goals and discharge plan.`}
            </p>
          </article>
        ))}
      </div>

      <div className="flex flex-col gap-4 rounded-3xl border border-dashed border-[#1c5a6b33] bg-[#f2fbff] p-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#1b3b44]">
            Not affiliated. Always your choice.
          </p>
          <p className="text-base leading-7 text-[#2e454c]">
            These programs are independent community resources. We can coordinate referrals and aftercare
            supports—but you choose what aligns with your values and needs.
          </p>
        </div>
        <Link
          href="#intake"
          className="inline-flex items-center text-center justify-center rounded-full bg-[#b87745] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(184,119,69,0.22)] transition hover:-translate-y-0.5 hover:bg-[#a8693d]"
        >
          Talk with us about aftercare
        </Link>
      </div>
    </div>
  </section>)
}