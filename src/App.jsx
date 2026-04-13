const skills = {
  Frontend: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'ReactJS'],
  'UI/UX': ['Figma', 'Adobe XD', 'Sketch', 'Wireframing', 'Prototyping', 'User Flows'],
  Research: ['User Research', 'Usability Testing', 'A/B Testing', 'Accessibility (WCAG)'],
  Tools: ['Git', 'GitHub', 'Responsive Design', 'Design Systems', 'Cross-Browser Compatibility'],
};

const experiences = [
  {
    company: 'Benda Infotech',
    role: 'UI/UX Designer — Front-End Developer',
    period: 'March 2026 – Present',
    location: 'Chicago, United States (Remote)',
    points: [
      'Led redesign work for SaaS platforms and improved engagement through cleaner navigation and more user-friendly experiences.',
      'Created high-fidelity prototypes in Figma and Adobe XD to support faster handoff and smoother design-development collaboration.',
      'Used A/B testing and user research to guide product decisions and reduce bounce rate.',
      'Built responsive interfaces for desktop and mobile with a focus on clarity, consistency, and usability.',
    ],
  },
  {
    company: 'Metrolabs Services Pvt. Ltd.',
    role: 'UI/UX Developer',
    period: 'June 2022 – July 2023',
    location: 'Hyderabad, India',
    points: [
      'Designed polished user interfaces for multiple applications with strong attention to layout, usability, and visual consistency.',
      'Developed responsive web pages using HTML5, CSS3, JavaScript, and ReactJS.',
      'Built scalable assets and icon systems to maintain clean branding across products.',
      'Worked closely with backend teams to improve delivery efficiency and frontend integration.',
    ],
  },
];

const projects = [
  {
    title: "Thara's Handmade Soap",
    subtitle: 'E-commerce Platform',
    description:
      'A responsive ReactJS-based e-commerce platform focused on better product discovery, reusable components, and a cleaner shopping flow.',
    impact: ['Responsive UI', 'Search & Filter', 'Reusable Components', 'Performance Improvement'],
  },
];

const certifications = [
  'Certified UI/UX Developer & Designer — Tech Mahindra Smart Academy',
  'Prompt Design in Vertex AI — Google Cloud',
];

function SectionHeader({ label, title, text }) {
  return (
    <div className="section-header">
      <p className="label">{label}</p>
      <h2>{title}</h2>
      {text ? <p className="section-copy">{text}</p> : null}
    </div>
  );
}

// Image moved to public/img/mohan.png

function App() {
  return (
    <div className="site-root">
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="orb orb-three" />

      <header className="nav-shell">
        <div className="nav-inner">
          <a className="brand" href="#home">
            MOHAN
          </a>
          <nav className="nav-links" aria-label="Primary Navigation">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="page" id="home">
        <section className="hero panel">
          <div className="hero-copy-block">
            <p className="label">Portfolio • UI/UX • Frontend</p>
            <h1>
              Mohan Sai <span>Eshwar Boppudi,</span>
            </h1>
            <p className="hero-copy">
              UI/UX Designer and Front-End Developer who enjoys building thoughtful interfaces that feel clear, elegant, and easy to use.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View Projects
              </a>
              <a className="button button-secondary" href="#contact">
                Contact Me
              </a>
            </div>

            {/* <div className="metrics-grid">
              <article className="mini-panel">
                <strong>2+ Years</strong>
                <span>UI/UX and Frontend experience</span>
              </article>
              <article className="mini-panel">
                <strong>20+ Prototypes</strong>
                <span>High-fidelity design work</span>
              </article>
              <article className="mini-panel">
                <strong>40%</strong>
                <span>Engagement improvement impact</span>
              </article>
            </div> */}
          </div>

          <div className="hero-visual panel-soft">
            <img src="/img/mohan.png" alt="Mohan Sai Eshwar Boppudi - Profile" className="hero-image" />
          </div>
        </section>

        <section id="about" className="section-block two-column">
          <article className="panel content-panel">
            <SectionHeader
              label="About Me"
              title="I create interfaces that are clear, modern, and easy to trust"
              text="My work combines user-centered design, visual polish, and practical frontend development."
            />
            <p>
              I work across wireframing, prototyping, responsive development, accessibility, and design systems. I like interfaces that feel calm, balanced, and premium without becoming hard to use.
            </p>
          </article>

          <article className="panel content-panel quick-facts">
            <SectionHeader label="Quick Highlights" title="What I bring" />
            <div className="fact-list">
              <div className="fact-item">
                <strong>Design + Development</strong>
                <span>Comfortable bridging product design and frontend execution.</span>
              </div>
              <div className="fact-item">
                <strong>Responsive Thinking</strong>
                <span>Focused on desktop and mobile experience quality.</span>
              </div>
              <div className="fact-item">
                <strong>Usability First</strong>
                <span>Interested in clean information flow and user-friendly structure.</span>
              </div>
            </div>
          </article>
        </section>

        <section id="experience" className="section-block">
          <SectionHeader
            label="Experience"
            title="Work that connects product design and frontend implementation"
            text="A practical mix of design thinking, interface building, testing, and collaboration."
          />
          <div className="experience-list">
            {experiences.map((item) => (
              <article className="panel experience-card" key={`${item.company}-${item.period}`}>
                <div className="experience-top">
                  <div>
                    <h3>{item.role}</h3>
                    <p className="subtle-line">{item.company}</p>
                  </div>
                  <div className="experience-meta">
                    <span>{item.period}</span>
                    <span>{item.location}</span>
                  </div>
                </div>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-block">
          <SectionHeader
            label="Projects"
            title="Selected work presented in a simple and polished way"
            text="A premium-style case study block focused on clarity, flow, and outcomes."
          />
          <div className="project-grid">
            {projects.map((project) => (
              <article className="panel project-card" key={project.title}>
                <div className="project-head">
                  <div>
                    <p className="subtle-line">{project.subtitle}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <span className="pill">Case Study</span>
                </div>
                <p>{project.description}</p>
                <div className="tag-group">
                  {project.impact.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block two-column">
          <article className="panel content-panel">
            <SectionHeader label="Skills" title="Tools and strengths" />
            <div className="skills-groups">
              {Object.entries(skills).map(([group, items]) => (
                <div className="skill-block" key={group}>
                  <h3>{group}</h3>
                  <div className="tag-group">
                    {items.map((item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="panel content-panel">
            <SectionHeader label="Certifications" title="Learning and growth" />
            <ul className="cert-list">
              {certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section id="contact" className="section-block">
          <article className="panel contact-panel">
            <SectionHeader
              label="Contact"
              title="Let’s build something thoughtful and meaningful"
              text="Open to UI/UX, frontend, and product-focused opportunities."
            />
            <div className="contact-grid">
              <a className="contact-box" href="mailto:mohansaieshwarboppudi@gmail.com">
                <span className="icon-badge">✉</span>
                <p>Email</p>
                <strong>mohansaieshwarboppudi@gmail.com</strong>
              </a>
              <div className="contact-box">
                <span className="icon-badge">⌂</span>
                <p>Location</p>
                <strong>Milwaukee, WI</strong>
              </div>
              <a className="contact-box" href="https://linktr.ee/mohansaieshwar" target="_blank" rel="noreferrer">
                <span className="icon-badge">↗</span>
                <p>Portfolio Hub</p>
                <strong>View more links</strong>
              </a>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
