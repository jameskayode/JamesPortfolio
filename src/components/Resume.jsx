import React from 'react'
import { BsDownload } from 'react-icons/bs'
import { saveAs } from 'file-saver'
import cvFile from '../assets/JOSEPH JAMES KAYODE CV.pdf'

const Resume = () => {
  const handleDownload = () => {
    saveAs(cvFile, 'James-Kayode-CV.pdf')
  }

  return (
    <section
      name="resume"
      className="w-full bg-slate-50 py-20 dark:bg-slate-950"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">
            Resume
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            Recruiter-friendly snapshot of impact and engineering depth.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Career Summary
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Full stack developer with strong execution across SaaS products,
              enterprise websites, and backend-heavy systems. Focused on
              scalable architecture, automation workflows, and high-converting
              user experiences.
            </p>
            <h3 className="mt-8 text-lg font-bold text-slate-900 dark:text-white">
              Core Strengths
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                'MERN Stack',
                'API Engineering',
                'Automation Systems',
                'AI Integration',
                'Product UX',
                'Performance',
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-7 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Highlights
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              <li>
                Built multi-role SaaS workflows for tailoring operations and
                quality assurance.
              </li>
              <li>
                Engineered responsive corporate platforms with structured
                service storytelling.
              </li>
              <li>
                Implemented scalable backend patterns for maintainability and
                speed.
              </li>
              <li>
                Shipped products with strong mobile usability and production
                readiness.
              </li>
            </ul>
            <button
              type="button"
              onClick={handleDownload}
              className="mt-8 inline-flex items-center rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
            >
              Download CV
              <BsDownload className="ml-3" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
