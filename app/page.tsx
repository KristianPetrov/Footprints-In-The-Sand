import Image from "next/image";
import { HeroNav } from "./components/HeroNav";
import Location from "./components/Location";
import Services from "./components/Services";
import GetStartedBanner from "./components/GetStartedBanner";
import Program from "./components/Program";
import Treatment from "./components/Treatment";
import Mission from "./components/Mission";
import Gallery from "./components/Gallery";
import ProcessGroups from "./components/ProcessGroups";
import Intake from "./components/Intake";
import Care from "./components/Care"
import Team from "./components/Team";
import Footer from "./components/Footer"
import Certifications from "./components/Certifications";
import { RecoveryModalities } from "./components/RecoveryModalities";


export default function Home ()
{
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
        <GetStartedBanner />
        <Program />
        <Location />
        <Treatment />
        <Mission />
        <ProcessGroups />
        <Gallery />
        <Care />
        <RecoveryModalities />
        <Services />
        <Intake />
        <Team />
        <Certifications />
        <Footer />
      </div>
    </div>
  );
}
