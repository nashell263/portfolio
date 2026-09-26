import './Projects.css'

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <span className="section-label reveal">PORTFOLIO</span>
        <h3 className="section-title reveal">
          Featured <span className="text-accent">Projects.</span>
        </h3>

        <div className="projects__grid reveal">
          {/* EmoSense */}
          <div className="project__card">
            <div className="project__content">
              <span className="project__tag">Featured Project</span>
              <h4 className="project__title">EmoSense</h4>
              <p className="project__subtitle">AI-Powered Emotion-Detection Counselling Platform</p>
              <p className="project__description">
                Final-year project integrating real-time emotion detection with AI-driven counseling insights. Built with React, Node.js, Python, and MySQL.
              </p>
              <div className="project__tech">
                {['React', 'JavaScript', 'Node.js', 'Python', 'REST APIs', 'MySQL'].map(t => (
                  <span key={t} className="project__tech-item">{t}</span>
                ))}
              </div>
            </div>
            <div className="project__actions">
              <a href="https://emosense-2.onrender.com" target="_blank" rel="noreferrer" className="btn btn-primary">
                Live Demo
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
              </a>
              <a href="https://github.com/nashell263/emosense" target="_blank" rel="noreferrer" className="btn btn-outline" aria-label="GitHub">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
            </div>
          </div>

          {/* Spiceworks */}
          <div className="project__card">
            <div className="project__content">
              <span className="project__tag project__tag--outline">IT Support</span>
              <h4 className="project__title">Spiceworks — IT Service Desk Simulation</h4>
              <p className="project__description">
                Practical IT Service Desk simulation managing the full ticket lifecycle — intake, prioritization, escalation, resolution, and closure using Spiceworks.
              </p>
              <div className="project__tech">
                {['Spiceworks', 'IT Support', 'ITSM', 'Ticket Management'].map(t => (
                  <span key={t} className="project__tech-item">{t}</span>
                ))}
              </div>
            </div>
            <div className="project__actions">
              <a href="#/projects/spiceworks" className="btn btn-primary">
                View Case Study →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
