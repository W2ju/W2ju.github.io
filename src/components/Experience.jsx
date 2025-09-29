import { experience } from '../data/portfolio'

export default function Experience({ logos }) {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2>Work Experience</h2>
        {experience.map((exp, index) => (
          <div key={index} className="experience-item">
            <img
              src={typeof exp.logo === 'string' && exp.logo.startsWith('http') ? exp.logo : logos[exp.logo]}
              alt={exp.company}
              className="company-logo"
            />
            <div className="experience-content">
              <div className="experience-header">
                <div>
                  <h3>{exp.company}</h3>
                  <p className="role">{exp.role}</p>
                </div>
                <div>
                  <p className="date">{exp.period}</p>
                  <p className="location">{exp.location}</p>
                </div>
              </div>
              <ul>
                {exp.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}