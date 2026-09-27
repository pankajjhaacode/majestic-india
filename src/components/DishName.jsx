// `alt` is the printed English half of a French dish name, set in a quieter voice.
export default function DishName({ name, alt }) {
  return (
    <>
      {name}
      {alt && <span className="alt"> / {alt}</span>}
    </>
  )
}
