import Link from "next/link";
export default function GetStartedBanner ()
{
  return (<section className="relative z-10 overflow-hidden rounded-3xl bg-gradient-to-r from-[#b87745] via-[#d08a4c] to-[#c97a3a] p-8 shadow-[0_25px_60px_rgba(184,119,69,0.35)]">
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-[#0f2f38]/20 blur-3xl" />
    </div>
    <div className="relative flex flex-col items-center gap-6 text-center">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
          Take The First Step
        </p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Get Started Today
        </h2>
        <p className="mx-auto max-w-2xl text-base leading-7 text-white/90">
          Recovery begins with a single step. Reach out now and let us walk beside you on your journey to lasting change.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="mailto:info@footprintsrecovery.net"
          className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-[#b87745] shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
        >
          <svg
            className="h-5 w-5 transition group-hover:scale-110"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          Email Us
        </Link>
        <Link
          href="tel:9493501078"
          className="group inline-flex items-center gap-2 rounded-full bg-[#0f2f38] px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#1c5a6b] hover:shadow-xl"
        >
          <svg
            className="h-5 w-5 transition group-hover:scale-110"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          Call Now
        </Link>
        <Link
          href="#intake"
          className="group inline-flex items-center gap-2 rounded-full border-2 border-white bg-transparent px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-white hover:text-[#b87745] hover:shadow-xl"
        >
          <svg
            className="h-5 w-5 transition group-hover:scale-110"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Fill Intake Form
        </Link>
      </div>
    </div>
  </section>)
}