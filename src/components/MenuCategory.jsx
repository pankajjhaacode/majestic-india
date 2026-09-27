import { Reveal } from './Reveal.jsx'
import DishName from './DishName.jsx'
import ElephantDivider from './ElephantDivider.jsx'
import { useLang } from '../i18n/index.jsx'

export default function MenuCategory({ category, last }) {
  const titleId = `${category.id}-title`
  return (
    <section id={category.id} className="mc" aria-labelledby={titleId}>
      <Reveal className="mc__head">
        <h2 id={titleId} className="mc__title">
          {category.title}
        </h2>
        {category.subtitle && <p className="mc__subtitle">{category.subtitle}</p>}
        {category.note && <p className="mc__note">{category.note}</p>}
      </Reveal>

      {category.groups.map((g, i) => (
        <MenuGroup key={g.title ?? i} group={g} />
      ))}
      {category.sets?.map((s) => (
        <SetMenu key={s.name} set={s} />
      ))}

      {!last && <ElephantDivider className="mc__divider" />}
    </section>
  )
}

function MenuGroup({ group }) {
  const { columns } = group
  return (
    <div className="mg" style={columns ? { '--cols': columns.length } : undefined}>
      {group.title && <h3 className="mg__title">{group.title}</h3>}
      {group.note && <p className="mg__note">{group.note}</p>}
      {columns && (
        <div className="mi mi--cols mi--header" aria-hidden="true">
          <span />
          {columns.map((c) => (
            <span key={c} className="mi__col">
              {c}
            </span>
          ))}
        </div>
      )}
      <ul className="mg__list">
        {group.items.map((item) => (
          <MenuItem key={item.name} item={item} columns={columns} />
        ))}
      </ul>
    </div>
  )
}

function MenuItem({ item, columns }) {
  const { t } = useLang()
  if (columns) {
    return (
      <li className="mi mi--cols">
        <span className="mi__name">
          <DishName name={item.name} alt={item.alt} />
        </span>
        {item.prices.map((p, i) => (
          <span key={columns[i]} className="mi__col mi__price">
            {p ? (
              <>
                <span className="sr-only">{columns[i]}: </span>
                {p}
              </>
            ) : (
              <span className="mi__none">
                <span aria-hidden="true">—</span>
                <span className="sr-only">
                  {columns[i]}: {t.menuPage.notOffered}
                </span>
              </span>
            )}
          </span>
        ))}
      </li>
    )
  }
  return (
    <li className="mi">
      <div className="mi__line">
        <span className="mi__name">
          <DishName name={item.name} alt={item.alt} />
        </span>
        <span className="mi__leader" aria-hidden="true" />
        <span className="mi__price">{item.price}</span>
      </div>
      {item.desc && <p className="mi__desc">{item.desc}</p>}
    </li>
  )
}

function SetMenu({ set }) {
  return (
    <article className="set">
      <header className="set__head">
        <h3 className="set__title">
          <DishName name={set.name} alt={set.alt} />
        </h3>
        <p className="set__price">{set.price}</p>
        {set.summary && <p className="set__summary">{set.summary}</p>}
      </header>
      {set.courses.map((c, i) => (
        <div className="set__course" key={c.title ?? i}>
          {c.title && (
            <h4 className="set__course-title">
              {c.title}
              {c.subtitle && <span> — {c.subtitle}</span>}
            </h4>
          )}
          <ul>
            {c.items.map((it) => (
              <li key={it.name}>
                <span className="set__dish">
                  <DishName name={it.name} alt={it.alt} />
                </span>
                {it.desc && <span className="set__desc">{it.desc}</span>}
              </li>
            ))}
          </ul>
          {c.note && <p className="set__note">{c.note}</p>}
        </div>
      ))}
    </article>
  )
}
