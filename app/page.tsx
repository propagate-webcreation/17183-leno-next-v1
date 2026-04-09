import {
  Phone,
  ArrowRight,
  PlaneTakeoff,
  Building2,
  Receipt,
  Siren,
  Stethoscope,
  Ambulance,
  ShieldCheck,
  Globe2,
  HeartPulse,
  Users,
  Briefcase,
  HousePlus,
  Clock3,
  MapPin,
  Mail,
  CheckCircle2,
  Plus
} from "lucide-react";

// ----------------------------------------------------------------------
// Content constants (all pulled from hearing — no fabricated facts)
// ----------------------------------------------------------------------

const SERVICES = [
  {
    icon: PlaneTakeoff,
    title: "Commercial Flight Medical Escort",
    body:
      "ICU-trained clinicians accompany patients on scheduled commercial flights, maintaining continuous in-flight care from origin hospital to final destination."
  },
  {
    icon: Building2,
    title: "Hospital Admission & Coordination",
    body:
      "Direct liaison with receiving hospitals across Japan, arranging admission, documentation and clinical handover in the local language."
  },
  {
    icon: Receipt,
    title: "Medical Payment Handling in Japan",
    body:
      "We settle hospital bills and administrative costs on behalf of overseas insurers and assistance providers, removing cross-border payment friction."
  },
  {
    icon: Siren,
    title: "Airport Medical Assistance",
    body:
      "Arrival and departure support at major Japanese international airports — meet-and-assist, medical monitoring, and seamless transitions to ground transport."
  },
  {
    icon: Stethoscope,
    title: "Stretcher & Non-Emergency Transport",
    body:
      "Stretcher-equipped ground transport for stable patients who need medical supervision between facilities, airports, and accommodation."
  },
  {
    icon: Ambulance,
    title: "Air & Ground Ambulance Dispatch",
    body:
      "A single point of contact for both air ambulance missions and ground ambulance services, coordinated end-to-end by our Japan-based operations team."
  }
];

const ADVANTAGES = [
  {
    title: "ICU-level medical equipment onboard",
    body:
      "Our teams operate with the same standard of critical-care monitoring, ventilation and medication support you would expect inside an intensive care unit — extended to a flight deck or a commercial cabin."
  },
  {
    title: "Direct Japanese hospital network",
    body:
      "We communicate with receiving hospitals in their native language and within their native channels, which collapses the usual delays that international teams face when negotiating Japanese healthcare administration."
  },
  {
    title: "Military medicine & international assistance experience",
    body:
      "Our operational expertise comes from military medicine and international medical assistance, where the tolerance for error is already zero."
  },
  {
    title: "Proven under disaster conditions",
    body:
      "Our procedures and playbooks have been refined through real-world earthquake response operations in Japan — environments where logistics, coordination and calm execution matter the most."
  },
  {
    title: "Insurance-company partnerships",
    body:
      "We work directly with overseas insurance carriers and assistance providers, which means less paperwork friction and faster clearance for the patients who need us."
  }
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "24/7 Case Intake",
    body:
      "A single phone call or request form reaches our dispatch team. We capture patient status, location and urgency in minutes."
  },
  {
    step: "02",
    title: "Medical Assessment & Coordination",
    body:
      "Our clinical team reviews fit-to-fly status with the treating hospital and confirms the equipment and staffing required for the transfer."
  },
  {
    step: "03",
    title: "Transfer Execution",
    body:
      "Whether by air ambulance, commercial escort or ground transport, we deploy the right team and asset for the mission and keep every stakeholder informed throughout."
  },
  {
    step: "04",
    title: "Bedside-to-Bedside Handover",
    body:
      "The patient is delivered directly to the receiving facility with a clean clinical handover and full documentation — no gaps in care."
  }
];

const AUDIENCES = [
  {
    icon: ShieldCheck,
    title: "Insurance Companies",
    body:
      "Operational execution in Japan for overseas carriers covering travelers, expats and business clients."
  },
  {
    icon: Briefcase,
    title: "Assistance Providers",
    body:
      "A ground partner you can hand a Japanese case to with confidence — coordinated from intake to touchdown."
  },
  {
    icon: HousePlus,
    title: "Hospitals & Clinics",
    body:
      "A transparent route to repatriate overseas patients, with all logistics and documentation handled for the clinical team."
  },
  {
    icon: Users,
    title: "Families",
    body:
      "A calm, single point of contact for families facing an unfamiliar medical emergency in Japan."
  }
];

const FAQ = [
  {
    q: "How quickly can you mobilise a medical transfer from a Japanese hospital?",
    a: "Our dispatch team is active 24/7. Once we receive a case, initial assessment and coordination typically begins within the hour, with mobilisation timing driven by fit-to-fly clearance, crew availability and flight windows."
  },
  {
    q: "Do you handle payment directly with Japanese hospitals on behalf of overseas insurers?",
    a: "Yes. Medical payment handling in Japan is one of our core services — we can settle hospital costs in-country on behalf of international insurance companies and assistance providers to accelerate discharge."
  },
  {
    q: "What is the difference between air ambulance and commercial medical escort?",
    a: "Air ambulance uses a fully equipped medical aircraft for patients who cannot travel on a scheduled flight. Commercial medical escort places an ICU-trained clinician alongside the patient on a standard airline booking. Both can be arranged through leno inc."
  },
  {
    q: "Can you coordinate both the air and ground legs of a transfer?",
    a: "Yes. We operate air ambulance and ground ambulance services as a single coordinated mission, so bedside-to-bedside transfers stay in one set of hands from start to finish."
  },
  {
    q: "Do you only serve inbound transfers into Japan?",
    a: "No. We support both inbound and outbound international transfers, as well as transfers that move through Japan as a transit point. Our geographical focus is Asia-Pacific, North America and Europe, but we can assist with missions worldwide."
  }
];

// ----------------------------------------------------------------------
// Page
// ----------------------------------------------------------------------

export default function Page() {
  return (
    <main className="min-h-screen bg-base text-text">
      <Nav />
      <Hero />
      <TrustStrip />
      <Services />
      <WhyLeno />
      <Process />
      <AudiencesSection />
      <About />
      <FaqSection />
      <Contact />
      <Footer />
    </main>
  );
}

// ----------------------------------------------------------------------
// Sections
// ----------------------------------------------------------------------

function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="#top" className="flex items-center gap-3 text-white">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur">
            <PlaneTakeoff className="h-5 w-5" aria-hidden />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-bold tracking-tight">leno inc.</span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-white/60">
              Gifu · Japan
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
          <a href="#services" className="transition hover:text-white">
            Services
          </a>
          <a href="#why" className="transition hover:text-white">
            Why leno
          </a>
          <a href="#process" className="transition hover:text-white">
            How we work
          </a>
          <a href="#about" className="transition hover:text-white">
            Company
          </a>
        </nav>
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-card-soft transition hover:brightness-110 md:inline-flex"
        >
          Request a quote
          <ArrowRight className="h-4 w-4" aria-hidden />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden hero-gradient text-white">
      <div aria-hidden className="absolute inset-0 hero-grid-overlay" />
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-6 pb-28 pt-40 md:pt-44">
        <div className="flex items-center gap-3 text-sm text-white/70">
          <span className="relative inline-flex h-2.5 w-2.5 items-center justify-center">
            <span className="absolute inset-0 animate-pulseDot rounded-full bg-sky-400/80" />
            <span className="relative inline-block h-2.5 w-2.5 rounded-full bg-sky-300" />
          </span>
          <span className="uppercase tracking-[0.22em] text-xs">
            24/7 Medical Dispatch · Japan-based Operations
          </span>
        </div>

        <h1 className="mt-8 max-w-4xl font-display text-[44px] font-bold leading-[1.02] tracking-tightest sm:text-[60px] md:text-[74px]">
          Critical patient transfers,
          <span className="mt-2 block bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent">
            coordinated from Japan.
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
          leno inc. is a Japan-based international medical transport service. We operate
          bedside-to-bedside patient transfers, commercial medical escort flights, and full
          hospital coordination for overseas insurers, assistance providers, hospitals and
          families — 24 hours a day, every day.
        </p>

        <ul className="mt-10 grid max-w-3xl gap-x-8 gap-y-3 text-base text-white/85 sm:grid-cols-2">
          {[
            "Commercial flight medical escort",
            "Air & ground ambulance dispatch",
            "Direct Japanese hospital coordination",
            "Medical payment handling in Japan"
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-300" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-card-lift transition hover:brightness-110"
          >
            Request a transfer quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </a>
          <a
            href="#process"
            className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            How a transfer works
          </a>
          <span className="text-sm text-white/50">Free, no-obligation assessment · 24/7</span>
        </div>
      </div>
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#091630]" />
    </section>
  );
}

function TrustStrip() {
  const items = [
    { icon: HeartPulse, label: "ICU-level equipment onboard" },
    { icon: Globe2, label: "Global reach from Japan" },
    { icon: Building2, label: "Direct Japanese hospital network" },
    { icon: ShieldCheck, label: "Insurance-company partnerships" }
  ];
  return (
    <section className="border-y border-slate-100 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-6 px-6 py-8 text-text md:grid-cols-4">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3 md:justify-center">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent">
              <Icon className="h-4 w-4" aria-hidden />
            </span>
            <span className="text-sm font-semibold text-main/90">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-main/70">
              What we do
            </div>
            <h2 className="font-display text-4xl font-bold tracking-tight text-main md:text-5xl">
              One operator for the full transfer, end to end.
            </h2>
            <p className="mt-5 max-w-xl text-base text-slate-600 md:text-lg">
              From the first phone call to the final bedside handover, leno inc. manages every
              moving part of an international medical transfer — so your patient, client, or
              family member only ever deals with one coordinated team.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-main px-6 py-3 text-sm font-semibold text-white shadow-card-soft transition hover:brightness-110"
          >
            Discuss a case
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="group relative flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-card-soft transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-card-lift"
            >
              <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-white">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="font-display text-xl font-bold text-main">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyLeno() {
  return (
    <section id="why" className="relative overflow-hidden bg-main py-24 text-white md:py-32">
      <div aria-hidden className="absolute inset-0 hero-grid-overlay opacity-60" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            Why leno
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Clinical discipline, built for Japan, trusted for the world.
          </h2>
          <p className="mt-5 max-w-xl text-base text-white/70 md:text-lg">
            Our advantages are operational, not promotional. They come directly from the team we
            built, the network we run, and the environments we have been tested in.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-12">
          {/* Hero cell */}
          <div className="md:col-span-7">
            <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
              <div className="absolute right-8 top-8 text-white/10">
                <HeartPulse className="h-24 w-24" aria-hidden />
              </div>
              <h3 className="font-display text-2xl font-bold text-white">{ADVANTAGES[0].title}</h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-white/75">{ADVANTAGES[0].body}</p>
              <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
                <StatBlock label="ICU-level" value="Onboard" />
                <StatBlock label="Crew" value="Trained" />
                <StatBlock label="Dispatch" value="24/7" />
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="flex h-full flex-col gap-6">
              <AdvantageCard
                title={ADVANTAGES[1].title}
                body={ADVANTAGES[1].body}
                icon={Building2}
              />
              <AdvantageCard
                title={ADVANTAGES[2].title}
                body={ADVANTAGES[2].body}
                icon={ShieldCheck}
                tone="accent"
              />
            </div>
          </div>

          <div className="md:col-span-5">
            <AdvantageCard
              title={ADVANTAGES[3].title}
              body={ADVANTAGES[3].body}
              icon={Siren}
            />
          </div>

          <div className="md:col-span-7">
            <div className="flex h-full items-center justify-between gap-8 rounded-3xl border border-white/10 bg-white/5 p-8">
              <div>
                <h3 className="font-display text-xl font-bold text-white">{ADVANTAGES[4].title}</h3>
                <p className="mt-3 text-sm text-white/70 md:text-base">{ADVANTAGES[4].body}</p>
              </div>
              <a
                href="#contact"
                className="hidden shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-main transition hover:bg-sky-100 md:inline-flex"
              >
                Open a case
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
      <div className="text-[10px] uppercase tracking-[0.18em] text-white/50">{label}</div>
      <div className="mt-1 font-display text-lg font-bold text-white">{value}</div>
    </div>
  );
}

function AdvantageCard({
  title,
  body,
  icon: Icon,
  tone = "default"
}: {
  title: string;
  body: string;
  icon: typeof HeartPulse;
  tone?: "default" | "accent";
}) {
  const base = "relative h-full rounded-3xl p-8 border transition";
  const toneClass =
    tone === "accent"
      ? "bg-accent text-white border-accent shadow-card-lift"
      : "bg-white/5 text-white border-white/10 backdrop-blur";
  return (
    <div className={`${base} ${toneClass}`}>
      <span
        className={`mb-6 inline-flex h-11 w-11 items-center justify-center rounded-2xl ${
          tone === "accent" ? "bg-white/15" : "bg-white/10"
        } text-white`}
      >
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <h3 className="font-display text-lg font-bold text-white">{title}</h3>
      <p className={`mt-3 text-sm leading-relaxed ${tone === "accent" ? "text-white/85" : "text-white/70"}`}>
        {body}
      </p>
    </div>
  );
}

function Process() {
  return (
    <section id="process" className="bg-slate-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-main/70">
            How we work
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-main md:text-5xl">
            A transfer, step by step.
          </h2>
          <p className="mt-5 text-base text-slate-600 md:text-lg">
            Every mission runs through the same four-stage framework, so nothing is improvised and
            nothing falls between desks.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, i) => (
            <div key={step.step} className="relative">
              <div className="flex items-center gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-main text-sm font-bold text-white">
                  {step.step}
                </span>
                {i < PROCESS_STEPS.length - 1 && (
                  <span className="hidden h-px flex-1 bg-gradient-to-r from-main/30 to-transparent lg:block" />
                )}
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-main">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AudiencesSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-main/70">
              Who we serve
            </div>
            <h2 className="font-display text-4xl font-bold tracking-tight text-main md:text-[44px]">
              Built for the people who make medical transfers happen.
            </h2>
            <p className="mt-5 text-base text-slate-600 md:text-lg">
              Our day-to-day clients are not the patients themselves — they are the organizations
              and the families responsible for them. We build processes that make their job easier.
            </p>

            <div className="mt-10 space-y-6">
              {AUDIENCES.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-4">
                  <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-main">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-sky-50/60 p-10">
              <div className="absolute right-8 top-8 text-accent/15">
                <Globe2 className="h-32 w-32" aria-hidden />
              </div>
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-main shadow-card-soft">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Global reach · Japan base
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-main">
                  Coverage & reach
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  leno inc. regularly supports missions across the Asia-Pacific, North America and
                  Europe, with partner arrangements for insurance carriers and assistance
                  organizations worldwide.
                </p>

                <dl className="mt-8 grid grid-cols-2 gap-6">
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-slate-500">Hub</dt>
                    <dd className="mt-1 font-display text-base font-bold text-main">
                      Gifu, Japan
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-slate-500">
                      Language support
                    </dt>
                    <dd className="mt-1 font-display text-base font-bold text-main">
                      EN · JP
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-slate-500">
                      Transfer modes
                    </dt>
                    <dd className="mt-1 font-display text-base font-bold text-main">
                      Air & ground
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-slate-500">Dispatch</dt>
                    <dd className="mt-1 font-display text-base font-bold text-main">
                      24 / 7 / 365
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-slate-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-main/70">
              About leno inc.
            </div>
            <h2 className="font-display text-4xl font-bold tracking-tight text-main md:text-[44px]">
              A Japanese team with a global mission.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600 md:text-lg">
              leno inc. was founded to make international medical transport to and from Japan safe,
              transparent and fast. Our work is grounded in a belief shaped by disaster-response
              experience: when someone is unwell in an unfamiliar country, they should not also
              have to navigate an unfamiliar healthcare system alone.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              We exist to be that single, reliable point of contact — for insurers coordinating a
              claim, for hospitals preparing a discharge, and for the families who just want their
              loved one home.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-card-soft">
              <h3 className="font-display text-xl font-bold text-main">Company information</h3>
              <dl className="mt-8 divide-y divide-slate-100">
                <InfoRow label="Legal name" value="leno inc." />
                <InfoRow label="Representative" value="Koji Ibuka" />
                <InfoRow
                  label="Head office"
                  value="813 Kamitsuchii, Gifu, Gifu, Japan 5020803"
                />
                <InfoRow
                  label="Service area"
                  value="Japan base · Asia-Pacific, North America, Europe and worldwide on request"
                />
                <InfoRow
                  label="Primary services"
                  value="Air ambulance, commercial medical escort, ground ambulance, hospital coordination, medical payment handling"
                />
              </dl>

              <div className="mt-10 flex flex-col gap-4 rounded-2xl bg-slate-50 p-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-xs uppercase tracking-widest text-slate-500">
                    Representative statement
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-main">
                    &ldquo;Our mission is to make international medical transport something that
                    overseas insurers, hospitals and families can hand to us and trust completely
                    — from the first call to the final bedside.&rdquo;
                  </p>
                  <div className="mt-3 text-sm font-semibold text-main">
                    Koji Ibuka · Representative, leno inc.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 py-4 md:flex-row md:items-start md:gap-8">
      <dt className="w-40 shrink-0 text-xs uppercase tracking-widest text-slate-500">{label}</dt>
      <dd className="text-sm leading-relaxed text-main">{value}</dd>
    </div>
  );
}

function FaqSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-main/70">
            FAQ
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-main md:text-5xl">
            Frequently asked questions.
          </h2>
          <p className="mt-5 text-base text-slate-600 md:text-lg">
            A few of the things our international partners usually want to confirm up front.
          </p>
        </div>

        <div className="mt-14 divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-slate-50/40">
          {FAQ.map((item) => (
            <details
              key={item.q}
              className="group px-6 py-6 md:px-8 md:py-7 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-start justify-between gap-4 text-left">
                <span className="font-display text-base font-bold text-main md:text-lg">
                  {item.q}
                </span>
                <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-300 text-main transition group-open:rotate-45">
                  <Plus className="h-4 w-4" aria-hidden />
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-slate-100 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid overflow-hidden rounded-[36px] bg-white shadow-card-lift md:grid-cols-5">
          {/* Info side */}
          <aside className="relative flex flex-col justify-between bg-main p-10 text-white md:col-span-2 md:p-12">
            <div aria-hidden className="absolute inset-0 hero-grid-overlay opacity-70" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
                Request an assessment
              </div>
              <h2 className="mt-6 font-display text-3xl font-bold leading-tight md:text-[38px]">
                Tell us about the patient. We&rsquo;ll take it from there.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-white/75 md:text-base">
                Send a short note and our operations team will come back to you within one
                business day. For critical cases, flag the request as urgent and we will prioritise
                your intake.
              </p>
            </div>
            <div className="relative mt-10 space-y-5 text-sm">
              <ContactRow icon={Mail} label="Operations" value="operations inbox available on request" />
              <ContactRow icon={MapPin} label="Head office" value="Gifu, Japan" />
              <ContactRow
                icon={Clock3}
                label="Response target"
                value="Within 1 business day · urgent cases prioritised"
              />
            </div>
          </aside>

          {/* Form side */}
          <div className="md:col-span-3 p-10 md:p-12">
            <form className="space-y-6" noValidate aria-label="Contact leno inc.">
              <div className="grid gap-6 md:grid-cols-2">
                <FormField label="Full name" id="name" placeholder="e.g. Jane Smith" />
                <FormField
                  label="Organization / hospital"
                  id="org"
                  placeholder="Insurer, assistance team, hospital…"
                />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <FormField label="Country" id="country" placeholder="e.g. United States" />
                <FormField label="Phone number" id="phone" type="tel" placeholder="+1 …" />
              </div>
              <FormField
                label="Email address"
                id="email"
                type="email"
                placeholder="you@organisation.com"
              />

              <fieldset className="space-y-3">
                <legend className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Case urgency
                </legend>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { id: "urg-plan", label: "Planning", detail: "7+ days" },
                    { id: "urg-soon", label: "Urgent", detail: "48–72 hours" },
                    { id: "urg-asap", label: "Critical", detail: "Within 24 h" }
                  ].map((opt) => (
                    <label
                      key={opt.id}
                      htmlFor={opt.id}
                      className="flex cursor-pointer flex-col items-start gap-1 rounded-2xl border border-slate-200 bg-white p-4 text-left transition hover:border-accent has-[:checked]:border-accent has-[:checked]:bg-accent/5"
                    >
                      <input
                        type="radio"
                        name="urgency"
                        id={opt.id}
                        className="sr-only"
                        defaultChecked={opt.id === "urg-plan"}
                      />
                      <span className="text-sm font-bold text-main">{opt.label}</span>
                      <span className="text-xs text-slate-500">{opt.detail}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Case details
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Current location in Japan, desired destination, short medical summary…"
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-main placeholder:text-slate-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </div>

              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-slate-500">
                  By submitting this form you agree to our{" "}
                  <details className="inline">
                    <summary className="inline cursor-pointer underline decoration-dotted underline-offset-2 hover:text-main">
                      privacy policy
                    </summary>
                    <div className="mt-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs leading-relaxed text-slate-600">
                      leno inc. uses the information you share in this form only to respond to your
                      request. We do not sell personal data and we retain case information in line
                      with Japanese personal information protection law. For questions, contact our
                      operations team directly.
                    </div>
                  </details>
                  .
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-card-lift transition hover:brightness-110"
                >
                  Submit case request
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value
}: {
  icon: typeof Phone;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <div>
        <div className="text-[10px] uppercase tracking-[0.18em] text-white/60">{label}</div>
        <div className="mt-1 text-sm font-semibold text-white">{value}</div>
      </div>
    </div>
  );
}

function FormField({
  label,
  id,
  type = "text",
  placeholder
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-main placeholder:text-slate-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#071430] py-14 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10">
                <PlaneTakeoff className="h-5 w-5" aria-hidden />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display text-lg font-bold tracking-tight">leno inc.</span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-white/60">
                  Gifu · Japan
                </span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              Japan-based international medical transport: air ambulance, commercial medical
              escort, hospital coordination and medical payment handling, delivered as a single
              coordinated service.
            </p>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-10 md:grid-cols-3">
            <FooterCol
              title="Services"
              items={[
                "Air ambulance",
                "Commercial medical escort",
                "Hospital coordination",
                "Payment handling"
              ]}
            />
            <FooterCol
              title="Company"
              items={["About leno", "Coverage", "Contact"]}
            />
            <FooterCol
              title="Head office"
              items={[
                "leno inc.",
                "813 Kamitsuchii",
                "Gifu, Gifu 5020803",
                "Japan"
              ]}
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} leno inc. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <details className="inline">
              <summary className="cursor-pointer underline decoration-dotted underline-offset-2 hover:text-white">
                Privacy policy
              </summary>
              <div className="mt-3 max-w-xl rounded-xl border border-white/10 bg-white/5 p-4 leading-relaxed text-white/70">
                leno inc. handles personal information shared through this site solely to respond
                to inquiries and coordinate medical transport services. We comply with the Act on
                the Protection of Personal Information in Japan and do not share personal data
                with third parties outside of the scope of a requested transfer.
              </div>
            </details>
            <details className="inline">
              <summary className="cursor-pointer underline decoration-dotted underline-offset-2 hover:text-white">
                Terms of use
              </summary>
              <div className="mt-3 max-w-xl rounded-xl border border-white/10 bg-white/5 p-4 leading-relaxed text-white/70">
                Information on this website is provided for general reference only and does not
                constitute a contract. Each transfer is governed by a case-specific agreement
                between leno inc. and the requesting party.
              </div>
            </details>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
        {title}
      </div>
      <ul className="mt-4 space-y-2 text-sm text-white/70">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
