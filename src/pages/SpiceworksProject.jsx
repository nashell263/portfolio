import { useEffect, useState } from 'react'
import './SpiceworksProject.css'

import sp1 from '../assets/sp1-env.png'
import sp2 from '../assets/sp2-create.png'
import sp3 from '../assets/sp3-created.png'
import sp4 from '../assets/sp4-request.png'
import sp5 from '../assets/sp5-followup.png'
import sp6 from '../assets/sp6-escalate-create.png'
import sp7 from '../assets/sp7-escalate-comment.png'
import sp8 from '../assets/sp8-escalate-assign.png'
import sp9 from '../assets/sp9-user-confirms.png'
import sp10 from '../assets/sp10-ticket-closed.png'

const screenshots = [
  { id: 1, src: sp1, caption: 'Service desk environment' },
  { id: 2, src: sp2, caption: 'Creating a ticket' },
  { id: 3, src: sp3, caption: 'Ticket created successfully' },
  { id: 4, src: sp4, caption: 'User support request' },
  { id: 5, src: sp5, caption: 'Follow-up verification' },
  { id: 6, src: sp6, caption: 'Escalation required' },
  { id: 7, src: sp7, caption: 'Reviewing for escalation' },
  { id: 8, src: sp8, caption: 'Assigning escalated ticket' },
  { id: 9, src: sp9, caption: 'User confirms resolution' },
  { id: 10, src: sp10, caption: 'Ticket formally closed' },
]

const SpiceworksProject = () => {
  const [lightboxImg, setLightboxImg] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="spiceworks-page">
      {/* Top Nav */}
      <div className="sp-top-nav">
        <a href="#home" className="btn btn-outline sp-back-btn">
          ← Back to Home
        </a>
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div className="sp-lightbox" onClick={() => setLightboxImg(null)}>
          <span className="sp-lightbox-close">&times;</span>
          <img src={lightboxImg} alt="Enlarged screenshot" className="sp-lightbox-img" />
        </div>
      )}

      {/* 1. HERO SECTION */}
      <section className="spiceworks-hero">
        <div className="container">
          <h1 className="sp-hero-title">IT Service Desk Simulation</h1>
          <h2 className="sp-hero-subtitle">Spiceworks • IT Support • ITSM</h2>
          <p className="sp-hero-intro">
            Deployed a Spiceworks environment to simulate the full lifecycle of IT support tickets — from intake and prioritization through escalation, resolution, and closure.
          </p>
        </div>
      </section>

      <div className="container">
        {/* 2. KEY HIGHLIGHTS */}
        <section className="sp-highlights-section">
          <div className="sp-highlights-grid">
            <div className="sp-highlight-card">
              <h3>Ticket Lifecycle</h3>
              <div className="sp-lifecycle">
                <span>Intake</span> → <span>Prioritize</span> → <span>Investigate</span> → <span>Resolve</span> → <span>Close</span>
              </div>
            </div>
            
            <div className="sp-highlight-card">
              <h3>Skills Applied</h3>
              <div className="sp-tags">
                {['IT Support', 'ITSM', 'Ticket Management', 'Escalation', 'Documentation', 'Troubleshooting'].map(tag => (
                  <span key={tag} className="sp-tag">{tag}</span>
                ))}
              </div>
            </div>
            
            <div className="sp-highlight-card">
              <h3>Tools & Approach</h3>
              <div className="sp-tags">
                <span className="sp-tag">Spiceworks</span>
                <span className="sp-tag">Structured Process</span>
                <span className="sp-tag">Clear Documentation</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 3. SCREENSHOT GALLERY */}
      <section className="sp-gallery-section">
        <h3 className="sp-gallery-title">Project Gallery</h3>
        <div className="sp-gallery-scroll">
          {screenshots.map((shot) => (
            <div key={shot.id} className="sp-gallery-card" onClick={() => setLightboxImg(shot.src)}>
              <div className="sp-gallery-img-wrapper">
                <img src={shot.src} alt={shot.caption} />
              </div>
              <p className="sp-gallery-caption">{shot.caption}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="container">
        {/* 4. BACK TO HOME */}
        <section className="sp-footer">
          <a href="#home" className="btn btn-outline sp-bottom-back-btn">
            ← Back to Home
          </a>
        </section>
      </div>
    </div>
  )
}

export default SpiceworksProject
