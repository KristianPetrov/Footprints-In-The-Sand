import Link from "next/link";
import { HeroNav } from "./HeroNav";
import type { TopicPageContent } from "../lib/topicContent";

type Props = {
  content: TopicPageContent;
};

function toId (value: string)
{
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function TopicPageShell ({ content }: Props)
{
  const toc = content.sections.map((section) => ({
    id: toId(section.heading),
    heading: section.heading,
  }));

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0f2f38] via-[#1b4d5c] to-[#0f2f38] overflow-hidden">
      <HeroNav />

      <section className="relative px-6 pb-14 pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f7c99b]">
            {content.kicker}
          </p>
          <h1 className="mt-4 font-display text-4xl font-light tracking-wide text-white md:text-5xl">
            {content.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            {content.description}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/#intake"
              className="inline-flex items-center justify-center rounded-full bg-[#f7c99b] px-8 py-3 text-base font-semibold text-[#1f2a2e] transition hover:-translate-y-0.5 hover:bg-[#f2b87e]"
            >
              Start Intake
            </Link>
            <Link
              href="/getting-started"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3 text-base font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
            >
              Admissions &amp; What to Expect
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start">
            <div className="space-y-8">
              {content.sections.map((section) => (
                <article
                  key={section.heading}
                  id={toId(section.heading)}
                  className="scroll-mt-28 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
                >
                  <h2 className="font-display text-2xl font-light tracking-wide text-white md:text-3xl">
                    {section.heading}
                  </h2>
                  <p className="mt-4 whitespace-pre-line text-white/75 leading-7">
                    {section.body}
                  </p>
                  {section.bullets?.length ? (
                    <ul className="mt-6 grid gap-3 md:grid-cols-2">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/75"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <p className="text-sm text-white/70">
                  If you or someone you love needs help, we can walk you through next steps and build a plan
                  that fits your situation.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href="tel:9493501078"
                    className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                  >
                    Call 949-350-1078
                  </Link>
                  <Link
                    href="mailto:info@footprintsrecovery.net"
                    className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                  >
                    Email info@footprintsrecovery.net
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/10"
                  >
                    Back to Home
                  </Link>
                  <Link
                    href={`#${toc[0]?.id ?? ""}`}
                    className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/10"
                  >
                    Back to top
                  </Link>
                </div>
                <p className="mt-6 text-xs leading-5 text-white/55">
                  Educational information only; not medical advice. If you feel unsafe or at risk of harming
                  yourself or others, call 911 or go to the nearest emergency room.
                </p>
              </div>
            </div>

            <aside className="hidden lg:block lg:sticky lg:top-28">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f7c99b]">
                  On this page
                </p>
                <nav className="mt-4 flex flex-col gap-2" aria-label="Table of contents">
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
                    >
                      {item.heading}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}


