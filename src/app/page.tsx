export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="py-20">
        <h1 className="text-4xl font-bold mb-4">
          I lead transformation programs for PE-backed services companies.
        </h1>
        <p className="text-lg text-smokey max-w-2xl">
          25+ years in staffing, healthcare, and workforce technology.
          Post-merger integration, platform modernization, and
          EBITDA-linked execution for companies from $250M to $3B.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="rounded-xl bg-primary px-5 py-2.5 text-white hover:bg-primary-600 transition-colors"
          >
            Let&apos;s talk
          </a>
          <a
            href="https://www.linkedin.com/in/chrisloope/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 hover:bg-black/5 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-[#0A66C2]"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-12 border-t">
        <h2 className="text-2xl font-semibold mb-6">About</h2>
        <div className="max-w-2xl space-y-3 text-smokey">
          <p>
            I&apos;m Chris Loope. I&apos;ve spent my career building, fixing,
            and scaling operations inside staffing, healthcare, and workforce
            technology companies &mdash; as CEO, CTO, CIO, CDO, and Chief
            Transformation Officer.
          </p>
          <p>
            Today I take on fractional executive and transformation program
            engagements through Pedagogue Systems. I also serve as CTO at
            ActivateStaff and sit on the ASA Staffing Technology Taskforce.
          </p>
        </div>
      </section>

      {/* How I Work */}
      <section id="methodology" className="py-12 border-t">
        <h2 className="text-2xl font-semibold mb-4">How I work</h2>
        <p className="text-smokey max-w-2xl mb-8">
          I align people, process, data, and technology. Stabilize operations
          while enabling automation, integration, and M&amp;A readiness.
          Deliver measurable progress tied to EBITDA.
        </p>
        <ol className="space-y-4 max-w-2xl">
          <li className="flex gap-4">
            <span className="text-primary font-bold shrink-0">01</span>
            <div>
              <h3 className="font-semibold">Discovery (30&ndash;45 days)</h3>
              <p className="text-sm text-smokey">
                Assess maturity, stabilize active projects, set cadence.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="text-primary font-bold shrink-0">02</span>
            <div>
              <h3 className="font-semibold">Design (30&ndash;45 days)</h3>
              <p className="text-sm text-smokey">
                Roadmap with quick wins, ROI model, EBITDA-tied projects.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="text-primary font-bold shrink-0">03</span>
            <div>
              <h3 className="font-semibold">Execution (12&ndash;18 months)</h3>
              <p className="text-sm text-smokey">
                Workstreams with executive sponsors, KPI tracking, visible ROI.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="text-primary font-bold shrink-0">04</span>
            <div>
              <h3 className="font-semibold">Control (3 months)</h3>
              <p className="text-sm text-smokey">
                Hyper-care, gap resolution, transition to steady state.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="text-primary font-bold shrink-0">05</span>
            <div>
              <h3 className="font-semibold">Continuous Improvement</h3>
              <p className="text-sm text-smokey">
                Automate, reduce friction, scale for M&amp;A.
              </p>
            </div>
          </li>
        </ol>
        <p className="mt-8 text-sm text-smokey max-w-2xl">
          <strong className="text-foreground">What you get:</strong> Aligned
          teams and systems. EBITDA-focused execution with repeatable methods.
          AI and M&amp;A readiness built into the foundation.
        </p>
      </section>

      {/* Track Record */}
      <section id="track-record" className="py-12 border-t">
        <h2 className="text-2xl font-semibold mb-6">Track record</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">EmployBridge</h3>
            <p className="text-xs text-smokey mt-1 mb-3">
              Largest U.S. light industrial staffing company
            </p>
            <p className="text-sm">
              Scaled from $300M to $3B over a decade. Integrated a $2B
              acquisition in 18 months.
            </p>
          </div>
          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">BGSF (NYSE: BGSF)</h3>
            <p className="text-xs text-smokey mt-1 mb-3">
              Public workforce solutions &mdash; digital transformation to M&amp;A
              strategy
            </p>
            <p className="text-sm">
              Grew revenue $207M &rarr; $326M, EBITDA $12.2M &rarr; $25.3M.
              Led a 35-project transformation program.
            </p>
          </div>
          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">Fortis Healthcare Solutions</h3>
            <p className="text-xs text-smokey mt-1 mb-3">
              $500M healthcare staffing &mdash; post-merger integration
            </p>
            <p className="text-sm">
              Consolidated 5+ systems onto a unified platform. Delivered $2.5M
              under a $14M budget.
            </p>
          </div>
          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">ActivateStaff</h3>
            <p className="text-xs text-smokey mt-1 mb-3">
              Staffing technology platform
            </p>
            <p className="text-sm">
              Platform scalability strategy, AI integration, and strategic
              partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Pedagogue Labs */}
      <section id="labs" className="py-12 border-t">
        <h2 className="text-2xl font-semibold mb-2">Pedagogue Labs</h2>
        <p className="text-sm text-smokey mb-6">
          Tools and IP developed through Pedagogue Systems.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="rounded-xl border p-4">
            <h3 className="font-semibold text-sm">Cassion</h3>
            <p className="text-xs text-smokey mt-1">
              System-of-record data platform with APIs, migration, and
              analytics.
            </p>
          </div>
          <div className="rounded-xl border p-4">
            <h3 className="font-semibold text-sm">Almanak</h3>
            <p className="text-xs text-smokey mt-1">
              Mobile app that evolves from daily insights to workforce
              development.
            </p>
          </div>
          <div className="rounded-xl border p-4">
            <h3 className="font-semibold text-sm">Maimonides</h3>
            <p className="text-xs text-smokey mt-1">
              Next-gen matching engine with safe, explainable AI.
            </p>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-sm mb-2">Open source</h3>
          <a
            className="text-sm underline hover:text-primary"
            href="https://github.com/Pedagogue-Systems/ai-matching-consistency-eval"
            target="_blank"
            rel="noreferrer"
          >
            AI Matching Consistency Eval
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 border-t">
        <h2 className="text-2xl font-semibold mb-4">Get in touch</h2>
        <p className="text-smokey mb-6">
          Available for fractional, advisory, and transformation program
          engagements.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://www.linkedin.com/in/chrisloope/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#0A66C2] px-5 py-3 text-white hover:bg-[#004182] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Connect on LinkedIn
          </a>
          <a
            href="mailto:chris@pedagogue.co"
            className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 hover:bg-black/5 transition-colors"
          >
            chris@pedagogue.co
          </a>
          <a
            href="https://calendly.com/chris-pedagogue/30-min-with-chris-loope"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-white hover:bg-primary-600 transition-colors"
          >
            Schedule 30 minutes
          </a>
        </div>
      </section>
    </>
  );
}
