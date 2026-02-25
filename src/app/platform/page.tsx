import { platform } from "@/content/platform-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: platform.meta.title,
  description: platform.meta.description,
};

export default function PlatformPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20">
        <h1 className="text-4xl font-bold mb-4">{platform.hero.heading}</h1>
        <p className="text-lg text-smokey max-w-2xl">
          {platform.hero.subheading}
        </p>
      </section>

      {/* The Problem */}
      <section className="py-12 border-t">
        <h2 className="text-2xl font-semibold mb-6">
          {platform.problem.heading}
        </h2>
        <p className="text-smokey max-w-2xl">{platform.problem.body}</p>
      </section>

      {/* Our Approach */}
      <section className="py-12 border-t">
        <h2 className="text-2xl font-semibold mb-6">
          {platform.approach.heading}
        </h2>
        <p className="text-smokey max-w-2xl mb-4">{platform.approach.body}</p>
        <p className="max-w-2xl">
          <strong>{platform.approach.principle}</strong>{" "}
          {platform.approach.principleDetail}
        </p>
      </section>

      {/* Platform Components */}
      <section className="py-12 border-t">
        <h2 className="text-2xl font-semibold mb-6">
          {platform.components.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {platform.components.items.map((item) => (
            <div key={item.name} className="rounded-xl border p-5">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-primary text-xs mt-1 mb-3">{item.subtitle}</p>
              <p className="text-sm">{item.description}</p>
              <p className="text-xs text-smokey mt-3 italic">{item.status}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-12 border-t">
        <h2 className="text-2xl font-semibold mb-6">
          {platform.audience.heading}
        </h2>
        <p className="text-smokey max-w-2xl mb-4">
          {platform.audience.primary}
        </p>
        <p className="max-w-2xl">
          <strong>Starting with the underserved middle</strong>
          {" — "}
          {platform.audience.beachhead.replace(
            "Starting with the underserved middle — ",
            ""
          )}
        </p>
      </section>

      {/* Why Now */}
      <section className="py-12 border-t">
        <h2 className="text-2xl font-semibold mb-6">
          {platform.whyNow.heading}
        </h2>
        <ul className="space-y-4 max-w-2xl">
          {platform.whyNow.forces.map((force) => (
            <li key={force.title} className="flex gap-4">
              <span className="text-primary font-bold shrink-0">&mdash;</span>
              <div>
                <h3 className="font-semibold">{force.title}</h3>
                <p className="text-sm text-smokey">{force.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Built by Operators */}
      <section className="py-12 border-t">
        <h2 className="text-2xl font-semibold mb-6">
          {platform.credibility.heading}
        </h2>
        <p className="text-smokey max-w-2xl mb-4">
          {platform.credibility.body}
        </p>
        <p className="max-w-2xl mb-4">
          {platform.credibility.highlights.map((h, i) => (
            <span key={h}>
              {i > 0 && " · "}
              <strong>{h}</strong>
            </span>
          ))}
        </p>
        <p className="text-sm text-smokey max-w-2xl">
          {platform.credibility.association}
        </p>
      </section>

      {/* Where We Are */}
      <section className="py-12 border-t">
        <h2 className="text-2xl font-semibold mb-6">
          {platform.status.heading}
        </h2>
        <p className="text-smokey max-w-2xl mb-4">{platform.status.body}</p>
        <p className="max-w-2xl font-medium mb-8">{platform.status.closing}</p>
        <a
          href={platform.cta.href}
          className="rounded-xl bg-primary px-5 py-2.5 text-white hover:bg-primary-600 transition-colors"
        >
          {platform.cta.label}
        </a>
      </section>
    </>
  );
}
