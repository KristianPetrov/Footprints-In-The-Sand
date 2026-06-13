import Link from "next/link";
import { PHONE_DISPLAY, PHONE_TEL } from "../lib/contact";
const footerBlessing = "and let's map the next evidence-backed step together.";

export default function Footer ()
{
  return (
    <footer className="relative z-10 rounded-3xl border border-white/60 bg-white/70 p-6 text-sm text-[#4a5c60] shadow-inner">
      <div>
        Sustainable change is closer than you think. Share your intake above, call{" "}
        <Link href={PHONE_TEL} className="font-semibold text-[#1b5a6d]">
          {PHONE_DISPLAY}
        </Link>
        , or email{" "}
        <Link
          href="mailto:info@footprintsrecovery.net"
          className="font-semibold text-[#1b5a6d]"
        >
          info@footprintsrecovery.net
        </Link>{" "}
        {footerBlessing}
      </div>

      <div className="mt-5 border-t border-[#1b5a6d1f] pt-4">
        <p className="font-semibold text-[#0f2f38]">Privacy &amp; confidentiality</p>
        <p className="mt-2 leading-6">
          We treat recovery inquiries and personal information with care. Read our{" "}
          <Link
            href="/privacy-policy"
            className="font-semibold text-[#1b5a6d] underline-offset-4 hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}