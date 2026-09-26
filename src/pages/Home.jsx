import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Signature from '../components/Signature.jsx'
import MenuPreview from '../components/MenuPreview.jsx'
import Experience from '../components/Experience.jsx'
import Gallery from '../components/Gallery.jsx'
import Reservation from '../components/Reservation.jsx'
import Contact from '../components/Contact.jsx'
import ElephantDivider from '../components/ElephantDivider.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Signature />
      <MenuPreview />
      <Experience />
      <div className="container">
        <ElephantDivider />
      </div>
      <Gallery />
      <Reservation />
      <Contact />
    </>
  )
}
