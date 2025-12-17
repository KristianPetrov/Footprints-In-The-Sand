"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type ProcessGroupSlide = {
  src: string;
  alt: string;
  focus: string;
  quote: string;
  facilitator: string;
};

type ProcessGroupsShowcaseProps = {
  slides: ProcessGroupSlide[];
};

export function ProcessGroupsShowcase({ slides }: ProcessGroupsShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = slides.length;

  useEffect(() => {
    if (totalSlides <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, 6000);

    return () => clearInterval(timer);
  }, [totalSlides]);

  const activeSlide = useMemo(() => slides[activeIndex], [slides, activeIndex]);

  if (!totalSlides) {
    return null;
  }

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  return (
    <div className="flex h-full flex-col gap-4 rounded-3xl border border-[#e2ecef] bg-white/95 p-4 shadow-lg sm:p-6">
      <div className="relative min-h-[280px] overflow-hidden rounded-2xl bg-[#e5eef2]">
        <Image
          key={activeSlide.src}
          src={activeSlide.src}
          alt={activeSlide.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071c22]/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-black/20 p-4 text-white backdrop-blur-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
            {activeSlide.focus}
          </p>
          <p className="mt-2 text-base leading-6 text-white">{activeSlide.alt}</p>
        </div>
        {totalSlides > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous slide"
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-sm font-semibold text-[#0f2f38] shadow-md transition hover:bg-white"
            >
              Prev
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-sm font-semibold text-[#0f2f38] shadow-md transition hover:bg-white"
            >
              Next
            </button>
          </>
        )}
      </div>

      <div className="flex flex-col gap-4 rounded-2xl bg-[#f8fbfd] p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-[#1b3b44]">Process Group Voices</p>
          <p className="mt-2 text-lg font-semibold text-[#0f2f38]">{activeSlide.quote}</p>
          <p className="text-sm text-[#4c5f65]">Facilitated by {activeSlide.facilitator}</p>
        </div>
        {totalSlides > 1 && (
          <div className="flex gap-2 self-start sm:self-auto">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 w-8 rounded-full transition ${
                  activeIndex === index ? "bg-[#0f2f38]" : "bg-[#c8d7dc] hover:bg-[#9fb4bb]"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}













