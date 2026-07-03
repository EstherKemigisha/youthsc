import { Hero } from '../components/Hero/Hero'
import { HeroAboutSeam } from '../components/Hero/HeroAboutSeam'
import { About } from '../components/About/About'
import { UpcomingEvents } from '../components/Events/UpcomingEvents'
import { Interviews } from '../components/Interviews/Interviews'

export function HomePage() {
  return (
    <>
      <Hero />
      <HeroAboutSeam />
      <About />
      <UpcomingEvents />
      <Interviews />
    </>
  )
}
