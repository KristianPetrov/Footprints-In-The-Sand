"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const facilityTourGallery = [
  {
    src: "/facility-backyard.jpeg",
    alt: "Backyard area of the Footprints In The Sand 2 Recovery facility.",
    label: "Backyard",
  },
  {
    src: "/facility-basketball-hoop.jpg",
    alt: "Basketball hoop and outdoor recreation area at the facility.",
    label: "Basketball",
  },
  {
    src: "/facility-corner-view.jpg",
    alt: "Exterior corner view of the Footprints In The Sand 2 Recovery facility.",
    label: "Exterior View",
  },
  {
    src: "/facility-food-court.jpeg",
    alt: "Food court area inside the facility.",
    label: "Food Court",
  },
  {
    src: "/facility-lets-eat.jpeg",
    alt: "Dining area prepared for a shared meal at the facility.",
    label: "Dining",
  },
  {
    src: "/facility-living-area.jpg",
    alt: "Living area seating space inside the facility.",
    label: "Living Area",
  },
  {
    src: "/facility-lounge-area.jpeg",
    alt: "Lounge area inside the facility.",
    label: "Lounge",
  },
];

export default function FacilityTour ()
{
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = facilityTourGallery.length;
  const activeSlide = useMemo(
    () => facilityTourGallery[activeIndex],
    [activeIndex]
  );

  useEffect(() =>
  {
    if (isPaused) {
      return undefined;
    }
    const interval = window.setInterval(() =>
    {
      setActiveIndex((current) => (current + 1) % totalSlides);
    }, 8000);

    return () => window.clearInterval(interval);
  }, [isPaused, totalSlides]);

  const handlePrevious = () =>
  {
    setActiveIndex((current) => (current - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () =>
  {
    setActiveIndex((current) => (current + 1) % totalSlides);
  };

  return (
    <section
      id="facility-tour"
      className="relative z-10 flex flex-col gap-8 rounded-3xl bg-white/80 p-8 shadow-[0_25px_70px_rgba(17,45,58,0.15)]"
    >
      <div className="flex flex-col gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#1b3b44]">
          Tour The Facility
        </p>
        <h2 className="text-3xl font-semibold text-[#0f2f38] sm:text-4xl">
          A space built for calm, connection, and consistency
        </h2>
        <p className="text-base leading-7 text-[#2e454c]">
          Take a look around the campus—comfortable common areas, places to gather, and outdoor spaces
          designed to support steady routines and real recovery.
        </p>
      </div>

      <div className="flex flex-col items-center gap-6">
        <div className="w-full max-w-6xl">
          <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-[#e2ecef] bg-[#e3edf2]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}>
            {facilityTourGallery.map((scene, index) =>
            {
              const isActive = index === activeIndex;
              const isLounge = scene.src === "/facility-lounge-area.jpeg";
              return (
                <div
                  key={scene.src}
                  className={`absolute inset-0 transition duration-900 ease-out ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-105"
                    }`}
                  aria-hidden={!isActive}
                >
                  <Image
                    src={scene.src}
                    alt={scene.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                    priority={index === 0}
                    loading={isLounge ? "eager" : undefined}
                    unoptimized={isLounge}
                  />
                </div>
              );
            })}
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#0f2f38]/35 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 px-4 pb-4">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/90">
                {activeSlide.label}
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrevious}
                  aria-label="Previous facility photo"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white transition hover:bg-white/20"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next facility photo"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white transition hover:bg-white/20"
                >
                  →
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-5">
            {facilityTourGallery.map((scene, index) =>
            {
              const isActive = index === activeIndex;
              return (
                <button
                  key={scene.src}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group relative aspect-4/3 overflow-hidden rounded-2xl border ${isActive
                      ? "border-[#0f2f38] ring-2 ring-[#0f2f38]/30"
                      : "border-[#e2ecef]"
                    }`}
                  aria-label={`View ${scene.label}`}
                >
                  <Image
                    src={scene.src}
                    alt={scene.alt}
                    fill
                    sizes="(max-width: 640px) 30vw, (max-width: 1024px) 20vw, 12vw"
                    className={`object-cover transition duration-300 ${isActive ? "scale-100" : "group-hover:scale-105"
                      }`}
                    loading="lazy"
                  />
                  <span
                    className={`absolute inset-0 bg-[#0f2f38]/40 transition ${isActive ? "opacity-0" : "opacity-0 group-hover:opacity-20"
                      }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
        {/* <div className="rounded-3xl border border-[#e2ecef] bg-white p-6 text-sm leading-6 text-[#2e454c] shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#b87745]">
            Explore The Campus
          </p>
          <p className="mt-4 text-base leading-7 text-[#2e454c]">
            Scroll through highlighted spaces to get a feel for daily life at Footprints In The Sand 2
            Recovery. Tap a thumbnail to jump to a specific view or use the arrows for a guided tour.
          </p>
        </div> */}
      </div>
    </section>
  );
}

