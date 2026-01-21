const whoThisIsFor = [
  "Adults who’ve lived hard and want clarity",
  "People done with chaos, not personality",
  "Those ready for structure without being boxed in",
];

const whyFootprints = [
  "Small, focused outpatient environment",
  "Clear structure without institutional feel",
  "Insurance accepted and access kept simple",
];

export default function WhoWhy ()
{
  return (
    <section
      id="who-why"
      className="relative z-10 overflow-hidden rounded-3xl bg-white/90 p-8 shadow-[0_20px_60px_rgba(14,49,63,0.12)]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#b87745]/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#1c5a6b]/10 blur-3xl" />
      </div>

      <div className="relative grid gap-6 lg:grid-cols-2">
        <article className="flex h-full flex-col gap-4 rounded-2xl border border-[#e3e9eb] bg-[#fefcf8] p-6">
          <h2 className="text-2xl font-semibold text-[#0f2f38] sm:text-3xl">
            Who This Is For
          </h2>
          <ul className="grid gap-4 text-base leading-7 text-[#2f4b53] sm:text-lg sm:leading-8">
            {whoThisIsFor.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#1c5a6b]/10 text-[#1c5a6b]">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="leading-6">{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="flex h-full flex-col gap-4 rounded-2xl border border-[#e3e9eb] bg-[#fefcf8] p-6">
          <h2 className="text-2xl font-semibold text-[#0f2f38] sm:text-3xl">
            Why Footprints
          </h2>
          <ul className="grid gap-4 text-base leading-7 text-[#2f4b53] sm:text-lg sm:leading-8">
            {whyFootprints.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#b87745]/12 text-[#b87745]">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="leading-6">{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

