import ElephantMark from './ElephantMark.jsx'

// Repeating elephant band from the printed menu: each tile pairs the logo elephant
// with its mirror image, the second set lower and overlapping.
const TILE_W = 176
const TILE_H = 104
const EL_W = 92
const EL_H = 72

export default function ElephantPattern({ className = '', rows = 1 }) {
  return (
    <svg className={`elephant-pattern ${className}`} width="100%" height={rows * TILE_H} aria-hidden="true" focusable="false">
      <defs>
        <pattern id="elephant-tile" width={TILE_W} height={TILE_H} patternUnits="userSpaceOnUse">
          <ElephantMark x="4" y="2" width={EL_W} height={EL_H} />
          <g transform={`translate(${56 + EL_W + 20} 30) scale(-1 1)`}>
            <ElephantMark x="0" y="0" width={EL_W} height={EL_H} />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#elephant-tile)" />
    </svg>
  )
}
