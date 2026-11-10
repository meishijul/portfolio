import { info, education, experience, projects, skills, awards } from "./data";
import "./App.css";

const NAV = ["About", "Experience", "Projects", "Skills", "Awards", "Contact"];

function Nav() {
  return (
    <nav className="nav">
      <span className="nav-name">{info.name}</span>
      <ul>
        {NAV.map((n) => (
          <li key={n}>
            <a href={`#${n.toLowerCase()}`}>{n}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <img src="/headshot.jpg" alt="Ishita Juluru" />
        </div>
        <h1>{info.name}</h1>
        <p className="tagline">{info.tagline}</p>
        <p className="location">📍 {info.location}</p>
        <div className="hero-links">
          <a href={`mailto:${info.email}`} className="btn btn-primary">
            Get in Touch
          </a>
          <a href={info.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline">
            LinkedIn
          </a>
          <a href={info.github} target="_blank" rel="noreferrer" className="btn btn-outline">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <h2>About</h2>
      <div className="about-grid">
        <p className="about-text">{info.about}</p>
        <div className="edu-card">
          <div className="edu-header">
            <span className="edu-degree">{education.degree}</span>
            <span className="edu-gpa">GPA {education.gpa}</span>
          </div>
          <div className="edu-school">{education.school}</div>
          <div className="edu-meta">
            <span>{education.emphasis}</span>
            <span>Minor: {education.minor}</span>
            <span>{education.honors} · Grad {education.grad}</span>
            <span className="edu-scholarship">{education.scholarshipNote}</span>
            <ul className="edu-scholarships">
              {education.scholarships.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      <div className="timeline">
        {experience.map((e) => (
          <div key={e.company} className={`exp-card ${e.highlight ? "highlight" : ""}`}>
            <div className="exp-header">
              <div>
                <div className="exp-title">{e.title}</div>
                <div className="exp-company">
                  {e.link ? (
                    <a href={e.link} target="_blank" rel="noreferrer">{e.company}</a>
                  ) : (
                    e.company
                  )}
                  {e.location && <span className="exp-location"> · {e.location}</span>}
                </div>
              </div>
              <span className="exp-dates">{e.dates}</span>
            </div>
            <ul className="exp-bullets">
              {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
            <div className="tag-row">
              {e.skills.map((s) => <span key={s} className="tag">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="project-grid featured">
        {featured.map((p) => (
          <div key={p.name} className="project-card featured-card">
            <div className="project-name">
              {p.link ? <a href={p.link} target="_blank" rel="noreferrer">{p.name} ↗</a> : p.name}
            </div>
            <p className="project-desc">{p.description}</p>
            <div className="project-footer">
              <div className="tag-row">{p.skills.map((s) => <span key={s} className="tag">{s}</span>)}</div>
              <div className="project-links">
                {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="gh-link">GitHub ↗</a>}
                {p.appStore && <a href={p.appStore} target="_blank" rel="noreferrer" className="gh-link">App Store ↗</a>}
                {p.playStore && <a href={p.playStore} target="_blank" rel="noreferrer" className="gh-link">Google Play ↗</a>}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="project-grid small">
        {rest.map((p) => (
          <div key={p.name} className="project-card">
            <div className="project-name">{p.name}</div>
            <p className="project-desc">{p.description}</p>
            <div className="project-footer">
              <div className="tag-row">{p.skills.map((s) => <span key={s} className="tag">{s}</span>)}</div>
              {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="gh-link">GitHub ↗</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const SKILL_META = {
  "Languages":   { icon: "ti-code",   color: "#EAF3DE", iconColor: "#3B6D11" },
  "AI / ML":     { icon: "ti-brain",  color: "#EEEDFE", iconColor: "#534AB7" },
  "Full-Stack":  { icon: "ti-stack",  color: "#FAEEDA", iconColor: "#854F0B" },
  "Tools & Infra": { icon: "ti-server", color: "#FBEAF0", iconColor: "#993556" },
};

function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-list">
        {Object.entries(skills).map(([cat, list]) => {
          const meta = SKILL_META[cat] || { icon: "ti-circle", color: "#F1EFE8", iconColor: "#5F5E5A" };
          return (
            <div key={cat} className="skill-row">
              <div className="skill-row-head">
                <div className="skill-icon" style={{ background: meta.color }}>
                  <i className={`ti ${meta.icon}`} style={{ color: meta.iconColor }} aria-hidden="true" />
                </div>
                <span className="skill-cat">{cat}</span>
              </div>
              <div className="tag-row">
                {list.map((s) => <span key={s} className="tag">{s}</span>)}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Awards() {
  return (
    <section id="awards" className="section">
      <h2>Awards</h2>
      <div className="awards-grid">
        {awards.map((a) => (
          <div key={a.name} className="award-card">
            <span className="award-emoji">{a.emoji || "🏆"}</span>
            <div className="award-body">
              <div className="award-top">
                <span className="award-name">
                  {a.link ? <a href={a.link} target="_blank" rel="noreferrer">{a.name} ↗</a> : a.name}
                </span>
                {a.amount && <span className="award-amount">{a.amount}</span>}
                <span className="award-year">{a.year}</span>
              </div>
              {a.competition && <div className="award-comp">{a.competition}</div>}
              <p className="award-desc">{a.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <h2>Contact</h2>
      <p className="contact-sub">Open to full-time roles and collaborations.</p>
      <div className="contact-links">
        <a href={`mailto:${info.email}`} className="btn btn-primary">{info.email}</a>
        <a href={info.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline">LinkedIn</a>
        <a href={info.github} target="_blank" rel="noreferrer" className="btn btn-outline">GitHub</a>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Awards />
        <Contact />
      </main>
      <footer className="footer">
        <span>© 2026 Ishita Juluru</span>
      </footer>
    </>
  );
}
