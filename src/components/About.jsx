import { about } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2>About Me</h2>
        <p>{about}</p>
      </div>
    </section>
  )
}