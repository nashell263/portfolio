import { useEffect } from 'react'
import './SpiceworksProject.css'

const SpiceworksProject = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="spiceworks-page">
      {/* 1. HERO SECTION */}
      <section className="spiceworks-hero">
        <div className="container">
          <h1 className="sp-hero-title">Spiceworks — IT Service Desk Simulation</h1>
          <h2 className="sp-hero-subtitle">Practical IT Support & Service Desk Workflow Simulation</h2>
          <p className="sp-hero-intro">
            This project demonstrates my practical understanding of the operational realities of IT and security support through hands-on use of a Spiceworks ticketing environment.
          </p>
          
          <div className="sp-metadata">
            <div className="sp-meta-item">
              <span className="sp-meta-label">Tool</span>
              <span className="sp-meta-value">Spiceworks</span>
            </div>
            <div className="sp-meta-item">
              <span className="sp-meta-label">Category</span>
              <span className="sp-meta-value">IT Support / IT Service Management</span>
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
        </div>
      </section>

      <div className="container">
        {/* 2. PROJECT OVERVIEW */}
        <section className="sp-section">
          <h3 className="sp-section-title">Project Overview</h3>
          <p className="sp-text">
            I deployed a Spiceworks environment and practiced managing the full lifecycle of simulated user support tickets. The project focused on understanding how an IT Service Desk receives, tracks, manages, documents, escalates and resolves user issues efficiently.
          </p>
          <p className="sp-text">
            I practiced the complete ticket lifecycle, including ticket intake, setting priorities, documenting troubleshooting steps, communicating with users, confirming resolution, escalating issues when necessary and formally closing tickets.
          </p>
          <p className="sp-text">
            The project was designed to demonstrate that I can work within a structured IT Support process, manage different tasks, maintain clear documentation and communicate effectively throughout the support lifecycle.
          </p>
          <div className="sp-overview-tags">
            {['Ticket Intake', 'Prioritization', 'Documentation', 'User Communication', 'Escalation', 'Resolution', 'Ticket Closure'].map(tag => (
              <span key={tag} className="sp-tag">{tag}</span>
            ))}
          </div>
        </section>

        {/* 3. WHAT THIS PROJECT DEMONSTRATES */}
        <section className="sp-section">
          <h3 className="sp-section-title">What This Project Demonstrates</h3>
          <div className="sp-demonstrates-grid">
            <div className="sp-demo-card">
              <h4>Structured Process</h4>
              <p>Following a defined workflow from ticket intake through resolution and closure.</p>
            </div>
            <div className="sp-demo-card">
              <h4>Task Management</h4>
              <p>Managing different simulated support requests and maintaining their status throughout the ticket lifecycle.</p>
            </div>
            <div className="sp-demo-card">
              <h4>Clear Documentation</h4>
              <p>Recording troubleshooting actions, communication and resolution details clearly.</p>
            </div>
            <div className="sp-demo-card">
              <h4>User Communication</h4>
              <p>Communicating with users and confirming whether reported issues have been resolved.</p>
            </div>
            <div className="sp-demo-card">
              <h4>Escalation</h4>
              <p>Recognizing when an issue requires additional support and assigning it to the appropriate team or user.</p>
            </div>
            <div className="sp-demo-card">
              <h4>IT Service Management</h4>
              <p>Understanding how ticketing systems support the organization, tracking and resolution of IT issues.</p>
            </div>
          </div>
        </section>

        {/* 4. FULL TICKET LIFECYCLE */}
        <section className="sp-section">
          <h3 className="sp-section-title">Managing the Full Ticket Lifecycle</h3>
          <p className="sp-text">
            I practiced managing support requests from the moment an issue was received until the ticket was resolved and formally closed. This helped me understand the importance of maintaining a structured process and an accurate record throughout an IT support interaction.
          </p>
          <div className="sp-timeline">
            {['01 — Intake', '02 — Prioritize', '03 — Investigate', '04 — Document', '05 — Communicate', '06 — Escalate if Required', '07 — Confirm Resolution', '08 — Close Ticket'].map((step, idx, arr) => (
              <div key={step}>
                <div className="sp-timeline-item">{step}</div>
                {idx < arr.length - 1 && <div className="sp-timeline-arrow">↓</div>}
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" style={{margin: '40px 0'}} />

        {/* CASE STUDY 01 */}
        <section className="sp-section sp-case-part">
          <h3 className="sp-case-title">01 — Ticket Intake & Creation</h3>
          <p className="sp-text">
            I began by opening the Spiceworks service desk environment and simulating the intake of a user support request. I then created a support ticket and verified that the ticket was successfully recorded in the system.
          </p>
          <div className="sp-screenshot-group">
            <div className="sp-screenshot-item">
              <div className="sp-screenshot-placeholder">
                [ Screenshot: Opening the Spiceworks service desk environment ]
              </div>
              <p className="sp-screenshot-caption">Opening the Spiceworks service desk environment</p>
            </div>
            <div className="sp-screenshot-item">
              <div className="sp-screenshot-placeholder">
                [ Screenshot: Creating the first simulated support ticket ]
              </div>
              <p className="sp-screenshot-caption">Creating the first simulated support ticket</p>
            </div>
            <div className="sp-screenshot-item">
              <div className="sp-screenshot-placeholder">
                [ Screenshot: Support ticket successfully created ]
              </div>
              <p className="sp-screenshot-caption">Support ticket successfully created</p>
            </div>
          </div>
        </section>

        {/* CASE STUDY 02 */}
        <section className="sp-section sp-case-part">
          <h3 className="sp-case-title">02 — User Communication, Resolution & Closure</h3>
          <p className="sp-text">
            After working through the simulated support issue, I practiced communicating with the user to confirm whether the problem had been resolved. The ticket was only formally closed after the user confirmed that the issue was fixed.
          </p>
          <div className="sp-screenshot-group">
            <div className="sp-screenshot-item">
              <div className="sp-screenshot-placeholder">
                [ Screenshot: Creating a simulated user support request ]
              </div>
              <p className="sp-screenshot-caption">Creating a simulated user support request</p>
            </div>
            <div className="sp-screenshot-item">
              <div className="sp-screenshot-placeholder">
                [ Screenshot: Following up with the user to verify resolution ]
              </div>
              <p className="sp-screenshot-caption">Following up with the user to verify resolution</p>
            </div>
            <div className="sp-screenshot-item">
              <div className="sp-screenshot-placeholder">
                [ Screenshot: User confirms that the issue has been resolved ]
              </div>
              <p className="sp-screenshot-caption">User confirms that the issue has been resolved</p>
            </div>
            <div className="sp-screenshot-item">
              <div className="sp-screenshot-placeholder">
                [ Screenshot: Ticket formally closed after resolution confirmation ]
              </div>
              <p className="sp-screenshot-caption">Ticket formally closed after resolution confirmation</p>
            </div>
          </div>
        </section>

        {/* TICKET CLOSURE CHECKLIST */}
        <section className="sp-section sp-case-part">
          <h3 className="sp-case-title">Ticket Closure Checklist</h3>
          <p className="sp-text">
            Before closing a ticket, I practiced verifying that the reported issue had been addressed, documenting the relevant actions and confirming the outcome with the user.
          </p>
          <div className="sp-checklist">
            <ul>
              {['Issue investigated', 'Troubleshooting steps documented', 'User contacted', 'Resolution confirmed', 'Resolution notes recorded', 'Ticket status updated', 'Ticket formally closed'].map(item => (
                <li key={item}>
                  <svg className="sp-checklist-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CASE STUDY 03 */}
        <section className="sp-section sp-case-part">
          <h3 className="sp-case-title">03 — Escalation & Assignment</h3>
          <p className="sp-text">
            Not every support issue can be resolved at the initial support level. I therefore simulated an incident that required escalation and practiced assigning the ticket to another team or user for further investigation.
          </p>
          <p className="sp-text" style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>
            Escalation practice helped me understand the importance of recognizing when an issue requires additional expertise or intervention rather than attempting to resolve every issue at the initial support level.
          </p>
          <div className="sp-screenshot-group">
            <div className="sp-screenshot-item">
              <div className="sp-screenshot-placeholder">
                [ Screenshot: Identifying a support issue requiring escalation ]
              </div>
              <p className="sp-screenshot-caption">Identifying a support issue requiring escalation</p>
            </div>
            <div className="sp-screenshot-item">
              <div className="sp-screenshot-placeholder">
                [ Screenshot: Reviewing the ticket before escalation ]
              </div>
              <p className="sp-screenshot-caption">Reviewing the ticket before escalation</p>
            </div>
            <div className="sp-screenshot-item">
              <div className="sp-screenshot-placeholder">
                [ Screenshot: Escalating the support issue ]
              </div>
              <p className="sp-screenshot-caption">Escalating the support issue</p>
            </div>
            <div className="sp-screenshot-item">
              <div className="sp-screenshot-placeholder">
                [ Screenshot: Assigning the ticket to another team or user ]
              </div>
              <p className="sp-screenshot-caption">Assigning the ticket to another team or user</p>
            </div>
          </div>
        </section>

        <div className="section-divider" style={{margin: '40px 0'}} />

        {/* SKILLS */}
        <section className="sp-section">
          <h3 className="sp-section-title">Skills Demonstrated</h3>
          <div className="sp-overview-tags">
            {['IT Support', 'IT Service Management', 'Ticket Management', 'Incident Management', 'Ticket Prioritization', 'Troubleshooting Documentation', 'User Communication', 'Incident Escalation', 'Ticket Assignment', 'Resolution Verification', 'Ticket Closure', 'Structured Problem Solving'].map(tag => (
              <span key={tag} className="sp-tag">{tag}</span>
            ))}
          </div>
        </section>

        {/* WHAT I LEARNED */}
        <section className="sp-section">
          <h3 className="sp-section-title">What I Learned</h3>
          <p className="sp-text">
            This project reinforced that effective IT Support is not only about solving technical problems. It also involves managing the process surrounding each issue.
          </p>
          <p className="sp-text">
            A properly managed ticket provides a clear record of what was reported, what actions were taken, how the user was supported, whether escalation was required and how the issue was ultimately resolved.
          </p>
          <p className="sp-text">
            Through this simulation, I gained practical exposure to structured IT support workflows, ticket management, documentation, prioritization, user communication, escalation and resolution management.
          </p>
        </section>

        {/* FINAL PROJECT SUMMARY */}
        <section className="sp-section" style={{ background: 'var(--bg-surface)', padding: '40px', borderRadius: '12px' }}>
          <h3 className="sp-section-title" style={{ marginBottom: '16px' }}>Project Summary</h3>
          <p className="sp-text" style={{ marginBottom: '16px' }}>
            Through this Spiceworks IT Service Desk Simulation, I demonstrated practical understanding of ticket-based IT support workflows, including ticket intake, prioritization, documentation, user communication, escalation, resolution verification and formal ticket closure.
          </p>
          <p className="sp-text" style={{ marginBottom: 0 }}>
            The project demonstrates my ability to work within a structured process, manage multiple support tasks, document technical activity clearly and communicate effectively throughout the support lifecycle.
          </p>
        </section>

        {/* BACK TO PROJECTS */}
        <section className="sp-footer">
          <a href="#projects" className="btn btn-outline" style={{ fontSize: '16px', padding: '14px 32px' }}>
            ← Back to Projects
          </a>
        </section>
      </div>
    </div>
  )
}

export default SpiceworksProject
