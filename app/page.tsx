import type { Metadata } from "next";
import Image from "next/image";
import { HeroNav } from "./components/HeroNav";
import Location from "./components/Location";
import Services from "./components/Services";
import GetStartedBanner from "./components/GetStartedBanner";
import Program from "./components/Program";
import Treatment from "./components/Treatment";
import Mission from "./components/Mission";
import Gallery from "./components/Gallery";
import FacilityTour from "./components/FacilityTour";
import Intake from "./components/Intake";
import Care from "./components/Care"
import Team from "./components/Team";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";
import Header from "./components/Header";
import WhoWhy from "./components/WhoWhy";
import { RecoveryModalities } from "./components/RecoveryModalities";
import { buildPageMetadata } from "./lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Outpatient PHP & IOP in Costa Mesa | Live Clean & Focused",
  description:
    "An elevated approach to living clean and focused. PHP and IOP outpatient programs in Costa Mesa for adults ready to move forward with clarity.",
  path: "/",
  ogType: "website",
});


export default function Home ()
{
  return (
    <div className="beach-sky grain-overlay min-h-screen w-full overflow-hidden text-[#1f2a2e]">
      <HeroNav />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 pb-10 pt-1 sm:gap-10 sm:px-8 sm:pt-2 lg:gap-12 lg:px-12 lg:pb-14 lg:pt-3">
        <Image
          src="/footprints.svg"
          alt=""
          width={200}
          height={320}
          className="pointer-events-none absolute -right-8 bottom-10 opacity-70"
          aria-hidden="true"
        />

        <div className="flex flex-col gap-0 sm:gap-1">
          <Header />
          <GetStartedBanner />
        </div>
        <WhoWhy />
        <Program />
        <Location />
        <FacilityTour />
        <Treatment />
        <Mission />
        {/* <ProcessGroups /> */}
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
