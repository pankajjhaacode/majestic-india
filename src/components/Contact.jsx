import { Reveal, RevealImage } from './Reveal.jsx'
import { contact, images } from '../data/site.js'

export default function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <Reveal className="contact__info">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title" className="display">
            Majestic India
          </h2>
          <p className="contact__sub">Lounge &amp; Restaurant Indien</p>
          <dl className="contact__list">
            <div>
              <dt>Téléphone</dt>
              <dd>
                <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
              </dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </dd>
            </div>
            <div>
              <dt>Instagram</dt>
              <dd>
                <a href={contact.instagram} target="_blank" rel="noopener noreferrer">
                  @{contact.handle}
                </a>
              </dd>
            </div>
            <div>
              <dt>Adresse</dt>
              <dd>{contact.address}</dd>
            </div>
          </dl>
        </Reveal>
        <RevealImage image={images.loungeBar} className="contact__img" sizes="(min-width: 900px) 45vw, 100vw" />
      </div>
    </section>
  )
}
