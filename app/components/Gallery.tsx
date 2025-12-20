import Image from "next/image";

const campLifeGallery = [
    {
      src: "/birds-eye-view-facility.jpg",
      alt: "Outside view of the Footprints In The Sand 2 Recovery campus.",
      label: "The Footprints In The Sand 2 Recovery campus",
    },
    {
      src: "/happy-client-sitting-on-staircase.jpg",
      alt: "Client sitting on a sunlit staircase.",
      label: "Quiet reflection",
    },
    {
      src: "/happy-group-photo-in-nature.jpg",
      alt: "Clients smiling together while standing in a lush natural setting.",
      label: "Nature walks",
    },
    {
      src: "/happy-group-picture-outside.jpg",
      alt: "Large recovery group smiling outside the facility.",
      label: "Community pride",
    },
    {
      src: "/man-walking-outside-facility.jpg",
      alt: "Client walking calmly along the exterior path of the facility.",
      label: "Daily grounding",
    },
    {
      src: "/nightime-campfire-toasted-marshmellow.jpg",
      alt: "Client roasting a toasted marshmallow during a nighttime campfire.",
      label: "Campfire rituals",
    },
    {
      src: "/recovery-group-behind-couch.jpg",
      alt: "Clients listening intently to a group session.",
      label: "Listening hearts",
    },
    {
      src: "/recovery-group-sunglasses-dudes.jpg",
      alt: "Clients in sunglasses sitting together and talking outdoors.",
      label: "Brotherhood moments",
    },

    {
      src: "/recovery-group.jpg",
      alt: "Large circle of men engaged in a group session.",
      label: "Deep work",
    },
    {
      src: "/wholesome-hugging-couple.jpg",
      alt: "Smiling couple hugging each other during an outdoor break.",
      label: "Restored relationships",
    },
  ];
export default function Gallery(){
    return (   <section
        id="gallery"
        className="relative z-10 flex flex-col gap-8 rounded-3xl bg-white/80 p-8 shadow-[0_25px_70px_rgba(17,45,58,0.15)]"
      >
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#1b3b44]">
            Life On Campus
          </p>
          <h2 className="text-3xl font-semibold text-[#0f2f38] sm:text-4xl">
            Moments that keep recovery human
          </h2>
          <p className="text-base leading-7 text-[#2e454c]">
            From sunrise journaling to nighttime campfires, every gathering reinforces belonging. These scenes
            capture the safety, accountability, and joy our community builds together every single day.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {campLifeGallery.map((scene, index) => (
            <figure
              key={scene.src}
              className="group flex flex-col gap-3 rounded-3xl border border-[#e2ecef] bg-white p-3 shadow-sm"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#e3edf2]">
                <Image
                  src={scene.src}
                  alt={scene.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                  loading={index < 3 ? "eager" : "lazy"}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f2f38]/30 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              </div>
              <figcaption className="flex flex-col gap-1 px-1 pb-3">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b87745]">
                  {scene.label}
                </p>
                <p className="text-sm text-[#3b5259]">{scene.alt}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
)
}