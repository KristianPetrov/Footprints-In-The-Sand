import Image from "next/image";

const facilityTourGallery = [
  {
    src: "/facility-backyard.jpeg",
    alt: "Backyard area of the Footprints In The Sand 2 Recovery facility.",
    label: "Backyard",
  },
  {
    src: "/facility-basketball-hoop.jpg",
    alt: "Basketball hoop and outdoor recreation area at the facility.",
    label: "Basketball",
  },
  {
    src: "/facility-corner-view.jpg",
    alt: "Exterior corner view of the Footprints In The Sand 2 Recovery facility.",
    label: "Exterior View",
  },
  {
    src: "/facility-food-court.jpeg",
    alt: "Food court area inside the facility.",
    label: "Food Court",
  },
  {
    src: "/facility-lets-eat.jpeg",
    alt: "Dining area prepared for a shared meal at the facility.",
    label: "Dining",
  },
  {
    src: "/facility-living-area.jpg",
    alt: "Living area seating space inside the facility.",
    label: "Living Area",
  },
  {
    src: "/facility-lounge-area.jpeg",
    alt: "Lounge area inside the facility.",
    label: "Lounge",
  },
];

export default function FacilityTour ()
{
  return (
    <section
      id="facility-tour"
      className="relative z-10 flex flex-col gap-8 rounded-3xl bg-white/80 p-8 shadow-[0_25px_70px_rgba(17,45,58,0.15)]"
    >
      <div className="flex flex-col gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#1b3b44]">
          Tour The Facility
        </p>
        <h2 className="text-3xl font-semibold text-[#0f2f38] sm:text-4xl">
          A space built for calm, connection, and consistency
        </h2>
        <p className="text-base leading-7 text-[#2e454c]">
          Take a look around the campus—comfortable common areas, places to gather, and outdoor spaces
          designed to support steady routines and real recovery.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {facilityTourGallery.map((scene, index) => (
          <figure
            key={scene.src}
            className="group flex flex-col gap-3 rounded-3xl border border-[#e2ecef] bg-white p-3 shadow-sm"
          >
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-[#e3edf2]">
              <Image
                src={scene.src}
                alt={scene.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
                loading={index < 3 ? "eager" : "lazy"}
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#0f2f38]/30 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
            </div>
            {/* <figcaption className="flex flex-col gap-1 px-1 pb-3">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b87745]">
                {scene.label}
              </p>
            </figcaption> */}
          </figure>
        ))}
      </div>
    </section>
  );
}

