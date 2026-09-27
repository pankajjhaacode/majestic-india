import { Reveal, RevealImage } from './Reveal.jsx'
import { contact, images } from '../data/site.js'
import { useLang } from '../i18n/index.jsx'

export default function Contact() {
  const { t } = useLang()
  const c = t.contact
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <Reveal className="contact__info">
          <p className="eyebrow">{c.eyebrow}</p>
          <h2 id="contact-title" className="display">
            Majestic India
          </h2>
          <p className="contact__sub">Lounge &amp; Restaurant Indien</p>
          <dl className="contact__list">
            <div>
              <dt>{c.phone}</dt>
              <dd>
                <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
              </dd>
            </div>
            <div>
              <dt>{c.email}</dt>
              <dd>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </dd>
            </div>
            <div>
              <dt>{c.instagram}</dt>
              <dd>
                <a href={contact.instagram} target="_blank" rel="noopener noreferrer">
                  @{contact.handle}
                </a>
              </dd>
            </div>
            <div>
              <dt>{c.address}</dt>
              <dd>{contact.address}</dd>
            </div>
          </dl>
        </Reveal>
        <RevealImage image={images.terrasse} className="contact__img" sizes="(min-width: 900px) 45vw, 100vw" />
      </div>
    </section>
  )
}
