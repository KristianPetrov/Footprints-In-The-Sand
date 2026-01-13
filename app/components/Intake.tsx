import { Suspense } from "react";
import { IntakeForm } from "./IntakeForm";
import Link from "next/link";

const intakePromises = [
  {
    title: "Rapid callbacks",
    detail: "Licensed guides respond within 12 business hours to align next steps.",
  },
  {
    title: "Insurance navigation",
    detail: "We verify benefits, authorizations, and transportation before day one.",
  },
  {
    title: "Family partnership",
    detail: "Loved ones get a dedicated point of contact for updates and planning.",
  },
];
export default function Intake ()
{
  return (
    <section
      id="intake"
      className="relative z-10 grid grid-cols-1 gap-10 rounded-3xl bg-linear-to-br from-[#01090d] via-[#03141c] to-[#051f29] p-8 text-white shadow-[0_30px_80px_rgba(2,12,20,0.65)] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start"
    >
      <div className="min-w-0 flex flex-col gap-6">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
          Intake Team
        </p>
        <h2 className="text-3xl font-semibold sm:text-4xl">Getting Started Today.</h2>
        <p className="text-base leading-7 text-white/80">
          Share the essentials below and a guide reaches out within hours to coordinate assessments,
          benefits, travel, and family updates. No pressure. Just grounded planning for the next right step.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {intakePromises.map((promise) => (
            <article
              key={promise.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/85 backdrop-blur"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f7c99b]">
                {promise.title}
              </p>
              <p className="mt-2 text-sm leading-6">{promise.detail}</p>
            </article>
          ))}
        </div>
        <p className="wrap-break-word text-sm text-white/70">
          Prefer to start live? Call{" "}
          <Link href="tel:9493501078" className="break-all font-semibold text-white hover:underline">
            9493501078
          </Link>{" "}
          or email{" "}
          <Link href="mailto:info@footprintsrecovery.net" className="break-all font-semibold text-white hover:underline">
            info@footprintsrecovery.net
          </Link>{" "}
          and mention you&apos;ve begun this form so we can sync details.
        </p>
      </div>
      <div className="min-w-0">
        <Suspense
          fallback={
            <div className="flex min-h-[400px] items-center justify-center rounded-3xl border border-white/15 bg-white/5">
              <p className="text-white/70">Loading form...</p>
            </div>
          }
        >
          <IntakeForm />
        </Suspense>
      </div>
    </section>
  )
}