import Link from "next/link";
import Image from "next/image";
const teamMembers = [
  {
    name: "Tiffany Monterroso",
    title: "Executive Director",
    image: "/tiffany-monterroso-photo-crop.png",
    id: "tiffany-monterroso"
  },
  {
    name: "Alyssa Van Boxmeer",
    title: "Clinical Director",
    credentials: "LMFT",
    image: "/alyssa-boxmeer-photo.png",
    id: "alyssa-van-boxmeer",

  },
  {
    name:"Megan Burrage",
    title:"Program Director",
    credentials:"CADC-I",
    image:"/megan-burrage-portrait.PNG",
    id:"megan-burrage"
  },
  {
    name: "Jennifer Vasey",
    title: "Program Supervisor",
    credentials: "RADT",
    image: "/jenn-profile-photo.png",
    id: "jennifer-vasey",

  },
  {
    name: "Wade Stephens",
    title: "Lead Case Manager",
    image: "/wade-profile-photo.jpeg",
    id: "wade-stephens",
  },
  {
    name: "Tazia Shaw",
    title: "Case Manager",
    image: "/tazia-profile-photo.png",
    id: "tazia-shaw",
  },
  {
    name: "Sandy Bekhit MS",
    title: "Therapist",
    image: "/sandy-bhekit-photo.jpeg",
    id: "sandy-bekhit"
  }
];
export default function Team ()
{
  return (<section
    id="team"
    className="relative z-10 flex flex-col gap-10 rounded-3xl bg-white/90 p-8 shadow-[0_20px_60px_rgba(14,49,63,0.12)]"
  >
    <div className="flex flex-col gap-3 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#1b3b44]">
        Our Team
      </p>
      <h2 className="text-3xl font-semibold text-[#0f2f38] sm:text-4xl">
        The People Who Walk With You
      </h2>
      <p className="text-base leading-7 text-[#2e454c]">
        Meet the dedicated professionals committed to your recovery journey.
      </p>
    </div>
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 lg:max-w-2xl lg:mx-auto">
      {teamMembers.map((member) => (
        <Link
          key={member.name}
          href={`/team#${member.id}`}
          className="group flex flex-col items-center gap-4 rounded-2xl border border-[#e3e9eb] bg-[#fefcf8] p-6 transition hover:border-[#b87745] hover:shadow-lg"
        >
          <div className="relative aspect-2/3 w-48 overflow-hidden rounded-xl ">
            <Image
              src={member.image}
              alt={`${member.name} - ${member.title}`}
              fill
              sizes="(max-width: 640px) 100vw, 192px"
              className="object-contain object-top"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-lg font-semibold text-[#0f2f38] group-hover:text-[#b87745] transition">
              {member.name}
            </h3>
            <p className="text-sm text-[#1b5a6d]">{member.title}</p>
          </div>
        </Link>
      ))}
    </div>
    <div className="flex justify-center">
      <Link
        href="/team"
        className="inline-flex items-center justify-center rounded-full border border-[#1c5a6b33] px-6 py-2 text-sm font-semibold text-[#1c5a6b] transition hover:border-[#1c5a6b] hover:bg-white/60"
      >
        Learn More About Our Team
      </Link>
    </div>
  </section>
  )
}