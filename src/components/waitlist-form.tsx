"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function WaitlistForm({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className={`text-center ${className}`}>
        <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
          light
            ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
            : "border border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
        }`}>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          You&apos;re on the list. We&apos;ll be in touch.
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <Input
        type="email"
        placeholder="you@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className={`h-12 flex-1 rounded-lg px-4 ${
          light
            ? "border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus-visible:ring-slate-500"
            : "border-white/10 bg-white/5 text-white placeholder:text-white/40 focus-visible:ring-slate-500"
        }`}
      />
      <Button
        type="submit"
        disabled={status === "loading"}
        className={`h-12 rounded-lg px-8 font-semibold disabled:opacity-50 ${
          light
            ? "bg-slate-900 text-white hover:bg-slate-700"
            : "bg-indigo-600 text-white hover:bg-indigo-500"
        }`}
      >
        {status === "loading" ? "Joining..." : "Join the waitlist"}
      </Button>
      {status === "error" && (
        <p className={`text-sm sm:absolute sm:mt-14 ${light ? "text-red-500" : "text-red-400"}`}>
          {errorMsg}
        </p>
      )}
    </form>
  );
}
