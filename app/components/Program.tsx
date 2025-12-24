const clientSupport = [
  "Therapist sessions every week",
  "Case manager check-ins weekly",
  "Weekly doctor visits",
  "Medication evaluation and management",
  "Individualized treatment planning",
  "Aftercare planning",
  "Daily transportation to and from program",
  "Family therapy",
];
export default function Program ()
{
  return (<section
    id="program"
    className="relative z-10 flex flex-col gap-10 rounded-3xl bg-[#0f2f38] p-8 text-white shadow-[0_20px_60px_rgba(8,24,32,0.4)]"
  >
    <div className="flex flex-col gap-3">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
        Program Basics
      </p>
      <h2 className="text-3xl font-semibold sm:text-4xl">Daily structure that keeps you grounded</h2>
      <p className="text-base leading-7 text-white/85">
        PHP and IOP experiences integrate clinical depth, nervous-system regulation, and practical routines.
        Every schedule flexes to clients&apos; needs and insurance authorizations while keeping a steady cadence
        of care, accountability, transportation, and family involvement.
      </p>
    </div>
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">

      <article className="rounded-3xl bg-white text-[#0f2f38] p-6 shadow-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b87745]">
          Services Provided
        </p>
        <ul className="mt-4 flex flex-col gap-3 text-sm leading-6">
          {clientSupport.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-[#d08a4c]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>

    </div>
  </section>)
}