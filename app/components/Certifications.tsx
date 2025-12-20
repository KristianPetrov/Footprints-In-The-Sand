import Link from "next/link";
import Image from "next/image";
export default function Certifications(){
    return (     <section className="relative z-10 flex flex-col items-center gap-6 rounded-3xl border border-white/60 bg-white/70 p-8 shadow-inner">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#1b3b44]">
          Certifications & Accreditation
        </p>
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-12">
          <div className="flex flex-col items-center gap-3">
            <Link
              href="https://www.dhcs.ca.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:opacity-80"
            >
              <Image
                src="/dhcs-logo.png"
                alt="California Department of Health Care Services (DHCS) certification logo"
                width={120}
                height={120}
                className="h-auto w-auto"
                loading="lazy"
              />
            </Link>
            <p className="text-xs text-[#4a5c60]">
              Certification Number:{" "}
              <span className="font-semibold text-[#1b5a6d]">300751AP</span>
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/the-joint-comission-seal.png"
              alt="The Joint Commission accreditation seal"
              width={120}
              height={120}
              className="h-auto w-auto"
              loading="lazy"
            />
          </div>
        </div>
      </section>
)}