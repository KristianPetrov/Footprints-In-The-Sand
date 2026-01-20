import type { Metadata } from "next";
import { HeroNav } from "../components/HeroNav";
import { IntakeForm } from "../components/IntakeForm";
import { buildPageMetadata } from "../lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Admissions & Intake | PHP & IOP Outpatient Programs",
  description:
    "Start PHP or IOP outpatient services with a clear, confidential intake process. Simple steps. Fast verification. No pressure.",
  path: "/admissions",
});

export default function AdmissionsPage ()
{
  return (
    <main className="min-h-screen bg-linear-to-b from-[#0f2f38] via-[#1b4d5c] to-[#0f2f38] overflow-hidden">
      <HeroNav />

      {/* Hero */}
      <section className="relative px-6 pb-16 pt-32 text-center">
        <h1 className="font-display text-4xl font-light tracking-wide text-white md:text-5xl">
          Admissions &amp; Intake
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
          Start PHP or IOP outpatient services with a clear, confidential intake process. Simple steps. Fast
          verification. No pressure.
        </p>
      </section>

      {/* Admissions Process */}
      <section id="admissions" className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-light tracking-wide text-white md:text-4xl">
            The process
          </h2>
          <p className="mt-4 text-white/70">
            A straightforward sequence designed to get you answers quickly.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#f7c99b]/20 text-xl font-bold text-[#f7c99b]">
                1
              </div>
              <h3 className="text-lg font-semibold text-white">Initial contact</h3>
              <p className="mt-2 text-sm text-white/60">
                Call or complete the form. You’ll get a response from our admissions team with next steps.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#f7c99b]/20 text-xl font-bold text-[#f7c99b]">
                2
              </div>
              <h3 className="text-lg font-semibold text-white">Confidential assessment</h3>
              <p className="mt-2 text-sm text-white/60">
                We’ll review what’s going on, what you’re looking for, and what level of care makes sense.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#f7c99b]/20 text-xl font-bold text-[#f7c99b]">
                3
              </div>
              <h3 className="text-lg font-semibold text-white">Verification &amp; start date</h3>
              <p className="mt-2 text-sm text-white/60">
                We verify benefits (when applicable) and confirm scheduling so you can start with clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section id="what-to-expect" className="bg-white/5 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-light tracking-wide text-white md:text-4xl">
            What to expect
          </h2>
          <p className="mt-4 text-white/70">
            Your first week is about structure, clarity, and building momentum.
          </p>
          <div className="mt-10 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold text-[#f7c99b]">Day 1: orientation</h3>
              <p className="mt-2 text-white/70">
                Intake paperwork, program overview, and a clear schedule so you know what’s next.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold text-[#f7c99b]">Days 2–3: stabilize</h3>
              <p className="mt-2 text-white/70">
                Core groups and individual support start building repeatable skills and accountability.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold text-[#f7c99b]">Days 4–7: build momentum</h3>
              <p className="mt-2 text-white/70">
                Your plan becomes practical: coping skills, relapse prevention, and support structure that
                works outside program hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Online Intake */}
      <section id="intake" className="px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center font-display text-3xl font-light tracking-wide text-white md:text-4xl">
            Online intake
          </h2>
          <p className="mt-4 text-center text-white/70">
            Complete the confidential intake form and we’ll follow up with next steps.
          </p>
          <div className="mt-10">
            <IntakeForm />
          </div>
        </div>
      </section>
    </main>
  );
}

