import './Projects.css'

const projectsData = [
  {
    id: 1,
    title: 'EmoSense',
    subtitle: 'AI-Powered Emotion-Detection Counselling Platform',
    description: 'My final-year project — an AI-powered counselling platform designed around emotion detection and digital user support. Built to provide real-time emotional insights and analytics.',
    tech: ['React', 'JavaScript', 'Node.js', 'Python', 'REST APIs', 'MySQL'],
    liveUrl: 'https://emosense-2.onrender.com',
    githubUrl: 'https://github.com/nashell263/emosense',
    featured: true
  },
  // Placeholders for future projects
  {
    id: 2,
    title: 'Spiceworks — IT Service Desk Simulation',
    subtitle: 'IT Support / IT Service Management',
    description: 'A practical IT Service Desk simulation using Spiceworks to manage the full lifecycle of simulated user support tickets — from intake and prioritization to documentation, communication, escalation, resolution and formal closure.',
    tech: ['Spiceworks', 'IT Support', 'ITSM', 'Ticket Management', 'Incident Management'],
    liveUrl: '#/projects/spiceworks',
    githubUrl: '#',
    featured: false
  },
  {
    id: 3,
    title: 'Future Project III',
    subtitle: 'Database Development / Analytics',
    description: 'Reserved for a future data analytics or database development project to showcase my technical versatility.',
    tech: ['Technology A', 'Technology B'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  }
]

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-label reveal">PORTFOLIO</h2>
        <h3 className="section-title reveal">
          Featured <span className="text-accent">Projects.</span>
        </h3>

        <div className="projects__grid">
          {projectsData.map((project) => (
            <div key={project.id} className={`project__card reveal ${project.featured ? 'project__card--featured' : ''}`}>
              <div className="project__content">
                {project.featured && <span className="project__tag">Featured Project</span>}
                <h4 className="project__title">{project.title}</h4>
                <p className="project__subtitle">{project.subtitle}</p>
                <p className="project__description">{project.description}</p>
                
                <div className="project__tech">
                  {project.tech.map((t, index) => (
                    <span key={index} className="project__tech-item">{t}</span>
                  ))}
                </div>
              </div>
              
              <div className="project__actions">
                {project.liveUrl !== '#' ? (
                  <a href={project.liveUrl} target={project.liveUrl.startsWith('#') ? '_self' : '_blank'} rel="noreferrer" className="btn btn-primary">
                    {project.liveUrl.startsWith('#/') ? 'View Case Study →' : (
                      <>
                        Live Demo
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                      </>
                    )}
                  </a>
                ) : (
                  <span className="btn btn-outline disabled" style={{opacity: 0.5, cursor: 'not-allowed'}}>Coming Soon</span>
                )}
                
                {project.githubUrl !== '#' && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn-outline" aria-label="GitHub Repository">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
