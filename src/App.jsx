import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'

// Import assets
import lauraPhoto from './assets/Laura Photo.jpg'
import mcmasterLogo from './assets/McMaster Logo.png'
import ericssonLogo from './assets/Ericsson Logo.png'
import walmerLogo from './assets/The Walmer Group Logo.jpeg'

function App() {
  // Centralized logo mapping for easy maintenance
  const logos = {
    mcmaster: mcmasterLogo,
    ericsson: ericssonLogo,
    walmer: walmerLogo
  }

  return (
    <div className="portfolio">
      <Navigation />
      <Hero profilePhoto={lauraPhoto} />
      <About />
      <Education logos={logos} />
      <Experience logos={logos} />
      <Projects />
      <Skills />
      <Footer />
    </div>
  )
}

export default App