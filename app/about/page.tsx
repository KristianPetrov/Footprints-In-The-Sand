import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeroNav } from "../components/HeroNav";
import { buildPageMetadata } from "../lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About Footprints | Elevated PHP & IOP Outpatient Care",
  description:
    "Footprints provides PHP and IOP outpatient care for adults seeking clarity, structure, and a clean, focused way forward.",
  path: "/about",
});

export default function AboutPage ()
{
  return (
    <main className="beach-sky grain-overlay min-h-screen w-full overflow-hidden text-[#1f2a2e]">
      <HeroNav />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-14 px-6 pb-16 pt-24 sm:px-8 lg:px-12 lg:pb-24 lg:pt-32">
        <Image
          src="/footprints.svg"
          alt=""
          width={200}
          height={320}
          className="pointer-events-none absolute -right-8 bottom-10 opacity-70"
          aria-hidden="true"
        />

        <header className="hero-header glass-panel relative z-10 overflow-hidden p-8 sm:p-10 lg:p-14">
          <div className="flex flex-col gap-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#b87745]">
              About Footprints
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-[#0f2f38] sm:text-5xl lg:text-6xl">
              PHP &amp; IOP outpatient care, built for real life
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-8 text-[#33545d] sm:text-xl">
              Footprints provides PHP and IOP outpatient care for adults seeking clarity, structure, and a
              clean, focused way forward.
            </p>
          </div>
        </header>

        <section className="relative z-10 grid gap-8 lg:grid-cols-3" aria-label="What we do">
          <div className="rounded-3xl border border-white/60 bg-white/90 p-8 shadow-[0_20px_60px_rgba(14,49,63,0.12)]">
            <h2 className="text-xl font-semibold text-[#0f2f38]">Clarity</h2>
            <p className="mt-3 leading-7 text-[#2e454c]">
              A clear plan, clear expectations, and a clinical structure designed to reduce noise and keep
              momentum.
            </p>
          </div>
          <div className="rounded-3xl border border-white/60 bg-white/90 p-8 shadow-[0_20px_60px_rgba(14,49,63,0.12)]">
            <h2 className="text-xl font-semibold text-[#0f2f38]">Structure</h2>
            <p className="mt-3 leading-7 text-[#2e454c]">
              PHP and IOP schedules that support accountability while staying connected to work, family, and
              responsibilities.
            </p>
          </div>
          <div className="rounded-3xl border border-white/60 bg-white/90 p-8 shadow-[0_20px_60px_rgba(14,49,63,0.12)]">
            <h2 className="text-xl font-semibold text-[#0f2f38]">Forward motion</h2>
            <p className="mt-3 leading-7 text-[#2e454c]">
              Evidence-based skills, repeatable routines, and practical next steps you can use outside the
              building.
            </p>
          </div>
        </section>

        <section className="relative z-10 flex flex-col items-center gap-4 rounded-3xl border border-white/60 bg-white/70 p-8 text-center shadow-inner">
          <p className="text-lg leading-8 text-[#2e454c]">
            Want to understand the right level of care?
          </p>
          <div className="flex flex-col items-stretch justify-center gap-4 md:flex-row md:items-center">
            <Link
              href="/programs"
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-[#1c5a6b] px-8 py-3 text-base font-semibold text-white shadow-[0_18px_35px_rgba(28,90,107,0.2)] transition hover:-translate-y-0.5 hover:bg-[#174652] md:w-auto"
            >
              View Programs
            </Link>
            <Link
              href="/admissions"
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full border border-[#1c5a6b33] px-8 py-3 text-base font-semibold text-[#1c5a6b] transition hover:border-[#1c5a6b] hover:bg-white/60 md:w-auto"
            >
              Admissions &amp; Intake
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full border border-[#1c5a6b33] px-8 py-3 text-base font-semibold text-[#1c5a6b] transition hover:border-[#1c5a6b] hover:bg-white/60 md:w-auto"
            >
              Contact
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

