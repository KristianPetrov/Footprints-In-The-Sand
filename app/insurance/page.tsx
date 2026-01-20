import type { Metadata } from "next";
import Link from "next/link";
import { HeroNav } from "../components/HeroNav";
import { IntakeForm } from "../components/IntakeForm";
import { buildPageMetadata } from "../lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Insurance & Payment Options | PHP & IOP Care",
  description:
    "We accept major commercial insurance and offer fast verification for PHP and IOP outpatient services. Cash-pay options available.",
  path: "/insurance",
});

export default function InsurancePage ()
{
  return (
    <main className="min-h-screen bg-linear-to-b from-[#0f2f38] via-[#1b4d5c] to-[#0f2f38] overflow-hidden">
      <HeroNav />

      <section className="relative px-6 pb-16 pt-32 text-center">
        <h1 className="font-display text-4xl font-light tracking-wide text-white md:text-5xl">
          Insurance &amp; payment
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
          We accept major commercial insurance and offer fast verification for PHP and IOP outpatient
          services. Cash-pay options available.
        </p>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-4 md:flex-row md:items-center">
          <Link
            href="/admissions"
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-[#f7c99b] px-8 py-3 text-base font-semibold text-[#1f2a2e] transition hover:-translate-y-0.5 hover:bg-[#f2b87e] md:w-auto"
          >
            Admissions &amp; Intake
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full border border-white/30 px-8 py-3 text-base font-semibold text-white transition hover:border-white/60 hover:bg-white/10 md:w-auto"
          >
            Contact
          </Link>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h2 className="font-display text-2xl font-light tracking-wide text-white md:text-3xl">
              Fast verification
            </h2>
            <p className="mt-4 text-white/75 leading-7">
              Share your insurance details and we’ll verify benefits as quickly as possible, then outline
              next steps with clear expectations.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h2 className="font-display text-2xl font-light tracking-wide text-white md:text-3xl">
              Cash-pay options
            </h2>
            <p className="mt-4 text-white/75 leading-7">
              If you prefer cash-pay, we can walk you through options and timing so you can make a clean
              decision without pressure.
            </p>
          </div>
        </div>
      </section>

      <section id="intake" className="bg-white/5 px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center font-display text-3xl font-light tracking-wide text-white md:text-4xl">
            Start verification
          </h2>
          <p className="mt-4 text-center text-white/70">
            Complete the form and include your insurance information so we can verify benefits and follow
            up.
          </p>
          <div className="mt-10">
            <IntakeForm />
          </div>
        </div>
      </section>
    </main>
  );
}

