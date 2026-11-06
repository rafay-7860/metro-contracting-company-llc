import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import Reveal from './Reveal'
import ImageReveal from './ImageReveal'

interface ProjectsProps {
  limit?: number
  showCta?: boolean
}

export default function Projects({ limit, showCta = true }: ProjectsProps) {
  const list = limit ? projects.slice(0, limit) : projects
  const featured = list.find((p) => p.featured) ?? list[0]
  const rest = list.filter((p) => p.id !== featured.id)

  return (
    <section id="projects" className="py-20 lg:py-28 bg-white" aria-labelledby="projects-heading">
      <div className="container-metro">
        <Reveal>
          <div className="max-w-3xl mb-14 lg:mb-16">
            <p className="section-label mb-4">OUR PROJECTS</p>
            <div className="w-12 h-[2px] bg-metro-red mb-8" aria-hidden="true" />
            <h2 id="projects-heading" className="section-heading">
              OUR WORK. OUR COMMITMENT.{' '}
              <span className="text-metro-red">OUR VISION.</span>
            </h2>
            <p className="mt-6 text-sm text-metro-muted max-w-2xl">
              Sample placeholders until genuine Metro project details and photographs are supplied.
              Stock images do not represent completed Metro projects.
            </p>
          </div>
        </Reveal>

        {/* Featured */}
        <Reveal>
          <article className="relative mb-6 lg:mb-8 group overflow-hidden">
            <ImageReveal
              src={featured.image}
              alt={`${featured.name} — placeholder stock photography`}
              className="aspect-[16/9] lg:aspect-[21/9] w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-metro-charcoal/80 via-metro-charcoal/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
              <span className="inline-block font-heading text-[10px] tracking-[0.2em] uppercase text-metro-red mb-2">
                {featured.category} · Placeholder
              </span>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-white tracking-wide">
                {featured.name}
              </h3>
              <p className="mt-2 text-white/70 text-sm">{featured.location}</p>
            </div>
          </article>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {rest.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08}>
              <article className="group overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden mb-4">
                  <img
                    src={project.image}
                    alt={`${project.name} — placeholder stock photography`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <span className="font-heading text-[10px] tracking-[0.2em] uppercase text-metro-red">
                  {project.category}
                </span>
                <h3 className="font-display text-xl text-metro-navy tracking-wide mt-1">
                  {project.name}
                </h3>
                <p className="text-sm text-metro-muted mt-1">{project.location}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {showCta && (
          <Reveal delay={0.15}>
            <div className="mt-12 text-center">
              <Link to="/projects" className="btn-outline-navy">
                EXPLORE ALL PROJECTS
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
