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

export const navLinks = [
  { label: 'Accueil', href: '/#accueil' },
  { label: 'Le Restaurant', href: '/#restaurant' },
  { label: 'La Carte', href: '/carte/' },
  { label: 'Galerie', href: '/#galerie' },
  { label: 'Contact', href: '/#contact' },
]

export const reserveHref = '/#reserver'

// Restaurant photos: salleMiroirs, barLounge, decorKrishna, caveElephants, terrasse.
// Everything else is placeholder food photography (Unsplash licence) — replace with the restaurant's own.
export const images = {
  salleMiroirs: { src: '/images/salle-miroirs.webp', w: 1600, h: 1200, alt: 'La salle : miroirs dorés et banquettes vertes' },
  barLounge: { src: '/images/bar-lounge.webp', w: 1600, h: 1200, alt: 'Le bar du lounge et ses suspensions' },
  decorKrishna: { src: '/images/decor-krishna.webp', w: 1200, h: 1600, alt: 'Une table près d’une affiche de Krishna et de palmiers' },
  caveElephants: { src: '/images/cave-elephants.webp', w: 1600, h: 1200, alt: 'La bibliothèque à vins encadrée de têtes d’éléphant', pos: '30% center' },
  terrasse: { src: '/images/terrasse.webp', w: 1400, h: 1050, alt: 'La terrasse sous l’auvent vert' },
  hero: { src: '/images/hero-table.webp', srcSet: '/images/hero-table-1200.webp 1200w, /images/hero-table.webp 2200w', w: 2200, h: 1467, alt: 'Table dressée à la lueur des bougies' },
  whisky: { src: '/images/whisky.webp', w: 1100, h: 735, alt: 'Un verre servi au bar' },
  spread: { src: '/images/spread.webp', w: 1400, h: 758, alt: 'Currys et naans partagés à table' },
  curryPan: { src: '/images/curry-pan.webp', w: 1100, h: 1466, alt: 'Curry mijoté' },
  biryaniDark: { src: '/images/biryani-dark.webp', w: 1000, h: 1139, alt: 'Biryani au riz basmati safrané' },
  biryaniPortrait: { src: '/images/biryani-portrait.webp', w: 1000, h: 1500, alt: 'Biryani servi à l’assiette' },
  thali: { src: '/images/thali.webp', w: 1100, h: 733, alt: 'Assortiment de plats indiens' },
  curryDeep: { src: '/images/curry-deep.webp', w: 1000, h: 667, alt: 'Détail d’un curry' },
  tikka: { src: '/images/tikka.webp', w: 1000, h: 611, alt: 'Poulet tikka grillé au tandoor' },
  korma: { src: '/images/korma.webp', w: 1000, h: 667, alt: 'Poulet shahi korma' },
  lamb: { src: '/images/lamb.webp', w: 1000, h: 1333, alt: 'Agneau curry' },
  madras: { src: '/images/madras.webp', w: 1000, h: 667, alt: 'Poulet madras' },
  biryani: { src: '/images/biryani.webp', w: 1000, h: 667, alt: 'Biryani' },
  samosa: { src: '/images/samosa.webp', w: 1000, h: 667, alt: 'Samosas' },
}
