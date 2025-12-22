export default function Loading() {
  return (
    <div className="beach-sky grain-overlay flex min-h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#1c5a6b] border-t-transparent" />
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#1b3b44]">
          Loading...
        </p>
      </div>
    </div>
  );
}











