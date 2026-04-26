"use client";

import { useCallback, useState } from "react";
import { SplashScreen } from "@/components/splash-screen";
import { WaitlistForm } from "@/components/waitlist-form";

const roleLayers = [
  {
    role: "Owner",
    view: "Revenue risk, bottlenecks, decision queues, and the few exceptions that actually need attention.",
  },
  {
    role: "Sales",
    view: "Hot leads, next best follow-ups, proposal stages, call notes, and handoffs without digging through tabs.",
  },
  {
    role: "Operations",
    view: "Active work, stuck handoffs, schedule pressure, missing information, and who owns the next move.",
  },
  {
    role: "Finance",
    view: "Invoice readiness, contract exceptions, approvals, collections risk, and clean source data from the same graph.",
  },
];

const builderTransformation = [
  "Connects email, website forms, lead sources, spreadsheets, calendar, and existing tools.",
  "Infers the business model: leads become clients, clients become projects, projects contain selections, change orders, vendors, warranty items, and invoices.",
  "Builds the company baseline: shared objects, fields, permissions, workflows, and approval rules.",
  "Generates personal workspaces: the owner sees risk, sales sees follow-ups, PMs see active jobs, finance sees billing readiness.",
];

function Navbar() {
  return (
    <nav className="fixed top-0 z-40 w-full border-b border-white/10 bg-[#05060a]/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="text-xl font-semibold tracking-[-0.05em] text-white">
          forma<span className="text-cyan-300">.</span>
        </a>
        <div className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
          <a href="#thesis" className="transition hover:text-white">Thesis</a>
          <a href="#how" className="transition hover:text-white">How it works</a>
          <a href="#roles" className="transition hover:text-white">Adaptive layer</a>
        </div>
        <a
          href="#waitlist"
          className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/20"
        >
          Request access
        </a>
      </div>
    </nav>
  );
}

function OrbitalVisual() {
  const signals = ["Email", "Website forms", "Leads", "Calendar", "Spreadsheets", "Existing tools"];
  const workspaces = ["Owner", "Sales", "Ops", "Finance"];

  return (
    <div className="relative mx-auto mt-16 w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#080a12]/85 p-4 shadow-2xl shadow-cyan-950/30 backdrop-blur lg:mt-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(217,70,239,0.12),transparent_28%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:44px_44px]" />

      <div className="relative grid gap-4 lg:grid-cols-[.82fr_1fr_.82fr] lg:items-stretch">
        <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.035] p-4">
          <p className="mb-4 text-xs font-mono uppercase tracking-[0.22em] text-slate-500">Signals in</p>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            {signals.map((signal) => (
              <div key={signal} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/55 px-3 py-3 text-sm text-slate-300">
                <span className="h-2 w-2 rounded-full bg-cyan-300/80 shadow-[0_0_14px_rgba(103,232,249,.55)]" />
                {signal}
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[1.35rem] border border-cyan-200/15 bg-slate-950/80 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,.08)]">
          <div className="absolute inset-x-8 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent lg:block" />
          <div className="relative mx-auto flex min-h-[300px] max-w-sm flex-col items-center justify-center text-center">
            <div className="absolute h-64 w-64 rounded-full border border-white/10" />
            <div className="absolute h-44 w-44 rounded-full border border-cyan-200/20 shadow-[0_0_90px_rgba(34,211,238,0.16)]" />
            <div className="relative rounded-full border border-cyan-200/25 bg-[#070912] p-5 shadow-2xl shadow-cyan-950/30">
              <div className="flex h-36 w-36 flex-col items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                <span className="text-[10px] uppercase tracking-[0.32em] text-cyan-200/80">Architect</span>
                <span className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">Forma</span>
              </div>
            </div>
          </div>
          <div className="relative rounded-2xl border border-white/10 bg-black/35 p-4 text-sm leading-6 text-slate-300 backdrop-blur">
            <span className="font-medium text-white">Preview generated:</span> baseline objects, permissions, approval rules, and role workspaces are ready for review.
          </div>
        </div>

        <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.035] p-4">
          <p className="mb-4 text-xs font-mono uppercase tracking-[0.22em] text-slate-500">Workspaces out</p>
          <div className="space-y-3">
            {workspaces.map((workspace) => (
              <div key={workspace} className="rounded-2xl border border-white/10 bg-slate-950/55 p-3">
                <div className="mb-3 flex items-center justify-between text-sm text-white">
                  <span>{workspace}</span>
                  <span className="rounded-full bg-cyan-300/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] text-cyan-200">Live</span>
                </div>
                <div className="space-y-1.5">
                  <div className="h-1.5 rounded-full bg-white/15" />
                  <div className="h-1.5 w-4/5 rounded-full bg-white/10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-[#05060a] pt-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(34,211,238,0.20),transparent_28%),radial-gradient(circle_at_85%_16%,rgba(147,51,234,0.18),transparent_26%),linear-gradient(180deg,#05060a_0%,#090b14_48%,#05060a_100%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-24 lg:grid-cols-[1.02fr_.98fr]">
        <div>
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,.9)]" />
            Adaptive business software for companies that do not fit templates
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.065em] text-white sm:text-6xl lg:text-7xl">
            Business software that builds itself around you.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Forma creates one shared company brain, then gives every person a custom interface over the same data. Your baseline stays aligned. Your workspace adapts to your role, rhythm, and next decision.
          </p>
          <div id="waitlist" className="mt-10 max-w-xl">
            <WaitlistForm />
            <p className="mt-4 text-sm text-slate-500">Early access for design partners with messy workflows, spreadsheet sprawl, or CRM fatigue.</p>
          </div>
        </div>
        <OrbitalVisual />
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="bg-[#05060a] py-28 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-300/80">The problem</span>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Your company is alive. Your software is a fossil.</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-slate-300">
            <p>Traditional SaaS ships a fixed opinion about how work should move. Low-code gives you parts and quietly makes you the software designer. Consultants translate your business into configuration until the next change breaks the map.</p>
            <p className="text-white">Forma flips the burden: describe the business, connect the signals, approve the plan. The system assembles the operating layer and keeps improving without turning into black-box chaos.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Thesis() {
  return (
    <section id="thesis" className="border-y border-white/10 bg-[#090b14] py-28 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-fuchsia-200/80">The shift</span>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">Not one app for everyone. One company baseline, personal software for every person.</h2>
        </div>
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {[
            ["Company baseline", "Shared data graph, terminology, permissions, workflows, audit trail, and approved business logic."],
            ["Personal adaptive layer", "Role-specific dashboards, forms, views, nudges, and command surfaces generated from the same source of truth."],
            ["Forma Architect", "An implementation partner that interviews, imports, infers, previews, and evolves the system with approval."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-7 shadow-2xl shadow-black/20">
              <div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-300" />
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">{title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    ["Connect", "Bring email, website forms, lead sources, spreadsheets, calendars, and existing tools into one secure intake layer."],
    ["Infer", "Forma Architect identifies your nouns, stages, relationships, handoffs, exceptions, and role patterns."],
    ["Assemble", "It generates entities, fields, workflows, dashboards, and personal workspaces — then shows a preview before anything becomes real."],
    ["Evolve", "As the company changes, Forma proposes improvements with evidence. AI proposes, the system compiles, humans approve."],
  ];

  return (
    <section id="how" className="relative overflow-hidden bg-[#05060a] py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.11),transparent_34%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-300/80">How it works</span>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">From scattered signals to a living operating system.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-400 lg:justify-self-end">
            The grid is not another dashboard to maintain. It is a controlled build pipeline: inputs become a reviewed baseline, then role-specific software stays aligned to the same truth.
          </p>
        </div>

        <div className="relative mt-16 rounded-[2rem] border border-white/10 bg-white/[0.03] p-3 shadow-2xl shadow-black/30">
          <div className="absolute left-10 right-10 top-[4.65rem] hidden h-px bg-gradient-to-r from-cyan-300/0 via-cyan-300/35 to-fuchsia-300/0 lg:block" />
          <div className="grid gap-3 lg:grid-cols-4">
            {steps.map(([title, body], index) => (
              <div key={title} className="group relative rounded-[1.45rem] border border-white/10 bg-[#080a12]/90 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,.06)] transition hover:border-cyan-200/25 hover:bg-[#0a0d17]">
                <div className="mb-8 flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-200/20 bg-cyan-300/10 font-mono text-sm text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,.10)]">0{index + 1}</span>
                  {index < steps.length - 1 && (
                    <span className="hidden text-slate-600 lg:block">→</span>
                  )}
                </div>
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-400">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BuilderExample() {
  return (
    <section className="bg-white py-28 text-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-slate-500">Example transformation</span>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">A residential builder stops duct-taping the business together.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">Forma turns the way the company already works into software: leads, clients, projects, selections, change orders, vendors, warranty, and billing — all connected.</p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-5">
            <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white shadow-2xl">
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-semibold tracking-[-0.03em]">Northstar Build Co.</span>
                <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs text-cyan-200">Baseline ready</span>
              </div>
              <div className="space-y-4">
                {builderTransformation.map((item, index) => (
                  <div key={item} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-slate-950">{index + 1}</span>
                    <p className="text-sm leading-6 text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RoleLayer() {
  return (
    <section id="roles" className="bg-[#090b14] py-28 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-fuchsia-200/80">Personal adaptive layer</span>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Same data. Different workspace. No duplicate truth.</h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {roleLayers.map((layer) => (
            <div key={layer.role} className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-7">
              <div className="mb-8 flex items-center justify-between">
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">{layer.role}</h3>
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,.8)]" />
              </div>
              <p className="leading-7 text-slate-400">{layer.view}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VoiceFuture() {
  return (
    <section className="bg-[#05060a] py-28 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,.16),transparent_32%),rgba(255,255,255,.035)] p-8 sm:p-12">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-300/80">Voice-first future</span>
          <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Eventually, the interface becomes a conversation with the business itself.</h2>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">“Show me projects where margin is slipping.” “Add a warranty intake flow.” “What changed since Friday?” Forma answers from the company graph, then changes the system safely when you approve it.</p>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-white py-28 text-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-end">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-slate-500">Request access</span>
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">If your business does not fit the software, stop forcing it.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Forma is opening to a small group of design partners. Best fit: companies with real workflow complexity, weird handoffs, and no patience for another generic CRM implementation.</p>
          </div>
          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6" id="request-access">
            <WaitlistForm light />
            <p className="mt-4 text-sm text-slate-500">TODO: replace waitlist storage with production CRM handoff when launch ops are finalized.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05060a] py-12 text-white">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-6 sm:flex-row sm:items-center">
        <div>
          <p className="text-xl font-semibold tracking-[-0.05em]">forma<span className="text-cyan-300">.</span></p>
          <p className="mt-1 text-sm text-slate-500">Business software that builds itself around you.</p>
        </div>
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Forma</p>
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
      <main style={{ opacity: showSplash ? 0 : 1, transition: "opacity 0.7s ease" }}>
        <Navbar />
        <Hero />
        <Problem />
        <Thesis />
        <HowItWorks />
        <BuilderExample />
        <RoleLayer />
        <VoiceFuture />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
