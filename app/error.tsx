"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="beach-sky grain-overlay flex min-h-screen w-full items-center justify-center px-6">
      <div className="flex max-w-md flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-semibold text-[#0f2f38]">Something went wrong</h1>
        <p className="text-base leading-7 text-[#33545d]">
          We apologize for the inconvenience. Please try again or contact us directly for assistance.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center rounded-full bg-[#1c5a6b] px-8 py-3 text-base font-semibold text-white shadow-[0_18px_35px_rgba(28,90,107,0.2)] transition hover:-translate-y-0.5 hover:bg-[#174652]"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-[#1c5a6b33] px-8 py-3 text-base font-semibold text-[#1c5a6b] transition hover:border-[#1c5a6b] hover:bg-white/60"
          >
            Return Home
          </Link>
        </div>
        <p className="text-sm text-[#4a5c60]">
          Need immediate help? Call{" "}
          <Link href="tel:9493501078" className="font-semibold text-[#1b5a6d] hover:underline">
            949-350-1078
          </Link>
        </p>
      </div>
    </div>
  );
}












