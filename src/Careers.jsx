const responsibilities = [
  'Develop computer programs that support fuel sales, convenience store operations, inventory management, retail transaction processing, and related business functions used across the company’s multi-location fuel retail and convenience store enterprise.',
  'Design, write, modify, test, and maintain computer programs and software modules using programming languages, SQL-based database technologies, and related development tools.',
  'Improve operational efficiency and data accuracy through the programs and modules maintained for day-to-day retail operations.',
  'Develop and maintain database applications, queries, stored procedures, and automated reporting solutions.',
  'Process large volumes of retail sales, fuel inventory, pricing, transaction, and operational data.',
]

const requirements = [
  'Master’s degree in Computer Science, or equivalent.',
  'Permanent United States work authorization.',
]

function Careers() {
  return (
    <div className="careers">
      <header className="careers-header">
        <p className="eyebrow">Careers</p>
        <h1>Computer Programmer</h1>
        <p className="careers-lede">
          ST. CLAIR GAS Inc. is hiring a Computer Programmer in Cleveland, Ohio to develop and
          maintain the programs that support fuel sales, convenience store operations, inventory,
          and retail transactions across our multi-location enterprise.
        </p>
        <ul className="careers-meta">
          <li>Cleveland, OH</li>
          <li>$75,000 – $80,000 per year</li>
        </ul>
      </header>

      <div className="careers-layout">
        <article className="careers-body">
          <section>
            <h2>The role</h2>
            <p>
              This position designs, writes, modifies, tests, and maintains computer programs and
              software modules for a multi-location fuel retail and convenience store business. The
              work uses programming languages, SQL-based database technologies, and related
              development tools, with a focus on operational efficiency and accurate data.
            </p>
          </section>

          <section>
            <h2>Responsibilities</h2>
            <ul className="careers-list">
              {responsibilities.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Requirements</h2>
            <ul className="careers-list">
              {requirements.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Compensation</h2>
            <p>The salary range offered for this position is $75,000 to $80,000 per year.</p>
          </section>
        </article>

        <aside className="info-card apply-card">
          <h2>How to apply</h2>
          <p>Send your resume to Omar Alqadan by mail or email.</p>
          <h3>By mail</h3>
          <address>
            St. Clair Gas, Inc.
            <br />
            14021 St. Clair Ave
            <br />
            Cleveland, OH 44110
            <br />
            Attn: Omar Alqadan
          </address>
          <h3>By email</h3>
          <a className="apply-email" href="mailto:oalqadan@stclairgas.com">
            oalqadan@stclairgas.com
          </a>
        </aside>
      </div>
    </div>
  )
}

export default Careers
