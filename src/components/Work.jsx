import './Work.css'

const metrics = [
  { value: '20+', label: 'Support Tickets / Week' },
  { value: '15+', label: 'Software Defects Addressed' },
  { value: '95%', label: 'Client Satisfaction' },
  { value: '8+', label: 'Client Demonstrations' },
]

const techStack = [
  'React', 'JavaScript', 'Node.js', 'Python', 'REST APIs',
  'MySQL', 'SQLite', 'JWT', 'bcrypt', 'Git/GitHub',
]

const built = ['Frontend', 'Backend', 'Database', 'Authentication & Security', 'API Integration']

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

        <div className="section-divider" />

        {/* Featured Project */}
        <div className="work__project reveal">
          <div className="work__project-header">
            <span className="work__project-tag">Featured Project</span>
            <h2 className="work__project-title">EmoSense</h2>
            <p className="work__project-subtitle">AI-Powered Emotion-Detection Counselling Platform</p>
          </div>

          <p className="work__project-desc">
            EmoSense is my final-year project — an AI-powered counselling platform designed around emotion detection and digital user support.
          </p>

          <div className="work__project-grid">
            <div>
              <h4 className="work__project-label">Technologies</h4>
              <div className="work__tech">
                {techStack.map((t) => (
                  <span key={t} className="work__tech-item">{t}</span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="work__project-label">What I Built</h4>
              <ul className="work__built-list">
                {built.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="work__project-actions">
            <a href="https://emosense-2.onrender.com" target="_blank" rel="noreferrer" className="btn btn-primary">
              Live Project
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
            </a>
            <a href="https://github.com/nashell263/emosense" target="_blank" rel="noreferrer" className="btn btn-outline">
              GitHub
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
