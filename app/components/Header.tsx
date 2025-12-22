import Image from "next/image";
export default function Header(){
    return (

        <div className="hero-logo-stage">
          <div className="hero-logo-flames" aria-hidden="true">
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
    )
}