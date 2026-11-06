import { Link } from 'react-router-dom'
import { company, navigation } from '../data/company'
import { services } from '../data/services'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-metro-navy text-white">
      <div className="container-metro py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          <div className="lg:col-span-1">
            <img
              src={company.logoPath}
              alt="Metro Contracting Company LLC logo"
              className="h-14 w-auto object-contain mb-6 bg-white rounded-sm p-2"
            />
            <p className="font-heading text-sm font-semibold tracking-wide mb-3">
              {company.name}
            </p>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              {company.footerIntro}
            </p>
          </div>

          <div>
            <h3 className="font-heading text-xs font-semibold tracking-[0.2em] uppercase text-metro-red mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.label}>
                  {item.path.includes('#') ? (
                    <a
                      href={item.path}
                      className="text-sm text-white/75 hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className="text-sm text-white/75 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-xs font-semibold tracking-[0.2em] uppercase text-metro-red mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    to="/services"
                    className="text-sm text-white/75 hover:text-white transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[11px] text-white/40 leading-relaxed">
              Proposed categories — subject to confirmation.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-xs font-semibold tracking-[0.2em] uppercase text-metro-red mb-5">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-white/75">
              <li>
                <a href={company.phoneTel} className="hover:text-white transition-colors">
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={company.emailMailto} className="hover:text-white transition-colors break-all">
                  {company.email}
                </a>
              </li>
              <li className="leading-relaxed">{company.address}</li>
              <li>
                <a
                  href={company.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-metro-red hover:text-white transition-colors font-heading text-xs tracking-[0.15em] uppercase"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © {year} {company.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/40 tracking-wide">
            Abu Dhabi, United Arab Emirates
          </p>
        </div>
      </div>
    </footer>
  )
}
