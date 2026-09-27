// Contact details exactly as printed on the menu. Address is not in the source material — do not invent it.
export const contact = {
  phoneDisplay: '+33 01 49 41 03 88',
  phoneHref: 'tel:+33149410388',
  email: 'majesticindiaparis@gmail.com',
  handle: 'majesticindiaparis',
  instagram: 'https://www.instagram.com/majesticindiaparis/',
  facebook: 'https://www.facebook.com/majesticindiaparis',
  address: 'Paris, France',
}

// Section anchors are shared by both languages; labels come from the i18n dictionaries.
export function navLinks(t, paths) {
  return [
    { label: t.nav.home, href: `${paths.home}#accueil` },
    { label: t.nav.restaurant, href: `${paths.home}#restaurant` },
    { label: t.nav.menu, href: paths.menu },
    { label: t.nav.gallery, href: `${paths.home}#galerie` },
    { label: t.nav.contact, href: `${paths.home}#contact` },
  ]
}

export const reserveHref = (paths) => `${paths.home}#reserver`

// Restaurant photos: salleMiroirs, barLounge, decorKrishna, caveElephants, terrasse.
// Everything else is placeholder food photography (Unsplash licence) — replace with the restaurant's own.
export const images = {
  salleMiroirs: { src: '/images/salle-miroirs.webp', w: 1600, h: 1200, alt: { fr: 'La salle : miroirs dorés et banquettes vertes', en: 'The dining room: gilded mirrors and green banquettes' } },
  barLounge: { src: '/images/bar-lounge.webp', w: 1600, h: 1200, alt: { fr: 'Le bar du lounge et ses suspensions', en: 'The lounge bar and its pendant lights' } },
  decorKrishna: { src: '/images/decor-krishna.webp', w: 1200, h: 1600, alt: { fr: 'Une table près d’une affiche de Krishna et de palmiers', en: 'A table beside a Krishna print and palms' } },
  caveElephants: { src: '/images/cave-elephants.webp', w: 1600, h: 1200, alt: { fr: 'La bibliothèque à vins encadrée de têtes d’éléphant', en: 'The wine shelves framed by elephant heads' }, pos: '30% center' },
  terrasse: { src: '/images/terrasse.webp', w: 1400, h: 1050, alt: { fr: 'La terrasse sous l’auvent vert', en: 'The terrace under the green awning' } },
  hero: { src: '/images/hero-table.webp', srcSet: '/images/hero-table-1200.webp 1200w, /images/hero-table.webp 2200w', w: 2200, h: 1467, alt: { fr: 'Table dressée à la lueur des bougies', en: 'A table set by candlelight' } },
  whisky: { src: '/images/whisky.webp', w: 1100, h: 735, alt: { fr: 'Un verre servi au bar', en: 'A drink served at the bar' } },
  spread: { src: '/images/spread.webp', w: 1400, h: 758, alt: { fr: 'Currys et naans partagés à table', en: 'Curries and naans shared at the table' } },
  curryPan: { src: '/images/curry-pan.webp', w: 1100, h: 1466, alt: { fr: 'Curry mijoté', en: 'A simmering curry' } },
  biryaniDark: { src: '/images/biryani-dark.webp', w: 1000, h: 1139, alt: { fr: 'Biryani au riz basmati safrané', en: 'Biryani with saffron basmati rice' } },
  biryaniPortrait: { src: '/images/biryani-portrait.webp', w: 1000, h: 1500, alt: { fr: 'Biryani servi à l’assiette', en: 'Biryani, plated' } },
  thali: { src: '/images/thali.webp', w: 1100, h: 733, alt: { fr: 'Assortiment de plats indiens', en: 'An assortment of Indian dishes' } },
  curryDeep: { src: '/images/curry-deep.webp', w: 1000, h: 667, alt: { fr: 'Détail d’un curry', en: 'Close-up of a curry' } },
  tikka: { src: '/images/tikka.webp', w: 1000, h: 611, alt: { fr: 'Poulet tikka grillé au tandoor', en: 'Chicken tikka grilled in the tandoor' } },
  korma: { src: '/images/korma.webp', w: 1000, h: 667, alt: { fr: 'Poulet shahi korma', en: 'Chicken shahi korma' } },
  lamb: { src: '/images/lamb.webp', w: 1000, h: 1333, alt: { fr: 'Agneau curry', en: 'Lamb curry' } },
  madras: { src: '/images/madras.webp', w: 1000, h: 667, alt: { fr: 'Poulet madras', en: 'Chicken madras' } },
  biryani: { src: '/images/biryani.webp', w: 1000, h: 667, alt: { fr: 'Biryani', en: 'Biryani' } },
  samosa: { src: '/images/samosa.webp', w: 1000, h: 667, alt: { fr: 'Samosas', en: 'Samosas' } },
}
