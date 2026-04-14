import React from 'react'
import { skillGroups, techStack } from '../data/Static'

const Skill = () => {
  return (
    <section name="skills" className="w-full bg-white py-20 dark:bg-slate-900">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">
            Skills
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            Capabilities shaped for modern product teams.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
            My strengths span product-oriented frontend execution, robust
            backend engineering, and automation-ready workflows.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">
            Tech Stack
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
            {techStack.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-md transition hover:-translate-y-1 dark:border-slate-700 dark:bg-slate-950 ${style}`}
              >
                <img
                  src={src}
                  alt={title}
                  className="mx-auto h-12 w-12 object-contain"
                  loading="lazy"
                />
                <p className="mt-3 text-xs font-semibold text-slate-700 dark:text-slate-200">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill
