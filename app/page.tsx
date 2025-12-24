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
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";
import Header from "./components/Header";
import { RecoveryModalities } from "./components/RecoveryModalities";


export default function Home ()
{
  return (
    <div className="beach-sky grain-overlay min-h-screen w-full overflow-hidden text-[#1f2a2e]">
      <HeroNav />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-16 pt-24 sm:px-8 lg:px-12 lg:pb-24 lg:pt-32">
        <Image
          src="/footprints.svg"
          alt=""
          width={200}
          height={320}
          className="pointer-events-none absolute -right-8 bottom-10 opacity-70"
          aria-hidden="true"
        />

        <Header />
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
