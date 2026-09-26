import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Menu from './pages/Menu.jsx'

export default function App({ page }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <a className="skip-link" href="#main">
          Aller au contenu
        </a>
        <Navbar page={page} />
        <main id="main">{page === 'menu' ? <Menu /> : <Home />}</main>
        <Footer />
      </MotionConfig>
    </LazyMotion>
  )
}
