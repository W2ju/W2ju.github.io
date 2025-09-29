import { personalInfo } from '../data/portfolio'
import { LinkedInIcon, GitHubIcon } from './Icons'

export default function Hero({ profilePhoto }) {
  return (
    <header className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>{personalInfo.name}</h1>
            <p className="title">{personalInfo.title}</p>
            <div className="contact-info">
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              <span>•</span>
              <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
              <span>•</span>
              <span>{personalInfo.location}</span>
            </div>
            <div className="social-links">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn">
                <LinkedInIcon />
                LinkedIn
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-btn">
                <GitHubIcon />
                GitHub
              </a>
            </div>
          </div>
          <div className="hero-image">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
              <img src={profilePhoto} alt={personalInfo.name} className="profile-photo" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}