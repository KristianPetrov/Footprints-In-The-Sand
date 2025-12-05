import Image from "next/image";
import Link from "next/link";

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

const pathMarkers = [
  {
    label: "Wreckage",
    detail:
      "We sit with the rubble, name the pain, and strip away the shame that has silenced you for too long.",
  },
  {
    label: "Healing",
    detail:
      "Daily practices, guided counseling, and nervous-system regulation help shake loose the chains and rebuild trust.",
  },
  {
    label: "Rebirth",
    detail:
      "Step by step, footprint by footprint, we cultivate new rhythms, restored relationships, and a future full of hope.",
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

const programSchedule = [
  {
    level: "Partial Hospitalization (PHP)",
    window: "9:30 AM - 4:00 PM",
  },
  {
    level: "Intensive Outpatient (IOP)",
    window: "9:30 AM - 12:30 PM",
  },
  {
    level: "Program Length",
    window: "Average of 90 days, tailored to clinical goals and insurance authorization",
  },
];

const clientSupport = [
  "Therapist sessions every week",
  "Case manager check-ins weekly",
  "Weekly doctor visits",
  "Medication evaluation and management",
  "Individualized treatment planning",
  "Aftercare planning",
  "Daily transportation to and from program",
  "Family therapy coverage",
];

const programHighlights = [
  "Low client-to-staff ratio so every story is seen and shepherded",
  "Integrated care for both addiction recovery and mental health stability",
];

const treatmentTracks = [
  {
    category: "Substance Addictions",
    items: [
      "Alcohol",
      "Opioid",
      "Meth",
      "Cocaine",
      "Marijuana",
      "Prescription Drugs",
      "Synthetic Drug",
    ],
  },
  {
    category: "Stimulant Addiction",
    items: ["Xanax", "Fentanyl", "Inhalant"],
  },
  {
    category: "Mental Health Disorders",
    items: [
      "PTSD",
      "Depression & Major Depressive Disorder",
      "Anxiety & Generalized Anxiety Disorder",
      "Bipolar",
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

const heroSubheadline =
  "We walk beside you through stabilization, skill-building, and sustainable recovery--step by step, footprint by footprint, powered by research-driven care and relentless encouragement.";

const missionStatement = `At Footprints In The Sand, our mission is to help people break free from the cycles that once controlled their lives and step into a future they never thought possible. We’re here for the ones carrying heavy histories, the ones tired of running, and the ones ready to finally face the truth head-on. No judgment. No sugarcoating. Just real support, real accountability, and a team that refuses to let you quit on yourself. We walk with you through the fight, the healing, and the rebuilding—pushing you to rise stronger, stand taller, and reclaim every part of your life, one powerful step at a time.`;

const ourHeartStatement = `Our work is fueled by watching people reclaim agency. We place multidisciplinary teams and trained peers beside you so detox, therapy, medication management, and skills practice stay connected. Every narrative matters. Every measurable gain is worth the effort. Each step forward is evidence that neurologic change is happening.`;

const whyWeExistStatement = `We exist because life hits hard--and addiction collides with mental health in ways that are easy to hide. Too many people manage crises in silence, shame, and broken cycles. Footprints In The Sand interrupts that loop with transparent dialogue, validated interventions, and structured accountability. We offer space to own your story, address physiology and behavior together, and rebuild from the ground up. No pretending. No judgment. Just people doing the clinical work required to take their lives back.`;

const footerBlessing = "and let's map the next evidence-backed step together.";

export default function Home() {
  return (
    <div className="beach-sky grain-overlay min-h-screen w-full overflow-hidden text-[#1f2a2e]">
      <nav className="hero-nav">
        <div className="hero-nav__inner">
          <Link href="/" className="hero-nav__brand">
            Footprints In The Sand
            <span>Recovery Center</span>
          </Link>
          <div className="hero-nav__links">
            <Link href="#program">Programs</Link>
            <Link href="#treatment">What We Treat</Link>
            <Link href="#mission">Mission</Link>
            <Link href="#care">Care Journey</Link>
          </div>
          {/* <a href="mailto:care@footprintsinthesand.org" className="hero-nav__cta">
            Email Intake
          </a> */}
        </div>
      </nav>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-16 pt-24 sm:px-8 lg:px-12 lg:pb-24 lg:pt-32">
        {/* <Image
          src="/sun-halo.svg"
          alt="Sun halo illustration"
          width={420}
          height={420}
          className="pointer-events-none absolute -left-20 -top-10 opacity-70"
          priority
        />
        <Image
          src="/palm-leaf.svg"
          alt="Palm leaf illustration"
          width={320}
          height={180}
          className="pointer-events-none absolute right-0 top-24 opacity-70"
        /> */}
        <Image
          src="/footprints.svg"
          alt="Footprints in the sand illustration"
          width={200}
          height={320}
          className="pointer-events-none absolute -right-8 bottom-10 opacity-70"
        />

        <div className="hero-logo-stage">
          <div className="hero-logo-flames" aria-hidden="true">
            {/* <span className="hero-logo-glow" /> */}
            {/* <span className="hero-logo-glow hero-logo-glow--spark" /> */}
            <span className="hero-logo-shimmer" />
          </div>
          <Image
            src="/footprints-in-the-sand-minimal-logo.png"
            alt="Footprints In The Sand minimal logo"
            width={420}
            height={420}
            priority
            className="hero-logo-img"
          />
        </div>

        <header className="hero-header glass-panel relative z-10 overflow-hidden p-8 sm:p-10 lg:p-14">
          <div className="flex flex-col gap-6 text-center sm:text-left">
            <p className="tagline text-[#1b3b44]">Footprints In The Sand Recovery Center</p>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#b87745]">
              Light for every hard-won step
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-[#0f2f38] sm:text-5xl lg:text-6xl">
              Where Broken Roads Become Steady Ground
            </h1>
            <p className="text-lg leading-8 text-[#33545d] sm:text-xl">{heroSubheadline}</p>
            <p className="text-base leading-7 text-[#33545d]">
              A candlelit glow that reminds every guest their courage burns brighter than the chaos behind them.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 pt-6 sm:justify-start">
            <Link
              href="#mission"
              className="inline-flex items-center justify-center rounded-full bg-[#1c5a6b] px-8 py-3 text-base font-semibold text-white shadow-[0_18px_35px_rgba(28,90,107,0.2)] transition hover:-translate-y-0.5 hover:bg-[#174652]"
            >
              Begin the Journey
            </Link>
            <Link
              href="#care"
              className="inline-flex items-center justify-center rounded-full border border-[#1c5a6b33] px-8 py-3 text-base font-semibold text-[#1c5a6b] transition hover:border-[#1c5a6b] hover:bg-white/60"
            >
              Explore Our Path
            </Link>
          </div>

          <div className="mt-10 grid gap-6 rounded-3xl border border-white/60 bg-white/70 p-6 text-sm sm:grid-cols-3">
            <div>
              <p className="text-3xl font-semibold text-[#d08a4c]">20+</p>
              <p className="text-[#5d6d70]">Guides, counselors, and medical providers</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-[#1b5a6d]">3</p>
              <p className="text-[#5d6d70]">Core stages: Wreckage, Healing, Rebirth</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-[#d08a4c]">365</p>
              <p className="text-[#5d6d70]">Days of coverage, coaching, and care each year</p>
            </div>
          </div>
        </header>

        <section
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
            <article className="rounded-3xl bg-white/10 p-6 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Schedule</p>
              <div className="mt-4 flex flex-col gap-4">
                {programSchedule.map((block) => (
                  <div key={block.level} className="rounded-2xl border border-white/15 p-4">
                    <p className="text-base font-semibold">{block.level}</p>
                    <p className="text-sm text-white/80">{block.window}</p>
                  </div>
                ))}
              </div>
            </article>
            <article className="rounded-3xl bg-white text-[#0f2f38] p-6 shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b87745]">
                Each Client Receives
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
            <article className="rounded-3xl border border-white/30 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
                Highlights
              </p>
              <ul className="mt-4 flex flex-col gap-4 text-base leading-7 text-white/85">
                {programHighlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-white/70" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section
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
          <div className="grid gap-6 lg:grid-cols-3">
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

        <section
          id="mission"
          className="relative z-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch"
        >
          <article className="rounded-3xl bg-white/90 p-8 shadow-[0_25px_70px_rgba(20,52,66,0.12)]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#1b3b44]">
              Mission & Vision
            </p>
            <p className="mt-6 text-lg leading-8 text-[#2e454c]">{missionStatement}</p>
          </article>
          <article className="wave-mask flex flex-col gap-6 rounded-3xl bg-gradient-to-br from-[#0d3e4f] via-[#0e596d] to-[#0b3a42] p-8 text-white shadow-[0_25px_70px_rgba(10,40,52,0.35)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">Our Heart</p>
            <p className="text-lg leading-8 text-white/90">{ourHeartStatement}</p>
            <hr className="border-white/30" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              Why We Exist
            </p>
            <p className="text-lg leading-8 text-white/90">{whyWeExistStatement}</p>
          </article>
        </section>

        <section
          id="care"
          className="relative z-10 flex flex-col gap-10 rounded-3xl bg-white/85 p-8 shadow-[0_20px_60px_rgba(20,52,66,0.09)]"
        >
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

          <div className="grid gap-6 rounded-3xl bg-gradient-to-r from-[#e5f3f9] via-[#f9efe0] to-[#f7e1c2] p-6 sm:grid-cols-3">
            {pathMarkers.map((marker) => (
              <div key={marker.label} className="flex flex-col gap-2 rounded-2xl bg-white/70 p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#1b3b44]">
                  {marker.label}
                </p>
                <p className="text-sm leading-6 text-[#355159]">{marker.detail}</p>
              </div>
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
        </section>

        <footer className="relative z-10 rounded-3xl border border-white/60 bg-white/70 p-6 text-sm text-[#4a5c60] shadow-inner">
          Sustainable change is closer than you think. Reach out at{" "}
          <a href="mailto:care@footprintsinthesand.org" className="font-semibold text-[#1b5a6d]">
            care@footprintsinthesand.org
          </a>{" "}
          {footerBlessing}
        </footer>
      </div>
    </div>
  );
}
