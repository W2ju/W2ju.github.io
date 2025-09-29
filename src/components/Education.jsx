import { education } from '../data/portfolio'

export default function Education({ logos }) {
  return (
    <section id="education" className="section education">
      <div className="container">
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <img
              src={typeof edu.logo === 'string' && edu.logo.startsWith('http') ? edu.logo : logos[edu.logo]}
              alt={edu.institution}
              className="institution-logo"
            />
            <div className="education-content">
              <div className="education-header">
                <div>
                  <h3>{edu.institution}</h3>
                  <p className="degree">{edu.degree}</p>
                  <p className="specialization">{edu.specialization}</p>
                </div>
                <div className="date">{edu.period}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}