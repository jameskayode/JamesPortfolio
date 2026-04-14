import React from 'react'
import { experiences } from '../data/Static'

const Experience = () => {
  return (
    <section
      name="experience"
      className="w-full bg-slate-50 py-20 dark:bg-slate-950"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">
            Experience Timeline
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            Product engineering journey across SaaS, enterprise, and client
            builds.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
            I work at the intersection of product outcomes and engineering
            quality, focusing on maintainable systems and polished interfaces.
          </p>
        </div>
        <div className="mt-12 space-y-6 border-l-2 border-violet-300/60 pl-6 dark:border-violet-700/50">
          {experiences.map((data, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-md shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900"
            >
              <span className="absolute -left-[36px] top-8 h-3 w-3 rounded-full bg-violet-600 dark:bg-violet-400" />
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-600 dark:text-violet-300">
                {data.date}
              </p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                {data.company}
              </h3>
              <p className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-300">
                {data.position}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
