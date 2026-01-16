import Link from "next/link";
const footerBlessing = "and let's map the next evidence-backed step together.";

export default function Footer ()
{
  return (<footer className="relative z-10 rounded-3xl border border-white/60 bg-white/70 p-6 text-sm text-[#4a5c60] shadow-inner">
    Sustainable change is closer than you think. Share your intake above, call{" "}
    <Link href="tel:9493501078" className="font-semibold text-[#1b5a6d]">
      (949)-350-1078
    </Link>
    , or email{" "}
    <Link href="mailto:info@footprintsrecovery.net" className="font-semibold text-[#1b5a6d]">
      info@footprintsrecovery.net
    </Link>{" "}
    {footerBlessing}
  </footer>)
}