import './Career.css'

const Career = () => {
  return (
    <section id="career" className="section career">
      <div className="container">
        <span className="section-label reveal">PROFESSIONAL DIRECTION</span>
        
        <div className="career__grid">
          
          <div className="career__main-column">
            {/* CAREER FOCUS */}
            <div className="career__block reveal">
              <h2 className="section-title" style={{marginBottom: '16px'}}>Career <span className="text-accent">Focus.</span></h2>
              <p className="career__statement" style={{marginBottom: '24px', fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8}}>
                I am looking to apply my Information Systems background in technical roles where I can support users, manage IT processes, and contribute to software solutions.
              </p>
              
              <div className="career__focus-tags">
                {['IT Support', 'IT Technician', 'IT Specialist', 'Service Desk', 'Junior Systems / IT Roles', 'Software / Application Support', 'Information Systems Roles'].map(role => (
                  <span key={role} className="career__focus-tag">{role}</span>
                ))}
              </div>

              <a href="/cv.pdf" download className="btn btn-outline" style={{marginTop: '32px'}}>
                Download CV
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              </a>
            </div>

            <div className="about__divider" style={{margin: '48px 0'}} />

            {/* EXPERIENCE & PRACTICAL WORK */}
            <div className="career__block reveal">
              <h3 className="career__heading">Professional Experience</h3>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h4 className="timeline-title">Software Engineering & IT Support Officer Intern</h4>
                <p className="timeline-company">FIGJAM</p>
                <p className="timeline-date">Aug 2024 – Sep 2025</p>
                <p className="timeline-desc">
                  Provided technical support, troubleshooted software issues, and assisted with IT infrastructure and system administration.
                </p>
              </div>

              <h3 className="career__heading" style={{marginTop: '40px'}}>Practical Projects & Simulations</h3>
              
              <div className="timeline-item">
                <div className="timeline-dot timeline-dot--alt"></div>
                <h4 className="timeline-title">Spiceworks IT Service Desk Simulation</h4>
                <p className="timeline-company">Personal Practical Project</p>
                <p className="timeline-desc">
                  Deployed and managed a Spiceworks environment to simulate the full lifecycle of IT support tickets, practicing ITSM workflows, escalation and documentation.
                </p>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot timeline-dot--alt"></div>
                <h4 className="timeline-title">EmoSense Emotion-Detection Platform</h4>
                <p className="timeline-company">Academic / Final Year Project</p>
                <p className="timeline-desc">
                  Developed an AI-powered counseling platform integrating emotion detection and real-time analytics to improve digital user support.
                </p>
              </div>
            </div>
          </div>

          <div className="career__side-column">
            {/* EDUCATION */}
            <div className="career__education reveal">
              <h3 className="career__heading">Education</h3>

              <div className="career__degree">
                <h4>Bachelor of Commerce Honours Degree in Information Systems</h4>
                <p className="career__institution">Midlands State University</p>
                <p className="career__date">2022 – 2026</p>
                
                <div className="career__study-areas">
                  <strong>Relevant Areas of Study:</strong>
                  <ul>
                    <li>Information Systems</li>
                    <li>Database Systems</li>
                    <li>Software Development</li>
                    <li>Information Security</li>
                    <li>Decision Support Systems</li>
                    <li>Human-Computer Interaction</li>
                    <li>IT Audit & Control</li>
                  </ul>
                </div>
              </div>

              <div className="career__grade" style={{marginTop: '20px'}}>
                <span className="career__grade-number">2.1</span>
                <span className="career__grade-text">Upper Second</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Career
