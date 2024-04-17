import { Hero } from './Hero'
import { Gallery } from './Gallery'
import { Testimonials } from './Testimonials'
import { Features } from './Features'
import { Articles } from './Articles'

export function Feed({}) {
  return (
    <main className="feed">
      <Hero />
      <Articles />
      <Features />
      <Testimonials />
      <Gallery />
    </main>
  )
}
