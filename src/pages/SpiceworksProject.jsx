import { useState, useEffect } from 'react'
import './SpiceworksProject.css'

// Import all images
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

const galleryData = [
  { id: 1, src: sp1, title: 'OPEN SPICEWORKS', desc: 'Opening the Spiceworks service desk environment', cat: 'CREATION' },
  { id: 2, src: sp2, title: 'CREATE TICKET', desc: 'Creating the first simulated user support ticket', cat: 'CREATION' },
  { id: 3, src: sp3, title: 'TICKET CREATED', desc: 'Verifying that the support ticket has been successfully recorded', cat: 'CREATION' },
  { id: 4, src: sp4, title: 'CREATE REQUEST', desc: 'Simulated support request created', cat: 'COMMUNICATION' },
  { id: 5, src: sp5, title: 'RESPOND TO USER', desc: 'Following up with the user', cat: 'COMMUNICATION' },
  { id: 6, src: sp9, title: 'USER CONFIRMS', desc: 'User confirms that the issue has been resolved', cat: 'RESOLUTION' },
  { id: 7, src: sp10, title: 'CLOSE TICKET', desc: 'Ticket formally closed', cat: 'RESOLUTION' },
  { id: 8, src: sp6, title: 'IDENTIFY ISSUE', desc: 'Identifying an issue requiring additional assistance', cat: 'ESCALATION' },
  { id: 9, src: sp7, title: 'REVIEW ISSUE', desc: 'Reviewing the support request', cat: 'ESCALATION' },
  { id: 10, src: sp8, title: 'ASSIGN & ESCALATE', desc: 'Escalating and assigning the ticket to another team', cat: 'ESCALATION' }
]

const lifecycleStages = [
  { id: '01', title: 'INTAKE', desc: 'Received and recorded the simulated user support request within the Spiceworks service desk environment.' },
  { id: '02', title: 'PRIORITIZE', desc: 'Assigned appropriate priority levels to tickets based on user impact and urgency.' },
  { id: '03', title: 'INVESTIGATE', desc: 'Reviewed ticket details and identified the underlying technical issues required for resolution.' },
  { id: '04', title: 'DOCUMENT', desc: 'Recorded troubleshooting actions and relevant support activity throughout the ticket lifecycle.' },
  { id: '05', title: 'COMMUNICATE', desc: 'Maintained clear, professional communication with the user to provide updates and ask clarifying questions.' },
  { id: '06', title: 'ESCALATE', desc: 'Recognized when an issue required additional assistance and practiced assigning the ticket to another team or user.' },
  { id: '07', title: 'RESOLVE', desc: 'Applied fixes and verified with the user that the system was restored to working order.' },
  { id: '08', title: 'CLOSE', desc: 'Confirmed resolution with the user, documented the outcome and formally closed the ticket.' }
]

const SpiceworksProject = () => {
  const [activeStage, setActiveStage] = useState('01')
  const [expandedCase, setExpandedCase] = useState(null)
  
  // Case Study Inner Navigation
  const [case1Step, setCase1Step] = useState(0)
  const [case2Step, setCase2Step] = useState(0)
  const [case3Step, setCase3Step] = useState(0)
  
  const [learnExpanded, setLearnExpanded] = useState(false)
  const [activeTab, setActiveTab] = useState('ALL')
  
  // Lightbox
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [lightboxArray, setLightboxArray] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const openLightbox = (array, index) => {
    setLightboxArray(array)
    setLightboxIndex(index)
  }

  const nextLightbox = (e) => {
    e.stopPropagation()
    setLightboxIndex((prev) => (prev + 1) % lightboxArray.length)
  }

  const prevLightbox = (e) => {
    e.stopPropagation()
    setLightboxIndex((prev) => (prev - 1 + lightboxArray.length) % lightboxArray.length)
  }

  const filteredGallery = activeTab === 'ALL' 
    ? galleryData 
    : galleryData.filter(item => item.cat === activeTab)

  const case1Data = [galleryData[0], galleryData[1], galleryData[2]]
  const case2Data = [galleryData[3], galleryData[4], galleryData[5], galleryData[6]]
  const case3Data = [galleryData[7], galleryData[8], galleryData[9], galleryData[9]] // Using sp8 twice as requested for escalate/assign

  return (
    <div className="spiceworks-page">
      {/* LIGHTBOX */}
      {lightboxIndex !== null && lightboxArray.length > 0 && (
        <div className="sp-lightbox" onClick={() => setLightboxIndex(null)}>
          <span className="sp-lightbox-close">&times;</span>
          <span className="sp-lightbox-nav sp-lightbox-prev" onClick={prevLightbox}>‹</span>
          <img src={lightboxArray[lightboxIndex].src} alt={lightboxArray[lightboxIndex].title} className="sp-lightbox-img" onClick={(e) => e.stopPropagation()} />
          <p className="sp-lightbox-caption">{lightboxArray[lightboxIndex].desc}</p>
          <span className="sp-lightbox-nav sp-lightbox-next" onClick={nextLightbox}>›</span>
        </div>
      )}

      {/* 1. HERO */}
      <section className="spiceworks-hero">
        <div className="container">
          <h1 className="sp-hero-title">SPICEWORKS<br/><span style={{fontSize: 'clamp(24px, 3vw, 40px)', color: 'var(--text-secondary)'}}>IT SERVICE DESK SIMULATION</span></h1>
          <h2 className="sp-hero-subtitle">Practical IT Support & Service Desk Workflow Simulation</h2>
          <p className="sp-hero-intro">
            Hands-on simulation of the complete IT support ticket lifecycle using a Spiceworks environment — from user issue intake and prioritization to documentation, communication, escalation, resolution and formal closure.
          </p>
          
          <div className="sp-metadata">
            <div className="sp-meta-item">
              <span className="sp-meta-label">Tool</span>
              <span className="sp-meta-value">Spiceworks</span>
            </div>
            <div className="sp-meta-item">
              <span className="sp-meta-label">Category</span>
              <span className="sp-meta-value">IT Support / ITSM</span>
            </div>
            <div className="sp-meta-item">
              <span className="sp-meta-label">Project Type</span>
              <span className="sp-meta-value">Practical Simulation</span>
            </div>
            <div className="sp-meta-item">
              <span className="sp-meta-label">Status</span>
              <span className="sp-meta-value">Completed</span>
            </div>
          </div>

          <div className="sp-hero-actions">
            <a href="#lifecycle" className="btn btn-primary">Explore Ticket Lifecycle ↓</a>
            <a href="#evidence" className="btn btn-outline">View Evidence</a>
          </div>
        </div>
      </section>

      <div className="container">
        {/* 2. PROJECT SNAPSHOT */}
        <section className="sp-section" style={{paddingTop: '60px'}}>
          <div className="sp-snapshot-grid">
            <div className="sp-snap-card">
              <div className="sp-snap-num">01</div>
              <h4>Ticket Lifecycle</h4>
              <p>Managed simulated tickets from intake to closure.</p>
            </div>
            <div className="sp-snap-card">
              <div className="sp-snap-num">02</div>
              <h4>User Support</h4>
              <p>Practiced communication and resolution confirmation.</p>
            </div>
            <div className="sp-snap-card">
              <div className="sp-snap-num">03</div>
              <h4>Escalation</h4>
              <p>Simulated routing issues to another team/user.</p>
            </div>
            <div className="sp-snap-card">
              <div className="sp-snap-num">04</div>
              <h4>Documentation</h4>
              <p>Recorded support actions and resolution details.</p>
            </div>
            <div className="sp-snap-card">
              <div className="sp-snap-num">05</div>
              <h4>ITSM</h4>
              <p>Applied structured service desk workflows.</p>
            </div>
          </div>
        </section>

        {/* 3. INTERACTIVE TICKET CARD */}
        <section className="sp-section">
          <div className="sp-ticket-mock">
            <div className="sp-ticket-header">
              <span className="sp-ticket-id">TICKET #001</span>
              <span className="sp-ticket-status-badge">RESOLVED</span>
            </div>
            <div className="sp-ticket-body">
              <div className="sp-ticket-field">
                <div className="sp-ticket-label">Issue</div>
                <div className="sp-ticket-value">User unable to connect to network</div>
              </div>
              <div className="sp-ticket-field" style={{display: 'flex', gap: '40px'}}>
                <div>
                  <div className="sp-ticket-label">Priority</div>
                  <div className="sp-ticket-value" style={{color: '#ef4444'}}>HIGH</div>
                </div>
                <div>
                  <div className="sp-ticket-label">Assigned</div>
                  <div className="sp-ticket-value">IT Support</div>
                </div>
              </div>
            </div>
            <div className="sp-ticket-timeline">
              <span>Timeline:</span>
              <span className="sp-ticket-step">OPEN</span> → 
              <span className="sp-ticket-step">IN PROGRESS</span> → 
              <span className="sp-ticket-step active">RESOLVED</span> → 
              <span className="sp-ticket-step">CLOSED</span>
            </div>
          </div>
        </section>

        {/* 4. INTERACTIVE TICKET LIFECYCLE */}
        <section id="lifecycle" className="sp-section">
          <div className="sp-section-header">
            <h3 className="sp-section-title">Managing the Full Ticket Lifecycle</h3>
          </div>
          <div className="sp-lifecycle-container">
            <div className="sp-lifecycle-nav">
              {lifecycleStages.map(stage => (
                <button 
                  key={stage.id} 
                  className={`sp-lifecycle-btn ${activeStage === stage.id ? 'active' : ''}`}
                  onClick={() => setActiveStage(stage.id)}
                >
                  <span>{stage.id} — {stage.title}</span>
                </button>
              ))}
            </div>
            <div className="sp-lifecycle-content">
              {lifecycleStages.filter(s => s.id === activeStage).map(stage => (
                <div key={stage.id}>
                  <h4>{stage.title}</h4>
                  <p>{stage.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5, 6, 7, 8. THREE INTERACTIVE CASE STUDIES */}
        <section className="sp-section">
          <div className="sp-cases-grid">
            
            {/* CASE 01 */}
            <div className="sp-case-card">
              <div className="sp-case-header" onClick={() => setExpandedCase(expandedCase === 1 ? null : 1)}>
                <div className="sp-case-header-info">
                  <h4>Ticket Creation & Intake</h4>
                  <p>From opening the Spiceworks environment to creating and recording a support ticket.</p>
                </div>
                <button className="btn btn-outline">{expandedCase === 1 ? 'Close Case ↑' : 'Explore Case →'}</button>
              </div>
              {expandedCase === 1 && (
                <div className="sp-case-body">
                  <div className="sp-showcase">
                    <div className="sp-showcase-nav">
                      {['01 OPEN SPICEWORKS', '02 CREATE TICKET', '03 TICKET CREATED'].map((tab, idx) => (
                        <button key={idx} className={`sp-showcase-tab ${activeCase1Step === idx ? 'active' : ''}`} onClick={() => setCase1Step(idx)}>
                          {tab}
                        </button>
                      ))}
                    </div>
                    <div className="sp-showcase-view" onClick={() => openLightbox(case1Data, activeCase1Step)}>
                      <img src={case1Data[activeCase1Step].src} alt={case1Data[activeCase1Step].title} className="sp-showcase-img" />
                      <p className="sp-showcase-caption">{case1Data[activeCase1Step].desc}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* CASE 02 */}
            <div className="sp-case-card">
              <div className="sp-case-header" onClick={() => setExpandedCase(expandedCase === 2 ? null : 2)}>
                <div className="sp-case-header-info">
                  <h4>User Communication, Resolution & Closure</h4>
                  <p>Following up with the user, confirming resolution and formally closing the ticket.</p>
                </div>
                <button className="btn btn-outline">{expandedCase === 2 ? 'Close Case ↑' : 'Explore Case →'}</button>
              </div>
              {expandedCase === 2 && (
                <div className="sp-case-body">
                  <p style={{color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '14px'}}>
                    I practiced confirming resolution with the user before formally closing the ticket, reinforcing the importance of communication and accurate support records.
                  </p>
                  <div className="sp-showcase">
                    <div className="sp-showcase-nav">
                      {['CREATE', 'RESPOND', 'CONFIRM', 'CLOSE'].map((tab, idx) => (
                        <button key={idx} className={`sp-showcase-tab ${activeCase2Step === idx ? 'active' : ''}`} onClick={() => setCase2Step(idx)}>
                          {tab}
                        </button>
                      ))}
                    </div>
                    <div className="sp-showcase-view" onClick={() => openLightbox(case2Data, activeCase2Step)}>
                      <img src={case2Data[activeCase2Step].src} alt={case2Data[activeCase2Step].title} className="sp-showcase-img" />
                      <p className="sp-showcase-caption">{case2Data[activeCase2Step].desc}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* CASE 03 */}
            <div className="sp-case-card">
              <div className="sp-case-header" onClick={() => setExpandedCase(expandedCase === 3 ? null : 3)}>
                <div className="sp-case-header-info">
                  <h4>Escalation & Assignment</h4>
                  <p>Identifying an issue requiring further assistance and routing it to another team or user.</p>
                </div>
                <button className="btn btn-outline">{expandedCase === 3 ? 'Close Case ↑' : 'Explore Case →'}</button>
              </div>
              {expandedCase === 3 && (
                <div className="sp-case-body">
                  <p style={{color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '14px'}}>
                    Escalation practice demonstrated the importance of recognizing when an issue should be routed to another support level rather than handled indefinitely at the initial support level.
                  </p>
                  <div className="sp-showcase">
                    <div className="sp-showcase-nav">
                      {['IDENTIFY', 'REVIEW', 'ESCALATE', 'ASSIGN'].map((tab, idx) => (
                        <button key={idx} className={`sp-showcase-tab ${activeCase3Step === idx ? 'active' : ''}`} onClick={() => setCase3Step(idx)}>
                          {tab}
                        </button>
                      ))}
                    </div>
                    <div className="sp-showcase-view" onClick={() => openLightbox(case3Data, activeCase3Step)}>
                      <img src={case3Data[activeCase3Step].src} alt={case3Data[activeCase3Step].title} className="sp-showcase-img" />
                      <p className="sp-showcase-caption">{case3Data[activeCase3Step].desc}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </section>

        {/* 9. TICKET CLOSURE CHECKLIST */}
        <section className="sp-section">
          <div className="sp-section-header">
            <h3 className="sp-section-title">Ticket Closure Checklist</h3>
          </div>
          <div className="sp-checklist reveal">
            <p style={{color: 'var(--text-secondary)', marginBottom: '16px'}}>Before closing a ticket, I practiced verifying that the issue had been addressed, documenting the relevant actions and confirming the outcome with the user.</p>
            {['Issue investigated', 'Troubleshooting documented', 'User contacted', 'Resolution confirmed', 'Resolution notes recorded', 'Ticket status updated', 'Ticket formally closed'].map(item => (
              <div key={item} className="sp-checklist-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* 10. WHAT THIS PROJECT DEMONSTRATES */}
        <section className="sp-section">
          <div className="sp-section-header">
            <h3 className="sp-section-title">What This Project Demonstrates</h3>
          </div>
          <div className="sp-snapshot-grid">
            <div className="sp-snap-card">
              <h4>STRUCTURED PROCESS</h4>
              <p>Following a defined workflow from ticket intake through resolution.</p>
            </div>
            <div className="sp-snap-card">
              <h4>TASK MANAGEMENT</h4>
              <p>Managing different support requests and maintaining their status.</p>
            </div>
            <div className="sp-snap-card">
              <h4>DOCUMENTATION</h4>
              <p>Recording troubleshooting actions, communication and resolution details.</p>
            </div>
            <div className="sp-snap-card">
              <h4>USER COMMUNICATION</h4>
              <p>Communicating clearly with users and confirming issue resolution.</p>
            </div>
            <div className="sp-snap-card">
              <h4>ESCALATION</h4>
              <p>Recognizing when additional support is required and routing the issue appropriately.</p>
            </div>
            <div className="sp-snap-card">
              <h4>IT SERVICE MANAGEMENT</h4>
              <p>Understanding the operational workflow behind structured IT support.</p>
            </div>
          </div>
        </section>

        {/* 11. WHAT I LEARNED */}
        <section className="sp-section">
          <div className="sp-learn-accordion">
            <div className="sp-learn-header" onClick={() => setLearnExpanded(!learnExpanded)}>
              <span>What I Learned</span>
              <span style={{color: 'var(--text-muted)'}}>{learnExpanded ? '−' : '+'}</span>
            </div>
            {!learnExpanded && (
              <div style={{padding: '0 24px 24px', color: 'var(--text-secondary)'}}>
                Effective IT Support is more than solving the technical problem.
              </div>
            )}
            {learnExpanded && (
              <div className="sp-learn-body">
                <p>This project reinforced that effective IT Support is not only about solving technical problems. It also involves managing the process surrounding each issue.</p>
                <p>A properly managed ticket provides a clear record of what was reported, what actions were taken, how the user was supported, whether escalation was required and how the issue was ultimately resolved.</p>
                <p>Through this simulation, I gained practical exposure to structured IT support workflows, ticket management, documentation, prioritization, user communication, escalation and resolution management.</p>
              </div>
            )}
          </div>
        </section>

        {/* 12. PROJECT EVIDENCE */}
        <section id="evidence" className="sp-section">
          <div className="sp-section-header">
            <h3 className="sp-section-title">Project Evidence</h3>
          </div>
          
          <div className="sp-gallery-tabs">
            {['ALL', 'CREATION', 'COMMUNICATION', 'RESOLUTION', 'ESCALATION'].map(tab => (
              <button 
                key={tab} 
                className={`sp-gallery-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'ALL' ? '[ ALL ]' : `[ TICKET ${tab} ]`}
              </button>
            ))}
          </div>

          <div className="sp-gallery-grid">
            {filteredGallery.map((item, idx) => (
              <div key={item.id} className="sp-gallery-item" onClick={() => openLightbox(filteredGallery, idx)}>
                <img src={item.src} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 13. QUICK SKILLS */}
        <section className="sp-section">
          <div className="sp-section-header">
            <h3 className="sp-section-title">Skills Demonstrated</h3>
          </div>
          <div className="sp-skills-tags">
            {['Spiceworks', 'IT Support', 'ITSM', 'Ticket Management', 'Incident Management', 'Prioritization', 'Documentation', 'User Communication', 'Escalation', 'Troubleshooting', 'Resolution Management', 'Ticket Closure'].map(tag => (
              <span key={tag} className="sp-skill-tag">{tag}</span>
            ))}
          </div>
        </section>

        {/* 14. FINAL SUMMARY */}
        <section className="sp-section" style={{textAlign: 'center'}}>
          <h3 className="sp-section-title" style={{marginBottom: '40px'}}>From Issue → Resolution</h3>
          
          <div className="sp-final-flow">
            {['INTAKE', 'PRIORITIZE', 'INVESTIGATE', 'DOCUMENT', 'COMMUNICATE', 'ESCALATE', 'RESOLVE', 'CLOSE'].map((step, idx, arr) => (
              <div key={step} style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                <span className="sp-final-node">{step}</span>
                {idx < arr.length - 1 && <span style={{color: 'var(--accent)'}}>→</span>}
              </div>
            ))}
          </div>

          <p style={{color: 'var(--text-secondary)', maxWidth: '700px', margin: '40px auto 60px', lineHeight: 1.8}}>
            Through this Spiceworks IT Service Desk Simulation, I demonstrated practical understanding of ticket-based IT support workflows and the structured processes used to manage user issues efficiently.
          </p>

          <a href="#projects" className="btn btn-outline" style={{padding: '14px 32px'}}>
            ← Back to Projects
          </a>
        </section>
      </div>
    </div>
  )
}

export default SpiceworksProject
