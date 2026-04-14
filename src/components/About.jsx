import React from 'react'
import pic from '../assets/pic1.jpeg'

const About = () => {
  return (
    <div name="about" className="w-full bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <div className="relative flex justify-center">
          <div className="absolute -top-6 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl dark:bg-violet-400/10" />
          <img
            src={pic}
            alt="James Kayode portrait"
            className="relative h-80 w-80 rounded-3xl object-cover shadow-2xl shadow-slate-900/15 ring-1 ring-slate-200 dark:ring-slate-800"
            loading="lazy"
          />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">
            About Me
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            I build software with a product mindset and engineering discipline.
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300">
            I am James Kayode, a full stack developer focused on translating
            product ideas into scalable systems. My work combines frontend
            clarity, backend reliability, and automation-first thinking to help
            teams move faster with confidence.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
            I enjoy building end-to-end SaaS experiences, designing APIs that
            last, and integrating AI capabilities where they create measurable
            value. Every project is approached with structured execution,
            performance awareness, and user-centered design.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              'SaaS Product Development',
              'Scalable Backend Architecture',
              'Automation Systems',
              'AI-Powered Features',
            ].map((item) => (
              <p
                key={item}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
