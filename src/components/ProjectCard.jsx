const STATUS_LABELS = {
  live: '◆ Live',
  development: '◈ In Development',
  archived: '◇ Archived',
}

const STATUS_CLASS = {
  live: 'badge--live',
  development: 'badge--development',
  archived: 'badge--archived',
}

export default function ProjectCard({ project }) {
  const { name, tagline, status, url, color } = project
  const isLinked = url && url !== '#'

  const Tag = isLinked ? 'a' : 'div'
  const linkProps = isLinked
    ? { href: url, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Tag
      className={`project-card${!isLinked ? ' project-card--unlinked' : ''}`}
      style={{ '--card-accent': color }}
      {...linkProps}
    >
      <div className="project-card__top">
        <span className={`badge ${STATUS_CLASS[status]}`}>
          {STATUS_LABELS[status]}
        </span>
      </div>
      <h2 className="project-card__name">{name}</h2>
      <p className="project-card__tagline">{tagline}</p>
      {isLinked && (
        <span className="project-card__cta">Enter →</span>
      )}
      <div className="project-card__glow" aria-hidden="true" />
    </Tag>
  )
}
