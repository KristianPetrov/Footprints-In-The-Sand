const anchorPromises = [
  {
    title: "Clinical Partnership",
    description:
      "Licensed therapists, psychiatrists, and recovery coaches huddle weekly so every milestone, barrier, and medication change stays synchronized.",
  },
  {
    title: "Whole-Person Outcomes",
    description:
      "Trauma-responsive therapy, somatic regulation, sleep and nutrition coaching, and relapse-prevention plans support mind, body, and nervous system.",
  },
  {
    title: "Accountable Community",
    description:
      "Small cohorts built on motivational interviewing, peer feedback, and transparent tracking where your progress is celebrated and safeguarded.",
  },
];


const careRhythms = [
  {
    heading: "Honest Circles",
    copy: "Weekly process groups for skills practice, relapse-prevention drills, and measurable homework.",
  },
  {
    heading: "Focused Intensives",
    copy: "Coastal intensives dedicated to EMDR preparation, DBT immersion, and experiential therapy.",
  },
  {
    heading: "Aftercare Teams",
    copy: "Long-term mentorship, data-backed check-ins, and digital support so gains hold once you discharge.",
  },
];
export default function Care ()
{
  return (
    <section
      id="care"
      className="relative z-10 flex flex-col gap-10 rounded-3xl bg-white/85 p-8 shadow-[0_20px_60px_rgba(20,52,66,0.09)]">
      <div className="flex flex-col gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#1b3b44]">
          How We Walk With You
        </p>
        <h2 className="text-3xl font-semibold text-[#0f2f38] sm:text-4xl">
          Gentle rhythms, anchored hope, courageous action
        </h2>
        <p className="text-lg leading-8 text-[#2e454c]">
          We blend clinical excellence with human motivation. Every pathway is engineered to lift
          you from survival into stabilized, confident momentum.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {anchorPromises.map((anchor) => (
          <article
            key={anchor.title}
            className="flex h-full flex-col gap-3 rounded-2xl border border-[#dfe9ec] bg-[#fefcf8] p-6"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b87745]">
              {anchor.title}
            </p>
            <p className="text-base leading-7 text-[#445c63]">{anchor.description}</p>
          </article>
        ))}
      </div>


      <div className="grid gap-6 md:grid-cols-3">
        {careRhythms.map((rhythm) => (
          <article key={rhythm.heading} className="flex flex-col gap-3 rounded-2xl bg-[#0f2f38] p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
              {rhythm.heading}
            </p>
            <p className="text-base leading-7 text-white/85">{rhythm.copy}</p>
          </article>
        ))}
      </div>
    </section>)
}