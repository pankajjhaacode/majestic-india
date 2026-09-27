import ElephantMark from './ElephantMark.jsx'
import ElephantPattern from './ElephantPattern.jsx'
import { Reveal } from './Reveal.jsx'
import { contact } from '../data/site.js'
import { useLang } from '../i18n/index.jsx'

// No online booking system exists: reservations go through the phone line printed on the menu.
export default function Reservation() {
  const { t } = useLang()
  const r = t.reserve
  return (
    <section id="reserver" className="reserve" aria-labelledby="reserve-title">
      <ElephantPattern className="reserve__pattern" />
      <Reveal className="container reserve__inner">
        <ElephantMark className="reserve__mark" />
        <h2 id="reserve-title" className="display">
          {r.title[0]} <em>{r.title[1]}</em>
        </h2>
        <p className="reserve__sub">{r.sub}</p>
        <div className="reserve__ctas">
          <a className="btn btn--gold" href={contact.phoneHref}>
            {r.book}
          </a>
          <a className="btn btn--light" href="#contact">
            {r.contact}
          </a>
        </div>
        <p className="reserve__note">
          {r.noteBefore}
          <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
          {r.noteBetween}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </p>
      </Reveal>
    </section>
  )
}
