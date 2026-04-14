import React from 'react'
import { IoSendSharp } from 'react-icons/io5'

const Contact = () => {
  return (
    <section name="contact" className="w-full bg-white py-20 dark:bg-slate-900">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_1.1fr]">
        <div className="rounded-3xl bg-slate-100 p-8 dark:bg-slate-950">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">
            Contact / Call-to-Action
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">
            Let’s build your next product.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
            If you need a full stack developer who can own architecture, build
            elegant interfaces, and deliver production-ready systems, I am
            available for selected collaborations.
          </p>
          <div className="mt-8 space-y-3 text-sm text-slate-700 dark:text-slate-200">
            <p>Email: jameskayode39@gmail.com</p>
            <p>Phone: +234 706 781 0860</p>
            <p>Location: Nigeria · Remote Friendly</p>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-950">
          <form
            action="mailto:jameskayode39@gmail.com"
            method="post"
            encType="text/plain"
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-violet-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-violet-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              required
            />
            <textarea
              name="message"
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-violet-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              placeholder="Message"
              rows="6"
              required
            />
            <button
              type="submit"
              className="group inline-flex items-center rounded-full bg-violet-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
            >
              Send Message
              <span className="ml-2 transition group-hover:translate-x-1">
                <IoSendSharp className="ml-4" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
