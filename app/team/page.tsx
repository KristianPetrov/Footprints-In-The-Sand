import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeroNav } from "../components/HeroNav";
import { ScrollToHash } from "../components/ScrollToHash";
import { time } from "console";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the dedicated professionals at Footprints In The Sand 2 Recovery. Our experienced counselors, case managers, and support staff bring expertise, compassion, and lived experience to support your recovery journey.",
  openGraph: {
    title: "Our Team | Footprints In The Sand 2 Recovery",
    description:
      "Meet the dedicated professionals committed to your recovery journey at Footprints In The Sand 2 Recovery.",
  },
};

const teamMembers = [
  {
    name: "Tiffany Montesorro",
    title:"Executive Director",
    credentials:"CADC-CAS, LVN",
    image: "/tiffany-monterroso-photo-crop.png",
    id:"tiffany-montesorro",
    bio:`With over 13 years of experience in the substance use disorder treatment field, Tiffany serves as the Executive Director of Footprints in the Sand 2 Recovery. As a Licensed Vocational Nurse (LVN) and a Certified Alcohol and Drug Counselor  Specialist (CADC-CAS), Tiffany brings both clinical knowledge and compassionate leadership to every aspect of the program.
Tiffany’s work is rooted in a genuine passion for helping individuals heal and rediscover hope. Her background in both medical and counseling settings allows her to take a whole-person approach to recovery—one that honors the physical, emotional, and behavioral challenges clients face. Throughout her career, she has worked across multiple levels of care, giving her a deep understanding of the complexities of addiction, mental health, and the courage it takes to pursue lasting change.
As Executive Director, Tiffany is dedicated to creating a safe, supportive, and trauma-informed environment where clients feel seen, heard, and valued. She leads with empathy and integrity, ensuring high standards of care while fostering a culture of trust, accountability, and respect among both clients and staff. Her heart lies in empowering individuals and families, guiding them toward stability, resilience, and renewed purpose.
Tiffany believes deeply that recovery is possible for everyone. She is committed to walking alongside clients as they take meaningful steps forward, helping them build healthier lives and leave lasting footprints of hope beyond substance use.`
  },
  {
    name: "Wade Stephens",
    title: "Lead Case Manager",
    credentials: "CADC II",
    image: "/wade-profile-photo.jpeg",
    id: "wade-stephens",
    bio: `Wade obtained his Associates Degree in Social & Behavioral Studies from Norco College. He is currently finishing the Bachelors of Science Degree (Psychology) from California Coast University, and is currently a Certified Alcohol & Drug Counselor II (Internationally Certified Alcohol & Drug Counselor- ICADC). He has been working within the field of addiction and mental health since 2019, and has extensive experience with treating individuals that have substance use disorders, eating disorders, and co-occurring mental health disorders as well. He has treated individuals as young as 18 years of age, and feels as if the treating of suffering individuals should be a life-long mission. He often utilizes the following clinical approaches during individual and group sessions: CBT (Cognitive Behavioral Therapy), Motivation Interviewing (MI), and any other form of therapy that fosters self-efficacy. He has been recovered from his own addiction to substances since May 2, 2012, and truly understands that this has laid the foundation for each and every interaction that will take place with individuals that are seeking a solution to similar issues. In his spare time, Wade loves spending time with his wife and son, being active, and being of service in his recovery community.`,
  },
  {
    name: "Tazia Shaw",
    title: "Case Manager",
    credentials: "RADT",
    image: "/tazia-profile-photo.jpeg",
    id: "tazia-shaw",
    bio: `Tazia is a vibrant, compassionate, and outgoing Registered Alcohol and Drug Abuse Counselor (CCAPP Credentialed) with five years of experience in the recovery world, including four years in treatment and nearly two years serving as a Case Manager and SUD Counselor. She completed her formal education through The Distance Learning Center for Addiction Studies and is currently working toward obtaining her CDAC-1, further strengthening her clinical knowledge and professional advancement. Tazia's hands-on experience includes substance use assessments, treatment planning, case management, relapse prevention, group facilitation, crisis intervention, and client advocacy. She approaches her work with empathy, positivity, and a strong solution-focused mindset. Collaborative by nature, she thrives in team environments where she can bring enthusiasm, adaptability, and heart. Whether she is supporting clients, connecting with peers, or showing up in the recovery community, Tazia is known for her unwavering commitment, contagious energy, and ability to make everyone around her feel uplifted and valued. Her dedication extends far beyond working hours—she consistently volunteers, attends community events, mentors others, and provides support in any way she can. Tazia is deeply rooted in the recovery world, not just as a clinician but as a passionate advocate who lives and breathes the values of connection, service, and growth. As a devoted mother, Tazia draws strength and motivation from her children, who inspire her to lead with integrity, resilience, and love. She brings heart, humor, and authenticity into every space she enters—showing up not only as a clinician, but as a genuine, caring human being dedicated to helping individuals find purpose, belonging, and long-term recovery.`,
  },{
   name: "Sandy Bekhit MS",
   title: "Therapist",
   credentials: "AMFT #154693, LPCC #19287",
   image:"/sandy-bhekit-photo.jpeg",
   id: "sandy-bekhit",
   bio:`(Superviised by Alyssa Van Boxmeer, LMFT)
Sandy Bekhit is an Associate Marriage & Family Therapist and Associate Professional Clinical Counselor with four years of clinical experience. She earned her B.A. in Psychology from Vanguard University of Southern California and her M.S. in Counseling Psychology from California Baptist University. Sandy has worked in both inpatient and outpatient settings, including over three years in substance use treatment, supporting individuals impacted by trauma, addiction, and co-occurring mental health disorders. During her clinical training, she provided school-based and teletherapy services within the Fullerton School District. She now works with adults, offering individual, group, and couples/family therapy, and specializes in substance use, trauma, mood, and personality disorders. Her eclectic, client-centered approach draws from CBT, DBT, and psychodynamic therapy, with an emphasis on attachment theory and individualized care. Outside the therapy room, Sandy is a fluent Arabic speaker, devoted animal lover, and proud maltipoo mom. She is also a passionate foodie and coffee/matcha enthusiast, enjoying the simple pleasures that bring connection and balance to everyday life.`

  }
];

// JSON-LD for team page
const teamJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Footprints In The Sand 2 Recovery Team",
  description: "Our dedicated team of addiction and mental health professionals",
  itemListElement: teamMembers.map((member, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Person",
      name: member.name,
      jobTitle: member.title,
      description: member.bio.substring(0, 200) + "...",
      worksFor: {
        "@type": "Organization",
        name: "Footprints In The Sand 2 Recovery",
      },
    },
  })),
};

export default function TeamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamJsonLd) }}
      />
      <ScrollToHash />
      <div className="beach-sky grain-overlay min-h-screen w-full overflow-hidden text-[#1f2a2e]">
        <HeroNav />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-16 pt-24 sm:px-8 lg:px-12 lg:pb-24 lg:pt-32">
          <Image
            src="/footprints.svg"
            alt=""
            width={200}
            height={320}
            className="pointer-events-none absolute -right-8 bottom-10 opacity-70"
            aria-hidden="true"
          />

          <header className="hero-header glass-panel relative z-10 overflow-hidden p-8 sm:p-10 lg:p-14">
            <div className="flex flex-col gap-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#b87745]">
                Our Team
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-[#0f2f38] sm:text-5xl lg:text-6xl">
                The People Who Walk With You
              </h1>
              <p className="text-lg leading-8 text-[#33545d] sm:text-xl">
                Meet the dedicated professionals committed to your recovery journey. Each member of our team brings
                expertise, compassion, and lived experience to support you every step of the way.
              </p>
            </div>
          </header>
          <section className="relative z-10 flex flex-col gap-12" aria-label="Team members">
            {teamMembers.map((member, index) => (
              <article
                key={member.name}
                id={member.id}
                className={`scroll-mt-24 flex flex-col gap-8 rounded-3xl bg-white/90 p-8 shadow-[0_20px_60px_rgba(14,49,63,0.12)] lg:flex-row ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="relative aspect-[2/3] w-full overflow-hidden rounded-2xl bg-[#e3edf2] lg:w-80 lg:flex-shrink-0">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.title}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 320px"
                    className="object-contain object-top"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-[#0f2f38] sm:text-3xl">{member.name}</h2>
                    <p className="mt-1 text-base font-semibold text-[#b87745] sm:text-lg">
                      {member.title}
                    </p>
                    <p className="mt-1 text-sm uppercase tracking-[0.2em] text-[#1b5a6d]">
                      {member.credentials}
                    </p>
                  </div>
                  <div className="prose prose-sm max-w-none text-[#2e454c] sm:prose-base">
                    <p className="leading-7">{member.bio}</p>
                  </div>
                </div>
              </article>
            ))}
          </section>

          <section className="relative z-10 flex flex-col items-center gap-6 rounded-3xl border border-white/60 bg-white/70 p-8 shadow-inner">
            <p className="text-center text-lg leading-8 text-[#2e454c]">
              Ready to begin your journey? Our team is here to support you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#intake"
                className="inline-flex items-center justify-center rounded-full bg-[#1c5a6b] px-8 py-3 text-base font-semibold text-white shadow-[0_18px_35px_rgba(28,90,107,0.2)] transition hover:-translate-y-0.5 hover:bg-[#174652]"
              >
                Start Intake
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-[#1c5a6b33] px-8 py-3 text-base font-semibold text-[#1c5a6b] transition hover:border-[#1c5a6b] hover:bg-white/60"
              >
                Back to Home
              </Link>
            </div>
          </section>

          <footer className="relative z-10 rounded-3xl border border-white/60 bg-white/70 p-6 text-sm text-[#4a5c60] shadow-inner">
            Sustainable change is closer than you think. Call{" "}
            <Link href="tel:9493501078" className="font-semibold text-[#1b5a6d]">
              9493501078
            </Link>
            , or email{" "}
            <Link href="mailto:info@footprintsrecovery.net" className="font-semibold text-[#1b5a6d]">
              info@footprintsrecovery.net
            </Link>{" "}
            and let&apos;s map the next evidence-backed step together.
          </footer>
        </div>
      </div>
    </>
  );
}




