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
    "CBT is an evidence-based therapy that helps you understand patterns between thoughts, emotions, and behavior—then replace the patterns that keep you stuck with skills that support recovery.",
    "Treatment Approach",
    [
      {
        heading: "What CBT is",
        body:
          "CBT is an evidence-based, structured approach to therapy. It focuses on the connection between what you think, how you feel, and what you do.\n\nIn recovery, CBT is especially helpful because it turns overwhelming experiences into workable steps: identify a pattern, understand the trigger, test a new response, and practice it until it becomes more automatic.",
      },
      {
        heading: "What you work on in CBT",
        body:
          "CBT sessions are practical and goal-oriented. You and your therapist identify the patterns that are most linked to relapse risk or emotional distress, then build skills you can use in real time.",
        bullets: [
          "Triggers and high-risk situations (people/places/emotions/time of day)",
          "Thinking traps like “all-or-nothing,” catastrophizing, and shame spirals",
          "Craving management and urge-surfing strategies",
          "Behavioral activation: rebuilding routine, motivation, and follow-through",
          "Communication skills that reduce conflict and increase support",
          "Relapse-prevention planning: warning signs, coping plan, accountability steps",
        ],
      },
      {
        heading: "How CBT supports addiction + mental health",
        body:
          "Many people use substances to cope with anxiety, depression, trauma symptoms, or chronic stress. CBT helps by improving the coping system—not just reducing symptoms.\n\nBy strengthening decision-making, emotion regulation, and problem-solving, CBT can support recovery from substance use disorders while also helping with anxiety disorders, depression and mood concerns, and stress-related symptoms.",
      },
      {
        heading: "What CBT looks like in PHP/IOP",
        body:
          "In PHP and IOP settings, CBT is often practiced across group and individual sessions. You’ll learn skills, apply them to your real-life triggers, and get repetition and feedback so those skills stick.\n\nA typical week may include coping skill practice, thought-challenge exercises, behavior planning for weekends, and relapse-prevention review with a care team.",
      },
      {
        heading: "Signs CBT may be a good fit",
        body:
          "CBT can be especially helpful if you want practical steps and measurable progress. It’s a strong fit for people who want tools they can practice immediately and carry into daily life.",
        bullets: [
          "You feel stuck in repeating cycles (use → regret → promise → repeat)",
          "You want help managing cravings, anxiety, or panic symptoms",
          "You struggle with negative self-talk, guilt, or perfectionism",
          "You want a clear plan for high-risk situations and relapse prevention",
        ],
      },
    ]
  ),
  build(
    "dbt",
    "Dialectical Behavioral Therapy (DBT)",
    "DBT is a skills-based therapy that helps you manage intense emotions, tolerate distress without impulsive coping, and build healthier relationships and boundaries.",
    "Treatment Approach",
    [
      {
        heading: "What DBT is",
        body:
          "DBT is a structured, evidence-based therapy originally designed to help people who experience emotions intensely. It blends acceptance (“this is where I am right now”) with change (“here’s what I can do next”).\n\nDBT is widely used in co-occurring care because it targets the exact moments when people are most likely to relapse: emotional overwhelm, conflict, shame, loneliness, or crisis.",
      },
      {
        heading: "Core DBT skills",
        body:
          "DBT is built around skills you practice repeatedly—like learning a language. Over time, the skills become a new default response when distress hits.",
        bullets: [
          "Mindfulness: noticing what’s happening without judging it",
          "Distress tolerance: getting through a crisis without making it worse",
          "Emotion regulation: understanding and shifting intense emotions",
          "Interpersonal effectiveness: boundaries, communication, and self-respect",
        ],
      },
      {
        heading: "How DBT supports recovery",
        body:
          "DBT helps reduce impulsive coping (including substance use) by giving you alternatives that work in the moment. It strengthens emotional regulation and relationship patterns—two areas that often drive relapse.\n\nIn recovery settings, DBT also supports accountability and structure: you learn what your early warning signs look like and what to do before things escalate.",
      },
      {
        heading: "DBT skills you’ll practice most",
        body:
          "People often find certain skills especially useful early in recovery—when cravings and emotions can spike.",
        bullets: [
          "Crisis skills for the first 10–30 minutes of an urge",
          "Grounding and mindfulness for panic, dissociation, and racing thoughts",
          "Emotion naming: identifying what you feel so you can respond effectively",
          "Boundary scripts and repair conversations for family/relationship conflict",
          "Building routines that reduce vulnerability (sleep, nutrition, support)",
        ],
      },
      {
        heading: "What DBT looks like in PHP/IOP",
        body:
          "In PHP/IOP, DBT skills show up in a repeated cycle: learn the skill, practice it in group, apply it to a real situation you’re facing, then review what worked and what didn’t.\n\nThis repetition is key—especially for people whose relapse pattern is tied to emotional intensity or relationship stress.",
      },
    ]
  ),
  build(
    "family-therapy",
    "Family Therapy",
    "Family therapy helps rebuild communication and trust, create healthier boundaries, and support recovery as a shared system—not a solo effort.",
    "Treatment Approach",
    [
      {
        heading: "What family therapy is",
        body:
          "Family therapy focuses on patterns between people—communication, boundaries, roles, expectations, and stress responses. The goal isn’t to assign blame; it’s to reduce chaos, increase clarity, and help the family system support long-term recovery.\n\nWhen families heal together, recovery becomes more stable: the home environment becomes less triggering and more supportive.",
      },
      {
        heading: "What family sessions can address",
        body:
          "Family therapy is not about blame. It’s about creating teamwork with clear roles and healthy limits—so support doesn’t turn into enabling, and accountability doesn’t turn into punishment.",
        bullets: [
          "Repairing trust after relapse, conflict, or secrecy",
          "Setting boundaries that protect both support and accountability",
          "Creating a home environment that supports stability",
          "Improving communication during stress and setbacks",
        ],
      },
      {
        heading: "Why it matters",
        body:
          "Recovery often happens within relationships. Strong support systems—paired with healthy boundaries—improve engagement and reduce crisis cycles.\n\nFamily therapy can also reduce relapse risk by aligning expectations: what support looks like, what consequences are healthy, and what the plan is if warning signs return.",
      },
      {
        heading: "Common family dynamics in recovery",
        body:
          "Many families are trying their best—but are stuck in patterns that developed to survive past chaos. Therapy helps the family update those patterns to match the current goal: stability and healing.",
        bullets: [
          "Walking on eggshells to avoid conflict or relapse",
          "Over-functioning (doing too much) vs. disengaging (doing too little)",
          "Confusion between support, rescuing, and enabling",
          "Trust fractures after broken promises or hidden use",
        ],
      },
      {
        heading: "What a healthy support plan can include",
        body:
          "A good family plan is specific. Everyone knows what to do when stress rises, and no one has to improvise during a crisis.",
        bullets: [
          "Clear communication guidelines (when/where/how to talk about hard topics)",
          "Boundaries around money, housing, transportation, and phone access",
          "A relapse-response plan (who to call, what steps happen next)",
          "Support for family stress (education, groups, and self-care routines)",
        ],
      },
    ]
  ),
  build(
    "group-therapy",
    "Group Therapy",
    "Group therapy provides structured support, real-time practice, and accountability—helping you build coping skills and connection that reduce isolation and relapse risk.",
    "Treatment Approach",
    [
      {
        heading: "What group therapy is",
        body:
          "Group therapy brings people together with a trained clinician to process experiences, practice skills, and gain perspective. It reduces isolation and creates accountability.\n\nIn recovery, group is often where people start to feel understood without having to “perform” or hide.",
      },
      {
        heading: "What you gain in group",
        body:
          "Groups are structured, supportive, and guided by evidence-based approaches. You don’t have to share everything—participation can grow at your pace—while still gaining value from the process.",
        bullets: [
          "Honest feedback and encouragement from peers",
          "Practice with boundaries, communication, and emotional skills",
          "Relapse-prevention planning and trigger work",
          "A sense of belonging—without judgment",
        ],
      },
      {
        heading: "How it supports recovery",
        body:
          "For many people, group becomes the place they learn they’re not alone—and where new coping patterns become real through repetition and shared experience.\n\nGroup also helps you build “recovery muscles”: showing up, being honest, receiving feedback, and staying accountable even when it’s uncomfortable.",
      },
      {
        heading: "Types of groups you may attend",
        body:
          "Programs often include different group styles so you can learn skills and also process what’s underneath the pattern.",
        bullets: [
          "Skills groups (CBT/DBT, emotion regulation, coping strategies)",
          "Process groups (real-life stressors, relationships, recovery blocks)",
          "Relapse prevention and recovery planning groups",
          "Psychoeducation (understanding addiction, mental health, trauma)",
        ],
      },
      {
        heading: "What if group feels intimidating?",
        body:
          "That’s normal. Many people feel anxious at first—especially if they’ve carried shame or isolation for a long time.\n\nA good group environment is structured and facilitated to keep it safe, respectful, and constructive. You can start by listening, then gradually participate more as trust grows.",
      },
    ]
  ),
  build(
    "individual-therapy",
    "Individual Therapy",
    "Individual therapy is a private space to build a personalized recovery plan, address root issues, and develop coping skills that fit your real life.",
    "Treatment Approach",
    [
      {
        heading: "What individual therapy is",
        body:
          "Individual therapy is a private, collaborative space where you work with a therapist on goals that matter to you—at a pace that supports real progress.\n\nIt’s where your treatment plan becomes personal: your triggers, your stress patterns, your relationships, your history, and your strengths.",
      },
      {
        heading: "Common focus areas",
        body:
          "Treatment is individualized based on your history, strengths, and current needs. Most people work on a blend of coping skills and deeper change over time.",
        bullets: [
          "Cravings, relapse patterns, and sustainable coping",
          "Anxiety, depression, and mood instability",
          "Trauma-informed processing and stabilization",
          "Identity, self-worth, boundaries, and life direction",
        ],
      },
      {
        heading: "What to expect",
        body:
          "You’ll develop a plan, track progress, and build tools you can carry into daily life. Therapy is not just “talking about problems”—it’s practicing new responses until they become more natural.\n\nYour therapist may recommend structured exercises between sessions (reflection prompts, coping practice, boundary scripts, or relapse-prevention planning) to help progress continue outside the therapy room.",
      },
      {
        heading: "How individual therapy works with groups",
        body:
          "In many programs, individual therapy and group therapy reinforce each other. Group helps you practice skills and connection; individual therapy helps you tailor the plan, process sensitive topics, and troubleshoot what’s getting in the way.",
      },
      {
        heading: "When individual therapy can be especially helpful",
        body:
          "Some issues benefit from a private setting and a slower pace. Individual therapy can create the safety needed for deeper work.",
        bullets: [
          "Trauma history or intense shame",
          "Complex relationships and boundary challenges",
          "Co-occurring mental health concerns that drive cravings",
          "Repeated relapse cycles that need a more personalized plan",
        ],
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
    "Anxiety disorders are more than “normal stress.” They can affect sleep, focus, relationships, and daily functioning. With evidence-based care, anxiety can become manageable and life can feel steadier again.",
    "Mental Health",
    [
      {
        heading: "What anxiety can look like",
        body:
          "Anxiety disorders can show up as constant worry, panic symptoms, avoidance, irritability, sleep disruption, or feeling “on edge” most of the time.\n\nSometimes anxiety is obvious. Other times it’s hidden behind overworking, perfectionism, people-pleasing, or using substances to get temporary relief.",
      },
      {
        heading: "Common patterns",
        body:
          "Anxiety often creates a cycle: a fear shows up, the body reacts, and avoidance reduces discomfort short-term—but strengthens the fear long-term.",
        bullets: [
          "Overthinking, reassurance-seeking, or rumination",
          "Panic sensations (racing heart, shortness of breath, dizziness)",
          "Avoidance of places, people, or sensations",
          "Using substances to self-soothe or “turn it off”",
        ],
      },
      {
        heading: "How treatment helps",
        body:
          "Evidence-based therapy can help you understand triggers, build coping skills, and gently face fears in a structured way.\n\nTreatment often combines skills (breathing, grounding, cognitive tools), behavior change (reducing avoidance), and support for co-occurring substance use—because self-medication can keep the anxiety cycle going.",
      },
      {
        heading: "Anxiety and substance use (the self-medication loop)",
        body:
          "Many people discover alcohol, cannabis, benzodiazepines, or opioids “work” for anxiety—until they don’t. Relief is temporary, and rebound anxiety can become stronger over time.\n\nA recovery plan often includes learning safer coping skills and building routine stability so anxiety doesn’t keep driving cravings.",
      },
      {
        heading: "Skills that reduce anxiety long-term",
        body:
          "The goal isn’t to never feel anxious. The goal is to respond differently when anxiety shows up—so it stops running your life.",
        bullets: [
          "Grounding skills for panic and overwhelm",
          "Cognitive tools for catastrophic or shame-based thinking",
          "Gradual exposure to feared situations with support",
          "Sleep and routine stabilization to reduce vulnerability",
          "Communication and boundary skills to reduce chronic stress",
        ],
      },
    ]
  ),
  build(
    "bipolar-disorders",
    "Bipolar Disorders",
    "Bipolar disorders involve shifts in mood and energy that can affect judgment, sleep, and relationships. Coordinated treatment can support steadier routines and long-term stability.",
    "Mental Health",
    [
      {
        heading: "What bipolar disorders are",
        body:
          "Bipolar disorders involve mood episodes that can include depression and periods of elevated mood (mania or hypomania). Episodes can affect sleep, judgment, energy, spending, decision-making, and relationships.\n\nMany people feel confused or ashamed after an episode. Treatment helps build awareness and a plan—so mood changes are noticed early and managed proactively.",
      },
      {
        heading: "Signs that may show up",
        body:
          "Symptoms vary by person and episode type. The key is recognizing patterns over time—especially changes from your baseline functioning.",
        bullets: [
          "Depressive episodes: low mood, low motivation, hopelessness",
          "Manic/hypomanic episodes: reduced sleep, racing thoughts, impulsivity",
          "Shifts in activity, confidence, and risk-taking",
          "Substance use that worsens mood swings or masks symptoms",
        ],
      },
      {
        heading: "How treatment helps",
        body:
          "Stability often improves with a coordinated plan: therapy, skills, routine stabilization, and collaboration with psychiatric providers when appropriate—especially when substance use is also present.\n\nIn dual diagnosis care, the goal is to reduce relapse and mood destabilization at the same time, because they often intensify each other.",
      },
      {
        heading: "Why sleep and routine matter so much",
        body:
          "Sleep disruption is often both a trigger and a symptom of mood episodes. A consistent routine (sleep, meals, activity, support contact) can reduce vulnerability and help you notice early warning signs sooner.",
      },
      {
        heading: "Bipolar disorders and addiction risk",
        body:
          "During elevated mood, people may feel invincible and take risks. During depression, people may try to numb pain or regain energy. Substances can temporarily change mood but often worsen instability over time.\n\nRecovery plans often include coping strategies for both states, plus accountability steps for high-risk periods.",
      },
    ]
  ),
  build(
    "borderline-personality-disorders",
    "Borderline Personality Disorders",
    "BPD often involves intense emotions, sensitivity to rejection, and relationship stress. Skills-based treatment—especially DBT—can help you feel more stable, secure, and in control.",
    "Mental Health",
    [
      {
        heading: "Understanding BPD",
        body:
          "BPD is associated with intense emotions, sensitivity to rejection, identity shifts, and relationship instability. These patterns often developed as adaptations to earlier stress, trauma, or chronic invalidation.\n\nA helpful way to think about BPD is “a nervous system that learned to survive.” Treatment focuses on building skills so your emotional system doesn’t have to stay in emergency mode.",
      },
      {
        heading: "Common experiences",
        body:
          "Every person is different, but some patterns are common. The goal is not to label you—it’s to understand what you experience and what helps.",
        bullets: [
          "Big emotional swings and difficulty calming down",
          "Fear of abandonment and relationship conflict",
          "Impulsivity (including substances) during distress",
          "Feeling empty, numb, or unsure who you are",
        ],
      },
      {
        heading: "How treatment helps",
        body:
          "Skills-based approaches—especially DBT—can help with emotion regulation, distress tolerance, and healthier relationships while supporting sobriety and stability.\n\nTreatment often focuses on building a “pause” between emotion and action, strengthening boundaries, and creating a plan for crisis moments before they happen.",
      },
      {
        heading: "BPD and substance use",
        body:
          "When emotions spike, substances can feel like fast relief. But the crash can worsen shame, conflict, and instability.\n\nIn co-occurring care, the goal is to replace emergency coping with skills that work—especially in the first 30 minutes of distress, when relapse risk is highest.",
      },
      {
        heading: "What progress can look like",
        body:
          "Progress is often gradual, then suddenly obvious. Over time you may notice emotions feel less overwhelming, relationships feel steadier, and urges pass more quickly—because you have a plan and skills that you trust.",
      },
    ]
  ),
  build(
    "depression-and-mood-disorders",
    "Depression and Mood Disorders",
    "Depression affects mood, energy, motivation, and hope. Evidence-based care can help you rebuild routine, reconnect with support, and feel more like yourself again.",
    "Mental Health",
    [
      {
        heading: "What depression can look like",
        body:
          "Depression can affect mood, sleep, appetite, motivation, concentration, and self-worth. It can also show up as irritability, numbness, or withdrawal—not only sadness.\n\nMany people describe depression as “dragging a weight,” “living on autopilot,” or “being tired no matter how much I rest.”",
      },
      {
        heading: "When substance use overlaps",
        body:
          "Alcohol and drugs can temporarily blunt pain—but often worsen mood over time by disrupting sleep, increasing shame, and reducing motivation.",
        bullets: [
          "Sleep disruption and low energy",
          "Increased shame and isolation",
          "Reduced motivation and follow-through",
          "Higher relapse risk during low mood",
        ],
      },
      {
        heading: "How treatment helps",
        body:
          "Therapy can support routines, coping skills, and meaningful goals—while coordinated care addresses co-occurring substance use patterns.\n\nTreatment often includes behavioral activation (small steps that rebuild momentum), CBT tools for hopeless thinking, and support systems that keep you connected even when you don’t feel like showing up.",
      },
      {
        heading: "Signs you may be stuck in a depression cycle",
        body:
          "Depression often creates a self-reinforcing loop: less energy → less activity → less reward → worse mood. Recognizing the loop helps you interrupt it.",
        bullets: [
          "Avoiding friends, responsibilities, or routines",
          "Sleeping too much or not enough",
          "Feeling guilt or shame about “not doing enough”",
          "Using substances to escape, sleep, or feel something",
        ],
      },
      {
        heading: "When to seek urgent help",
        body:
          "If you have thoughts of self-harm, suicide, or you feel unsafe, seek immediate help. Call 911, go to the nearest emergency room, or contact a crisis line.\n\nYou don’t have to carry that alone—help is available right now.",
      },
    ]
  ),
  build(
    "ptsd",
    "Post-Traumatic Stress Disorder (PTSD)",
    "PTSD can keep the nervous system stuck in survival mode. Trauma-informed care prioritizes safety and stabilization first, then supports healing at a pace that protects your recovery.",
    "Mental Health",
    [
      {
        heading: "What PTSD is",
        body:
          "PTSD can occur after trauma and may involve intrusive memories, nightmares, hypervigilance, avoidance, and changes in mood or self-belief. The nervous system may stay stuck in “survival mode,” even when danger is no longer present.\n\nPTSD is not a weakness. It’s the brain and body doing their best to protect you based on what happened.",
      },
      {
        heading: "Common effects",
        body:
          "PTSD can impact daily life in subtle and not-so-subtle ways. Many people experience a mix of symptoms that change over time.",
        bullets: [
          "Feeling unsafe even when you’re not in danger",
          "Startle responses, irritability, and sleep disruption",
          "Avoidance of reminders, places, or emotions",
          "Using substances to cope with flashbacks or panic",
        ],
      },
      {
        heading: "How treatment helps",
        body:
          "Trauma-informed therapy prioritizes safety and stabilization first. Many people need grounding skills, sleep support, and emotion regulation tools before doing deeper trauma processing.\n\nOnce stabilization is stronger, therapy can help you reduce reactivity, rebuild a sense of control, and improve relationships—while supporting sobriety and relapse prevention.",
      },
      {
        heading: "PTSD and addiction (why the overlap is common)",
        body:
          "Substances can temporarily numb intrusive memories, panic, or hypervigilance. Over time, this can reinforce the trauma cycle: more avoidance → more symptoms → more need to escape.\n\nIntegrated dual diagnosis care helps you build safer coping skills and address trauma symptoms without destabilizing recovery.",
      },
      {
        heading: "What trauma-informed care should feel like",
        body:
          "Good trauma care is collaborative and paced. You should feel respected, emotionally safe, and in control of what you share and when.\n\nA strong program will help you build stabilization skills first and will never force you to “relive” trauma before you’re ready.",
      },
    ]
  ),
  build(
    "trauma",
    "Trauma",
    "Trauma can affect the nervous system, relationships, and coping strategies. Trauma-informed care supports healing with safety, skills, and stability—without re-traumatization.",
    "Mental Health",
    [
      {
        heading: "What trauma is",
        body:
          "Trauma can come from single events or ongoing experiences. It can affect how you feel in your body, how you relate to others, and what you believe about yourself.\n\nTwo people can go through similar events and have different trauma responses. What matters is how the nervous system experienced and stored the threat.",
      },
      {
        heading: "How trauma can show up",
        body:
          "Trauma responses are common—and treatable. Many people don’t realize trauma is driving their anxiety, irritability, disconnection, or substance use until they learn how the nervous system works.",
        bullets: [
          "Anxiety, panic, or a constant sense of threat",
          "Dissociation, numbness, or feeling disconnected",
          "Relationship difficulties and boundary challenges",
          "Substance use as a way to cope or avoid memories",
        ],
      },
      {
        heading: "How trauma-informed care helps",
        body:
          "Treatment focuses on safety, skills, and stabilization, then supports deeper processing as appropriate—integrated with relapse-prevention and accountability.\n\nIn practice, this means learning grounding skills, understanding triggers, building boundaries, and creating routines that help the body feel safer and more regulated.",
      },
      {
        heading: "Trauma and relationships",
        body:
          "Trauma can shape how we attach and protect ourselves: withdrawing, people-pleasing, controlling, or reacting quickly to perceived threat.\n\nTherapy can help you rebuild trust, communicate needs, and set boundaries—so relationships become safer instead of destabilizing.",
      },
      {
        heading: "What healing can look like",
        body:
          "Healing doesn’t mean forgetting. It often looks like fewer triggers, quicker recovery after stress, and more choice in how you respond.\n\nMany people notice they can stay present, sleep improves, and their coping strategies become healthier and more consistent.",
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
    "Alcohol addiction (alcohol use disorder) can affect health, mood, relationships, and daily functioning. Evidence-based outpatient care can help you stabilize, build skills, and protect long-term recovery.",
    "Substance Abuse",
    [
      {
        heading: "What alcohol addiction can look like",
        body:
          "Alcohol addiction often involves loss of control, increasing tolerance, and continued use despite harm to health, work, relationships, or mental well-being.\n\nMany people don’t drink “all day” but still struggle: binge patterns, drinking to sleep, drinking to calm anxiety, or repeated attempts to cut back that don’t last.",
      },
      {
        heading: "Common signs",
        body:
          "These patterns can show up gradually—and can be addressed with structured care. If you recognize yourself in several of these, you’re not alone.",
        bullets: [
          "Drinking more or longer than intended",
          "Withdrawal symptoms when cutting back",
          "Blackouts, risky behavior, or relationship conflict",
          "Using alcohol to manage anxiety, sleep, or emotions",
        ],
      },
      {
        heading: "How treatment helps",
        body:
          "Recovery blends skills (CBT/DBT), relapse-prevention planning, accountability, and support for co-occurring mental health concerns.\n\nMany people benefit from learning how stress, sleep, and social environments drive cravings—and building a plan for weekends, events, and conflict.",
      },
      {
        heading: "Alcohol and mental health",
        body:
          "Alcohol can temporarily reduce anxiety or numb emotional pain. Over time it often worsens depression, irritability, panic, and sleep disruption.\n\nDual diagnosis care addresses both sides of the cycle: mood symptoms and alcohol use patterns—so progress is more stable.",
      },
      {
        heading: "What relapse prevention often includes",
        body:
          "Relapse prevention is not just “willpower.” It’s a practical plan for high-risk moments.",
        bullets: [
          "Trigger map (people/places/emotions/time-of-day patterns)",
          "Coping plan for the first 30 minutes of a craving",
          "Accountability steps (who you contact and when)",
          "Lifestyle stability (sleep, nutrition, routine, support meetings)",
          "Boundaries around bars, parties, and drinking environments",
        ],
      },
    ]
  ),
  build(
    "fentanyl-addiction",
    "Fentanyl Addiction",
    "Fentanyl is a highly potent opioid with elevated overdose risk. Treatment focuses on safety, stabilization, and a relapse-prevention plan strong enough for high-intensity cravings.",
    "Substance Abuse",
    [
      {
        heading: "Why fentanyl is high-risk",
        body:
          "Fentanyl is a potent opioid that increases overdose risk—especially when unknowingly mixed with other substances. Dependence can develop quickly and withdrawal can be intense.\n\nBecause fentanyl can be present in counterfeit pills or mixed into other drugs, people may be exposed without intending to use opioids.",
      },
      {
        heading: "What treatment focuses on",
        body:
          "Care prioritizes safety, stabilization, and relapse prevention. The goal is to reduce risk quickly while building a plan you can sustain.",
        bullets: [
          "Assessment and coordinated clinical planning",
          "Skills-based therapy and accountability",
          "Support for cravings, triggers, and high-risk environments",
          "Dual diagnosis care when anxiety, depression, or trauma are present",
        ],
      },
      {
        heading: "Recovery is possible",
        body:
          "With structured treatment and ongoing supports, people do recover from fentanyl use disorder and rebuild stable, meaningful lives.\n\nRecovery often requires strong structure early on: consistent support contact, a clear relapse-response plan, and ongoing skill practice for cravings and emotional distress.",
      },
      {
        heading: "Overdose risk and safety planning",
        body:
          "If you or a loved one is at risk of opioid overdose, safety planning is critical. Harm reduction (including naloxone availability) can save lives.\n\nTreatment programs can help you build a safety plan alongside recovery goals—especially if there’s a history of relapse or high-risk environments.",
      },
      {
        heading: "What a strong recovery plan targets",
        body:
          "Fentanyl cravings can be intense. A strong plan covers multiple layers: coping skills, environment, support, and accountability.",
        bullets: [
          "Immediate coping tools for cravings and panic",
          "Environmental change (people/places) that supports stability",
          "Routine (sleep, meals, movement) that reduces vulnerability",
          "Connection (family, peers, recovery community) that reduces isolation",
        ],
      },
    ]
  ),
  build(
    "heroin-addiction",
    "Heroin Addiction",
    "Heroin addiction can quickly create physical dependence and major life disruption. Treatment focuses on stabilization, skills, accountability, and addressing co-occurring mental health needs.",
    "Substance Abuse",
    [
      {
        heading: "Understanding heroin addiction",
        body:
          "Heroin is an opioid that can rapidly create dependence and tolerance. Use can lead to escalating risk, withdrawal symptoms, and significant disruption in daily life.\n\nMany people want to stop but feel trapped by withdrawal, cravings, and the environments linked to use. Treatment helps break that cycle with structure and support.",
      },
      {
        heading: "How treatment helps",
        body:
          "Treatment focuses on stabilization and relapse prevention while rebuilding structure and support. Recovery is strongest when the plan addresses both the physical pull of opioids and the emotional/behavioral drivers that keep use going.",
        bullets: [
          "Trigger and craving management",
          "Skills development (CBT/DBT) and emotional regulation",
          "Accountability and recovery community support",
          "Addressing co-occurring trauma, anxiety, or depression",
        ],
      },
      {
        heading: "Long-term success",
        body:
          "Sustainable recovery often includes ongoing support, relapse-prevention planning, and a strong routine that protects your progress.\n\nPeople do recover from heroin use disorder. Success often comes from consistency—showing up, staying connected, and using the plan when cravings hit (not after).",
      },
      {
        heading: "Common relapse risks to plan for",
        body:
          "Relapse often happens when stress rises and support drops. Planning ahead reduces the chance of a crisis decision.",
        bullets: [
          "Isolation and “I can handle this alone” thinking",
          "Conflict, grief, shame, or major life transitions",
          "Contact with people/places linked to past use",
          "Sleep disruption and escalating anxiety",
        ],
      },
      {
        heading: "What treatment builds over time",
        body:
          "Recovery isn’t just stopping. It’s building a life that makes relapse less likely: stable routine, healthier relationships, and coping strategies that actually work.",
      },
    ]
  ),
  build(
    "opiate-addiction",
    "Opiate Addiction",
    "Opiate addiction (opioid use disorder) can involve prescription pain medications or illicit opioids. Treatment supports stabilization, relapse prevention, and recovery skills that hold up in real life.",
    "Substance Abuse",
    [
      {
        heading: "What opiate addiction is",
        body:
          "Opiate addiction involves a pattern of opioid use that becomes hard to control and continues despite harmful consequences. It may involve prescription pain medications or illicit opioids.\n\nPeople often begin opioids for pain relief or stress relief and then discover dependence develops—making it difficult to stop without support.",
      },
      {
        heading: "Common signs and challenges",
        body:
          "Opioids can change brain reward and stress systems, making cravings and withdrawal powerful. Many people feel shame—yet these are predictable effects of dependence and can be treated.",
        bullets: [
          "Tolerance and withdrawal cycles",
          "Using to cope with stress, pain, or trauma",
          "Impact on work, relationships, and mental health",
          "High relapse risk without structured supports",
        ],
      },
      {
        heading: "How treatment helps",
        body:
          "Care focuses on coping skills, accountability, and a plan for high-risk moments—integrated with mental health support when needed.\n\nTreatment also helps people rebuild trust and stability: consistent attendance, honest communication, and routines that protect recovery momentum.",
      },
      {
        heading: "Opioids and chronic pain (when relevant)",
        body:
          "Some people have real pain conditions alongside opioid use disorder. A strong plan addresses both: coping skills and recovery support while coordinating safe pain management strategies.",
      },
      {
        heading: "What a realistic plan includes",
        body:
          "Recovery plans work best when they’re specific and repeatable.",
        bullets: [
          "A daily routine that reduces vulnerability and cravings",
          "Support contact and accountability built into the week",
          "A plan for triggers: stress, conflict, loneliness, physical discomfort",
          "Boundaries with people/places tied to use",
        ],
      },
    ]
  ),
  build(
    "xanax-addiction",
    "Xanax Addiction",
    "Xanax (alprazolam) can lead to dependence, and stopping suddenly can be dangerous. Treatment supports safer stabilization and long-term coping skills for anxiety and stress.",
    "Substance Abuse",
    [
      {
        heading: "Why Xanax can be hard to stop",
        body:
          "Xanax is a benzodiazepine often prescribed for anxiety or panic. It can provide quick relief, but dependence can develop—especially with long-term use, higher doses, or non-prescribed use.\n\nStopping suddenly can be dangerous for some people. That’s why coordination with appropriate clinical care matters.",
      },
      {
        heading: "Common patterns",
        body:
          "Use may start for relief but can become a cycle of rebound anxiety and escalating doses. Over time, people may feel they need Xanax just to feel “normal.”",
        bullets: [
          "Needing more for the same effect",
          "Using outside the prescribed plan",
          "Memory issues, sedation, or impaired judgment",
          "Mixing with alcohol or other substances (high risk)",
        ],
      },
      {
        heading: "How treatment helps",
        body:
          "Treatment supports stabilization, coping skills for anxiety, and relapse prevention—while coordinating appropriate clinical oversight.\n\nLong-term success often depends on building anxiety coping skills (CBT/DBT), sleep stabilization, and a plan for panic moments that doesn’t rely on substances.",
      },
      {
        heading: "Xanax and anxiety (breaking the rebound cycle)",
        body:
          "Benzos can reduce anxiety short-term. When they wear off, rebound anxiety can be stronger—leading to repeated dosing and more dependence.\n\nTherapy helps you build a different pathway: skills that reduce anxiety over time and work during spikes.",
      },
      {
        heading: "Skills that help during panic or urges",
        body:
          "The first 5–20 minutes of distress are often the most dangerous for impulsive use. Skills create a bridge through that window.",
        bullets: [
          "Grounding and paced breathing",
          "Naming the emotion + body sensations (reduces escalation)",
          "Urge surfing and “delay + distract” techniques",
          "Boundary scripts for stressful relationships",
        ],
      },
    ]
  ),
  build(
    "benzodiazepine-addiction",
    "Benzodiazepine Addiction",
    "Benzodiazepines can cause dependence, and withdrawal can be medically significant. Treatment supports stabilization, safer coping strategies, and relapse prevention for long-term recovery.",
    "Substance Abuse",
    [
      {
        heading: "What benzodiazepine addiction is",
        body:
          "Benzodiazepines (like Xanax, Ativan, Valium, and Klonopin) can lead to dependence over time. Some people develop tolerance and need higher doses; others feel anxiety intensify when they miss a dose.\n\nWithdrawal can be medically significant and should be taken seriously—especially after long-term use.",
      },
      {
        heading: "Common challenges",
        body:
          "Many people struggle because benzos can temporarily quiet anxiety—then rebound symptoms return. This can make it feel like you “need” the medication to function, even if it’s causing harm.",
        bullets: [
          "Rebound anxiety and sleep disruption",
          "Escalating dosage over time",
          "Difficulty functioning without the medication",
          "Co-occurring alcohol or opioid use increases risk",
        ],
      },
      {
        heading: "How treatment helps",
        body:
          "Treatment supports coping skills, emotional regulation, and a plan for long-term stability—integrated with appropriate clinical coordination.\n\nA strong recovery plan addresses the anxiety/sleep symptoms that often drive benzo use in the first place, so you’re not just “white-knuckling” discomfort.",
      },
      {
        heading: "Benzo misuse and daily functioning",
        body:
          "Long-term benzodiazepine use can affect memory, focus, motivation, and emotional responsiveness. Many people also notice increasing avoidance—because anxiety feels harder to face without the medication.\n\nTherapy and routine stabilization help rebuild confidence and functioning over time.",
      },
      {
        heading: "What relapse prevention emphasizes",
        body:
          "Relapse prevention is often centered on anxiety spikes and sleep issues—two of the most common triggers.",
        bullets: [
          "Anxiety coping plan (skills + support contact)",
          "Sleep routine stabilization and evening wind-down practices",
          "Stress management and boundary setting",
          "Avoiding high-risk mixing with alcohol/other sedatives",
        ],
      },
    ]
  ),
  build(
    "cocaine-addiction",
    "Cocaine Addiction",
    "Cocaine addiction can create strong reward/crash cycles that affect mood, sleep, and impulse control. Treatment builds coping skills, relapse prevention, and stable routines that reduce the cycle’s pull.",
    "Substance Abuse",
    [
      {
        heading: "How cocaine affects the brain",
        body:
          "Cocaine increases dopamine and can create intense reward cycles. After use, people often experience a crash—fatigue, irritability, anxiety, or depression—that can drive repeated use.\n\nThis cycle can feel like a rollercoaster: high energy and confidence during use, then low mood and agitation after.",
      },
      {
        heading: "Common signs",
        body:
          "Cocaine addiction can affect relationships, finances, sleep, and mental health. Many people also experience increased anxiety or paranoia—especially during binges or comedown periods.",
        bullets: [
          "Binge patterns and strong cravings",
          "Sleep disruption and mood swings",
          "Risky behavior and impulsivity",
          "Using to “feel normal” or avoid a crash",
        ],
      },
      {
        heading: "How treatment helps",
        body:
          "Therapy focuses on triggers, coping strategies, and rebuilding routines—often paired with support for anxiety, depression, or trauma.\n\nRecovery plans often include structured coping for weekends/late nights, accountability, and strategies to avoid environments where cocaine is available.",
      },
      {
        heading: "Common triggers for cocaine relapse",
        body:
          "Cocaine relapse risk often rises in specific contexts. Naming these is not judgment—it’s strategy.",
        bullets: [
          "Late-night social environments (clubs, parties, bars)",
          "High stress + low sleep (burnout, conflict, deadlines)",
          "Alcohol use (lowered inhibition, increased cravings)",
          "Relationships where use is normalized or encouraged",
        ],
      },
      {
        heading: "What stability looks like in recovery",
        body:
          "Stability often improves as sleep normalizes, routine returns, and coping skills replace the “high/crash” pattern.\n\nTreatment helps you build a plan that protects energy and mood without relying on stimulants.",
      },
    ]
  ),
  build(
    "marijuana-addiction",
    "Marijuana Addiction",
    "Cannabis can become a problem when it interferes with motivation, relationships, mood, or responsibilities—and feels hard to stop. Treatment supports healthier coping, routine, and long-term balance.",
    "Substance Abuse",
    [
      {
        heading: "When cannabis becomes a problem",
        body:
          "Cannabis use can become problematic when it interferes with motivation, mood, relationships, or responsibilities—and feels hard to stop despite negative consequences.\n\nSome people experience cannabis as calming. Others notice increased anxiety, emotional blunting, or a “stuck” routine over time.",
      },
      {
        heading: "Common patterns",
        body:
          "People may use cannabis to cope with anxiety, sleep issues, boredom, or emotional pain. Over time, that coping strategy can crowd out healthier options.",
        bullets: [
          "Daily use and difficulty cutting back",
          "Using to manage stress or discomfort",
          "Lower motivation or “stuck” routines",
          "Irritability or sleep changes when stopping",
        ],
      },
      {
        heading: "How treatment helps",
        body:
          "Treatment supports coping skills, emotion regulation, and accountability—helping you build routines that work without relying on cannabis.\n\nRecovery often includes replacing the role cannabis played (sleep aid, stress relief, social lubricant) with skills that provide real long-term relief.",
      },
      {
        heading: "Cannabis, anxiety, and sleep",
        body:
          "Many people use cannabis for anxiety or sleep. Over time, some notice more anxiety, reduced motivation, or disrupted sleep quality.\n\nIn recovery, building sleep routine and anxiety coping skills is often a major focus—so stopping doesn’t feel like losing your only relief.",
      },
      {
        heading: "What helps early recovery",
        body:
          "Early cannabis recovery often improves with structure and replacement habits.",
        bullets: [
          "Consistent sleep and wake times",
          "Movement and sunlight (supports mood and sleep drive)",
          "Stress coping plan that doesn’t rely on substances",
          "Accountability and support connection when cravings hit",
        ],
      },
    ]
  ),
  build(
    "methamphetamine-addiction",
    "Methamphetamine Addiction",
    "Methamphetamine addiction can affect sleep, mood, impulse control, and health. Structured treatment supports stabilization, coping skills, accountability, and long-term recovery planning.",
    "Substance Abuse",
    [
      {
        heading: "Understanding methamphetamine addiction",
        body:
          "Meth can strongly affect reward, motivation, sleep, and mood. Use can lead to intense cravings and significant emotional and physical consequences.\n\nMany people describe feeling driven to use during stress, isolation, or after prolonged sleep disruption. Treatment helps you rebuild stability—step by step.",
      },
      {
        heading: "Common impacts",
        body:
          "Meth use can affect many areas of life and may co-occur with anxiety, depression, or trauma symptoms. During use or comedown, people may experience paranoia, agitation, and intense mood swings.",
        bullets: [
          "Sleep disruption and mood instability",
          "Anxiety, paranoia, or agitation",
          "Difficulty enjoying normal activities without using",
          "Relationship, work, and legal consequences",
        ],
      },
      {
        heading: "How treatment helps",
        body:
          "Recovery focuses on coping skills, accountability, rebuilding routines, and addressing co-occurring mental health needs—so stability can take root.\n\nTreatment often includes practical planning for high-risk times, rebuilding sleep and nutrition, and replacing stimulant-driven cycles with sustainable sources of energy and support.",
      },
      {
        heading: "Why structure matters so much",
        body:
          "Meth recovery often improves with consistent structure: sleep, meals, support contact, and scheduled activity. Structure reduces vulnerability and makes cravings more manageable.\n\nPHP/IOP programming provides repetition and accountability while you rebuild stability.",
      },
      {
        heading: "Key recovery targets",
        body:
          "Successful recovery targets both behavior and environment—because returning to the same triggers without a plan is a common relapse pathway.",
        bullets: [
          "Trigger map + coping plan for cravings and agitation",
          "Sleep stabilization and daily routine",
          "Boundaries with people/places associated with use",
          "Support connection (peers, family therapy, recovery community)",
        ],
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


