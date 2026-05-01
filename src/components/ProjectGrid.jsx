import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

export default function ProjectGrid() {
  const live = projects.filter(p => p.status === 'live')
  const rest = projects.filter(p => p.status !== 'live')

  return (
    <section className="projects-section">
      <p className="projects-section__label">— The Archive —</p>

      {live.length > 0 && (
        <>
          <h2 className="projects-section__group-heading">Live &amp; Deployed</h2>
          <div className="projects-grid">
            {live.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </>
      )}

      <h2 className="projects-section__group-heading projects-section__group-heading--second">
        In Development
      </h2>
      <div className="projects-grid">
        {rest.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
