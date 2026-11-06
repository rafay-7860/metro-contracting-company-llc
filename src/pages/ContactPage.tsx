import PageHero from '../components/PageHero'
import Contact from '../components/Contact'

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="CONTACT METRO"
        title="WE'D LIKE TO HEAR FROM YOU."
        subtitle="Reach Metro Contracting Company LLC in Musaffah, Abu Dhabi."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
      />
      <Contact />
    </>
  )
}
