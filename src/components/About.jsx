import { useState } from 'react'
import './About.css'

const About = () => {
  const [expandedCard, setExpandedCard] = useState(null)

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index)
  }

  return (
    <section id="about" className="section about">
      <div className="container">
        <span className="section-label reveal">ABOUT ME</span>
        
        <h2 className="section-title reveal" style={{marginTop: '16px'}}>More Than Just Code.</h2>

        <div className="about__intro reveal">
          <p>
            I am an Information Systems graduate interested in the intersection of technology, business processes and practical problem solving.
          </p>
          <p>
            My work spans software development, IT support, service management, databases and information systems. I enjoy turning real-world problems into structured technical solutions.
          </p>
        </div>

        <div className="about__cards reveal">
          {/* Card 1 */}
          <div className={`about__card ${expandedCard === 0 ? 'active' : ''}`} onClick={() => toggleCard(0)}>
            <div className="about__card-header">
              <div className="about__card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/></svg>
              </div>
              <h3>HOW I THINK</h3>
              <span className="about__card-toggle">{expandedCard === 0 ? '−' : '+'}</span>
            </div>
            <p className="about__card-summary">
              Understand the problem, requirements and people involved before choosing a technical solution.
            </p>
            {expandedCard === 0 && (
              <div className="about__card-body">
                <p>I believe that effective technology solutions start with understanding the business context. Before writing code or configuring systems, I focus on analyzing the root cause of the problem and the needs of the end users.</p>
              </div>
            )}
          </div>

          {/* Card 2 */}
          <div className={`about__card ${expandedCard === 1 ? 'active' : ''}`} onClick={() => toggleCard(1)}>
            <div className="about__card-header">
              <div className="about__card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
              </div>
              <h3>HOW I BUILD</h3>
              <span className="about__card-toggle">{expandedCard === 1 ? '−' : '+'}</span>
            </div>
            <p className="about__card-summary">
              Translate requirements into practical systems, applications and workflows.
            </p>
            {expandedCard === 1 && (
              <div className="about__card-body">
                <p>I build with structure and maintainability in mind. Whether it's developing a software feature or configuring an IT service workflow, I aim for solutions that are reliable, scalable, and easy for others to understand and use.</p>
              </div>
            )}
          </div>

          {/* Card 3 */}
          <div className={`about__card ${expandedCard === 2 ? 'active' : ''}`} onClick={() => toggleCard(2)}>
            <div className="about__card-header">
              <div className="about__card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 9.36l-7.1 7.1a1 1 0 0 1-1.4 0l-2.8-2.8a1 1 0 0 1 0-1.4l7.1-7.1a6 6 0 0 1 9.36-7.94l-3.77 3.77a1 1 0 0 0 0 1.4z"/></svg>
              </div>
              <h3>HOW I SOLVE PROBLEMS</h3>
              <span className="about__card-toggle">{expandedCard === 2 ? '−' : '+'}</span>
            </div>
            <p className="about__card-summary">
              Break complex problems into manageable steps, test solutions and document the outcome.
            </p>
            {expandedCard === 2 && (
              <div className="about__card-body">
                <p>I approach troubleshooting methodically. By isolating variables and verifying assumptions, I can efficiently identify issues in both software and IT infrastructure, ensuring that once a problem is fixed, it is properly documented.</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
