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
          src="/transparent-logo-white.png"
          alt="Footprints In The Sand 2 Recovery"
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 640px"
          priority
          className="hero-logo-img"
        />
      </div>
    </div>
  )
}