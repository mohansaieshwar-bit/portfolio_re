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

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-title">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

function App() {
  return (
    <div className="neo-site">
      <header className="topbar shell brutal-card">
        <a className="brand" href="#home">MOHAN</a>
        <nav className="nav-links" aria-label="Primary Navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="shell" id="home">
        <section className="hero-grid">
          <div className="hero-copy brutal-card brutal-yellow">
            <span className="hero-chip">UI/UX • Frontend • Portfolio</span>
            <h1>
              Mohan Sai <span>Eshwar </span>
            </h1>
            <p>
              UI/UX Designer and Front-End Developer creating bold, functional, user-friendly digital experiences with strong visual structure and practical frontend execution.
            </p>
            <div className="hero-actions">
              <a className="neo-button neo-button-dark" href="#projects">View Projects</a>
              <a className="neo-button" href="#contact">Contact Me</a>
            </div>
          </div>

          <div className="hero-visual brutal-card brutal-white">
            <div className="photo-wrap brutal-card brutal-orange">
              <img
                src={`${import.meta.env.BASE_URL}img/mohan.png`}
                alt="Mohan Sai Eshwar Boppudi - Profile"
                className="hero-image"
              />
            </div>
            <div className="floating-note brutal-card brutal-green rotate-right-soft">Available for UI/UX and frontend roles</div>
          </div>
        </section>

        <section id="about" className="content-grid two-up">
          <article className="brutal-card brutal-white section-card">
            <SectionTitle
              eyebrow="About"
              title="I design clear products with strong personality"
              text="I like interfaces that feel expressive, useful, and easy to trust."
            />
            <p>
              My work blends wireframing, prototyping, responsive frontend development, accessibility, and design systems. I enjoy taking ideas from concept to polished interface while keeping the user experience clear.
            </p>
          </article>

          <article className="brutal-card brutal-lime section-card">
            <SectionTitle eyebrow="Quick Highlights" title="What I bring" />
            <div className="bullet-stack">
              <div>
                <strong>Design + Development</strong>
                <span>Comfortable working between product design and implementation.</span>
              </div>
              <div>
                <strong>Responsive Thinking</strong>
                <span>Focused on mobile and desktop experience quality.</span>
              </div>
              <div>
                <strong>Usability First</strong>
                <span>Interested in clean layout, flow, and user-friendly structure.</span>
              </div>
            </div>
          </article>
        </section>

        <section id="experience" className="stack-section">
          <SectionTitle
            eyebrow="Experience"
            title="Work that connects product thinking and frontend craft"
            text="A practical mix of interface design, testing, prototyping, and responsive development."
          />
          <div className="stack-grid">
            {experiences.map((item, index) => (
              <article
                className={`brutal-card section-card experience-card ${index % 2 === 0 ? 'brutal-pink' : 'brutal-blue'}`}
                key={`${item.company}-${item.period}`}
              >
                <div className="row-split">
                  <div>
                    <h3>{item.role}</h3>
                    <p className="meta-line">{item.company}</p>
                  </div>
                  <div className="meta-box brutal-card brutal-white">
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

        <section id="projects" className="stack-section">
          <SectionTitle
            eyebrow="Projects"
            title="Selected work with bold presentation"
            text="A cleaner case-study style section for product, design, and interface work."
          />
          <div className="stack-grid single-project">
            {projects.map((project) => (
              <article className="brutal-card brutal-yellow section-card project-card" key={project.title}>
                <div className="row-split project-head">
                  <div>
                    <span className="mini-label">{project.subtitle}</span>
                    <h3>{project.title}</h3>
                  </div>
                  <span className="tag brutal-card brutal-white">Case Study</span>
                </div>
                <p>{project.description}</p>
                <div className="tag-cloud">
                  {project.impact.map((tag) => (
                    <span className="tag brutal-card brutal-white" key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-grid two-up lower-grid">
          <article className="brutal-card brutal-white section-card">
            <SectionTitle eyebrow="Skills" title="Tools and strengths" />
            <div className="skills-grid">
              {Object.entries(skills).map(([group, items], index) => (
                <div className={`skill-panel brutal-card ${index % 2 === 0 ? 'brutal-orange' : 'brutal-green'}`} key={group}>
                  <h3>{group}</h3>
                  <div className="tag-cloud compact">
                    {items.map((item) => (
                      <span className="tag brutal-card brutal-white" key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="brutal-card brutal-pink section-card">
            <SectionTitle eyebrow="Certifications" title="Learning and growth" />
            <ul className="cert-list">
              {certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section id="contact" className="stack-section">
          <article className="brutal-card brutal-black section-card contact-panel">
            <SectionTitle
              eyebrow="Contact"
              title="Let’s build something bold and useful"
              text="Open to UI/UX, frontend, and product-focused opportunities."
            />
            <div className="contact-grid">
              <a className="brutal-card brutal-white contact-box" href="mailto:mohansaieshwarboppudi@gmail.com">
                <span className="contact-icon">✉</span>
                <p>Email</p>
                <strong>mohansaieshwarboppudi@gmail.com</strong>
              </a>
              <a className="brutal-card brutal-blue contact-box" href="https://linktr.ee/mohansaieshwar" target="_blank" rel="noreferrer">
                <span className="contact-icon">↗</span>
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

