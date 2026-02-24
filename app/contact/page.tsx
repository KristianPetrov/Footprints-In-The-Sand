import type { Metadata } from "next";
import Link from "next/link";
import { HeroNav } from "../components/HeroNav";
import { IntakeForm } from "../components/IntakeForm";
import { PHONE_DISPLAY, PHONE_TEL } from "../lib/contact";
import { buildPageMetadata } from "../lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Footprints | PHP & IOP Outpatient Care",
  description:
    "Get in touch to learn more about PHP and IOP outpatient services. Confidential, straightforward communication.",
  path: "/contact",
});

export default function ContactPage ()
{
  return (
    <main className="min-h-screen bg-linear-to-b from-[#0f2f38] via-[#1b4d5c] to-[#0f2f38] overflow-hidden">
      <HeroNav />

      <section className="relative px-6 pb-16 pt-32 text-center">
        <h1 className="font-display text-4xl font-light tracking-wide text-white md:text-5xl">
          Contact
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
          Confidential, straightforward communication about PHP and IOP outpatient services.
        </p>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h2 className="text-lg font-semibold text-white">Call</h2>
            <p className="mt-3 text-white/75">
              <Link href={PHONE_TEL} className="font-semibold text-[#f7c99b]">
                {PHONE_DISPLAY}
              </Link>
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h2 className="text-lg font-semibold text-white">Email</h2>
            <p className="mt-3 text-white/75">
              <Link href="mailto:info@footprintsrecovery.net" className="font-semibold text-[#f7c99b]">
                info@footprintsrecovery.net
              </Link>
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h2 className="text-lg font-semibold text-white">Location</h2>
            <p className="mt-3 text-white/75">
              653 West 19th Street, Costa Mesa, CA
            </p>
          </div>
        </div>
      </section>

      <section id="intake" className="bg-white/5 px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center font-display text-3xl font-light tracking-wide text-white md:text-4xl">
            Online intake
          </h2>
          <p className="mt-4 text-center text-white/70">
            Prefer a form? Complete the confidential intake and we’ll follow up with next steps.
          </p>
          <div className="mt-10">
            <IntakeForm />
          </div>
        </div>
      </section>
    </main>
  );
}

