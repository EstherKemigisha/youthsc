import { Hero } from '../components/Hero/Hero'
import { About } from '../components/About/About'
import { UpcomingEvents } from '../components/Events/UpcomingEvents'
import { Interviews } from '../components/Interviews/Interviews'

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <UpcomingEvents />
      <Interviews />
    </>
  )
}
