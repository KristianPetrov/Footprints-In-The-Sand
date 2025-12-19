import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { HeroNav } from "./components/HeroNav";
import { IntakeForm } from "./components/IntakeForm";
import { ProcessGroupsShowcase } from "./components/ProcessGroupsShowcase";

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

const campLifeGallery = [
  {
    src: "/birds-eye-view-facility.jpg",
    alt: "Outside view of the Footprints In The Sand 2 Recovery campus.",
    label: "The Footprints In The Sand 2 Recovery campus",
  },
  {
    src: "/happy-client-sitting-on-staircase.jpg",
    alt: "Client sitting on a sunlit staircase.",
    label: "Quiet reflection",
  },
  {
    src: "/happy-group-photo-in-nature.jpg",
    alt: "Clients smiling together while standing in a lush natural setting.",
    label: "Nature walks",
  },
  {
    src: "/happy-group-picture-outside.jpg",
    alt: "Large recovery group smiling outside the facility.",
    label: "Community pride",
  },
  {
    src: "/man-walking-outside-facility.jpg",
    alt: "Client walking calmly along the exterior path of the facility.",
    label: "Daily grounding",
  },
  {
    src: "/nightime-campfire-toasted-marshmellow.jpg",
    alt: "Client roasting a toasted marshmallow during a nighttime campfire.",
    label: "Campfire rituals",
  },
  {
    src: "/recovery-group-behind-couch.jpg",
    alt: "Clients listening intently to a group session.",
    label: "Listening hearts",
  },
  {
    src: "/recovery-group-sunglasses-dudes.jpg",
    alt: "Clients in sunglasses sitting together and talking outdoors.",
    label: "Brotherhood moments",
  },

  {
    src: "/recovery-group.jpg",
    alt: "Large circle of men engaged in a group session.",
    label: "Deep work",
  },
  {
    src: "/wholesome-hugging-couple.jpg",
    alt: "Smiling couple hugging each other during an outdoor break.",
    label: "Restored relationships",
  },
];

const processGroupSlides = [
  {
    src: "/recovery-group.jpg",
    alt: "Men lean into a circle, minds open as they listen intently.",
    focus: "Accountability Rounds",
    quote: "We surface the hard truths first so everyone can name triggers before they spiral.",
    facilitator: "Lead Process Therapist",
  },
  {
    src: "/recovery-group-behind-couch.jpg",
    alt: "Clients mindfuly listen during a group share.",
    focus: "Somatic Check-ins",
    quote: "We ask where tension lives in the body so coping plans are rooted in reality.",
    facilitator: "Somatic Therapist",
  },
  {
    src: "/recovery-group-sunglasses-dudes.jpg",
    alt: "Clients sharing and comparing notes.",
    focus: "Peer Reflection",
    quote: "Peers translate therapist language into real talk so feedback lands.",
    facilitator: "Peer Recovery Coach",
  },
  {
    src: "/happy-group-picture-outside.jpg",
    alt: "Large outdoor circle celebrating a breakthrough.",
    focus: "Celebration Fridays",
    quote: "Wins get tracked publicly so courage becomes contagious.",
    facilitator: "Community Manager",
  },
  {
    src: "/happy-group-photo-in-nature.jpg",
    alt: "Group pauses during a nature walk to reflect together among trees.",
    focus: "Experiential Processing",
    quote: "Movement plus reflection keeps nervous systems regulated and awake.",
    facilitator: "Experiential Therapist",
  },
];

const processGroupPillars = [
  {
    title: "Evidence-based facilitation",
    detail: "Motivational interviewing, DBT coaching, and trauma-informed prompts guide every exchange.",
  },
  {
    title: "Measurable homework",
    detail: "Each member leaves with a written micro-goal, accountability partner, and check-in time.",
  },
  {
    title: "Regulation-first pacing",
    detail: "Breathwork, somatic grounding, and sensory resets keep the room safe for vulnerability.",
  },
];

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
  "Family therapy ",
];

const programHighlights = [
  "Low client to staff ratio to assure individualized care",
  "5 minutes away from the beach",
  "Staff aids clients in gaining access to community resources such as public transportation, food, eye care, dental care, and library access.",
];

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
      "Substance Use Disorders",
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

const teamMembers = [
  {
    name: "Tiffany Monterroso",
    title:"Executive Director",
    image: "/tiffany-monterroso-photo-crop.png",
    id:"tiffany-monterroso"
  },
  {
    name: "Wade Stephens",
    title: "Lead Case Manager",
    image: "/wade-profile-photo.jpeg",
    id: "wade-stephens",
  },
  {
    name: "Tazia Shaw",
    title: "Case Manager",
    image: "/tazia-profile-photo.jpeg",
    id: "tazia-shaw",
  },
  {
    name: "Sandy Bekhit MS",
    title: "Therapist",
    image:"/sandy-bhekit-photo.jpeg",
    id: "sandy-bekhit"
  }
];

const heroSubheadline =
  "We walk beside you through stabilization, skill-building, and sustainable recovery--step by step, footprint by footprint, powered by research-driven care and relentless encouragement.";

const missionStatement = `At Footprints In The Sand 2 Recovery, our mission is to help people break free from the cycles that once controlled their lives and step into a future they never thought possible. We’re here for the ones carrying heavy histories, the ones tired of running, and the ones ready to finally face the truth head-on. No judgment. No sugarcoating. Just real support, real accountability, and a team that refuses to let you quit on yourself. We walk with you through the fight, the healing, and the rebuilding—pushing you to rise stronger, stand taller, and reclaim every part of your life, one powerful step at a time.`;

const ourHeartStatement = `Our work is fueled by watching people reclaim agency. We place multidisciplinary teams and trained peers beside you so detox, therapy, medication management, and skills practice stay connected. Every narrative matters. Every measurable gain is worth the effort. Each step forward is evidence that neurologic change is happening.`;

const whyWeExistStatement = `We exist because life hits hard--and addiction collides with mental health in ways that are easy to hide. Too many people manage crises in silence, shame, and broken cycles. Footprints In The Sand 2 Recovery interrupts that loop with transparent dialogue, validated interventions, and structured accountability. We offer space to own your story, address physiology and behavior together, and rebuild from the ground up. No pretending. No judgment. Just people doing the clinical work required to take their lives back.`;

const footerBlessing = "and let's map the next evidence-backed step together.";

export default function Home() {
  return (
    <div className="beach-sky grain-overlay min-h-screen w-full overflow-hidden text-[#1f2a2e]">
      <HeroNav />
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
          alt=""
          width={200}
          height={320}
          className="pointer-events-none absolute -right-8 bottom-10 opacity-70"
          aria-hidden="true"
        />

        <div className="hero-logo-stage">
          <div className="hero-logo-flames" aria-hidden="true">
            {/* <span className="hero-logo-glow" /> */}
            {/* <span className="hero-logo-glow hero-logo-glow--spark" /> */}
            <span className="hero-logo-shimmer" />
          </div>
          <Image
            src="/footprints-in-the-sand-minimal-logo.png"
            alt="Footprints In The Sand 2 Recovery minimal logo"
            width={420}
            height={420}
            priority
            className="hero-logo-img"
          />
        </div>

        {/* <header className="hero-header glass-panel relative z-10 overflow-hidden p-8 sm:p-10 lg:p-14">
          <div className="flex flex-col gap-6 text-center sm:text-left">
            <p className="tagline text-[#1b3b44]">Footprints In The Sand 2 Recovery</p>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#b87745]">
              Light for every hard-won step
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-[#0f2f38] sm:text-5xl lg:text-6xl">
              Where Broken Roads Become Steady Ground
            </h1>
            <p className="text-lg leading-8 text-[#33545d] sm:text-xl">{heroSubheadline}</p>

          </div>
          <div className="flex flex-wrap justify-center gap-4 pt-6 sm:justify-start">
            <Link
              href="#intake"
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

          <div className="mt-4 flex flex-col items-center gap-2 text-sm text-[#1b5a6d] sm:flex-row sm:justify-start sm:gap-4">
            <Link href="tel:9493501078" className="font-semibold text-[#0f2f38] hover:underline">
              Call 9493501078
            </Link>
            <span className="hidden text-[#b7c9cf] sm:inline">•</span>
            <Link href="mailto:info@footprintsrecovery.net" className="font-semibold text-[#0f2f38] hover:underline">
              info@footprintsrecovery.net
            </Link>
          </div>

        </header> */}

        {/* Get Started Today Banner */}
        <section className="relative z-10 overflow-hidden rounded-3xl bg-gradient-to-r from-[#b87745] via-[#d08a4c] to-[#c97a3a] p-8 shadow-[0_25px_60px_rgba(184,119,69,0.35)]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-white/20 blur-3xl" />
            <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-[#0f2f38]/20 blur-3xl" />
          </div>
          <div className="relative flex flex-col items-center gap-6 text-center">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
                Take The First Step
              </p>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Get Started Today
              </h2>
              <p className="mx-auto max-w-2xl text-base leading-7 text-white/90">
                Recovery begins with a single step. Reach out now and let us walk beside you on your journey to lasting change.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="mailto:info@footprintsrecovery.net"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-[#b87745] shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                <svg
                  className="h-5 w-5 transition group-hover:scale-110"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email Us
              </Link>
              <Link
                href="tel:9493501078"
                className="group inline-flex items-center gap-2 rounded-full bg-[#0f2f38] px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#1c5a6b] hover:shadow-xl"
              >
                <svg
                  className="h-5 w-5 transition group-hover:scale-110"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Now
              </Link>
              <Link
                href="#intake"
                className="group inline-flex items-center gap-2 rounded-full border-2 border-white bg-transparent px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-white hover:text-[#b87745] hover:shadow-xl"
              >
                <svg
                  className="h-5 w-5 transition group-hover:scale-110"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Fill Intake Form
              </Link>
            </div>
          </div>
        </section>

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
        </section>
        <section
          id="location"
          className="relative z-10 grid gap-8 rounded-3xl bg-white/90 p-8 shadow-[0_20px_60px_rgba(14,49,63,0.12)] lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch"
        >
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#1b3b44]">
              Location
            </p>
            <h2 className="text-3xl font-semibold text-[#0f2f38] sm:text-4xl">
              Minutes from the beach in Costa Mesa
            </h2>
            <p className="text-base leading-7 text-[#2e454c]">
              653 West 19th Street, Costa Mesa, CA
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="https://www.google.com/maps?q=653%20West%2019th%20Street%2C%20Costa%20Mesa%2C%20CA&output=embed"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#1c5a6b] px-6 py-2 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(28,90,107,0.15)] transition hover:-translate-y-0.5 hover:bg-[#174652]"
              >
                Open in Google Maps
              </Link>
              <Link
                href="#intake"
                className="inline-flex items-center justify-center rounded-full border border-[#1c5a6b33] px-6 py-2 text-sm font-semibold text-[#1c5a6b] transition hover:border-[#1c5a6b] hover:bg-white/60"
              >
                Start Intake
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#e3e9eb] bg-white shadow-sm">
            <div className="relative aspect-[16/10] w-full">
              <iframe
                title="Footprints In The Sand 2 Recovery location map"
                src="https://www.google.com/maps?q=653%20West%2019th%20Street%2C%20Costa%20Mesa%2C%20CA&output=embed"
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
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
          className="relative z-10 grid gap-8  lg:items-stretch"
        >
          <article className="rounded-3xl bg-white/90 p-8 shadow-[0_25px_70px_rgba(20,52,66,0.12)]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#1b3b44]">
              Mission & Vision
            </p>
            <p className="mt-6 text-lg leading-8 text-[#2e454c]">{missionStatement}</p>
          </article>

        </section>

        <section
          id="process-groups"
          className="relative z-10 flex flex-col gap-10 rounded-3xl bg-gradient-to-br from-[#0d2e3a] via-[#0b1f26] to-[#0a1417] p-8 text-white shadow-[0_25px_80px_rgba(4,20,32,0.45)]"
        >
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              Process Groups
            </p>
            {/* <h2 className="text-3xl font-semibold sm:text-4xl">Where breakthroughs get rehearsed</h2>
            <p className="text-base leading-7 text-white/80">
              Our circles run multiple times a day—clinical, peer-led, and experiential—so every emotion and
              relapse pattern gets processed in real time. Practice reps, facilitator coaching, and peer
              accountability transform insights into muscle memory.
            </p> */}
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
            {/* <div className="flex flex-col gap-6">
              <p className="text-sm uppercase tracking-[0.35em] text-white/70">What anchors each circle</p>
              <ul className="flex flex-col gap-4">
                {processGroupPillars.map((pillar) => (
                  <li
                    key={pillar.title}
                    className="rounded-2xl border border-white/20 bg-white/5 p-5 backdrop-blur-sm"
                  >
                    <p className="text-base font-semibold uppercase tracking-[0.25em] text-[#f7c99b]">
                      {pillar.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/85">{pillar.detail}</p>
                  </li>
                ))}
              </ul>
            </div> */}
            <Suspense fallback={<div className="flex h-full min-h-[400px] items-center justify-center rounded-3xl border border-[#e2ecef] bg-white/95"><p className="text-[#1b3b44]">Loading...</p></div>}>
              <ProcessGroupsShowcase slides={processGroupSlides} />
            </Suspense>
          </div>
        </section>

        <section
          id="gallery"
          className="relative z-10 flex flex-col gap-8 rounded-3xl bg-white/80 p-8 shadow-[0_25px_70px_rgba(17,45,58,0.15)]"
        >
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#1b3b44]">
              Life On Campus
            </p>
            <h2 className="text-3xl font-semibold text-[#0f2f38] sm:text-4xl">
              Moments that keep recovery human
            </h2>
            <p className="text-base leading-7 text-[#2e454c]">
              From sunrise journaling to nighttime campfires, every gathering reinforces belonging. These scenes
              capture the safety, accountability, and joy our community builds together every single day.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {campLifeGallery.map((scene, index) => (
              <figure
                key={scene.src}
                className="group flex flex-col gap-3 rounded-3xl border border-[#e2ecef] bg-white p-3 shadow-sm"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#e3edf2]">
                  <Image
                    src={scene.src}
                    alt={scene.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f2f38]/30 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                </div>
                <figcaption className="flex flex-col gap-1 px-1 pb-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b87745]">
                    {scene.label}
                  </p>
                  <p className="text-sm text-[#3b5259]">{scene.alt}</p>
                </figcaption>
              </figure>
            ))}
          </div>
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

        <section
          id="services"
          className="relative z-10 overflow-hidden rounded-3xl bg-white/90 p-8 shadow-[0_20px_60px_rgba(14,49,63,0.12)]"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#b87745]/10 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#1c5a6b]/10 blur-3xl" />
          </div>

          <div className="relative flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#1b3b44]">
                Support Services
              </p>
              <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                <h2 className="text-3xl font-semibold text-[#0f2f38] sm:text-4xl">
                  Case Management &amp; Therapy Services
                </h2>
                <p className="max-w-xl text-base leading-7 text-[#2e454c]">
                  From day one, you’ll have support that’s practical, personal, and focused on progress—both during your stay and
                  for life after treatment.
                </p>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <article className="group flex h-full flex-col gap-5 rounded-2xl border border-[#e3e9eb] bg-[#fefcf8] p-6 transition hover:-translate-y-0.5 hover:border-[#b87745]/40 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0f2f38] text-white shadow-sm">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 2.75c-3.31 0-6 2.69-6 6v3.5c0 .7-.28 1.37-.78 1.87L4 15.34V17h16v-1.66l-1.22-1.22c-.5-.5-.78-1.17-.78-1.87v-3.5c0-3.31-2.69-6-6-6Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.5 19c.7 1.3 2 2.25 3.5 2.25S15.8 20.3 16.5 19"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b87745]">
                      Case Management
                    </p>
                    <p className="text-base leading-7 text-[#445c63]">
                      Your case manager helps reduce stress by coordinating the real-world details so you can focus on healing.
                    </p>
                  </div>
                </div>
                <ul className="grid gap-3 text-sm text-[#2f4b53]">
                  {[
                    "Insurance coordination and ongoing communication (as needed)",
                    "Aftercare planning (outpatient, sober living, community supports)",
                    "Resource connections for housing, employment, legal, and family needs",
                    "Transportation and scheduling support when applicable",
                    "Discharge planning with clear next steps and referrals",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#1c5a6b]/10 text-[#1c5a6b]">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="leading-6">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="group flex h-full flex-col gap-5 rounded-2xl border border-[#e3e9eb] bg-[#fefcf8] p-6 transition hover:-translate-y-0.5 hover:border-[#b87745]/40 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0f2f38] text-white shadow-sm">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 21s7-4.35 7-10.2C19 7.36 16.64 5 13.8 5c-1.5 0-2.87.7-3.8 1.8C9.07 5.7 7.7 5 6.2 5 3.36 5 1 7.36 1 10.8 1 16.65 8 21 8 21"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b87745]">
                      Therapy
                    </p>
                    <p className="text-base leading-7 text-[#445c63]">
                      Therapy is where you build insight, skills, and new patterns—supported by compassionate clinicians and peers.
                    </p>
                  </div>
                </div>
                <ul className="grid gap-3 text-sm text-[#2f4b53]">
                  {[
                    "Individual therapy focused on goals, triggers, and coping strategies",
                    "Process groups to practice honesty, connection, and accountability",
                    "Trauma-informed support when appropriate to your history",
                    "Psychoeducation on relapse prevention, boundaries, and communication",
                    "Collaborative treatment planning and progress check-ins",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#1c5a6b]/10 text-[#1c5a6b]">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="leading-6">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section
          id="intake"
          className="relative z-10 grid gap-10 rounded-3xl bg-gradient-to-br from-[#01090d] via-[#03141c] to-[#051f29] p-8 text-white shadow-[0_30px_80px_rgba(2,12,20,0.65)] lg:grid-cols-[1.05fr_0.95fr] lg:items-start"
        >
          <div className="flex flex-col gap-6">
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
            <p className="text-sm text-white/70">
              Prefer to start live? Call{" "}
              <Link href="tel:9493501078" className="font-semibold text-white hover:underline">
                9493501078
              </Link>{" "}
              or email{" "}
              <Link href="mailto:info@footprintsrecovery.net" className="font-semibold text-white hover:underline">
                info@footprintsrecovery.net
              </Link>{" "}
              and mention you&apos;ve begun this form so we can sync details.
            </p>
          </div>
          <Suspense fallback={<div className="flex min-h-[400px] items-center justify-center rounded-3xl border border-white/15 bg-white/5"><p className="text-white/70">Loading form...</p></div>}>
            <IntakeForm />
          </Suspense>
        </section>

        <section
          id="team"
          className="relative z-10 flex flex-col gap-10 rounded-3xl bg-white/90 p-8 shadow-[0_20px_60px_rgba(14,49,63,0.12)]"
        >
          <div className="flex flex-col gap-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#1b3b44]">
              Our Team
            </p>
            <h2 className="text-3xl font-semibold text-[#0f2f38] sm:text-4xl">
              The People Who Walk With You
            </h2>
            <p className="text-base leading-7 text-[#2e454c]">
              Meet the dedicated professionals committed to your recovery journey.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 lg:max-w-2xl lg:mx-auto">
            {teamMembers.map((member) => (
              <Link
                key={member.name}
                href={`/team#${member.id}`}
                className="group flex flex-col items-center gap-4 rounded-2xl border border-[#e3e9eb] bg-[#fefcf8] p-6 transition hover:border-[#b87745] hover:shadow-lg"
              >
                <div className="relative aspect-[2/3] w-48 overflow-hidden rounded-xl ">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.title}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 192px"
                    className="object-contain object-top"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col items-center gap-1 text-center">
                  <h3 className="text-lg font-semibold text-[#0f2f38] group-hover:text-[#b87745] transition">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#1b5a6d]">{member.title}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center">
            <Link
              href="/team"
              className="inline-flex items-center justify-center rounded-full border border-[#1c5a6b33] px-6 py-2 text-sm font-semibold text-[#1c5a6b] transition hover:border-[#1c5a6b] hover:bg-white/60"
            >
              Learn More About Our Team
            </Link>
          </div>
        </section>

        <section className="relative z-10 flex flex-col items-center gap-6 rounded-3xl border border-white/60 bg-white/70 p-8 shadow-inner">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#1b3b44]">
            Certifications & Accreditation
          </p>
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-12">
            <div className="flex flex-col items-center gap-3">
              <Link
                href="https://www.dhcs.ca.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:opacity-80"
              >
                <Image
                  src="/dhcs-logo.png"
                  alt="California Department of Health Care Services (DHCS) certification logo"
                  width={120}
                  height={120}
                  className="h-auto w-auto"
                  loading="lazy"
                />
              </Link>
              <p className="text-xs text-[#4a5c60]">
                Certification Number:{" "}
                <span className="font-semibold text-[#1b5a6d]">300751AP</span>
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Image
                src="/the-joint-comission-seal.png"
                alt="The Joint Commission accreditation seal"
                width={120}
                height={120}
                className="h-auto w-auto"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <footer className="relative z-10 rounded-3xl border border-white/60 bg-white/70 p-6 text-sm text-[#4a5c60] shadow-inner">
          Sustainable change is closer than you think. Share your intake above, call{" "}
          <Link href="tel:9493501078" className="font-semibold text-[#1b5a6d]">
            9493501078
          </Link>
          , or email{" "}
          <Link href="mailto:info@footprintsrecovery.net" className="font-semibold text-[#1b5a6d]">
            info@footprintsrecovery.net
          </Link>{" "}
          {footerBlessing}
        </footer>
      </div>
    </div>
  );
}
