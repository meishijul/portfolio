import { Link } from "react-router-dom";
import "./App.css";
import "./Conscious.css";

export default function ConsciousPage() {
  return (
    <>
      <nav className="nav">
        <Link to="/" className="nav-name">← Ishita Juluru</Link>
        <ul>
          <li><a href="https://apps.apple.com/us/app/consciouss/id6759814422" target="_blank" rel="noreferrer">App Store ↗</a></li>
          <li><a href="https://play.google.com/store/apps/details?id=com.conscious.app" target="_blank" rel="noreferrer">Google Play ↗</a></li>
        </ul>
      </nav>

      <main className="cs-page">
        {/* Header */}
        <div className="cs-header">
          <div className="cs-eyebrow">Case Study · Founder, Consciouss LLC · Senior Capstone (team of 4)</div>
          <h1 className="cs-title">Conscious</h1>
          <p className="cs-subtitle">Scan a grocery item and see its real carbon and water cost, plus a lower-impact swap, in seconds.</p>
          <div className="cs-store-links">
            <a href="https://apps.apple.com/us/app/consciouss/id6759814422" target="_blank" rel="noreferrer" className="btn btn-primary">Live on iOS ↗</a>
            <a href="https://play.google.com/store/apps/details?id=com.conscious.app" target="_blank" rel="noreferrer" className="btn btn-outline">Live on Android ↗</a>
          </div>
        </div>

        {/* Hero screenshots */}
        <div className="cs-hero-screens">
          <img src="/conscious-d.jpg" alt="Scan a grocery item" className="cs-screen" />
          <img src="/conscious-c.jpg" alt="See its carbon footprint" className="cs-screen" />
          <img src="/conscious-a.jpg" alt="Compare lower-carbon options" className="cs-screen" />
          <img src="/conscious-b.jpg" alt="See how it's calculated" className="cs-screen" />
        </div>

        {/* Body */}
        <div className="cs-body">
          <div className="cs-main">
            <section className="cs-section">
              <h2 className="cs-h2">The problem</h2>
              <p>I kept standing in the grocery aisle wanting to make the better choice, with no way to know what that was. Every package says "natural" or "eco," and real lifecycle data sits in academic databases nobody checks mid-shop. Most people want to buy more sustainably; what stops them is the time and the guesswork, not the motivation.</p>
            </section>

            <section className="cs-section">
              <h2 className="cs-h2">What I built</h2>
              <p>Conscious turns a barcode into a footprint. You scan a product, and the app returns its carbon emissions and water use, how it compares with similar products, and lower-impact alternatives.</p>
              <div className="cs-inline-screen">
                <img src="/conscious-c.jpg" alt="1.5 kg CO₂, 65% above average" />
                <p className="cs-caption">Product footprint: 1.5 kg CO₂, 65% above average</p>
              </div>
              <p>The hard part was what happens behind the scan. I built a footprint engine that takes ingredient data from Open Food Facts and matches it against the Agribalyse lifecycle database. Real product data is messy, so when a match is missing the engine falls back step by step: exact product → ingredient level → category average → baseline. It covers 277 product categories. When a label gives no percentages, it weights ingredients by the labeling rule that they're listed largest first.</p>
              <div className="cs-inline-screen">
                <img src="/conscious-b.jpg" alt="Ingredient-by-ingredient breakdown" />
                <p className="cs-caption">Ingredient-by-ingredient carbon breakdown with confidence rating</p>
              </div>
              <p>Each estimate also comes with a confidence rating and the sources it used. An app built to fight greenwashing can't be vague about its own numbers.</p>
            </section>

            <section className="cs-section">
              <h2 className="cs-h2">What I learned</h2>
              <ul className="cs-list">
                <li><strong>Being honest beats looking precise.</strong> An audit turned up three bad values in my water data — one had plain water at 1,500 L/kg. Fixing them, and reporting water as blue water only, made the numbers smaller but defensible. Confidence ratings came from the same lesson.</li>
                <li><strong>Shipping is a different job from building.</strong> Getting through App Store review and onto two platforms took as much work as the features did.</li>
                <li><strong>Find out who will pay.</strong> Downloads have grown slowly, so I'm testing a B2B route: footprint reports for small food brands, built on the same engine.</li>
              </ul>
            </section>
          </div>

          <aside className="cs-sidebar">
            <div className="cs-meta-block">
              <div className="cs-meta-label">My role</div>
              <div className="cs-meta-val">Co-founder · AI, ML, AWS, Database, Flutter</div>
            </div>
            <div className="cs-meta-block">
              <div className="cs-meta-label">Team</div>
              <div className="cs-meta-val">4 people · University of Utah senior capstone</div>
            </div>
            <div className="cs-meta-block">
              <div className="cs-meta-label">Status</div>
              <div className="cs-meta-val">Live on iOS &amp; Android · B2B pilots in progress</div>
            </div>
            <div className="cs-meta-block">
              <div className="cs-meta-label">Stack</div>
              <div className="tag-row" style={{ gap: "6px" }}>
                {["Flutter", "FastAPI", "AWS Lambda", "DynamoDB", "Cognito", "AWS SAM", "GPT-4o-mini", "Open Food Facts", "Agribalyse"].map(s => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </div>
            <div className="cs-meta-block">
              <div className="cs-meta-label">By the numbers</div>
              <div className="cs-stats">
                <div className="cs-stat"><span className="cs-stat-n">277</span><span className="cs-stat-l">product categories</span></div>
                <div className="cs-stat"><span className="cs-stat-n">170+</span><span className="cs-stat-l">automated tests</span></div>
                <div className="cs-stat"><span className="cs-stat-n">5.0★</span><span className="cs-stat-l">App Store rating</span></div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <footer className="footer">
        <span>© 2026 Ishita Juluru</span>
      </footer>
    </>
  );
}
