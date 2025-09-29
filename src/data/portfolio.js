// Personal Information
export const personalInfo = {
  name: 'Wenting (Laura) Ju',
  title: 'Fullstack Developer',
  email: 'laurajwt320@gmail.com',
  phone: '289-456-9028',
  location: 'Toronto, ON',
  linkedin: 'https://www.linkedin.com/in/wenting-ju/',
  github: 'https://github.com/W2ju'
}

// Navigation Links
export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' }
]

// About Section
export const about = `Master's student in Computer Engineering at the University of Waterloo with a specialization in Business Entrepreneurship. Experienced fullstack developer with expertise in building scalable web applications, AI-powered solutions, and automation tools. Passionate about creating efficient, user-centric software solutions.`

// Education
export const education = [
  {
    institution: 'University of Waterloo',
    logo: 'https://upload.wikimedia.org/wikipedia/en/6/6e/University_of_Waterloo_seal.svg',
    degree: 'Master of Computer Engineering (Co-op)',
    specialization: 'Specialized in Business Entrepreneurship',
    period: 'September 2023 – January 2025',
    location: 'Waterloo, Ontario'
  },
  {
    institution: 'McMaster University',
    logo: 'mcmaster',
    degree: 'Bachelor of Electrical and Computer Engineering (Co-op)',
    specialization: "Dean's Honour List (All Terms)",
    period: 'September 2018 – April 2023',
    location: 'Hamilton, Ontario'
  }
]

// Work Experience
export const experience = [
  {
    company: 'The Walmer Group',
    logo: 'walmer',
    role: 'Fullstack Developer',
    period: 'May 2024 – January 2025',
    location: 'Toronto, Ontario',
    highlights: [
      'Led the development of internal platforms including a Consultant Management Portal and Engagement Management System, using JavaScript, Express.js, and modern frontend frameworks (React.js, Tailwind CSS, TanStack Query), automating workflows and reducing manual tasks for procurement and engagement tracking process.',
      'Developed an AI-powered proposal building agent using OpenAI API and Azure Service Bus to process RFPs, retrieve past proposals via vector search, and generate draft, significantly reducing preparation time from days to hours.',
      'Designed Mongoose schemas for core entities, indexed frequently queried fields to optimize performance; built middleware for error handling, JWT authentication, role-based authorization, and Redis caching.',
      'Built scrapers using Selenium, Cheerio, and ChromeDriver to extract and aggregate postings daily from multiple external sources, integrated notification services with Microsoft Graph API for timely internal updates.'
    ]
  },
  {
    company: 'Ericsson Canada',
    logo: 'ericsson',
    role: 'Software Developer',
    period: 'September 2021 – September 2022',
    location: 'Mississauga, Ontario',
    highlights: [
      'Automated performance regression testing for 10+ microservices using Python, integrating Jenkins, Kubernetes, and JMeter within a CI/CD pipeline to streamline the release validation process.',
      'Built scripts to trigger Jenkins builds, scale test pods in Kubernetes, execute JMeter test plans, compare results against performance thresholds, and export metrics to Excel reports.',
      'Executed 20+ performance tests weekly, eliminated manual testing steps and reduced performance test cycle time by automating test execution and analysis.'
    ]
  },
  {
    company: 'GEF Consulting Inc.',
    logo: 'https://cdn.prod.website-files.com/67f01e9aa459af53c0e8b5d2/67f3fad8f816c89bf39db710_gef2025.png',
    role: 'Software Analyst',
    period: 'May 2021 – September 2021',
    location: 'Toronto, Ontario',
    highlights: [
      'Developed an automated event notification tool using Node.js and Microsoft Graph API to extract Outlook event details and send reminder emails, improving team coordination.',
      'Built an automated report generation tool using HTML, jQuery, and AJAX that generated and displayed reports based on inputs, reducing manual formatting.'
    ]
  }
]

// Projects
export const projects = [
  {
    name: 'Restaurant Online Ordering System',
    role: 'Fullstack Developer (Freelance)',
    period: 'February 2025 – June 2025',
    github: 'https://github.com/kckevinchenzkk/Gourmet_Express_Demo',
    demo: 'https://gourmet-express-kipling.com/',
    description: [
      'Designed and developed a custom food ordering platform using TypeScript, Next.js, React, and Supabase to shift phone-based orders online and reduce third-party commission fees.',
      'Designed normalized relational schemas and optimized database queries in PostgreSQL to support dynamic product menus, order scheduling, real-time status tracking, and role-based access.',
      'Built responsive customer and admin interfaces using Tailwind CSS, TanStack Query, and ShadCN UI, enabling smooth online ordering, status management, and order processing across devices.',
      'Deployed the platform to Vercel and conducted manual and Playwright-based end-to-end testing to validate critical user flows.'
    ]
  },
  {
    name: 'Money Manager',
    role: 'Main Contributor (Personal Project)',
    period: 'June 2025 – August 2025',
    github: null,
    demo: null,
    description: [
      'Built a full-stack finance application with Java, Spring Boot, and React.js, supporting secure authentication, income/expense tracking, category management, and profile uploads to Cloudinary.',
      'Developed Spring Boot REST APIs in Java for user registration/login, transactions, filtering, dashboard analytics, Excel export, and automated email notifications, secured with Spring Security and JWT.',
      'Built frontend with React.js and Tailwind CSS, integrating features such as Lucide icons, emoji picker, toast notifications, and React Charts, with deployment on Netlify (frontend) and Render (backend).'
    ]
  }
]

// Skills
export const skills = [
  {
    category: 'Languages & Frameworks',
    items: 'JavaScript, TypeScript, Python, Java, C, SQL, React, Spring Boot, Express.js, Node.js, Next.js, Bootstrap, Tailwind CSS'
  },
  {
    category: 'Databases & Caching',
    items: 'MongoDB, Supabase, PostgreSQL, Azure Blob Storage, Redis, MySQL, NoSQL'
  },
  {
    category: 'DevOps & Cloud',
    items: 'CI/CD, Docker, Kubernetes, Azure, GCP, AWS, Vercel, GitHub Actions, Jenkins'
  },
  {
    category: 'Testing & Others',
    items: 'OpenAI API, LLM, RAG, AI Agents, Jest, Playwright, Selenium, Cheerio, Git, Jira, OAuth, JWT'
  }
]