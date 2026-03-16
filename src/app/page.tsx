import { WaitlistForm } from "@/components/waitlist-form";

function GlowOrb({ className }: { className: string }) {
  return <div className={`absolute rounded-full blur-[120px] opacity-20 ${className}`} />;
}

function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <span className="text-xl font-bold tracking-tight text-white">
          forma<span className="text-blue-500">.</span>
        </span>
        <a
          href="#waitlist"
          className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20"
        >
          Get early access
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 pt-16">
      <GlowOrb className="left-1/4 top-1/4 h-96 w-96 bg-blue-600" />
      <GlowOrb className="bottom-1/4 right-1/4 h-80 w-80 bg-indigo-600" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-400">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
          Coming soon
        </div>

        <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
          The CRM That{" "}
          <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Builds Itself
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
          Tell Forma about your company. In minutes, you have a custom CRM built
          from scratch — entities, fields, views, and workflows designed exactly
          for how you work. Not a template.{" "}
          <span className="text-white font-medium">Yours.</span>
        </p>

        <div id="waitlist" className="mt-10">
          <WaitlistForm className="mx-auto max-w-lg" />
        </div>

        <p className="mt-4 text-sm text-slate-500">
          No spam. We&apos;ll only email you when it&apos;s time.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "You talk. We listen.",
      description:
        "Forma asks you 5–8 questions about your business — your team, your deals, your process. No forms, no checkboxes. Just a conversation.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "AI builds your CRM.",
      description:
        "Our engine generates a complete schema: entities, fields, views, relationships, and workflows. All custom. All from your words.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Your CRM. Nobody else\u2019s.",
      description:
        "Start using it immediately. Every view, every field, every workflow reflects your business — not a generic template someone else designed.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative bg-slate-950 py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Three steps. Five minutes. A CRM that actually fits.
          </p>
        </div>

        <div className="mt-20 grid gap-12 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-blue-400">
                {step.icon}
              </div>
              <span className="text-sm font-mono text-blue-500">{step.number}</span>
              <h3 className="mt-2 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyForma() {
  const features = [
    {
      title: "No two CRMs are alike",
      description: "Every company gets a unique schema generated from their specific workflows, terminology, and processes.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a48.667 48.667 0 00-1.418 8.773 3.752 3.752 0 003.138 4.107 3.752 3.752 0 00-.14-7.007c-.07-.236-.14-.474-.212-.714" />
        </svg>
      ),
    },
    {
      title: "Zero learning curve",
      description: "If you can describe your business, you can use Forma. The interface is built around your language, not ours.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
        </svg>
      ),
    },
    {
      title: "Evolves with you",
      description: "As your business changes, tell Forma. It restructures your CRM — new fields, new views, new workflows — in seconds.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M2.985 19.644l3.181-3.182" />
        </svg>
      ),
    },
    {
      title: "Works in minutes, not months",
      description: "Traditional CRM setup takes weeks of configuration. Forma builds yours in a single conversation.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
    {
      title: "Your language, your logic",
      description: "Forma uses your terminology — not generic \u2018Contacts\u2019 and \u2018Deals.\u2019 If you call them \u2018Partners\u2019 and \u2018Projects,\u2019 so does your CRM.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
        </svg>
      ),
    },
    {
      title: "No vendor lock-in",
      description: "Export your data anytime. Your CRM schema is transparent and portable — we believe in earning your loyalty, not trapping it.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative bg-slate-900/50 py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Software should adapt to people
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Not the other way around. Here&apos;s why Forma is different.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition hover:border-white/10 hover:bg-white/[0.04]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  return (
    <section className="relative bg-slate-950 py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The last interface you&apos;ll ever have to learn
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Stop bending your business to fit a CRM.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-red-500/10 bg-red-500/[0.03] p-8">
            <h3 className="mb-6 text-lg font-semibold text-red-400">Traditional CRMs</h3>
            <ul className="space-y-4">
              {[
                "Weeks of setup and configuration",
                "Generic templates that don\u2019t fit",
                "Months to learn the interface",
                "Expensive consultants to customize",
                "Your process adapts to the tool",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-400">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-red-500/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-blue-500/10 bg-blue-500/[0.03] p-8">
            <h3 className="mb-6 text-lg font-semibold text-blue-400">Forma</h3>
            <ul className="space-y-4">
              {[
                "Ready in minutes, not months",
                "Built from scratch for your business",
                "Nothing to learn — it speaks your language",
                "AI handles all the configuration",
                "The tool adapts to your process",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-400">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative bg-slate-950 py-32">
      <GlowOrb className="left-1/3 top-1/2 h-64 w-64 bg-blue-600" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          No templates. No compromise.
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Just your CRM, built from scratch.
          </span>
        </h2>
        <p className="mt-6 text-lg text-slate-400">
          Join the waitlist and be first to experience a CRM that assembles
          itself around how you work.
        </p>
        <WaitlistForm className="mx-auto mt-10 max-w-lg" />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="text-lg font-bold tracking-tight text-white">
            forma<span className="text-blue-500">.</span>
          </span>
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Forma. The CRM that builds itself around you.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhyForma />
      <Comparison />
      <FinalCTA />
      <Footer />
    </main>
  );
}
