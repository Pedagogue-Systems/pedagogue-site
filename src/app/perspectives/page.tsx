import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perspectives — Pedagogue Systems",
  description:
    "Articles, podcasts, case studies, and speaking engagements from Chris Loope on AI, staffing technology, and digital transformation.",
};

/* ── tiny arrow icon reused across external links ── */
function ExtIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="inline shrink-0 opacity-40"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export default function PerspectivesPage() {
  return (
    <>
      {/* Header */}
      <section className="py-16">
        <h1 className="text-4xl font-bold mb-4">Perspectives</h1>
        <p className="text-lg text-smokey max-w-2xl">
          Writing, speaking, and conversations on AI governance, staffing
          technology, and digital transformation.
        </p>
      </section>

      {/* ── 1. Featured Articles ── */}
      <section className="py-12 border-t">
        <h2 className="text-2xl font-semibold mb-6">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/perspectives/responsible-recruiting-age-of-ai"
            className="rounded-xl border p-5 hover:border-primary transition-colors group"
          >
            <h3 className="font-semibold group-hover:text-primary transition-colors">
              Responsible Recruiting in the Age of AI
            </h3>
            <p className="text-xs text-smokey mt-1 mb-3">
              Staffing Success &middot; American Staffing Association &middot;
              Jul/Aug 2025
            </p>
            <p className="text-sm text-smokey">
              A deep dive into bias, transparency, and accountability in
              AI-driven hiring &mdash; featuring interviews with Hilke
              Schellmann, Ben Eubanks, and Fernando Rodriguez-Villa.
            </p>
          </Link>

          <Link
            href="/perspectives/practical-path-ai-adoption-staffing"
            className="rounded-xl border p-5 hover:border-primary transition-colors group"
          >
            <h3 className="font-semibold group-hover:text-primary transition-colors">
              A Practical Path to AI Adoption in Staffing
            </h3>
            <p className="text-xs text-smokey mt-1 mb-3">
              Staffing Success &middot; American Staffing Association &middot;
              Mar/Apr 2026
            </p>
            <p className="text-sm text-smokey">
              A crawl-walk-run framework for matching AI ambition to governance
              readiness, with actionable steps for staffing leaders.
            </p>
          </Link>
        </div>
      </section>

      {/* ── 2. Podcast & Webinar ── */}
      <section className="py-12 border-t">
        <h2 className="text-2xl font-semibold mb-6">Podcast &amp; Webinar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">
              AI in Staffing: Navigating Ethics and Innovation
            </h3>
            <p className="text-xs text-smokey mt-1 mb-3">
              You Own the Experience Podcast &middot; Apr 2025 &middot; ~57 min
            </p>
            <p className="text-sm text-smokey mb-4">
              Conversation with Lauren Jones and Rob Mann on AI ethics in
              recruiting, governance, and the impact on recruiters and
              candidates.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <a
                href="https://podcasts.apple.com/ch/podcast/ai-in-staffing-navigating-ethics-and-innovation-with/id1508026939?i=1000702758872"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 underline hover:text-primary"
              >
                Apple Podcasts <ExtIcon />
              </a>
              <a
                href="https://www.listennotes.com/de/podcasts/you-own-the/ai-in-staffing-navigating-uExXTP_QIno/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 underline hover:text-primary"
              >
                Listen Notes <ExtIcon />
              </a>
            </div>
          </div>

          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">
              8 Tech Trends Impacting Staffing in 2026
            </h3>
            <p className="text-xs text-smokey mt-1 mb-3">
              ActivateStaff Webinar &middot; Dec 2025
            </p>
            <p className="text-sm text-smokey mb-4">
              Forward-looking briefing covering AI/agentic systems, automation,
              platforms, data governance, and emerging tools for staffing
              leaders.
            </p>
            <a
              href="https://activatestaff.com/8-tech-trends-impacting-staffing-in-2026/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm underline hover:text-primary"
            >
              Watch webinar <ExtIcon />
            </a>
          </div>
        </div>
      </section>

      {/* ── 3. LinkedIn Articles ── */}
      <section className="py-12 border-t">
        <h2 className="text-2xl font-semibold mb-6">LinkedIn Articles</h2>
        <div className="space-y-4 max-w-2xl">
          <div>
            <a
              href="https://www.linkedin.com/pulse/ai-staffing-innovation-risk-path-responsible-use-chris-loope-vyo8e"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold underline hover:text-primary"
            >
              AI in Staffing: Innovation, Risk, and the Path to Responsible Use{" "}
              <ExtIcon />
            </a>
            <p className="text-xs text-smokey mt-1">Apr 2025</p>
            <p className="text-sm text-smokey mt-1">
              Framework for adopting AI in staffing responsibly &mdash; bias,
              transparency, governance, and the ASA Technology Taskforce.
            </p>
          </div>

          <div>
            <a
              href="https://www.linkedin.com/pulse/mapping-path-efficiency-guide-process-chris-loope"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold underline hover:text-primary"
            >
              Mapping the Path to Efficiency: A Guide to Process Mapping{" "}
              <ExtIcon />
            </a>
            <p className="text-xs text-smokey mt-1">Aug 2023</p>
            <p className="text-sm text-smokey mt-1">
              How process mapping uncovers bottlenecks and ties process clarity
              to technology selection and transformation success.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. Press & Case Studies ── */}
      <section className="py-12 border-t">
        <h2 className="text-2xl font-semibold mb-6">
          Press &amp; Case Studies
        </h2>

        <h3 className="font-semibold mb-4">Press</h3>
        <div className="space-y-4 max-w-2xl mb-8">
          <div>
            <a
              href="https://investor.bgsf.com/news/news-details/2023/BGSF-Inc.-Announces-Two-Executive-Leadership-Appointments/default.aspx"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm underline hover:text-primary"
            >
              BGSF, Inc. Announces Two Executive Leadership Appointments{" "}
              <ExtIcon />
            </a>
            <p className="text-xs text-smokey mt-1">
              BGSF Investor Relations &middot; Jan 2023
            </p>
          </div>

          <div>
            <a
              href="https://www.einpresswire.com/article/778512596/activatestaff-announces-engagement-with-chris-loope-as-chief-technology-officer"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm underline hover:text-primary"
            >
              ActivateStaff Announces Engagement with Chris Loope as CTO{" "}
              <ExtIcon />
            </a>
            <p className="text-xs text-smokey mt-1">
              EIN Presswire &middot; Jan 2025
            </p>
          </div>

          <div>
            <a
              href="https://www.linkedin.com/pulse/75-cios-move-the-national-cio-review-rnfzc"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm underline hover:text-primary"
            >
              75 CIOs On the Move <ExtIcon />
            </a>
            <p className="text-xs text-smokey mt-1">
              The National CIO Review &middot; Feb 2025
            </p>
          </div>

          <div>
            <a
              href="https://news.microsoft.com/source/2012/07/30/employbridge-puts-people-to-work-across-the-us-with-help-from-microsoft-dynamics-crm/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm underline hover:text-primary"
            >
              EmployBridge Puts People to Work With Microsoft Dynamics CRM{" "}
              <ExtIcon />
            </a>
            <p className="text-xs text-smokey mt-1">
              Microsoft News &middot; Jul 2012
            </p>
          </div>

          <div>
            <a
              href="https://credera.com/en-us/insights/the-credera-difference-bgsfs-story"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm underline hover:text-primary"
            >
              The Credera Difference: BGSF&apos;s Story <ExtIcon />
            </a>
            <p className="text-xs text-smokey mt-1">
              Credera &middot; 2023
            </p>
          </div>

          <div>
            <a
              href="https://credera.com/en-us/insights/in-the-company-of-giants"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm underline hover:text-primary"
            >
              In the Company of Giants <ExtIcon />
            </a>
            <p className="text-xs text-smokey mt-1">
              Credera &middot; 2012
            </p>
          </div>

          <div>
            <a
              href="https://credera.com/en-us/insights/employbridge-and-credera-celebrating-15-years-of-partnership"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm underline hover:text-primary"
            >
              EmployBridge &amp; Credera: Celebrating 15 Years of Partnership{" "}
              <ExtIcon />
            </a>
            <p className="text-xs text-smokey mt-1">
              Credera &middot; 2022
            </p>
          </div>
        </div>

        <h3 className="font-semibold mb-4">Case Studies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border p-5">
            <h4 className="font-semibold text-sm">
              Changing the Game for One Million Transactions
            </h4>
            <p className="text-xs text-smokey mt-1 mb-3">
              Adobe &middot; EmployBridge + Adobe Sign
            </p>
            <p className="text-sm text-smokey mb-3">
              ~1M transactions automated per year, ~22,000 staff hours saved
              weekly, ~4M sheets of paper eliminated.
            </p>
            <a
              href="https://www.adobe.com/dc-shared/assets/pdf/acrobat/business/departments/employbridge-case-study.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm underline hover:text-primary"
            >
              View case study (PDF) <ExtIcon />
            </a>
          </div>

          <div className="rounded-xl border p-5">
            <h4 className="font-semibold text-sm">
              Flexibility and Scalability with CRM
            </h4>
            <p className="text-xs text-smokey mt-1 mb-3">
              Credera &middot; EmployBridge CRM Solution
            </p>
            <p className="text-sm text-smokey mb-3">
              Scalable CRM implementation across brands and locations, with a
              companion video case study.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <a
                href="https://credera.com/en-us/insights/case-study-crm-solution-provides-employbridge-flexibility-and-scalability-to-accommodate-ever-changing-staffing-needs"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 underline hover:text-primary"
              >
                Read case study <ExtIcon />
              </a>
              <a
                href="https://www.credera.com/en-us/insights/great-work-with-great-clients-employbridge"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 underline hover:text-primary"
              >
                Watch video <ExtIcon />
              </a>
            </div>
          </div>

          <div className="rounded-xl border p-5">
            <h4 className="font-semibold text-sm">
              Online Application Entry Project
            </h4>
            <p className="text-xs text-smokey mt-1 mb-3">
              Credera &middot; EmployBridge
            </p>
            <p className="text-sm text-smokey mb-3">
              Case study on EmployBridge&apos;s online application entry
              project, streamlining candidate onboarding.
            </p>
            <a
              href="https://credera.com/en-us/insights/case-study-employbridge-online-application-entry-project"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm underline hover:text-primary"
            >
              Read case study <ExtIcon />
            </a>
          </div>

          <div className="rounded-xl border p-5">
            <h4 className="font-semibold text-sm">
              EmployBridge Finds Good Jobs for Good People
            </h4>
            <p className="text-xs text-smokey mt-1 mb-3">
              Credera &middot; EmployBridge
            </p>
            <p className="text-sm text-smokey mb-3">
              Case study featuring CIO quotes on staffing operations,
              automation, and matching talent to jobs at scale.
            </p>
            <a
              href="https://credera.com/en-us/insights/employbridge-finds-good-jobs-good-people"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm underline hover:text-primary"
            >
              Read case study <ExtIcon />
            </a>
          </div>
        </div>
      </section>

      {/* ── 5. Speaking ── */}
      <section className="py-12 border-t">
        <h2 className="text-2xl font-semibold mb-6">Speaking</h2>
        <div className="space-y-4 max-w-2xl">
          <div className="flex gap-4">
            <span className="text-primary font-bold shrink-0">2025</span>
            <div>
              <a
                href="https://americanstaffing.net/sw25/speakers/chris-loope/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold underline hover:text-primary"
              >
                Staffing World 2025 <ExtIcon />
              </a>
              <p className="text-sm text-smokey mt-1">
                Featured speaker at the American Staffing Association&apos;s
                flagship conference.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="text-primary font-bold shrink-0">2025</span>
            <div>
              <a
                href="https://activatestaff.com/sia-exec-forum-panel-2025/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold underline hover:text-primary"
              >
                SIA Executive Forum 2025 <ExtIcon />
              </a>
              <p className="text-sm text-smokey mt-1">
                Panelist on the rise of staffing platforms and the gig workforce.
                Staffing Industry Analysts.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="text-primary font-bold shrink-0">2021</span>
            <div>
              <h3 className="font-semibold">Staffing World 2021</h3>
              <p className="text-sm text-smokey mt-1">
                Speaker at ASA StaffingWorld alongside Rohan Jacob of
                ActivateStaff.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
