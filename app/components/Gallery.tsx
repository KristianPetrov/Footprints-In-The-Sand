 "use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
export default function Gallery ()
{
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const track = trackRef.current;
    if (!track) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      const slideDistance = track.clientWidth * 0.85;
      const nextLeft = track.scrollLeft + slideDistance;
      const isNearEnd = nextLeft + track.clientWidth >= track.scrollWidth - 8;

      track.scrollTo({
        left: isNearEnd ? 0 : nextLeft,
        behavior: "smooth",
      });
    }, 5200);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const scrollBySlides = (direction: "prev" | "next") => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const slideDistance = track.clientWidth * 0.85;
    const delta = direction === "next" ? slideDistance : -slideDistance;

    track.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (<section
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

    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none  absolute inset-y-0 left-0 w-10 bg-linear-to-r from-white/0 via-white/60 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-linear-to-l rounded-2xl from-white/90 via-white/60 to-transparent"
      />
      <div className="pointer-events-none absolute  inset-y-0 left-2 right-2 hidden items-center justify-between md:flex">
        <div className="h-11 w-11 rounded-full bg-white/90 shadow-[0_18px_35px_rgba(15,47,56,0.18)]" />
        <div className="h-11 w-11 rounded-full bg-white/90 shadow-[0_18px_35px_rgba(15,47,56,0.18)]" />
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0  items-center justify-between flex">
        <button
          type="button"
          aria-label="Previous photos"
          className="pointer-events-auto ml-2 flex h-11 z-10 w-11 items-center justify-center rounded-full border border-white/80 bg-white/90 text-[#0f2f38] shadow-[0_18px_35px_rgba(15,47,56,0.22)] transition hover:-translate-x-0.5 hover:bg-white"
          onClick={() => scrollBySlides("prev")}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            className="h-4 w-4"
            fill="none"
          >
            <path
              d="M12.75 4.5L7.25 10l5.5 5.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Next photos"
          className="pointer-events-auto mr-2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/90 text-[#0f2f38] shadow-[0_18px_35px_rgba(15,47,56,0.22)] transition hover:translate-x-0.5 hover:bg-white"
          onClick={() => scrollBySlides("next")}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            className="h-4 w-4"
            fill="none"
          >
            <path
              d="M7.25 4.5L12.75 10l-5.5 5.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory rounded-2xl gap-6 overflow-x-auto pb-6 pt-1 scroll-smooth"
        aria-label="Life on campus photo carousel"
      >
        {campLifeGallery.map((scene, index) => (
          <figure
            key={scene.src}
            className="group relative w-[85%] shrink-0 snap-center sm:w-[68%] lg:w-[48%] xl:w-[40%]"
          >
            <div className="relative aspect-4/3 overflow-hidden rounded-[28px] border-8 border-white/70 bg-[#e3edf2] shadow-[0_22px_55px_rgba(15,47,56,0.18)]">
              <Image
                src={scene.src}
                alt={scene.alt}
                fill
                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 70vw, (max-width: 1280px) 50vw, 40vw"
                className="object-cover transition duration-700 ease-out group-hover:scale-105"
                loading={index < 3 ? "eager" : "lazy"}
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#0f2f38]/70 via-[#0f2f38]/20 to-transparent" />
            </div>
            {/* <figcaption className="absolute bottom-5 left-5 right-5 flex flex-col gap-2 rounded-2xl border border-white/25 bg-[#0f2f38]/45 p-4 text-white shadow-[0_18px_45px_rgba(15,47,56,0.25)] backdrop-blur">
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-[#f5c26b]">
                Life on campus
              </span>
              <span className="text-lg font-semibold leading-snug sm:text-xl">
                {scene.label}
              </span>
            </figcaption> */}
          </figure>
        ))}
      </div>
      {/* <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#6c7d83]">
        <span className="font-semibold uppercase tracking-[0.35em] text-[#b87745]">
          Swipe to explore
        </span>
        <span className="text-[0.7rem] uppercase tracking-[0.25em]">
          {campLifeGallery.length} scenes
        </span>
      </div> */}
    </div>
  </section>
  )
}