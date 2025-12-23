export type TopicSection = {
  heading: string;
  body: string;
  bullets?: string[];
};

export type TopicPageContent = {
  slug: string;
  title: string;
  description: string;
  kicker: string;
  sections: TopicSection[];
};

function build(
  slug: string,
  title: string,
  description: string,
  kicker: string,
  sections: TopicSection[]
): TopicPageContent {
  return { slug, title, description, kicker, sections };
}

// --- Treatment Approach ---
const treatmentApproachList: TopicPageContent[] = [
  build(
    "cbt",
    "Cognitive Behavioral Therapy (CBT)",
    "Learn how CBT helps you identify unhelpful thought patterns, build coping skills, and make practical changes that support recovery.",
    "Treatment Approach",
    [
      {
        heading: "What CBT is",
        body: "CBT is an evidence-based therapy that connects thoughts, feelings, and behaviors. It helps you notice patterns that keep you stuck—and replace them with skills that support healthier choices.",
      },
      {
        heading: "What you work on in CBT",
        body: "Sessions focus on practical tools you can use immediately.",
        bullets: [
          "Identifying triggers and high-risk situations",
          "Challenging “all-or-nothing” thinking and self-criticism",
          "Building coping strategies for cravings, anxiety, and stress",
          "Developing routines that support sleep, stability, and accountability",
        ],
      },
      {
        heading: "How CBT supports addiction + mental health",
        body: "CBT can reduce relapse risk by strengthening decision-making and coping skills, while also addressing depression, anxiety, trauma-related symptoms, and other co-occurring concerns.",
      },
    ]
  ),
  build(
    "dbt",
    "Dialectical Behavioral Therapy (DBT)",
    "Learn how DBT builds emotional regulation, distress tolerance, and relationship skills—especially when feelings are intense or overwhelming.",
    "Treatment Approach",
    [
      {
        heading: "What DBT is",
        body: "DBT is a structured, skills-based therapy that combines acceptance and change. It’s especially helpful when emotions feel extreme, impulsive behaviors show up, or relationships feel difficult to navigate.",
      },
      {
        heading: "Core DBT skills",
        body: "DBT teaches a set of practical skills you can practice daily.",
        bullets: [
          "Mindfulness: noticing what’s happening without judging it",
          "Distress tolerance: getting through a crisis without making it worse",
          "Emotion regulation: understanding and shifting intense emotions",
          "Interpersonal effectiveness: boundaries, communication, and self-respect",
        ],
      },
      {
        heading: "How DBT supports recovery",
        body: "DBT can help reduce impulsive substance use, self-defeating coping, and emotional overwhelm—replacing them with stable routines, accountability, and healthier relationships.",
      },
    ]
  ),
  build(
    "family-therapy",
    "Family Therapy",
    "Learn how family therapy improves communication, rebuilds trust, and supports healing for the whole system—not just one person.",
    "Treatment Approach",
    [
      {
        heading: "What family therapy is",
        body: "Family therapy focuses on patterns between people—communication, boundaries, roles, and stress responses—so the family system can support long-term recovery.",
      },
      {
        heading: "What family sessions can address",
        body: "Family therapy is not about blame. It’s about building clarity and teamwork.",
        bullets: [
          "Repairing trust after relapse, conflict, or secrecy",
          "Setting boundaries that protect both support and accountability",
          "Creating a home environment that supports stability",
          "Improving communication during stress and setbacks",
        ],
      },
      {
        heading: "Why it matters",
        body: "Recovery often happens within relationships. Strong support systems—paired with healthy boundaries—can improve engagement, reduce crisis cycles, and reinforce lasting change.",
      },
    ]
  ),
  build(
    "group-therapy",
    "Group Therapy",
    "Learn how group therapy builds connection, accountability, and real-time practice for communication and coping skills.",
    "Treatment Approach",
    [
      {
        heading: "What group therapy is",
        body: "Group therapy brings people together with a trained clinician to process experiences, practice skills, and gain perspective. It can reduce isolation and create powerful accountability.",
      },
      {
        heading: "What you gain in group",
        body: "Groups are structured, supportive, and guided by evidence-based approaches.",
        bullets: [
          "Honest feedback and encouragement from peers",
          "Practice with boundaries, communication, and emotional skills",
          "Relapse-prevention planning and trigger work",
          "A sense of belonging—without judgment",
        ],
      },
      {
        heading: "How it supports recovery",
        body: "For many people, group becomes the place they learn they’re not alone—and where new coping patterns become real through repetition and shared experience.",
      },
    ]
  ),
  build(
    "individual-therapy",
    "Individual Therapy",
    "Learn how 1:1 therapy supports personalized goals, deeper healing, and tailored skill-building for addiction and mental health recovery.",
    "Treatment Approach",
    [
      {
        heading: "What individual therapy is",
        body: "Individual therapy is a private, collaborative space where you work with a therapist on goals that matter to you—at a pace that supports real progress.",
      },
      {
        heading: "Common focus areas",
        body: "Treatment is individualized based on your history, strengths, and current needs.",
        bullets: [
          "Cravings, relapse patterns, and sustainable coping",
          "Anxiety, depression, and mood instability",
          "Trauma-informed processing and stabilization",
          "Identity, self-worth, boundaries, and life direction",
        ],
      },
      {
        heading: "What to expect",
        body: "You’ll develop a plan, track progress, and build tools you can carry into daily life—supported by accountability and a multidisciplinary care team.",
      },
    ]
  ),
];

export const treatmentApproachPages = Object.fromEntries(
  treatmentApproachList.map((page) => [page.slug, page])
) as Record<string, TopicPageContent>;

export const treatmentApproachSlugs = treatmentApproachList.map((p) => p.slug);

export function getTreatmentApproachPage(slug: string) {
  return treatmentApproachPages[slug] ?? null;
}

// --- Mental Health ---
const mentalHealthList: TopicPageContent[] = [
  build(
    "anxiety-disorder",
    "Anxiety Disorder",
    "Learn what anxiety disorders are, common symptoms, and evidence-based ways treatment can help you regain calm and confidence.",
    "Mental Health",
    [
      {
        heading: "What anxiety can look like",
        body: "Anxiety disorders can show up as constant worry, panic symptoms, avoidance, irritability, sleep disruption, or feeling “on edge” most of the time.",
      },
      {
        heading: "Common patterns",
        body: "Anxiety often creates a cycle where avoidance temporarily reduces fear—but strengthens it long-term.",
        bullets: [
          "Overthinking, reassurance-seeking, or rumination",
          "Panic sensations (racing heart, shortness of breath, dizziness)",
          "Avoidance of places, people, or sensations",
          "Using substances to self-soothe or “turn it off”",
        ],
      },
      {
        heading: "How treatment helps",
        body: "Evidence-based therapy can help you understand triggers, build coping skills, and gently face fears in a structured way—while also supporting co-occurring substance use concerns.",
      },
    ]
  ),
  build(
    "bipolar-disorders",
    "Bipolar Disorders",
    "Learn how bipolar disorders affect mood, energy, and behavior—and how coordinated treatment supports stability and recovery.",
    "Mental Health",
    [
      {
        heading: "What bipolar disorders are",
        body: "Bipolar disorders involve mood episodes that can include depression and periods of elevated mood (mania or hypomania). Episodes can impact sleep, judgment, energy, and relationships.",
      },
      {
        heading: "Signs that may show up",
        body: "Symptoms vary by person and episode type.",
        bullets: [
          "Depressive episodes: low mood, low motivation, hopelessness",
          "Manic/hypomanic episodes: reduced sleep, racing thoughts, impulsivity",
          "Shifts in activity, confidence, and risk-taking",
          "Substance use that worsens mood swings or masks symptoms",
        ],
      },
      {
        heading: "How treatment helps",
        body: "Stability often improves with a coordinated plan: therapy, skills, routines, and collaboration with psychiatric providers when appropriate—especially when substance use is also present.",
      },
    ]
  ),
  build(
    "borderline-personality-disorders",
    "Borderline Personality Disorders",
    "Learn about borderline personality disorder (BPD), why emotions can feel intense, and how skills-based treatment can help.",
    "Mental Health",
    [
      {
        heading: "Understanding BPD",
        body: "BPD is associated with intense emotions, sensitivity to rejection, identity shifts, and relationship instability. These patterns often developed as adaptations to earlier stress, trauma, or invalidation.",
      },
      {
        heading: "Common experiences",
        body: "Every person is different, but some patterns are common.",
        bullets: [
          "Big emotional swings and difficulty calming down",
          "Fear of abandonment and relationship conflict",
          "Impulsivity (including substances) during distress",
          "Feeling empty, numb, or unsure who you are",
        ],
      },
      {
        heading: "How treatment helps",
        body: "Skills-based approaches—especially DBT—can help with emotion regulation, distress tolerance, and healthier relationships while supporting sobriety and stability.",
      },
    ]
  ),
  build(
    "depression-and-mood-disorders",
    "Depression and Mood Disorders",
    "Learn about depression and mood disorders, common symptoms, and how treatment supports motivation, routine, and hope.",
    "Mental Health",
    [
      {
        heading: "What depression can look like",
        body: "Depression can affect mood, sleep, appetite, motivation, concentration, and self-worth. It can also show up as irritability, numbness, or withdrawal—not only sadness.",
      },
      {
        heading: "When substance use overlaps",
        body: "Alcohol and drugs can temporarily blunt pain but often worsen mood over time.",
        bullets: [
          "Sleep disruption and low energy",
          "Increased shame and isolation",
          "Reduced motivation and follow-through",
          "Higher relapse risk during low mood",
        ],
      },
      {
        heading: "How treatment helps",
        body: "Therapy can support routines, coping skills, and meaningful goals—while coordinated care addresses co-occurring substance use patterns and helps you rebuild stability.",
      },
    ]
  ),
  build(
    "ptsd",
    "Post-Traumatic Stress Disorder (PTSD)",
    "Learn how PTSD affects the body and mind, and how trauma-informed care helps you feel safer, more present, and more in control.",
    "Mental Health",
    [
      {
        heading: "What PTSD is",
        body: "PTSD can occur after trauma and may involve intrusive memories, nightmares, hypervigilance, avoidance, and changes in mood or self-belief. The nervous system may stay stuck in “survival mode.”",
      },
      {
        heading: "Common effects",
        body: "PTSD can impact daily life in subtle and not-so-subtle ways.",
        bullets: [
          "Feeling unsafe even when you’re not in danger",
          "Startle responses, irritability, and sleep disruption",
          "Avoidance of reminders, places, or emotions",
          "Using substances to cope with flashbacks or panic",
        ],
      },
      {
        heading: "How treatment helps",
        body: "Trauma-informed therapy prioritizes safety and stabilization first, then helps you process experiences at a pace that supports your recovery goals and nervous system regulation.",
      },
    ]
  ),
  build(
    "trauma",
    "Trauma",
    "Learn what trauma is, how it can affect emotions and relationships, and how trauma-informed therapy supports healing without re-traumatization.",
    "Mental Health",
    [
      {
        heading: "What trauma is",
        body: "Trauma can come from single events or ongoing experiences. It can affect how you feel in your body, how you relate to others, and what you believe about yourself.",
      },
      {
        heading: "How trauma can show up",
        body: "Trauma responses are common—and treatable.",
        bullets: [
          "Anxiety, panic, or a constant sense of threat",
          "Dissociation, numbness, or feeling disconnected",
          "Relationship difficulties and boundary challenges",
          "Substance use as a way to cope or avoid memories",
        ],
      },
      {
        heading: "How trauma-informed care helps",
        body: "Treatment focuses on safety, skills, and stabilization, then supports deeper processing as appropriate—integrated with relapse-prevention and accountability.",
      },
    ]
  ),
];

export const mentalHealthPages = Object.fromEntries(
  mentalHealthList.map((page) => [page.slug, page])
) as Record<string, TopicPageContent>;

export const mentalHealthSlugs = mentalHealthList.map((p) => p.slug);

export function getMentalHealthPage(slug: string) {
  return mentalHealthPages[slug] ?? null;
}

// --- Substance Abuse ---
const substanceAbuseList: TopicPageContent[] = [
  build(
    "alcohol-addiction",
    "Alcohol Addiction",
    "Learn about alcohol addiction, signs of problematic use, and how outpatient treatment supports long-term recovery.",
    "Substance Abuse",
    [
      {
        heading: "What alcohol addiction can look like",
        body: "Alcohol addiction often involves loss of control, increasing tolerance, and continued use despite harm to health, work, relationships, or mental well-being.",
      },
      {
        heading: "Common signs",
        body: "These patterns can show up gradually—and can be addressed with structured care.",
        bullets: [
          "Drinking more or longer than intended",
          "Withdrawal symptoms when cutting back",
          "Blackouts, risky behavior, or relationship conflict",
          "Using alcohol to manage anxiety, sleep, or emotions",
        ],
      },
      {
        heading: "How treatment helps",
        body: "Recovery blends skills (CBT/DBT), relapse-prevention planning, accountability, and support for co-occurring mental health concerns.",
      },
    ]
  ),
  build(
    "fentanyl-addiction",
    "Fentanyl Addiction",
    "Learn about fentanyl addiction, why it’s especially dangerous, and how treatment supports safety and recovery.",
    "Substance Abuse",
    [
      {
        heading: "Why fentanyl is high-risk",
        body: "Fentanyl is a potent opioid that increases overdose risk—especially when unknowingly mixed with other substances. Dependence can develop quickly and withdrawal can be intense.",
      },
      {
        heading: "What treatment focuses on",
        body: "Care prioritizes safety, stabilization, and relapse prevention.",
        bullets: [
          "Assessment and coordinated clinical planning",
          "Skills-based therapy and accountability",
          "Support for cravings, triggers, and high-risk environments",
          "Dual diagnosis care when anxiety, depression, or trauma are present",
        ],
      },
      {
        heading: "Recovery is possible",
        body: "With structured treatment and ongoing supports, people do recover from fentanyl use disorder and rebuild stable, meaningful lives.",
      },
    ]
  ),
  build(
    "heroin-addiction",
    "Heroin Addiction",
    "Learn about heroin addiction, how it impacts the brain and body, and how treatment supports long-term recovery.",
    "Substance Abuse",
    [
      {
        heading: "Understanding heroin addiction",
        body: "Heroin is an opioid that can rapidly create dependence and tolerance. Use can lead to escalating risk, withdrawal symptoms, and significant disruption in daily life.",
      },
      {
        heading: "How treatment helps",
        body: "Treatment focuses on stabilization and relapse prevention while rebuilding structure and support.",
        bullets: [
          "Trigger and craving management",
          "Skills development (CBT/DBT) and emotional regulation",
          "Accountability and recovery community support",
          "Addressing co-occurring trauma, anxiety, or depression",
        ],
      },
      {
        heading: "Long-term success",
        body: "Sustainable recovery often includes ongoing support, relapse-prevention planning, and a strong routine that protects your progress.",
      },
    ]
  ),
  build(
    "opiate-addiction",
    "Opiate Addiction",
    "Learn about opiate addiction (opioid use disorder), common signs, and how treatment supports both physical and emotional recovery.",
    "Substance Abuse",
    [
      {
        heading: "What opiate addiction is",
        body: "Opiate addiction involves a pattern of opioid use that becomes hard to control and continues despite harmful consequences. It may involve prescription pain medications or illicit opioids.",
      },
      {
        heading: "Common signs and challenges",
        body: "Opioids can change brain reward and stress systems, making cravings and withdrawal powerful.",
        bullets: [
          "Tolerance and withdrawal cycles",
          "Using to cope with stress, pain, or trauma",
          "Impact on work, relationships, and mental health",
          "High relapse risk without structured supports",
        ],
      },
      {
        heading: "How treatment helps",
        body: "Care focuses on coping skills, accountability, and a plan for high-risk moments—integrated with mental health support when needed.",
      },
    ]
  ),
  build(
    "xanax-addiction",
    "Xanax Addiction",
    "Learn about Xanax (alprazolam) addiction, risks of dependence, and how treatment supports safer recovery.",
    "Substance Abuse",
    [
      {
        heading: "Why Xanax can be hard to stop",
        body: "Xanax is a benzodiazepine often prescribed for anxiety or panic. Dependence can develop, and stopping suddenly can be dangerous.",
      },
      {
        heading: "Common patterns",
        body: "Use may start for relief but can become a cycle of rebound anxiety and escalating doses.",
        bullets: [
          "Needing more for the same effect",
          "Using outside the prescribed plan",
          "Memory issues, sedation, or impaired judgment",
          "Mixing with alcohol or other substances (high risk)",
        ],
      },
      {
        heading: "How treatment helps",
        body: "Treatment supports stabilization, coping skills for anxiety, and relapse prevention—while coordinating appropriate clinical oversight.",
      },
    ]
  ),
  build(
    "benzodiazepine-addiction",
    "Benzodiazepine Addiction",
    "Learn about benzodiazepine addiction, withdrawal risks, and treatment approaches that support safe, lasting recovery.",
    "Substance Abuse",
    [
      {
        heading: "What benzodiazepine addiction is",
        body: "Benzodiazepines (like Xanax, Ativan, Valium, and Klonopin) can lead to dependence over time. Withdrawal can be medically significant and should be taken seriously.",
      },
      {
        heading: "Common challenges",
        body: "Many people struggle because benzos can temporarily quiet anxiety—then rebound symptoms return.",
        bullets: [
          "Rebound anxiety and sleep disruption",
          "Escalating dosage over time",
          "Difficulty functioning without the medication",
          "Co-occurring alcohol or opioid use increases risk",
        ],
      },
      {
        heading: "How treatment helps",
        body: "Treatment supports coping skills, emotional regulation, and a plan for long-term stability—integrated with appropriate clinical coordination.",
      },
    ]
  ),
  build(
    "cocaine-addiction",
    "Cocaine Addiction",
    "Learn about cocaine addiction, how it affects mood and motivation, and how treatment supports recovery and stability.",
    "Substance Abuse",
    [
      {
        heading: "How cocaine affects the brain",
        body: "Cocaine increases dopamine and can create intense reward cycles. After use, people often experience crashes, irritability, anxiety, or depression that can drive repeated use.",
      },
      {
        heading: "Common signs",
        body: "Cocaine addiction can affect relationships, finances, sleep, and mental health.",
        bullets: [
          "Binge patterns and strong cravings",
          "Sleep disruption and mood swings",
          "Risky behavior and impulsivity",
          "Using to “feel normal” or avoid a crash",
        ],
      },
      {
        heading: "How treatment helps",
        body: "Therapy focuses on triggers, coping strategies, and rebuilding routines—often paired with support for anxiety, depression, or trauma.",
      },
    ]
  ),
  build(
    "marijuana-addiction",
    "Marijuana Addiction",
    "Learn about marijuana (cannabis) addiction, when use becomes a problem, and how treatment supports motivation and balance.",
    "Substance Abuse",
    [
      {
        heading: "When cannabis becomes a problem",
        body: "Cannabis use can become problematic when it interferes with motivation, mood, relationships, or responsibilities—and feels hard to stop despite negative consequences.",
      },
      {
        heading: "Common patterns",
        body: "People may use cannabis to cope with anxiety, sleep issues, or emotional pain.",
        bullets: [
          "Daily use and difficulty cutting back",
          "Using to manage stress or discomfort",
          "Lower motivation or “stuck” routines",
          "Irritability or sleep changes when stopping",
        ],
      },
      {
        heading: "How treatment helps",
        body: "Treatment supports coping skills, emotion regulation, and accountability—helping you build routines that work without relying on cannabis.",
      },
    ]
  ),
  build(
    "methamphetamine-addiction",
    "Methamphetamine Addiction",
    "Learn about methamphetamine addiction, its impact on mood and health, and how structured treatment supports recovery.",
    "Substance Abuse",
    [
      {
        heading: "Understanding methamphetamine addiction",
        body: "Meth can strongly affect reward, motivation, sleep, and mood. Use can lead to intense cravings and significant emotional and physical consequences.",
      },
      {
        heading: "Common impacts",
        body: "Meth use can affect many areas of life and may co-occur with anxiety, depression, or trauma symptoms.",
        bullets: [
          "Sleep disruption and mood instability",
          "Anxiety, paranoia, or agitation",
          "Difficulty enjoying normal activities without using",
          "Relationship, work, and legal consequences",
        ],
      },
      {
        heading: "How treatment helps",
        body: "Recovery focuses on coping skills, accountability, rebuilding routines, and addressing co-occurring mental health needs—so stability can take root.",
      },
    ]
  ),
];

export const substanceAbusePages = Object.fromEntries(
  substanceAbuseList.map((page) => [page.slug, page])
) as Record<string, TopicPageContent>;

export const substanceAbuseSlugs = substanceAbuseList.map((p) => p.slug);

export function getSubstanceAbusePage(slug: string) {
  return substanceAbusePages[slug] ?? null;
}


