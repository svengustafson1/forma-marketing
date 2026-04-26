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
  return (
    <div className="relative mx-auto mt-16 h-[420px] max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 shadow-2xl shadow-cyan-950/30 lg:mt-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.24),transparent_34%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.16),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent)]" />
      <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/30 bg-slate-950/80 p-6 shadow-[0_0_90px_rgba(34,211,238,0.24)]">
        <div className="flex h-full flex-col items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-cyan-200/80">Company brain</span>
          <span className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">Forma</span>
        </div>
      </div>
      {[
        ["Email", "left-[8%] top-[16%]"],
        ["Website", "right-[10%] top-[18%]"],
        ["Lead sources", "left-[12%] bottom-[18%]"],
        ["Calendar", "right-[14%] bottom-[16%]"],
        ["Spreadsheets", "left-[39%] top-[7%]"],
        ["Tools", "left-[42%] bottom-[8%]"],
      ].map(([label, pos]) => (
        <div key={label} className={`absolute ${pos} rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-200 shadow-xl backdrop-blur`}>
          <div className="mb-2 h-1 w-10 rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-300" />
          {label}
        </div>
      ))}
      <div className="absolute inset-x-8 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
      <div className="absolute inset-y-8 left-1/2 w-px bg-gradient-to-b from-transparent via-fuchsia-300/30 to-transparent" />
      <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/35 p-4 text-sm text-slate-300 backdrop-blur">
        <span className="font-medium text-white">Forma Architect:</span> “I found three lead paths, two project delivery patterns, and a recurring warranty workflow. Want me to build the baseline and preview role workspaces?”
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
    ["Connect", "Bring email, website forms, lead sources, spreadsheets, calendars, and existing tools. Forma reads the operational exhaust."],
    ["Infer", "Forma Architect identifies your nouns, stages, relationships, handoffs, exceptions, and role patterns."],
    ["Assemble", "It generates entities, fields, workflows, dashboards, and personal workspaces — then shows a preview before anything becomes real."],
    ["Evolve", "As the company changes, Forma proposes improvements with evidence. AI proposes, the system compiles, humans approve."],
  ];

  return (
    <section id="how" className="bg-[#05060a] py-28 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-300/80">How it works</span>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">From scattered signals to a living operating system.</h2>
        </div>
        <div className="mt-14 grid gap-4 lg:grid-cols-4">
          {steps.map(([title, body], index) => (
            <div key={title} className="relative rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6">
              <span className="font-mono text-sm text-slate-500">0{index + 1}</span>
              <h3 className="mt-7 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-400">{body}</p>
            </div>
          ))}
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
