const treatmentTracks = [
  {
    category: "Substance Addictions",
    items: [
      "Alcohol",
      "Opioids",
      "Methamphetamine",
      "Cocaine",
      "Marijuana",
      "Other Prescription Drugs",
      "Synthetic Drugs",
      "Other Stimulants (Ex. adderall)",
      "Benzodiazepines (Ex. xanax)",
      "Fentanyl",
      "Inhalants",
    ],
  },

  {
    category: "Mental Health Disorders",
    items: [
      "Post Traumatic Stress Disorder",
      "Depressive Disorders",
      "Bipolar Disorder",
      "Anxiety Disorders",
      "Personality Disorders",
    ],
  },
];

const therapyModalities = [
  "Case Management",
  "CBT",
  "DBT",
  "Dual Diagnosis",
  "Experiential",
  "Family Counseling",
  "Group Therapy",
  "Individual Therapy",
  "MAT",
  "Motivational Interviewing",
];
export default function Treatment ()
{
  return (<section
    id="treatment"
    className="relative z-10 flex flex-col gap-10 rounded-3xl bg-white/90 p-8 shadow-[0_20px_60px_rgba(14,49,63,0.12)]"
  >
    <div className="flex flex-col gap-3">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#1b3b44]">
        What We Treat
      </p>
      <h2 className="text-3xl font-semibold text-[#0f2f38] sm:text-4xl">
        Integrated addiction & mental health recovery
      </h2>
      <p className="text-base leading-7 text-[#2e454c]">
        Detox is not the destination. We walk the long arc of restoration, treating substance and
        process addictions alongside the mental health realities that ride tandem.
      </p>
    </div>
    <div className="grid gap-6 lg:grid-cols-2">
      {treatmentTracks.map((track) => (
        <article
          key={track.category}
          className="flex h-full flex-col gap-3 rounded-2xl border border-[#e3e9eb] bg-[#fefcf8] p-6"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1b5a6d]">
            {track.category}
          </p>
          <ul className="flex flex-wrap gap-2 text-sm text-[#2f4b53]">
            {track.items.map((item) => (
              <li
                key={item}
                className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#b87745]"
              >
                {item}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
    <div className="rounded-3xl border border-dashed border-[#1c5a6b33] bg-[#f2fbff] p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1b3b44]">
        Therapies We Practice
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        {therapyModalities.map((therapy) => (
          <span
            key={therapy}
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0f2f38] shadow-sm"
          >
            {therapy}
          </span>
        ))}
      </div>
    </div>
  </section>
  )
}