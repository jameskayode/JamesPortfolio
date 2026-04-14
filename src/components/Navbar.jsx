import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo.png'
import { FaTimes } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { HiArrowSmUp, HiMoon, HiSun } from 'react-icons/hi'
import { Link } from 'react-scroll'
import FloatingSocial from './FloatingSocial'

const navItems = [
  { label: 'About', target: 'about' },
  { label: 'Projects', target: 'projects' },
  { label: 'Experience', target: 'experience' },
  { label: 'Skills', target: 'skills' },
  { label: 'Resume', target: 'resume' },
  { label: 'Contact', target: 'contact' },
]

const Navbar = ({ theme, onToggleTheme }) => {
  const [nav, setNav] = useState(false)
  const [backToTop, setBackToTop] = useState(false)
  const [showShadowNav, setShowShadowNav] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 260) {
        setBackToTop(true)
        setShowShadowNav(true)
      } else {
        setBackToTop(false)
        setShowShadowNav(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleClick = () => {
    setNav(!nav)
    setBackToTop(false)
  }

  return (
    <>
      <div
        className={`fixed left-0 top-0 z-30 flex h-[80px] w-full items-center justify-between px-6 transition ${
          showShadowNav
            ? 'bg-white/90 shadow-lg shadow-slate-900/5 backdrop-blur dark:bg-slate-950/85'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center gap-3">
          <img
            src={Logo}
            alt="James Kayode logo"
            className="w-10 rounded-full bg-white p-1"
          />
          <Link
            to="home"
            smooth
            duration={500}
            className="cursor-pointer text-sm font-bold tracking-wide text-slate-900 dark:text-slate-100"
          >
            James Kayode
          </Link>
        </div>

        <ul className="hidden md:flex md:items-center md:gap-1">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-violet-100 hover:text-violet-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-violet-300"
            >
              <Link to={item.target} smooth duration={500}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-full border border-slate-300 p-2 text-slate-700 transition hover:border-violet-500 hover:text-violet-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-violet-400 dark:hover:text-violet-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <HiSun size={18} /> : <HiMoon size={18} />}
          </button>
        </div>

        <div onClick={handleClick} className="z-10 md:hidden">
          {!nav ? <BsGridFill /> : <FaTimes />}
        </div>

        <div
          className={
            !nav
              ? 'hidden'
              : 'absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-slate-950 text-white'
          }
        >
          <ul className="flex w-full flex-col items-center justify-center">
            {navItems.map((item) => (
              <li key={item.label} className="py-5 text-3xl font-semibold">
                <Link
                  onClick={handleClick}
                  to={item.target}
                  smooth
                  duration={500}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-sm text-slate-300">
            <p>James Kayode · Portfolio</p>
          </div>
        </div>
      </div>

      <FloatingSocial />
      {backToTop && (
        <button
          onClick={scrollUp}
          className="fixed bottom-6 right-5 z-[80] rounded-full bg-violet-600 p-3 text-white shadow-xl shadow-violet-500/30 md:bottom-8 md:right-8"
          aria-label="Back to top"
        >
          <HiArrowSmUp size={20} />
        </button>
      )}
    </>
  )
}

export default Navbar
