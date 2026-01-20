import type { Metadata } from "next";
import Link from "next/link";
import { HeroNav } from "../components/HeroNav";
import { buildPageMetadata } from "../lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Partial Hospitalization Program (PHP) | Costa Mesa",
  description:
    "Our PHP offers high-level daytime structure while living at home. Designed for adults who need consistency, focus, and accountability.",
  path: "/php",
});

export default function PhpPage ()
{
  return (
    <main className="min-h-screen bg-linear-to-b from-[#0f2f38] via-[#1b4d5c] to-[#0f2f38] overflow-hidden">
      <HeroNav />
      <section className="relative px-6 pb-16 pt-32 text-center">
        <h1 className="font-display text-4xl font-light tracking-wide text-white md:text-5xl">
          Partial Hospitalization Program (PHP)
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
          High-level daytime structure while living at home—built for adults who need consistency, focus,
          and accountability.
        </p>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h2 className="font-display text-2xl font-light tracking-wide text-white md:text-3xl">
              What PHP is
            </h2>
            <p className="mt-4 text-white/75 leading-7">
              PHP is a high-structure outpatient level of care with a consistent daytime schedule. You
              participate in focused programming while returning home each evening.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h2 className="font-display text-2xl font-light tracking-wide text-white md:text-3xl">
              Who PHP is for
            </h2>
            <p className="mt-4 text-white/75 leading-7">
              Adults who need more daytime structure, higher accountability, or a strong step-down plan
              from inpatient/residential settings.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h2 className="font-display text-2xl font-light tracking-wide text-white md:text-3xl">
              Next step
            </h2>
            <p className="mt-4 text-white/75 leading-7">
              Start with admissions and a confidential intake process. Fast verification. Clear steps. No
              pressure.
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-4 md:flex-row md:items-center">
              <Link
                href="/admissions#intake"
                className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-[#f7c99b] px-8 py-3 text-base font-semibold text-[#1f2a2e] transition hover:-translate-y-0.5 hover:bg-[#f2b87e] md:w-auto"
              >
                Start Intake
              </Link>
              <Link
                href="/programs"
                className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full border border-white/30 px-8 py-3 text-base font-semibold text-white transition hover:border-white/60 hover:bg-white/10 md:w-auto"
              >
                View Programs
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full border border-white/30 px-8 py-3 text-base font-semibold text-white transition hover:border-white/60 hover:bg-white/10 md:w-auto"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

