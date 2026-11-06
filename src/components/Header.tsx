import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { company, navigation } from '../data/company'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative font-heading text-[11px] font-semibold tracking-[0.18em] uppercase transition-colors duration-300 ${
      isActive ? 'text-metro-red' : 'text-metro-navy hover:text-metro-red'
    }`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(23,45,120,0.08)]'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="container-metro flex items-center justify-between h-[72px] lg:h-[84px]">
        <Link to="/" className="flex items-center shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-metro-navy" aria-label="Metro Contracting Company LLC — Home">
          <img
            src={company.logoPath}
            alt="Metro Contracting Company LLC logo"
            className="h-11 sm:h-12 lg:h-14 w-auto object-contain"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {navigation.map((item) =>
            item.path.includes('#') ? (
              <a
                key={item.label}
                href={item.path}
                className="font-heading text-[11px] font-semibold tracking-[0.18em] uppercase text-metro-navy hover:text-metro-red transition-colors duration-300"
              >
                {item.label}
              </a>
            ) : (
              <NavLink key={item.label} to={item.path} className={linkClass} end={item.path === '/'}>
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-primary !px-6 !py-3">
            GET IN TOUCH
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 text-metro-navy hover:text-metro-red transition-colors"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-metro-light shadow-lg"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="container-metro flex flex-col py-6 gap-1" aria-label="Mobile">
              {navigation.map((item) =>
                item.path.includes('#') ? (
                  <a
                    key={item.label}
                    href={item.path}
                    className="py-3 font-heading text-sm font-semibold tracking-[0.18em] uppercase text-metro-navy hover:text-metro-red"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    end={item.path === '/'}
                    className={({ isActive }) =>
                      `py-3 font-heading text-sm font-semibold tracking-[0.18em] uppercase ${
                        isActive ? 'text-metro-red' : 'text-metro-navy hover:text-metro-red'
                      }`
                    }
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ),
              )}
              <Link to="/contact" className="btn-primary mt-4 w-full" onClick={() => setOpen(false)}>
                GET IN TOUCH
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
