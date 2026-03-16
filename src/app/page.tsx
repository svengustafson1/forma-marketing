"use client";

import { useState, useCallback } from "react";
import { WaitlistForm } from "@/components/waitlist-form";
import { SplashScreen } from "@/components/splash-screen";

function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <span className="text-xl font-bold tracking-tight text-slate-900" style={{ letterSpacing: "-0.03em" }}>
          forma<span className="text-indigo-500">.</span>
        </span>
        <a
          href="#waitlist"
          className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          Get early access
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white pt-16">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm text-indigo-600">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
          Coming soon
        </div>

        <h1 className="text-5xl font-bold leading-tight tracking-tight text-slate-900 sm:text-6xl lg:text-7xl" style={{ letterSpacing: "-0.03em" }}>
          The CRM That{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
            Builds Itself
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-500 sm:text-xl">
          Tell Forma about your company. In minutes, you have a custom CRM built
          from scratch — entities, fields, views, and workflows designed exactly
          for how you work. Not a template.{" "}
          <span className="font-medium text-slate-900">Yours.</span>
        </p>

        <div id="waitlist" className="mt-10">
          <WaitlistForm className="mx-auto max-w-lg" light />
        </div>

        <p className="mt-4 text-sm text-slate-400">
          No spam. We&apos;ll only email you when it&apos;s time.
        </p>
      </div>
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
    },
    {
      number: "02",
      title: "AI builds your CRM.",
      description:
        "Our engine generates a complete schema: entities, fields, views, relationships, and workflows. All custom. All from your words.",
    },
    {
      number: "03",
      title: "Your CRM. Nobody else\u2019s.",
      description:
        "Start using it immediately. Every view, every field, every workflow reflects your business — not a generic template someone else designed.",
    },
  ];

  return (
    <section className="bg-slate-50 py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl" style={{ letterSpacing: "-0.02em" }}>
            How it works
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Three steps. Five minutes. A CRM that actually fits.
          </p>
        </div>

        <div className="mt-20 grid gap-12 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="text-sm font-mono font-semibold text-indigo-500">{step.number}</span>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">{step.title}</h3>
              <div className="mt-3 h-px w-12 bg-indigo-200" />
              <p className="mt-4 leading-relaxed text-slate-500">{step.description}</p>
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
    },
    {
      title: "Zero learning curve",
      description: "If you can describe your business, you can use Forma. The interface is built around your language, not ours.",
    },
    {
      title: "Evolves with you",
      description: "As your business changes, tell Forma. It restructures your CRM — new fields, new views, new workflows — in seconds.",
    },
    {
      title: "Works in minutes, not months",
      description: "Traditional CRM setup takes weeks of configuration. Forma builds yours in a single conversation.",
    },
    {
      title: "Your language, your logic",
      description: "Forma uses your terminology — not generic \u2018Contacts\u2019 and \u2018Deals.\u2019 If you call them \u2018Partners\u2019 and \u2018Projects,\u2019 so does your CRM.",
    },
    {
      title: "No vendor lock-in",
      description: "Export your data anytime. Your CRM schema is transparent and portable — we believe in earning your loyalty, not trapping it.",
    },
  ];

  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl" style={{ letterSpacing: "-0.02em" }}>
            Software should adapt to people
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Not the other way around. Here&apos;s why Forma is different.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition hover:border-indigo-100 hover:shadow-md"
            >
              <div className="mb-1 h-1 w-8 rounded-full bg-indigo-400" />
              <h3 className="mt-4 text-base font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  return (
    <section className="bg-slate-50 py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl" style={{ letterSpacing: "-0.02em" }}>
            The last interface you&apos;ll ever have to learn
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Stop bending your business to fit a CRM.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <h3 className="mb-6 text-base font-semibold text-slate-400 uppercase tracking-widest text-xs">Traditional CRMs</h3>
            <ul className="space-y-4">
              {[
                "Weeks of setup and configuration",
                "Generic templates that don\u2019t fit",
                "Months to learn the interface",
                "Expensive consultants to customize",
                "Your process adapts to the tool",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-500 text-sm">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-8">
            <h3 className="mb-6 text-xs font-semibold text-indigo-500 uppercase tracking-widest">Forma</h3>
            <ul className="space-y-4">
              {[
                "Ready in minutes, not months",
                "Built from scratch for your business",
                "Nothing to learn — it speaks your language",
                "AI handles all the configuration",
                "The tool adapts to your process",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700 text-sm">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
    <section className="bg-slate-900 py-32">
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl" style={{ letterSpacing: "-0.03em" }}>
          No templates. No compromise.
          <br />
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
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
    <footer className="border-t border-slate-100 bg-white py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="text-lg font-bold tracking-tight text-slate-900" style={{ letterSpacing: "-0.03em" }}>
            forma<span className="text-indigo-500">.</span>
          </span>
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Forma. The CRM that builds itself around you.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const handleSplashComplete = useCallback(() => setShowSplash(false), []);

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <main
        style={{
          opacity: showSplash ? 0 : 1,
          transition: "opacity 0.6s ease-in-out",
        }}
      >
        <Navbar />
        <Hero />
        <HowItWorks />
        <WhyForma />
        <Comparison />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
