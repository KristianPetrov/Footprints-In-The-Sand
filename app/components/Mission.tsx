const missionStatement = `At Footprints In The Sand 2 Recovery, our mission is to help people break free from the cycles that once controlled their lives and step into a future they never thought possible. We’re here for the ones carrying heavy histories, the ones tired of running, and the ones ready to finally face the truth head-on. No judgment. No sugarcoating. Just real support, real accountability, and a team that refuses to let you quit on yourself. We walk with you through the fight, the healing, and the rebuilding—pushing you to rise stronger, stand taller, and reclaim every part of your life, one powerful step at a time.`;
export default function Mission() {
    return (      <section
        id="mission"
        className="relative z-10 grid gap-8  lg:items-stretch"
      >
        <article className="rounded-3xl bg-white/90 p-8 shadow-[0_25px_70px_rgba(20,52,66,0.12)]">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#1b3b44]">
            Mission & Vision
          </p>
          <p className="mt-6 text-lg leading-8 text-[#2e454c]">{missionStatement}</p>
        </article>

      </section>)}