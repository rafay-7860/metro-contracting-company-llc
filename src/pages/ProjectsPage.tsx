import PageHero from '../components/PageHero'
import Projects from '../components/Projects'
import CTA from '../components/CTA'
import Reveal from '../components/Reveal'

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        label="OUR PROJECTS"
        title="OUR WORK. OUR COMMITMENT."
        subtitle="Placeholder gallery awaiting verified Metro project details and photography."
        image="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="bg-metro-light py-8">
        <div className="container-metro">
          <Reveal>
            <p className="text-sm text-metro-muted border-l-2 border-metro-red pl-4">
              Images and captions below are sample placeholders. Stock photography does not
              represent completed Metro projects.
            </p>
          </Reveal>
        </div>
      </section>

      <Projects showCta={false} />
      <CTA />
    </>
  )
}
