import PageHero from '../components/PageHero'
import Services from '../components/Services'
import CTA from '../components/CTA'

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="OUR EXPERTISE"
        title="PROFESSIONAL SOLUTIONS"
        subtitle="Proposed service categories for Metro Contracting Company LLC — editable and subject to confirmation."
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=80"
      />
      <Services showCta={false} />
      <CTA />
    </>
  )
}
