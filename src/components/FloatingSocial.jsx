import React from 'react'
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa'

const FloatingSocial = () => {
  const links = [
    {
      href: 'https://www.linkedin.com/in/jameskayode',
      icon: <FaLinkedin size={18} />,
      label: 'LinkedIn',
    },
    {
      href: 'https://github.com/jameskayode',
      icon: <FaGithub size={18} />,
      label: 'GitHub',
    },
    {
      href: 'https://wa.link/5dygpl',
      icon: <FaWhatsapp size={18} />,
      label: 'WhatsApp',
    },
    {
      href: 'mailto:jameskayode39@gmail.com',
      icon: <FaEnvelope size={18} />,
      label: 'Email',
    },
    { href: 'tel:+2347067810860', icon: <FaPhone size={18} />, label: 'Phone' },
  ]

  return (
    <div className="fixed left-0 top-1/2 z-[70] flex -translate-y-1/2 flex-col gap-2">
      {links.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target={item.href.startsWith('http') ? '_blank' : undefined}
          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="flex h-11 w-11 items-center justify-center rounded-r-xl border border-l-0 border-slate-200 bg-white text-slate-700 shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          aria-label={item.label}
          title={item.label}
        >
          {item.icon}
        </a>
      ))}
    </div>
  )
}

export default FloatingSocial
