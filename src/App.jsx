import { info, education, experience, projects, skills, awards } from "./data";
import "./App.css";

function Nav() {
  return (
    <nav className="nav">
      <span className="nav-name">{info.name}</span>
      <ul>
        <li><a href={`mailto:${info.email}`}>Email</a></li>
        <li><a href={info.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
        <li><a href={info.github} target="_blank" rel="noreferrer">GitHub</a></li>
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <header className="hero">
      <div className="hero-left">
        <div className="hero-photo-wrap">
          <img src="/headshot.jpg" alt="Ishita Juluru" className="hero-photo" />
        </div>
        <div className="hero-text">
          <h1 className="hero-name">Ishita<br /><span>Juluru.</span></h1>
          <p className="hero-bio">{info.about}</p>
          <p className="hero-interests">{info.interests}</p>
        </div>
      </div>
      <div className="hero-pills">
        <span className="pill pill-green">Software Engineer @ WebBank</span>
        <span className="pill pill-orange">AI / ML · Full-Stack</span>
        <span className="pill pill-purple">University of Utah · {education.gpa} GPA</span>
        <span className="pill pill-muted">📍 {info.location}</span>
        <div className="hero-cta">
          <a href={`mailto:${info.email}`} className="btn btn-primary">Get in Touch</a>
          <a href={info.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline">LinkedIn</a>
          <a href={info.github} target="_blank" rel="noreferrer" className="btn btn-outline">GitHub</a>
        </div>
      </div>
    </header>
  );
}

function ConsciousFeature() {
  return (
    <div className="conscious-feature">
      <div className="conscious-header">
        <div>
          <div className="conscious-eyebrow">Featured Project · Co-founder &amp; Lead Engineer</div>
          <h2 className="conscious-title">Conscious</h2>
          <p className="conscious-tagline">
            Scan any grocery item and see its real carbon and water cost — plus a lower-impact swap — in seconds.
          </p>
          <p className="conscious-story">
            Standing in the grocery aisle, reading about another wildfire, with no quick way to tell which product does less harm. Greenwashing is everywhere and nobody has time to research each item — so I co-built Conscious with three teammates as a University of Utah senior capstone. We shipped it to the App Store and Google Play. I now run Conscious LLC and am piloting B2B carbon footprint reports.
          </p>
          <div className="conscious-stats">
            <div className="cstat"><span className="cstat-num">277</span><span className="cstat-label">product categories</span></div>
            <div className="cstat"><span className="cstat-num">173</span><span className="cstat-label">backend tests</span></div>
            <div className="cstat"><span className="cstat-num">25k</span><span className="cstat-label">lines of code</span></div>
            <div className="cstat"><span className="cstat-num">5.0★</span><span className="cstat-label">App Store rating</span></div>
          </div>
          <div className="tag-row" style={{ marginBottom: "16px" }}>
            {["Flutter", "FastAPI", "AWS Lambda", "DynamoDB", "OpenAI GPT-4o", "Agribalyse LCA", "Open Food Facts"].map(s => <span key={s} className="tag">{s}</span>)}
          </div>
          <div className="conscious-links">
            <a href="https://apps.apple.com/us/app/consciouss/id6759814422" target="_blank" rel="noreferrer" className="btn btn-primary">App Store ↗</a>
            <a href="https://play.google.com/store/apps/details?id=com.conscious.app" target="_blank" rel="noreferrer" className="btn btn-outline">Google Play ↗</a>
          </div>
        </div>
      </div>
      <div className="conscious-screens">
        <img src="/conscious-d.jpg" alt="Scan a grocery item" className="cscreen" />
        <img src="/conscious-c.jpg" alt="See its carbon footprint" className="cscreen" />
        <img src="/conscious-a.jpg" alt="Compare lower-carbon options" className="cscreen" />
        <img src="/conscious-b.jpg" alt="See how it's calculated" className="cscreen" />
      </div>
    </div>
  );
}

function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured && p.name !== "Conscious App");
  return (
    <section id="projects" className="main-section">
      <div className="section-label">Featured Work</div>
      <ConsciousFeature />
      <div className="featured-list" style={{ marginTop: "8px" }}>
        {featured.map((p) => (
          <div key={p.name} className="feat-card">
            <div className="feat-card-top">
              <div className="feat-name">
                {p.link
                  ? <a href={p.link} target="_blank" rel="noreferrer">{p.name} ↗</a>
                  : p.name}
              </div>
              <div className="feat-links">
                {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="feat-link">GitHub ↗</a>}
                {p.appStore && <a href={p.appStore} target="_blank" rel="noreferrer" className="feat-link">App Store ↗</a>}
                {p.playStore && <a href={p.playStore} target="_blank" rel="noreferrer" className="feat-link">Play Store ↗</a>}
              </div>
            </div>
            <p className="feat-desc">{p.description}</p>
            <div className="tag-row">
              {p.skills.map((s) => <span key={s} className="tag">{s}</span>)}
            </div>
          </div>
        ))}
      </div>

      <div className="section-label" style={{ marginTop: "2.5rem" }}>More Projects</div>
      <div className="more-projects">
        {projects.filter((p) => !p.featured).map((p) => (
          <div key={p.name} className="more-card">
            <div className="more-name">{p.name}</div>
            <div className="more-desc">{p.description}</div>
            <div className="tag-row" style={{ marginTop: "8px" }}>
              {p.skills.map((s) => <span key={s} className="tag">{s}</span>)}
            </div>
            {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="feat-link" style={{ marginTop: "6px", display: "inline-block" }}>GitHub ↗</a>}
          </div>
        ))}
      </div>
    </section>
  );
}

function Sidebar() {
  const topAwards = awards.slice(0, 5);
  return (
    <aside className="sidebar">
      {/* Awards */}
      <div className="sidebar-section">
        <div className="section-label">Highlights</div>
        <div className="sidebar-awards">
          {topAwards.map((a) => (
            <div key={a.name} className="sidebar-award">
              <div className="sidebar-award-name">
                {a.link
                  ? <a href={a.link} target="_blank" rel="noreferrer">{a.name} ↗</a>
                  : a.name}
                {a.amount && <span className="sidebar-amount">{a.amount}</span>}
              </div>
              <div className="sidebar-award-meta">{a.competition} · {a.year}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="sidebar-section">
        <div className="section-label">Education</div>
        <div className="sidebar-edu">
          <div className="sidebar-edu-degree">{education.degree}</div>
          <div className="sidebar-edu-school">{education.school}</div>
          <div className="sidebar-edu-meta">GPA {education.gpa} · {education.honors} · Grad {education.grad}</div>
          <div className="sidebar-edu-note">{education.scholarshipNote}</div>
        </div>
      </div>

    </aside>
  );
}

function Experience() {
  return (
    <section id="experience" className="full-section">
      <div className="section-label">Experience</div>
      <div className="exp-grid">
        {experience.map((e) => (
          <div key={e.company} className={`exp-card ${e.highlight ? "highlight" : ""}`}>
            <div className="exp-header">
              <div>
                <div className="exp-title">{e.title}</div>
                <div className="exp-company">
                  {e.link
                    ? <a href={e.link} target="_blank" rel="noreferrer">{e.company}</a>
                    : e.company}
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

function Skills() {
  return (
    <section className="full-section">
      <div className="section-label">Skills</div>
      <div className="skills-grid">
        {Object.entries(skills).map(([cat, list]) => (
          <div key={cat} className="skills-col">
            <div className="skills-col-title">{cat}</div>
            <div className="tag-row">
              {list.map((s) => <span key={s} className="tag">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="full-section contact-section">
      <div className="section-label">Contact</div>
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
      <main className="page">
        <Hero />
        <div className="mag-rule" />
        <div className="mag-body">
          <FeaturedProjects />
          <Sidebar />
        </div>
        <div className="mag-rule" />
        <Experience />
        <div className="mag-rule" />
        <Skills />
        <div className="mag-rule" />
        <Contact />
      </main>
      <footer className="footer">
        <span>© 2026 Ishita Juluru</span>
      </footer>
    </>
  );
}
