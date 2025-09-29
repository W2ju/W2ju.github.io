import './App.css'
import lauraPhoto from './assets/Laura Photo.jpg'
import mcmasterLogo from './assets/McMaster Logo.png'
import ericssonLogo from './assets/Ericsson Logo.png'
import walmerLogo from './assets/The Walmer Group Logo.jpeg'

function App() {
  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-brand">WJ</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Wenting (Laura) Ju</h1>
              <p className="title">Fullstack Developer</p>
              <div className="contact-info">
                <a href="mailto:laurajwt320@gmail.com">laurajwt320@gmail.com</a>
                <span>•</span>
                <a href="tel:289-456-9028">289-456-9028</a>
                <span>•</span>
                <span>Toronto, ON</span>
              </div>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/wenting-ju/" target="_blank" rel="noopener noreferrer" className="social-btn">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a href="https://github.com/W2ju" target="_blank" rel="noopener noreferrer" className="social-btn">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
            <div className="hero-image">
              <a href="https://www.linkedin.com/in/wenting-ju/" target="_blank" rel="noopener noreferrer">
                <img src={lauraPhoto} alt="Wenting (Laura) Ju" className="profile-photo" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="container">
          <h2>About Me</h2>
          <p>
            Master's student in Computer Engineering at the University of Waterloo with a specialization in Business Entrepreneurship.
            Experienced fullstack developer with expertise in building scalable web applications, AI-powered solutions, and automation tools.
            Passionate about creating efficient, user-centric software solutions.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section education">
        <div className="container">
          <h2>Education</h2>
          <div className="education-item">
            <img src="https://upload.wikimedia.org/wikipedia/en/6/6e/University_of_Waterloo_seal.svg" alt="University of Waterloo" className="institution-logo" />
            <div className="education-content">
              <div className="education-header">
                <div>
                  <h3>University of Waterloo</h3>
                  <p className="degree">Master of Computer Engineering (Co-op)</p>
                  <p className="specialization">Specialized in Business Entrepreneurship</p>
                </div>
                <div className="date">September 2023 – January 2025</div>
              </div>
            </div>
          </div>
          <div className="education-item">
            <img src={mcmasterLogo} alt="McMaster University" className="institution-logo" />
            <div className="education-content">
              <div className="education-header">
                <div>
                  <h3>McMaster University</h3>
                  <p className="degree">Bachelor of Electrical and Computer Engineering (Co-op)</p>
                  <p className="specialization">Dean's Honour List (All Terms)</p>
                </div>
                <div className="date">September 2018 – April 2023</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="section experience">
        <div className="container">
          <h2>Work Experience</h2>

          <div className="experience-item">
            <img src={walmerLogo} alt="The Walmer Group" className="company-logo" />
            <div className="experience-content">
              <div className="experience-header">
                <div>
                  <h3>The Walmer Group</h3>
                  <p className="role">Fullstack Developer</p>
                </div>
                <div>
                  <p className="date">May 2024 – January 2025</p>
                  <p className="location">Toronto, Ontario</p>
                </div>
              </div>
              <ul>
                <li>Led the development of internal platforms including a Consultant Management Portal and Engagement Management System, using JavaScript, Express.js, and modern frontend frameworks (React.js, Tailwind CSS, TanStack Query), automating workflows and reducing manual tasks for procurement and engagement tracking process.</li>
                <li>Developed an AI-powered proposal building agent using OpenAI API and Azure Service Bus to process RFPs, retrieve past proposals via vector search, and generate draft, significantly reducing preparation time from days to hours.</li>
                <li>Designed Mongoose schemas for core entities, indexed frequently queried fields to optimize performance; built middleware for error handling, JWT authentication, role-based authorization, and Redis caching.</li>
                <li>Built scrapers using Selenium, Cheerio, and ChromeDriver to extract and aggregate postings daily from multiple external sources, integrated notification services with Microsoft Graph API for timely internal updates.</li>
              </ul>
            </div>
          </div>

          <div className="experience-item">
            <img src={ericssonLogo} alt="Ericsson" className="company-logo" />
            <div className="experience-content">
              <div className="experience-header">
                <div>
                  <h3>Ericsson Canada</h3>
                  <p className="role">Software Developer</p>
                </div>
                <div>
                  <p className="date">September 2021 – September 2022</p>
                  <p className="location">Mississauga, Ontario</p>
                </div>
              </div>
              <ul>
                <li>Automated performance regression testing for 10+ microservices using Python, integrating Jenkins, Kubernetes, and JMeter within a CI/CD pipeline to streamline the release validation process.</li>
                <li>Built scripts to trigger Jenkins builds, scale test pods in Kubernetes, execute JMeter test plans, compare results against performance thresholds, and export metrics to Excel reports.</li>
                <li>Executed 20+ performance tests weekly, eliminated manual testing steps and reduced performance test cycle time by automating test execution and analysis.</li>
              </ul>
            </div>
          </div>

          <div className="experience-item">
            <img src="https://cdn.prod.website-files.com/67f01e9aa459af53c0e8b5d2/67f3fad8f816c89bf39db710_gef2025.png" alt="GEF Consulting" className="company-logo" />
            <div className="experience-content">
              <div className="experience-header">
                <div>
                  <h3>GEF Consulting Inc.</h3>
                  <p className="role">Software Analyst</p>
                </div>
                <div>
                  <p className="date">May 2021 – September 2021</p>
                  <p className="location">Toronto, Ontario</p>
                </div>
              </div>
              <ul>
                <li>Developed an automated event notification tool using Node.js and Microsoft Graph API to extract Outlook event details and send reminder emails, improving team coordination.</li>
                <li>Built an automated report generation tool using HTML, jQuery, and AJAX that generated and displayed reports based on inputs, reducing manual formatting.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects">
        <div className="container">
          <h2>Projects</h2>

          <div className="project-item">
            <div className="project-content">
              <div className="project-header">
                <div>
                  <h3>Restaurant Online Ordering System</h3>
                  <p className="role">Fullstack Developer (Freelance)</p>
                </div>
                <div className="project-links">
                  <a href="https://github.com/kckevinchenzkk/Gourmet_Express_Demo" target="_blank" rel="noopener noreferrer" className="project-btn github-btn">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a href="https://gourmet-express-kipling.com/" target="_blank" rel="noopener noreferrer" className="project-btn demo-btn">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
              <p className="date">February 2025 – June 2025</p>
              <ul>
                <li>Designed and developed a custom food ordering platform using TypeScript, Next.js, React, and Supabase to shift phone-based orders online and reduce third-party commission fees.</li>
                <li>Designed normalized relational schemas and optimized database queries in PostgreSQL to support dynamic product menus, order scheduling, real-time status tracking, and role-based access.</li>
                <li>Built responsive customer and admin interfaces using Tailwind CSS, TanStack Query, and ShadCN UI, enabling smooth online ordering, status management, and order processing across devices.</li>
                <li>Deployed the platform to Vercel and conducted manual and Playwright-based end-to-end testing to validate critical user flows.</li>
              </ul>
            </div>
          </div>

          <div className="project-item">
            <div className="project-content">
              <div className="project-header">
                <div>
                  <h3>Money Manager</h3>
                  <p className="role">Main Contributor (Personal Project)</p>
                </div>
              </div>
              <p className="date">June 2025 – August 2025</p>
              <ul>
                <li>Built a full-stack finance application with Java, Spring Boot, and React.js, supporting secure authentication, income/expense tracking, category management, and profile uploads to Cloudinary.</li>
                <li>Developed Spring Boot REST APIs in Java for user registration/login, transactions, filtering, dashboard analytics, Excel export, and automated email notifications, secured with Spring Security and JWT.</li>
                <li>Built frontend with React.js and Tailwind CSS, integrating features such as Lucide icons, emoji picker, toast notifications, and React Charts, with deployment on Netlify (frontend) and Render (backend).</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills">
        <div className="container">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Languages & Frameworks</h3>
              <p>JavaScript, TypeScript, Python, Java, C, SQL, React, Spring Boot, Express.js, Node.js, Next.js, Bootstrap, Tailwind CSS</p>
            </div>
            <div className="skill-category">
              <h3>Databases & Caching</h3>
              <p>MongoDB, Supabase, PostgreSQL, Azure Blob Storage, Redis, MySQL, NoSQL</p>
            </div>
            <div className="skill-category">
              <h3>DevOps & Cloud</h3>
              <p>CI/CD, Docker, Kubernetes, Azure, GCP, AWS, Vercel, GitHub Actions, Jenkins</p>
            </div>
            <div className="skill-category">
              <h3>Testing & Others</h3>
              <p>OpenAI API, LLM, RAG, AI Agents, Jest, Playwright, Selenium, Cheerio, Git, Jira, OAuth, JWT</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>Designed and built by Wenting with ☕ and ❤️</p>
        </div>
      </footer>
    </div>
  )
}

export default App