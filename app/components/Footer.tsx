import Link from "next/link";
import { PHONE_DISPLAY, PHONE_TEL } from "../lib/contact";
const footerBlessing = "and let's map the next evidence-backed step together.";

export default function Footer ()
{
  return (<footer className="relative z-10 rounded-3xl border border-white/60 bg-white/70 p-6 text-sm text-[#4a5c60] shadow-inner">
    Sustainable change is closer than you think. Share your intake above, call{" "}
    <Link href={PHONE_TEL} className="font-semibold text-[#1b5a6d]">
      {PHONE_DISPLAY}
    </Link>
    , or email{" "}
    <Link href="mailto:info@footprintsrecovery.net" className="font-semibold text-[#1b5a6d]">
      info@footprintsrecovery.net
    </Link>{" "}
    {footerBlessing}
  </footer>)
}