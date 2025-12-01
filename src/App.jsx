import './App.css'
import logo from './assets/cropped-logo.png'

const heroHighlights = [
  {
    title: 'Safety Inspected',
    detail: 'Weekly tank & pump checks across every location',
  },
  {
    title: 'Modern Pumps',
    detail: 'High-flow dispensers keep lines short and fuel moving',
  },
  {
    title: 'Clean Stores',
    detail: 'Convenience essentials only — no lottery or alcohol',
  },
]

const qualityPromise = [
  'Top-grade gasoline and diesel',
  'Clean and inspected storage tanks',
  'High-flow pumps for quick refueling',
  'Regular maintenance and safety checks',
]

const convenienceItems = [
  'Snacks and beverages',
  'Coffee and hot drinks',
  'Automotive fluids and accessories',
  'Air fresheners and car care products',
]

const values = [
  'Fuel quality first',
  'Customer safety',
  'Clean facilities',
  'Honest and simple service',
]

const commitments = [
  'Tank inspections',
  'Water contamination prevention',
  'EPA-compliant fuel systems',
  'Safe petroleum handling procedures',
]

const locationServices = [
  'Regular, Mid-Grade, Premium Fuel',
  'Diesel (if applicable)',
  'Convenience store (No lottery, no alcohol)',
  'Drinks, snacks, coffee',
  'Automotive products',
  'Air pump and clean restrooms',
]

const petroleumProducts = [
  'Regular (87)',
  'Mid-grade (89)',
  'Premium (91–93)',
  'Diesel (selected stations)',
]

const storeEssentials = ['Bottled beverages', 'Snacks', 'Coffee', 'Car care fluids and items']

const safetyCompliance = [
  'EPA fuel storage standards',
  'OSHA safety handling',
  'Pump calibration',
  'Fire code compliance',
]

function App() {
  return (
    <div className="site-shell">
      <nav className="top-nav">
        <div className="brand">
          <a href="#home" className="brand-logo">
            <img src={logo} alt="ST. CLAIR GAS Inc. logo" />
          </a>
        </div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#locations">Locations & Services</a>
        </div>
      </nav>

      <header id="home" className="hero">
        <div className="hero-content">
          <p className="eyebrow">Fueling Cleveland With Quality Petroleum Products</p>
          <h1>
            High-quality gasoline and diesel backed by strict safety standards, modern pumps, and
            dependable service across all our Cleveland locations.
          </h1>
          <p className="hero-lede">
            Welcome to <strong>ST. CLAIR GAS Inc.</strong> We provide clean, safe, and reliable fueling
            stations across Cleveland, focusing on premium petroleum products, superior customer service,
            and modern equipment that keeps every visit quick and comfortable.
          </p>
          <div className="hero-highlights">
            {heroHighlights.map(highlight => (
              <div className="highlight-card" key={highlight.title}>
                <p className="highlight-title">{highlight.title}</p>
                <p className="highlight-detail">{highlight.detail}</p>
              </div>
            ))}
          </div>
          <div className="hero-cta">
            <a className="primary-cta" href="#locations">
              Plan Your Stop
            </a>
            <span className="cta-note">Open daily · Modern pumps · Friendly staff</span>
          </div>
        </div>
        <div className="hero-panel">
          <h3>Our Petroleum Quality Promise</h3>
          <ul>
            {qualityPromise.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3>Convenience Store Essentials</h3>
          <p className="muted">(No lottery or alcohol)</p>
          <ul>
            {convenienceItems.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </header>

      <main>
        <section id="about" className="section about">
          <div className="section-heading">
            <p className="eyebrow">About Us</p>
            <h2>About ST. CLAIR GAS Inc.</h2>
            <p>
              We are a locally owned fuel provider committed to clean, safe, and reliable petroleum services.
              Our stations follow strict quality and safety guidelines to protect every customer and the
              communities we serve.
            </p>
          </div>
          <div className="card-grid">
            <article className="info-card">
              <h3>Mission</h3>
              <p>
                Provide Cleveland with trustworthy fuel services supported by clean facilities and friendly
                staff.
              </p>
            </article>

            <article className="info-card">
              <h3>Values</h3>
              <ul>
                {values.map(value => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
            </article>

            <article className="info-card">
              <h3>Commitment to Clean Petroleum</h3>
              <ul>
                {commitments.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="locations" className="section locations">
          <div className="section-heading">
            <p className="eyebrow">Locations & Services</p>
            <h2>Stop in at 1234 Example Ave, Cleveland, OH</h2>
            <p className="muted">Hours: 6 AM – 11 PM · Every pump inspected and calibrated regularly.</p>
          </div>

          <div className="location-grid">
            <article className="info-card location-card">
              <h3>Location 1</h3>
              <p className="address">1234 Example Ave, Cleveland, OH</p>
              <p className="hours">Hours: 6 AM – 11 PM</p>
              <h4>Services</h4>
              <ul>
                {locationServices.map(service => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </article>

            <article className="info-card">
              <h3>Petroleum Products</h3>
              <ul>
                {petroleumProducts.map(product => (
                  <li key={product}>{product}</li>
                ))}
              </ul>
              <h4>Store Essentials</h4>
              <ul>
                {storeEssentials.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="info-card">
              <h3>Safety & Compliance</h3>
              <ul>
                {safetyCompliance.map(rule => (
                  <li key={rule}>{rule}</li>
                ))}
              </ul>
              <p className="compliance-note">
                Every ST. CLAIR GAS Inc. location operates with EPA-compliant fuel systems, OSHA-trained
                teams, and documented preventive maintenance.
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} ST. CLAIR GAS Inc. Cleveland, OH</p>
        <p>Clean fuel · Friendly people · Dependable service</p>
      </footer>
    </div>
  )
}

export default App
