export default function Services ()
{
  return (<section
    id="services"
    className="relative z-10 overflow-hidden rounded-3xl bg-white/90 p-8 shadow-[0_20px_60px_rgba(14,49,63,0.12)]"
  >
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#b87745]/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#1c5a6b]/10 blur-3xl" />
    </div>

    <div className="relative flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#1b3b44]">
          Support Services
        </p>
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="text-3xl font-semibold text-[#0f2f38] sm:text-4xl">
            Case Management &amp; Therapy Services
          </h2>
          <p className="max-w-xl text-base leading-7 text-[#2e454c]">
            From day one, you’ll have support that’s practical, personal, and focused on progress—both during your stay and
            for life after treatment.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <article className="group flex h-full flex-col gap-5 rounded-2xl border border-[#e3e9eb] bg-[#fefcf8] p-6 transition hover:-translate-y-0.5 hover:border-[#b87745]/40 hover:shadow-lg">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-16 items-center justify-center rounded-2xl bg-[#0f2f38] text-white shadow-sm">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M12 2.75c-3.31 0-6 2.69-6 6v3.5c0 .7-.28 1.37-.78 1.87L4 15.34V17h16v-1.66l-1.22-1.22c-.5-.5-.78-1.17-.78-1.87v-3.5c0-3.31-2.69-6-6-6Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.5 19c.7 1.3 2 2.25 3.5 2.25S15.8 20.3 16.5 19"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b87745]">
                Case Management
              </p>
              <p className="text-base leading-7 text-[#445c63]">
                Your case manager helps reduce stress by coordinating the real-world details so you can focus on healing.
              </p>
            </div>
          </div>
          <ul className="grid gap-3 text-sm text-[#2f4b53]">
            {[
              "Insurance coordination and ongoing communication (as needed)",
              "Aftercare planning (outpatient, sober living, community supports)",
              "Resource connections for housing, employment, legal, and family needs",
              "Transportation and scheduling support when applicable",
              "Discharge planning with clear next steps and referrals",
            ].map((item) => (
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
        </article>

        <article className="group flex h-full flex-col gap-5 rounded-2xl border border-[#e3e9eb] bg-[#fefcf8] p-6 transition hover:-translate-y-0.5 hover:border-[#b87745]/40 hover:shadow-lg">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-16 items-center justify-center rounded-2xl bg-[#0f2f38] text-white shadow-sm">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b87745]">
                Therapy
              </p>
              <p className="text-base leading-7 text-[#445c63]">
                Therapy is where you build insight, skills, and new patterns—supported by compassionate clinicians and peers.
              </p>
            </div>
          </div>
          <ul className="grid gap-3 text-sm text-[#2f4b53]">
            {[
              "Individual therapy focused on goals, triggers, and coping strategies",
              "Process groups to practice honesty, connection, and accountability",
              "Trauma-informed support when appropriate to your history",
              "Psychoeducation on relapse prevention, boundaries, and communication",
              "Collaborative treatment planning and progress check-ins",
            ].map((item) => (
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
        </article>
      </div>
    </div>
  </section>)
}