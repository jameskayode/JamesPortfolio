import React from 'react'
import { testimonials } from '../data/Static'

const Testimonials = () => {
  return (
    <section
      name="testimonials"
      className="w-full bg-white py-20 dark:bg-slate-900"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">
          Testimonials
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
          What collaborators say about the way I deliver products.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950"
            >
              <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                “{item.text}”
              </p>
              <p className="mt-5 text-sm font-bold text-slate-900 dark:text-white">
                {item.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
