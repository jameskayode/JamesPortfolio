import React from 'react'
import { featuredProjects } from '../data/Static'

const Work = () => {
  return (
    <section
      name="projects"
      className="w-full bg-white py-20 dark:bg-slate-900"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">
            Featured Projects
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            Case-study driven product work across SaaS and enterprise platforms.
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300">
            Each project below presents the challenge, engineering response, and
            business-facing outcome. The goal is always the same: build software
            that is elegant, scalable, and results-oriented.
          </p>
        </div>
        <div className="mt-12 space-y-8">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-lg shadow-slate-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="grid gap-0 lg:grid-cols-[1.1fr_1.2fr]">
                <div className="relative overflow-hidden bg-slate-900 p-6">
                  <div className="rounded-2xl border border-white/10 bg-slate-800 p-2">
                    <img
                      src={project.imgSrc}
                      alt={`${project.title} preview`}
                      className="h-64 w-full rounded-xl object-cover transition duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-violet-300">
                    {project.type}
                  </div>
                </div>
                <div className="p-7 sm:p-9">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    <p>
                      <span className="font-semibold text-slate-900 dark:text-slate-100">
                        Problem:
                      </span>{' '}
                      {project.problem}
                    </p>
                    <p>
                      <span className="font-semibold text-slate-900 dark:text-slate-100">
                        Solution:
                      </span>{' '}
                      {project.solution}
                    </p>
                    <p>
                      <span className="font-semibold text-slate-900 dark:text-slate-100">
                        Impact:
                      </span>{' '}
                      {project.impact}
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex rounded-full bg-violet-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-violet-500"
                  >
                    Visit Project
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
