import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-category">
              <h3>{skill.category}</h3>
              <p>{skill.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}