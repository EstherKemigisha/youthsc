import { Header } from '../components/Hero/Header'
import { Hero } from '../components/Hero/Hero'
import { HeroAboutSeam } from '../components/Hero/HeroAboutSeam'
import { About } from '../components/About/About'
import { UpcomingEvents } from '../components/Events/UpcomingEvents'
import { Interviews } from '../components/Interviews/Interviews'
import { ContactForm } from '../components/Contact/ContactForm'

export function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <HeroAboutSeam />
      <About />
      <UpcomingEvents />
      <Interviews />
      <ContactForm />
    </>
  )
}
