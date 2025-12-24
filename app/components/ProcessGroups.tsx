import { ProcessGroupsShowcase } from "./ProcessGroupsShowcase";
import { Suspense } from "react";
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
export default function ProcessGroups ()
{
  return (<section
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

    <div className="flex flex-col">
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
  )
}