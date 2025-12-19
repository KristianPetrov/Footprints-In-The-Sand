import type { Metadata } from "next";
import Link from "next/link";
import { HeroNav } from "../components/HeroNav";

export const metadata: Metadata = {
  title: "Addiction Treatment",
  description:
    "Explore our addiction treatment programs, including Intensive Outpatient (IOP) and Partial Hospitalization (PHP).",
  openGraph: {
    title: "Addiction Treatment | Footprints In The Sand 2 Recovery",
    description:
      "Learn about our IOP and PHP addiction treatment programs and how each level of care supports lasting recovery.",
  },
};

export default function AddictionTreatmentPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0f2f38] via-[#1b4d5c] to-[#0f2f38] overflow-hidden">
      <HeroNav />
      <section className="relative px-6 pb-16 pt-32 text-center">
        <h1 className="font-display text-4xl font-light tracking-wide text-white md:text-5xl">
          Addiction Treatment
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
          We offer structured, evidence-based care for substance use disorders with two primary levels of
          outpatient treatment. Each program blends therapy, recovery coaching, and clinical oversight so you
          can heal while staying connected to your life.
        </p>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f7c99b]">IOP</p>
            <h2 className="mt-4 font-display text-3xl font-light tracking-wide text-white md:text-4xl">
              Intensive Outpatient Program
            </h2>
            <p className="mt-4 text-white/70">
              Our IOP supports clients who are ready to practice recovery in real-world settings while receiving
              consistent clinical care. You will attend structured groups and therapy sessions several days each
              week, build relapse-prevention skills, and stay accountable with a dedicated care team.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white">Who IOP is for</h3>
                <p className="mt-2 text-sm text-white/70">
                  Clients transitioning from higher levels of care or those who need intensive support without a
                  full-day program.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white">What you can expect</h3>
                <p className="mt-2 text-sm text-white/70">
                  Process groups, individual sessions, case management, and recovery planning tailored to your
                  goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/5 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f7c99b]">PHP</p>
            <h2 className="mt-4 font-display text-3xl font-light tracking-wide text-white md:text-4xl">
              Partial Hospitalization Program
            </h2>
            <p className="mt-4 text-white/70">
              PHP provides a higher level of structure for those who need daily therapeutic support and medical
              oversight while still returning home each evening. The schedule is intensive and focuses on
              stabilization, coping strategies, and building momentum in early recovery.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white">Who PHP is for</h3>
                <p className="mt-2 text-sm text-white/70">
                  Clients who need more frequent clinical support, structured days, or a step down from
                  residential care.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white">What you can expect</h3>
                <p className="mt-2 text-sm text-white/70">
                  Full-day therapy programming, psychiatric check-ins, and intensive skill-building groups to
                  reinforce recovery foundations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-light tracking-wide text-white md:text-4xl">
            Not sure which level of care fits?
          </h2>
          <p className="mt-4 text-white/70">
            Our admissions team will walk you through options, verify insurance, and build a plan that matches
            your clinical needs and schedule.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/#intake"
              className="inline-flex items-center justify-center rounded-full bg-[#f7c99b] px-8 py-3 text-base font-semibold text-[#1f2a2e] transition hover:-translate-y-0.5 hover:bg-[#f2b87e]"
            >
              Start Intake
            </Link>
            <Link
              href="/getting-started"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3 text-base font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
            >
              Learn About Admissions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
