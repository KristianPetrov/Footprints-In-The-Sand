"use client";

import { IntakeForm } from "../components/IntakeForm";
import { HeroNav } from "../components/HeroNav";

export default function GettingStartedPage ()
{
  return (
    <main className="min-h-screen bg-linear-to-b from-[#0f2f38] via-[#1b4d5c] to-[#0f2f38] overflow-hidden">
      <HeroNav />
      {/* Hero Section */}
      <section className="relative px-6 pb-16 pt-32 text-center">
        <h1 className="font-display text-4xl font-light tracking-wide text-white md:text-5xl">
          Getting Started
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
          Your journey to recovery begins here. Learn about our admissions process, what to expect, and take the first step today.
        </p>
      </section>

      {/* Admissions Process Section */}
      <section id="admissions" className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-light tracking-wide text-white md:text-4xl">
            Admissions Process
          </h2>
          <p className="mt-4 text-white/70">
            We've designed our admissions process to be as smooth and stress-free as possible. Here's what you can expect:
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#f7c99b]/20 text-xl font-bold text-[#f7c99b]">
                1
              </div>
              <h3 className="text-lg font-semibold text-white">Initial Contact</h3>
              <p className="mt-2 text-sm text-white/60">
                Reach out via phone or complete our online intake form. Our caring admissions team is available 24/7 to answer your questions.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#f7c99b]/20 text-xl font-bold text-[#f7c99b]">
                2
              </div>
              <h3 className="text-lg font-semibold text-white">Assessment</h3>
              <p className="mt-2 text-sm text-white/60">
                We'll conduct a confidential assessment to understand your unique situation and determine the best treatment approach for you.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#f7c99b]/20 text-xl font-bold text-[#f7c99b]">
                3
              </div>
              <h3 className="text-lg font-semibold text-white">Verification & Arrival</h3>
              <p className="mt-2 text-sm text-white/60">
                We'll verify your insurance benefits and coordinate your arrival. Transportation assistance is available if needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section id="what-to-expect" className="bg-white/5 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-light tracking-wide text-white md:text-4xl">
            What To Expect Your First Week
          </h2>
          <p className="mt-4 text-white/70">
            The first week of treatment can feel overwhelming, but our team is here to support you every step of the way.
          </p>
          <div className="mt-10 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold text-[#f7c99b]">Day 1: Arrival & Orientation</h3>
              <p className="mt-2 text-white/70">
                You'll be welcomed by our staff, complete intake paperwork, meet with medical professionals for an initial health assessment, and get settled into your room. We'll give you a tour of the facility and introduce you to the daily schedule.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold text-[#f7c99b]">Days 2-3: Getting Settled</h3>
              <p className="mt-2 text-white/70">
                You'll begin meeting with your therapist to discuss your history and establish your treatment goals. This is also a time to adjust to the daily rhythm, connect with peers, and start building trust with staff.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold text-[#f7c99b]">Days 4-7: Beginning Treatment</h3>
              <p className="mt-2 text-white/70">
                You'll start participating in group therapy sessions, individual counseling, and holistic activities. By the end of your first week, you'll have a personalized treatment plan and start building connections with peers in recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Online Intake Section */}
      <section id="intake" className="px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center font-display text-3xl font-light tracking-wide text-white md:text-4xl">
            Online Intake Form
          </h2>
          <p className="mt-4 text-center text-white/70">
            Ready to take the first step? Complete our confidential intake form and a member of our team will reach out within 24 hours.
          </p>
          <div className="mt-10">
            <IntakeForm />
          </div>
        </div>
      </section>
    </main>
  );
}












