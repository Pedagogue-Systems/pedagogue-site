export default function Page() {
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
        <a
          href="https://www.linkedin.com/in/chrisloope/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-[#0A66C2] px-5 py-3 text-white hover:bg-[#004182] transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          Connect on LinkedIn
        </a>
      </section>
    </>
  );
}
