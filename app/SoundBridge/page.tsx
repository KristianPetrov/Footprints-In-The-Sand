import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Link from "next/link";
import { HeroNav } from "../components/HeroNav";
import { buildPageMetadata } from "../lib/seo";
import styles from "./soundbridge.module.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = buildPageMetadata({
  title: "SOUNDBRIDGE — Vibrate Higher | Footprints In The Sand 2 Recovery",
  description:
    "75-minute sound bath in Costa Mesa: Paiste gong and crystal quartz singing bowls. Small groups, deep nervous-system recovery. First visit $40.",
  path: "/SoundBridge",
});

function SoundBridgeLogo ()
{
  return (
    <svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M 150 160 Q 300 40 450 160"
        fill="none"
        stroke="#1a2744"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M 180 175 Q 300 100 420 175"
        fill="none"
        stroke="#1a2744"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M 150 175 L 220 178 L 380 178 L 450 175"
        fill="none"
        stroke="#b8935a"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <g stroke="#1a2744" strokeWidth="2" strokeLinecap="round">
        <line x1="240" y1="145" x2="240" y2="165" />
        <line x1="250" y1="135" x2="250" y2="175" />
        <line x1="260" y1="140" x2="260" y2="170" />
      </g>
      <g stroke="#b8935a" strokeWidth="2" strokeLinecap="round">
        <line x1="290" y1="120" x2="290" y2="190" />
        <line x1="300" y1="105" x2="300" y2="205" />
        <line x1="310" y1="115" x2="310" y2="195" />
        <line x1="320" y1="125" x2="320" y2="185" />
      </g>
      <g stroke="#1a2744" strokeWidth="2" strokeLinecap="round">
        <line x1="340" y1="140" x2="340" y2="170" />
        <line x1="350" y1="135" x2="350" y2="175" />
        <line x1="360" y1="145" x2="360" y2="165" />
      </g>
      <text
        x="300"
        y="245"
        textAnchor="middle"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="42"
        fontWeight="400"
        letterSpacing="8"
        fill="#1a2744"
      >
        SOUND
      </text>
      <text x="382" y="245" textAnchor="middle" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="42" fill="#b8935a">
        ·
      </text>
      <text
        x="468"
        y="245"
        textAnchor="middle"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="42"
        fontWeight="400"
        letterSpacing="8"
        fill="#b8935a"
      >
        BRIDGE
      </text>
    </svg>
  );
}

export default function SoundBridgePage ()
{
  const fontWrap = `${cormorant.variable} ${montserrat.variable} ${styles.root}`;

  return (
    <main className="beach-sky grain-overlay min-h-screen w-full overflow-x-clip text-[#1f2a2e]">
      <HeroNav />
      <div className={fontWrap}>
        <nav className={styles.innerNav} aria-label="SOUNDBRIDGE">
          <div className={styles.navLogo}>
            <span className={styles.logoSound}>SOUND</span>
            <span className={styles.logoDot}>·</span>
            <span className={styles.logoBridge}>BRIDGE</span>
          </div>
        </nav>

        <section className={styles.hero} aria-labelledby="soundbridge-hero-heading">
          <div className={styles.heroLogo}>
            <SoundBridgeLogo />
          </div>

          <p className={`${styles.tagline} ${styles.sans}`}>Vibrate Higher</p>

          <h1 id="soundbridge-hero-heading" className={styles.heroTitle}>
            75 minutes.
            <br />
            <em className={styles.heroTitleEm}>No talking. No effort. Just sound.</em>
          </h1>

          <p className={styles.heroSub}>
            A deep recovery experience for the nervous system — in Costa Mesa, California.
          </p>

          <Link href="#book" className={`${styles.btn} ${styles.sans}`}>
            Reserve Your Spot
          </Link>
        </section>

        <section className={styles.section} aria-labelledby="experience-heading">
          <div className={styles.container}>
            <p className={`${styles.sectionLabel} ${styles.sans}`}>The Experience</p>
            <h2 id="experience-heading" className={styles.sectionHeading}>
              Sound as medicine.
            </h2>
            <div className={styles.divider} />

            <div className={styles.experienceCopy}>
              <p>Sound is one of the oldest tools for moving the body out of stress and into repair.</p>
              <p>
                SOUNDBRIDGE uses a professional Paiste gong and crystal quartz singing bowls to guide you into
                the state your body repairs, rebuilds, and rests in — without asking anything of you.
              </p>
              <p>Lie down. Close your eyes. Let the sound do the rest.</p>
            </div>
          </div>
        </section>

        <section className={styles.sectionIvory} aria-labelledby="expect-heading">
          <div className={styles.container}>
            <p className={`${styles.sectionLabel} ${styles.sans}`}>What You Can Expect</p>
            <h2 id="expect-heading" className={styles.sectionHeading}>
              The shift you feel afterward.
            </h2>
            <div className={styles.divider} />

            <ul className={styles.benefits}>
              <li className={styles.benefit}>
                <span className={styles.benefitMark} aria-hidden="true">
                  —
                </span>
                <span className={styles.benefitText}>Drop into parasympathetic state within minutes</span>
              </li>
              <li className={styles.benefit}>
                <span className={styles.benefitMark} aria-hidden="true">
                  —
                </span>
                <span className={styles.benefitText}>Release tension held below the reach of massage</span>
              </li>
              <li className={styles.benefit}>
                <span className={styles.benefitMark} aria-hidden="true">
                  —
                </span>
                <span className={styles.benefitText}>Sleep deeper the same night</span>
              </li>
              <li className={styles.benefit}>
                <span className={styles.benefitMark} aria-hidden="true">
                  —
                </span>
                <span className={styles.benefitText}>
                  Leave with the clarity most meditation apps promise but rarely deliver
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="why-heading">
          <div className={styles.container}>
            <p className={`${styles.sectionLabel} ${styles.sans}`}>Why SOUNDBRIDGE</p>
            <h2 id="why-heading" className={styles.sectionHeading}>
              Built differently.
            </h2>
            <div className={styles.divider} />

            <div className={styles.differentiators}>
              <div className={styles.diffItem}>
                <div className={styles.diffNumber}>75</div>
                <div className={`${styles.diffLabel} ${styles.sans}`}>Minutes</div>
                <div className={styles.diffText}>
                  The industry standard is 45. We go deeper because the body takes time to let go.
                </div>
              </div>
              <div className={styles.diffItem}>
                <div className={styles.diffNumber}>12</div>
                <div className={`${styles.diffLabel} ${styles.sans}`}>Seats Only</div>
                <div className={styles.diffText}>Intimate sessions. Never crowded. Never rushed.</div>
              </div>
              <div className={styles.diffItem}>
                <div className={styles.diffNumber}>2</div>
                <div className={`${styles.diffLabel} ${styles.sans}`}>Instruments</div>
                <div className={styles.diffText}>
                  Professional Paiste gong and crystal quartz singing bowls — nothing else.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sectionIvory} id="book" aria-labelledby="schedule-heading">
          <div className={styles.container}>
            <p className={`${styles.sectionLabel} ${styles.sans}`}>Schedule &amp; Pricing</p>
            <h2 id="schedule-heading" className={styles.sectionHeading}>
              Reserve your session.
            </h2>
            <div className={styles.divider} />

            <div className={styles.scheduleCard}>
              <div className={styles.scheduleDay}>Thursdays &amp; Saturdays</div>
              <div className={`${styles.scheduleTime} ${styles.sans}`}>7:00 PM · 75 Minutes</div>
              <div className={styles.scheduleLocation}>Costa Mesa, California</div>

              <div className={styles.pricing}>
                <div className={styles.priceRow}>
                  <span className={styles.priceLabel}>Drop-in</span>
                  <span className={styles.priceValue}>$55</span>
                </div>
                <div className={styles.priceRow}>
                  <span className={styles.priceLabel}>Monthly Unlimited</span>
                  <span className={styles.priceValue}>$120</span>
                </div>
                <div className={styles.priceRow}>
                  <span className={styles.priceLabel}>Private Session</span>
                  <span className={styles.priceValue}>$350–500</span>
                </div>
              </div>

              <div className={styles.introOffer}>
                <div className={`${styles.introOfferLabel} ${styles.sans}`}>First Time</div>
                <div className={styles.introOfferText}>$40. Then decide.</div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection} aria-labelledby="cta-heading">
          <div className={styles.container}>
            <h2 id="cta-heading" className={styles.ctaHeading}>
              Come once.
              <br />
              Feel the difference.
            </h2>
            <div className={styles.ctaDivider} />
            <p className={styles.ctaText}>
              Bookings open now. Space is limited to twelve participants per session.
            </p>
            <span className={`${styles.ctaBtnDisabled} ${styles.sans}`} aria-disabled="true">
              Book on Vagaro
            </span>
            <p className={`${styles.spotsNote} ${styles.sans}`}>Link Coming Soon</p>
          </div>
        </section>

        <footer className={styles.footer}>
          <div className={styles.footerLogo}>
            <span className={styles.footerWordSound}>SOUND</span>
            <span className={styles.logoDot}>·</span>
            <span className={styles.logoBridge}>BRIDGE</span>
          </div>
          <div className={`${styles.footerInfo} ${styles.sans}`}>
            Costa Mesa, CA
            <span className={styles.footerSep}>·</span>
            <a
              href="https://soundbridge.co"
              className="underline decoration-[rgba(184,147,90,0.5)] underline-offset-2 transition hover:decoration-[#b8935a]"
              target="_blank"
              rel="noopener noreferrer"
            >
              soundbridge.co
            </a>
          </div>
          <p className={`${styles.sans} mt-6 text-xs tracking-[0.2em] text-[rgba(245,237,226,0.45)]`}>
            <Link href="/" className="transition hover:text-[#c5a572]">
              ← Footprints In The Sand 2 Recovery
            </Link>
          </p>
        </footer>
      </div>
    </main>
  );
}
