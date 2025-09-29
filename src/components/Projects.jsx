import { projects } from '../data/portfolio'
import { GitHubSmallIcon, ExternalLinkIcon } from './Icons'

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <div className="project-content">
              <div className="project-header">
                <div>
                  <h3>{project.name}</h3>
                  <p className="role">{project.role}</p>
                </div>
                {(project.github || project.demo) && (
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-btn github-btn">
                        <GitHubSmallIcon />
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-btn demo-btn">
                        <ExternalLinkIcon />
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
              <p className="date">{project.period}</p>
              <ul>
                {project.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}