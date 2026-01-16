import Image from "next/image";
export default function Header ()
{
  return (

    <div className="hero-logo-stage">
      <div className="hero-logo-flames" aria-hidden="true">
        <span className="hero-logo-shimmer" />
      </div>
      <div className="hero-logo-imgWrap">
        <Image
          src="/footprints-logo-no-back.png"
          alt="Footprints In The Sand 2 Recovery minimal logo"
          fill
          sizes="(max-width: 640px) 75vw, (max-width: 1024px) 60vw, 420px"
          priority
          className="hero-logo-img"
        />
      </div>
    </div>
  )
}