import { useState } from 'react'
import './Career.css'
import degreeCert from '../assets/degree-cert.jpg'

const Career = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const skills = [
    'JavaScript', 'React', 'Python', 'Node.js', 'SQL', 'MySQL',
    'IT Support', 'ITSM', 'Spiceworks', 'Git', 'GitHub',
    'Networking', 'Windows OS', 'REST APIs', 'Dart', 'Flutter'
  ]

  return (
    <section id="career" className="section career">
      <div className="container">
        <span className="section-label reveal">EXPERIENCE & EDUCATION</span>

        <div className="career__grid">
          {/* Left Column */}
          <div className="career__main-column">
            <div className="career__block reveal">
              <h2 className="section-title" style={{marginBottom: '16px'}}>
                Career <span className="text-accent">Focus.</span>
              </h2>
              <p className="career__statement">
                Applying my Information Systems background in technical roles where I can support users, manage IT processes, and build software solutions.
              </p>
              <a href="#contact" className="btn btn-outline" style={{marginTop: '24px'}}>Get In Touch</a>
            </div>

            <div className="about__divider" style={{margin: '48px 0'}} />

            {/* Professional Experience */}
            <div className="career__block reveal">
              <h3 className="career__heading">Professional Experience</h3>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h4 className="timeline-title">Software Engineering & IT Support Officer Intern</h4>
                <p className="timeline-company">FIGJAM</p>
                <p className="timeline-date">Aug 2024 – Sep 2025</p>
                <ul className="career__bullets">
                  <li>Provided technical support to staff across multiple departments</li>
                  <li>Troubleshot software and hardware issues</li>
                  <li>Assisted with IT infrastructure and system administration</li>
                  <li>Contributed to software development projects</li>
                </ul>
              </div>
            </div>

            <div className="about__divider" style={{margin: '48px 0'}} />

            {/* Practical Projects */}
            <div className="career__block reveal">
              <h3 className="career__heading">Practical Projects</h3>
              <div className="timeline-item">
                <div className="timeline-dot timeline-dot--alt"></div>
                <h4 className="timeline-title">Spiceworks IT Service Desk Simulation</h4>
                <p className="timeline-company">Personal Practical Project</p>
                <p className="timeline-desc">
                  Deployed and managed a Spiceworks environment to simulate full IT support ticket lifecycle — intake, escalation, resolution, and closure.
                </p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot timeline-dot--alt"></div>
                <h4 className="timeline-title">EmoSense Emotion-Detection Platform</h4>
                <p className="timeline-company">Academic / Final Year Project</p>
                <p className="timeline-desc">
                  AI-powered counseling platform integrating real-time emotion detection with React, Node.js, Python, and MySQL.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="career__side-column">
            {/* Education */}
            <div className="career__education reveal">
              <h3 className="career__heading">Education</h3>
              <div className="career__degree">
                <h4>Bachelor of Commerce Honours Degree in Information Systems</h4>
                <p className="career__institution">Midlands State University</p>
                <p className="career__date">2022 – 2026</p>
              </div>

              <div className="career__grade">
                <span className="career__grade-number">2.1</span>
                <span className="career__grade-text">Upper Second</span>
              </div>

              {/* Degree Certificate */}
              <div className="career__cert-container" onClick={() => setLightboxOpen(true)}>
                <img src={degreeCert} alt="Degree Certificate" className="career__cert-image" />
                <div className="career__cert-overlay">
                  <span>View Certificate</span>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="career__skills reveal">
              <h3 className="career__heading">Core Skills</h3>
              <div className="career__skills-grid">
                {skills.map(skill => (
                  <span key={skill} className="career__skill-pill">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="cert-lightbox" onClick={() => setLightboxOpen(false)}>
          <span className="cert-lightbox-close">&times;</span>
          <img src={degreeCert} alt="Degree Certificate" className="cert-lightbox-img" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  )
}

export default Career
