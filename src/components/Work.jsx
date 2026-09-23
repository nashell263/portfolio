import './Work.css'

const metrics = [
  { value: '20+', label: 'Support Tickets / Week' },
  { value: '15+', label: 'Software Defects Addressed' },
  { value: '95%', label: 'Client Satisfaction' },
  { value: '8+', label: 'Client Demonstrations' },
]


const Work = () => {
  return (
    <section id="work" className="section work">
      <div className="container">
        <span className="section-label reveal">Work</span>

        {/* Professional Experience */}
        <div className="work__experience reveal">
          <div className="work__exp-header">
            <div>
              <h2 className="work__exp-role">Software Engineering & IT Support Officer Intern</h2>
              <p className="work__exp-company">FIGJAM</p>
            </div>
            <span className="work__exp-date">Aug 2024 – Sep 2025</span>
          </div>

          <ul className="work__exp-list">
            <li>Resolved 20+ support tickets weekly involving client and technical issues.</li>
            <li>Helped identify and resolve 15+ software defects through real-time Firebase monitoring.</li>
            <li>Contributed to software feature development based on user and business requirements.</li>
            <li>Collaborated with developers and stakeholders to troubleshoot issues and deliver solutions.</li>
            <li>Delivered product presentations and live demonstrations to prospective and existing clients.</li>
            <li>Provided IT support covering hardware, software, networking and remote configuration.</li>
            <li>Used Git/GitHub and MySQL in software development and database work.</li>
          </ul>

          <div className="work__metrics">
            {metrics.map((m) => (
              <div key={m.label} className="work__metric">
                <span className="work__metric-value">{m.value}</span>
                <span className="work__metric-label">{m.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Work
