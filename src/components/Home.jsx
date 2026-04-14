import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div
      name="home"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-slate-50 pt-24 dark:bg-slate-950"
    >
      <div className="absolute left-1/2 top-1/2 h-[580px] w-[580px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-3xl dark:bg-sky-500/10" />
      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-6 pb-16 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">
            James Kayode · Full Stack Developer
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-slate-900 sm:text-6xl dark:text-white">
            I engineer digital products that scale with real business growth.
          </h1>
          <h2 className="mt-6 flex flex-wrap items-center gap-3 text-xl font-semibold text-slate-700 sm:text-3xl dark:text-slate-100">
            <span>I build</span>
            <Typewriter
              options={{
                loop: true,
                delay: 55,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('SaaS Applications')
                  .pauseFor(1200)
                  .deleteAll()
                  .typeString('Automation Systems')
                  .pauseFor(1200)
                  .deleteAll()
                  .typeString('Scalable Backend Platforms')
                  .pauseFor(1200)
                  .deleteAll()
                  .typeString('AI-Integrated Workflows')
                  .start()
              }}
            />
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
            I design and ship high-impact products with a focus on resilient
            architecture, clean interfaces, and measurable outcomes. From
            backend-heavy systems to refined frontends, I move ideas from
            concept to reliable production.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="projects"
              smooth
              duration={500}
              className="group inline-flex cursor-pointer items-center rounded-full bg-violet-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
            >
              Explore Projects
              <HiArrowNarrowRight className="ml-2 transition group-hover:translate-x-1" />
            </Link>
            <Link
              to="contact"
              smooth
              duration={500}
              className="cursor-pointer rounded-full border border-slate-300 px-7 py-3 text-sm font-semibold text-slate-700 transition hover:border-violet-500 hover:text-violet-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-violet-400 dark:hover:text-violet-300"
            >
              Let’s Build Together
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 text-sm sm:max-w-xl sm:grid-cols-4">
            <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-4 dark:border-slate-800 dark:bg-slate-900/70">
              <p className="text-2xl font-bold text-slate-900 dark:text-white">
                3+
              </p>
              <p className="mt-1 text-slate-600 dark:text-slate-300">
                Flagship Products
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-4 dark:border-slate-800 dark:bg-slate-900/70">
              <p className="text-2xl font-bold text-slate-900 dark:text-white">
                MERN
              </p>
              <p className="mt-1 text-slate-600 dark:text-slate-300">
                Core Stack
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-4 dark:border-slate-800 dark:bg-slate-900/70">
              <p className="text-2xl font-bold text-slate-900 dark:text-white">
                AI
              </p>
              <p className="mt-1 text-slate-600 dark:text-slate-300">
                Product Integration
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-4 dark:border-slate-800 dark:bg-slate-900/70">
              <p className="text-2xl font-bold text-slate-900 dark:text-white">
                100%
              </p>
              <p className="mt-1 text-slate-600 dark:text-slate-300">
                Mobile-Ready Builds
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200/80 bg-white/70 p-7 shadow-xl shadow-slate-200/30 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-none">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">
            Focus Areas
          </p>
          <div className="mt-6 space-y-4">
            {[
              'SaaS Development',
              'Automation Systems',
              'Backend Engineering',
              'AI-Integrated Applications',
            ].map((focusItem) => (
              <div
                key={focusItem}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-violet-400 hover:text-violet-600 dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-200 dark:hover:border-violet-400 dark:hover:text-violet-300"
              >
                {focusItem}
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm leading-7 text-slate-600 dark:text-slate-300">
            Currently building at Smart People Global while partnering with
            teams that need robust product engineering and execution speed.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
