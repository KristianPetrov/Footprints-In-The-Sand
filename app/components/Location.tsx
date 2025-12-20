import Link from "next/link";
export default function Location(){
    return ( <section
        id="location"
        className="relative z-10 grid gap-8 rounded-3xl bg-white/90 p-8 shadow-[0_20px_60px_rgba(14,49,63,0.12)] lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch"
      >
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#1b3b44]">
            Location
          </p>
          <h2 className="text-3xl font-semibold text-[#0f2f38] sm:text-4xl">
            Minutes from the beach in Costa Mesa
          </h2>
          <p className="text-base leading-7 text-[#2e454c]">
            653 West 19th Street, Costa Mesa, CA
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="https://www.google.com/maps?q=653%20West%2019th%20Street%2C%20Costa%20Mesa%2C%20CA&output=embed"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#1c5a6b] px-6 py-2 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(28,90,107,0.15)] transition hover:-translate-y-0.5 hover:bg-[#174652]"
            >
              Open in Google Maps
            </Link>
            <Link
              href="#intake"
              className="inline-flex items-center justify-center rounded-full border border-[#1c5a6b33] px-6 py-2 text-sm font-semibold text-[#1c5a6b] transition hover:border-[#1c5a6b] hover:bg-white/60"
            >
              Start Intake
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-[#e3e9eb] bg-white shadow-sm">
          <div className="relative aspect-[16/10] w-full">
            <iframe
              title="Footprints In The Sand 2 Recovery location map"
              src="https://www.google.com/maps?q=653%20West%2019th%20Street%2C%20Costa%20Mesa%2C%20CA&output=embed"
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>)
}