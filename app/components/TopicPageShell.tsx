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
  const isTreatmentApproach = content.kicker === "Treatment Approach";
  const isMentalHealth = content.kicker === "Mental Health";
  const isSubstanceAbuse = content.kicker === "Substance Abuse";
  const isColorizedDark = isMentalHealth || isSubstanceAbuse;
  const accentColor = isMentalHealth ? "#9ed8e8" : isSubstanceAbuse ? "#f7c99b" : "#f7c99b";
  const toc = content.sections.map((section) => ({
    id: toId(section.heading),
    heading: section.heading,
  }));

  return (
    <main
      className={
        isTreatmentApproach
          ? "beach-sky grain-overlay min-h-screen w-full overflow-hidden text-[#1f2a2e]"
          : isMentalHealth
            ? "topic-shell--mental min-h-screen w-full overflow-hidden text-white"
            : isSubstanceAbuse
              ? "topic-shell--substance min-h-screen w-full overflow-hidden text-white"
              : "min-h-screen overflow-hidden bg-linear-to-b from-[#0f2f38] via-[#1b4d5c] to-[#0f2f38] text-white"
      }
    >
      <HeroNav />

      <section className="relative px-6 pb-14 pt-32">
        <div className="mx-auto max-w-5xl text-center">
          <div
            className={
              isTreatmentApproach
                ? "hero-header glass-panel relative z-10 overflow-hidden p-8 sm:p-10 lg:p-12"
                : isColorizedDark
                  ? "hero-header glass-panel-dark relative z-10 overflow-hidden p-8 sm:p-10 lg:p-12"
                  : ""
            }
          >
            <p
              className={
                isTreatmentApproach
                  ? "text-xs font-semibold uppercase tracking-[0.35em] text-[#b87745]"
                  : isMentalHealth
                    ? "text-xs font-semibold uppercase tracking-[0.35em] text-[#9ed8e8]"
                    : isSubstanceAbuse
                      ? "text-xs font-semibold uppercase tracking-[0.35em] text-[#f7c99b]"
                      : "text-xs font-semibold uppercase tracking-[0.35em] text-[#f7c99b]"
              }
            >
              {content.kicker}
            </p>
            <h1
              className={
                isTreatmentApproach
                  ? "mt-4 text-4xl font-semibold leading-tight text-[#0f2f38] sm:text-5xl"
                  : isColorizedDark
                    ? "mt-4 font-display text-4xl font-light tracking-wide text-white md:text-5xl"
                    : "mt-4 font-display text-4xl font-light tracking-wide text-white md:text-5xl"
              }
            >
              {content.title}
            </h1>
            <p
              className={
                isTreatmentApproach
                  ? "mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#33545d]"
                  : "mx-auto mt-4 max-w-2xl text-lg text-white/75"
              }
            >
              {content.description}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/#intake"
                className={
                  isTreatmentApproach
                    ? "inline-flex items-center justify-center rounded-full bg-[#1c5a6b] px-8 py-3 text-base font-semibold text-white shadow-[0_18px_35px_rgba(28,90,107,0.2)] transition hover:-translate-y-0.5 hover:bg-[#174652]"
                    : isMentalHealth
                      ? "inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#0f6f84] to-[#19b1a6] px-8 py-3 text-base font-semibold text-white shadow-[0_18px_35px_rgba(16,111,132,0.35)] transition hover:-translate-y-0.5 hover:brightness-110"
                      : isSubstanceAbuse
                        ? "inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#b87745] to-[#1c5a6b] px-8 py-3 text-base font-semibold text-white shadow-[0_18px_35px_rgba(184,119,69,0.28)] transition hover:-translate-y-0.5 hover:brightness-110"
                        : "inline-flex items-center justify-center rounded-full bg-[#f7c99b] px-8 py-3 text-base font-semibold text-[#1f2a2e] transition hover:-translate-y-0.5 hover:bg-[#f2b87e]"
                }
              >
                Start Intake
              </Link>
              <Link
                href="/getting-started"
                className={
                  isTreatmentApproach
                    ? "inline-flex items-center justify-center rounded-full border border-[#1c5a6b33] px-8 py-3 text-base font-semibold text-[#1c5a6b] transition hover:border-[#1c5a6b] hover:bg-white/60"
                    : "inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3 text-base font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
                }
              >
                Admissions &amp; What to Expect
              </Link>
            </div>
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
                  className={
                    isTreatmentApproach
                      ? "scroll-mt-28 rounded-3xl border border-white/60 bg-white/90 p-8 shadow-[0_20px_60px_rgba(14,49,63,0.12)]"
                      : isColorizedDark
                        ? "scroll-mt-28 rounded-3xl border border-white/15 bg-linear-to-br from-white/12 via-white/6 to-white/2 p-8 backdrop-blur"
                        : "scroll-mt-28 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
                  }
                >
                  <h2
                    className={
                      isTreatmentApproach
                        ? "text-2xl font-semibold text-[#0f2f38] sm:text-3xl"
                        : "font-display text-2xl font-light tracking-wide text-white md:text-3xl"
                    }
                  >
                    {section.heading}
                  </h2>
                  <p
                    className={
                      isTreatmentApproach
                        ? "mt-4 whitespace-pre-line leading-7 text-[#2e454c]"
                        : "mt-4 whitespace-pre-line text-white/80 leading-7"
                    }
                  >
                    {section.body}
                  </p>
                  {section.bullets?.length ? (
                    <ul className="mt-6 grid gap-3 md:grid-cols-2">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className={
                            isTreatmentApproach
                              ? "rounded-2xl border border-[#e3e9eb] bg-[#fefcf8] p-4 text-sm text-[#2e454c]"
                              : isColorizedDark
                                ? "rounded-2xl border border-white/12 bg-white/6 p-4 text-sm text-white/80 border-l-4"
                                : "rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/75"
                          }
                          style={
                            isColorizedDark
                              ? { borderLeftColor: accentColor }
                              : undefined
                          }
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}

              <div
                className={
                  isTreatmentApproach
                    ? "rounded-3xl border border-white/60 bg-white/70 p-8 shadow-inner"
                    : isColorizedDark
                      ? "rounded-3xl border border-white/15 bg-linear-to-br from-white/12 via-white/6 to-white/2 p-8 backdrop-blur"
                      : "rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
                }
              >
                <p className={isTreatmentApproach ? "text-sm text-[#4a5c60]" : "text-sm text-white/70"}>
                  If you or someone you love needs help, we can walk you through next steps and build a plan
                  that fits your situation.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href="tel:9493501078"
                    className={
                      isTreatmentApproach
                        ? "inline-flex items-center justify-center rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-[#1c5a6b] transition hover:bg-white"
                        : isColorizedDark
                          ? "inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                          : "inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                    }
                  >
                    Call 949-350-1078
                  </Link>
                  <Link
                    href="mailto:info@footprintsrecovery.net"
                    className={
                      isTreatmentApproach
                        ? "inline-flex items-center justify-center rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-[#1c5a6b] transition hover:bg-white"
                        : isColorizedDark
                          ? "inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                          : "inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                    }
                  >
                    Email info@footprintsrecovery.net
                  </Link>
                  <Link
                    href="/"
                    className={
                      isTreatmentApproach
                        ? "inline-flex items-center justify-center rounded-full border border-[#1c5a6b33] px-6 py-3 text-sm font-semibold text-[#1c5a6b] transition hover:border-[#1c5a6b] hover:bg-white/60"
                        : "inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/10"
                    }
                  >
                    Back to Home
                  </Link>
                  <Link
                    href={`#${toc[0]?.id ?? ""}`}
                    className={
                      isTreatmentApproach
                        ? "inline-flex items-center justify-center rounded-full border border-[#1c5a6b33] px-6 py-3 text-sm font-semibold text-[#1c5a6b] transition hover:border-[#1c5a6b] hover:bg-white/60"
                        : "inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/10"
                    }
                  >
                    Back to top
                  </Link>
                </div>
                <p className={isTreatmentApproach ? "mt-6 text-xs leading-5 text-[#6a7b80]" : "mt-6 text-xs leading-5 text-white/55"}>
                  Educational information only; not medical advice. If you feel unsafe or at risk of harming
                  yourself or others, call 911 or go to the nearest emergency room.
                </p>
              </div>
            </div>

            <aside className="hidden lg:block lg:sticky lg:top-28">
              <div
                className={
                  isTreatmentApproach
                    ? "rounded-3xl border border-white/60 bg-white/70 p-6 shadow-inner"
                    : isColorizedDark
                      ? "rounded-3xl border border-white/15 bg-linear-to-br from-white/12 via-white/6 to-white/2 p-6 backdrop-blur"
                      : "rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                }
              >
                <p
                  className={
                    isTreatmentApproach
                      ? "text-xs font-semibold uppercase tracking-[0.35em] text-[#b87745]"
                      : isMentalHealth
                        ? "text-xs font-semibold uppercase tracking-[0.35em] text-[#9ed8e8]"
                        : "text-xs font-semibold uppercase tracking-[0.35em] text-[#f7c99b]"
                  }
                >
                  On this page
                </p>
                <nav className="mt-4 flex flex-col gap-2" aria-label="Table of contents">
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={
                        isTreatmentApproach
                          ? "rounded-xl border border-[#e3e9eb] bg-[#fefcf8] px-4 py-2 text-sm font-semibold text-[#1c5a6b] transition hover:border-[#b87745] hover:text-[#0b3a42]"
                          : isColorizedDark
                            ? "rounded-xl border border-white/12 bg-white/6 px-4 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/10 border-l-4"
                            : "rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
                      }
                      style={isColorizedDark ? { borderLeftColor: accentColor } : undefined}
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


