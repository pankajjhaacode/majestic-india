import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Menu from './pages/Menu.jsx'
import { LangProvider, useLang } from './i18n/index.jsx'

function Skip() {
  const { t } = useLang()
  return (
    <a className="skip-link" href="#main">
      {t.skip}
    </a>
  )
}

export default function App({ lang, page }) {
  return (
    <LangProvider lang={lang}>
      <LazyMotion features={domAnimation} strict>
        <MotionConfig reducedMotion="user">
          <Skip />
          <Navbar page={page} />
          <main id="main">{page === 'menu' ? <Menu /> : <Home />}</main>
          <Footer page={page} />
        </MotionConfig>
      </LazyMotion>
    </LangProvider>
  )
}
