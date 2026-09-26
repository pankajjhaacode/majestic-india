import { m } from 'framer-motion'
import ElephantMark from './ElephantMark.jsx'
import { ease } from './Reveal.jsx'

const viewport = { once: true, margin: '0px 0px -10% 0px' }

// Signature section transition: a gold line draws outward from the centre, then the
// elephant pair — facing each other across a diamond, as on the printed menu — appears.
export default function ElephantDivider({ className = '' }) {
  return (
    <div className={`divider ${className}`} aria-hidden="true">
      <m.span
        className="divider__line divider__line--left"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewport}
        transition={{ duration: 1.2, ease }}
      />
      <m.span
        className="divider__center"
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.8, ease, delay: 0.75 }}
      >
        <ElephantMark className="divider__el" />
        <span className="divider__diamond" />
        <ElephantMark className="divider__el divider__el--flip" />
      </m.span>
      <m.span
        className="divider__line divider__line--right"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewport}
        transition={{ duration: 1.2, ease }}
      />
    </div>
  )
}
