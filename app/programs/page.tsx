import type { Metadata } from "next";
import Link from "next/link";
import { HeroNav } from "../components/HeroNav";
import { buildPageMetadata } from "../lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "PHP & IOP Programs | Structured Outpatient Support",
  description:
    "Explore PHP and IOP outpatient programs designed to provide structure, focus, and accountability while supporting real life.",
  path: "/programs",
});

export default function ProgramsPage ()
{
  return (
    <main className="min-h-screen bg-linear-to-b from-[#0f2f38] via-[#1b4d5c] to-[#0f2f38] overflow-hidden">
      <HeroNav />
      <section className="relative px-6 pb-16 pt-32 text-center">
        <h1 className="font-display text-4xl font-light tracking-wide text-white md:text-5xl">
          Programs
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
          PHP and IOP outpatient programs designed to provide structure, focus, and accountability while
          supporting real life.
        </p>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f7c99b]">PHP</p>
            <h2 className="mt-4 font-display text-3xl font-light tracking-wide text-white md:text-4xl">
              Partial Hospitalization Program
            </h2>
            <p className="mt-4 text-white/70">
              High-level daytime structure while living at home. Built for adults who need consistency,
              focus, and accountability.
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-4 md:flex-row md:items-center">
              <Link
                href="/php"
                className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-[#f7c99b] px-8 py-3 text-base font-semibold text-[#1f2a2e] transition hover:-translate-y-0.5 hover:bg-[#f2b87e] md:w-auto"
              >
                Learn about PHP
              </Link>
              <Link
                href="/admissions"
                className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full border border-white/30 px-8 py-3 text-base font-semibold text-white transition hover:border-white/60 hover:bg-white/10 md:w-auto"
              >
                Admissions &amp; Intake
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/5 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f7c99b]">IOP</p>
            <h2 className="mt-4 font-display text-3xl font-light tracking-wide text-white md:text-4xl">
              Intensive Outpatient Program
            </h2>
            <p className="mt-4 text-white/70">
              Step-down outpatient support with flexibility—designed to maintain momentum, focus, and
              long-term stability.
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-4 md:flex-row md:items-center">
              <Link
                href="/iop"
                className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-[#f7c99b] px-8 py-3 text-base font-semibold text-[#1f2a2e] transition hover:-translate-y-0.5 hover:bg-[#f2b87e] md:w-auto"
              >
                Learn about IOP
              </Link>
              <Link
                href="/admissions"
                className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full border border-white/30 px-8 py-3 text-base font-semibold text-white transition hover:border-white/60 hover:bg-white/10 md:w-auto"
              >
                Admissions &amp; Intake
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-light tracking-wide text-white md:text-4xl">
            Ready to start?
          </h2>
          <p className="mt-4 text-white/70">
            Start with a clear, confidential intake process. Simple steps. Fast verification. No pressure.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-4 md:flex-row md:items-center">
            <Link
              href="/admissions#intake"
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-[#f7c99b] px-8 py-3 text-base font-semibold text-[#1f2a2e] transition hover:-translate-y-0.5 hover:bg-[#f2b87e] md:w-auto"
            >
              Start Intake
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full border border-white/30 px-8 py-3 text-base font-semibold text-white transition hover:border-white/60 hover:bg-white/10 md:w-auto"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

