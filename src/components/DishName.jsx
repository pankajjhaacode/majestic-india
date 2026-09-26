// Printed dish names pair French and English with " / " — show the second half in a quieter voice.
export default function DishName({ name }) {
  const [primary, ...alt] = name.split(' / ')
  return (
    <>
      {primary}
      {alt.length > 0 && <span className="alt"> / {alt.join(' / ')}</span>}
    </>
  )
}
