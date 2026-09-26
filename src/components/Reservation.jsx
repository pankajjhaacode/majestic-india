import ElephantMark from './ElephantMark.jsx'
import ElephantPattern from './ElephantPattern.jsx'
import { Reveal } from './Reveal.jsx'
import { contact } from '../data/site.js'

// No online booking system exists: reservations go through the phone line printed on the menu.
export default function Reservation() {
  return (
    <section id="reserver" className="reserve" aria-labelledby="reserve-title">
      <ElephantPattern className="reserve__pattern" />
      <Reveal className="container reserve__inner">
        <ElephantMark className="reserve__mark" />
        <h2 id="reserve-title" className="display">
          Réservez <em>votre table</em>
        </h2>
        <p className="reserve__sub">Vivez l’expérience Majestic India.</p>
        <div className="reserve__ctas">
          <a className="btn btn--gold" href={contact.phoneHref}>
            Réserver une table
          </a>
          <a className="btn btn--light" href="#contact">
            Nous contacter
          </a>
        </div>
        <p className="reserve__note">
          Réservations par téléphone au <a href={contact.phoneHref}>{contact.phoneDisplay}</a> ou par e-mail à{' '}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </p>
      </Reveal>
    </section>
  )
}
