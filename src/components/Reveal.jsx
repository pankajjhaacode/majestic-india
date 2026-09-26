import { m } from 'framer-motion'

export const ease = [0.22, 1, 0.36, 1]
const viewport = { once: true, margin: '0px 0px -12% 0px' }

export function Reveal({ as = 'div', delay = 0, y = 28, children, ...rest }) {
  const Tag = m[as]
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 1, ease, delay }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

// Image that unveils with a clip-path wipe and settles from 1.03 to 1.
export function RevealImage({ image, className = '', sizes = '100vw', eager = false, delay = 0 }) {
  return (
    <m.div
      className={`reveal-img ${className}`}
      initial={{ clipPath: 'inset(0 0 100% 0)' }}
      whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
      viewport={viewport}
      transition={{ duration: 1.3, ease, delay }}
    >
      <m.img
        src={image.src}
        srcSet={image.srcSet}
        sizes={image.srcSet ? sizes : undefined}
        alt={image.alt}
        width={image.w}
        height={image.h}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        initial={{ scale: 1.03 }}
        whileInView={{ scale: 1 }}
        viewport={viewport}
        transition={{ duration: 1.8, ease, delay }}
      />
    </m.div>
  )
}
