"use client";
import { useState } from "react";

export default function Page() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const payload = {
      name: new FormData(form).get("name"),
      email: new FormData(form).get("email"),
      message: new FormData(form).get("message"),
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="py-20">
        <h1 className="text-4xl font-bold mb-4">Pedagogue Systems</h1>
        <p className="text-lg text-smokey max-w-2xl">
          Practical, responsible AI and transformation for operations. We build
          clear roadmaps, ship useful software, and keep humans in the loop.
        </p>
      </section>

      {/* What we do */}
      <section id="services" className="py-12 border-t">
        <h2 className="text-2xl font-semibold mb-6">What we do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold mb-1">Needs Assessment</h3>
            <p className="text-sm text-smokey">
              Current-state review and prioritized recommendations.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Strategic Roadmap</h3>
            <p className="text-sm text-smokey">
              Clear sequencing, governance, and value tracking.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Program Leadership</h3>
            <p className="text-sm text-smokey">
              Drive execution, dependencies, and outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-12 border-t">
        <h2 className="text-2xl font-semibold mb-6">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border p-4">
            <h3 className="font-semibold">Cassion</h3>
            <p className="text-sm text-smokey mt-1">
              System-of-record data platform with APIs, migration, and
              analytics.
            </p>
          </div>
          <div className="rounded-xl border p-4">
            <h3 className="font-semibold">Almanak</h3>
            <p className="text-sm text-smokey mt-1">
              Mobile app that evolves from daily insights to workforce
              development.
            </p>
          </div>
          <div className="rounded-xl border p-4">
            <h3 className="font-semibold">Maimonides</h3>
            <p className="text-sm text-smokey mt-1">
              Next-gen matching engine with safe, explainable AI.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-12 border-t">
        <h2 className="text-2xl font-semibold mb-6">Open-source projects</h2>
        <ul className="space-y-2">
          <li>
            <a
              className="underline hover:text-primary"
              href="https://github.com/Pedagogue-Systems/ai-matching-consistency-eval"
              target="_blank"
              rel="noreferrer"
            >
              AI Matching Consistency Eval
            </a>
          </li>
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 border-t">
        <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>
        <form onSubmit={onSubmit} className="max-w-xl space-y-4">
          <input
            name="name"
            placeholder="Your name"
            required
            className="w-full border rounded p-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="w-full border rounded p-2"
          />
          <textarea
            name="message"
            placeholder="Tell us about your needs..."
            required
            className="w-full border rounded p-2 h-32"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="px-4 py-2 rounded bg-primary text-white hover:bg-primary-600 disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send"}
          </button>
          {status === "sent" && (
            <p className="text-green-600">Thanks! We&apos;ll be in touch.</p>
          )}
          {status === "error" && (
            <p className="text-red-600">Something went wrong — try again.</p>
          )}
        </form>
      </section>
    </>
  );
}
