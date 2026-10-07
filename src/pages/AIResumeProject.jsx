import { useEffect, useState } from 'react'
import './AIResumeProject.css'

import imgWorkflow from '../assets/resume-workflow.png'
import imgForm from '../assets/resume-form.png'
import imgNotion from '../assets/resume-notion.png'

const steps = [
  {
    num: 1,
    icon: '📋',
    title: 'Application Submission',
    description: 'A candidate fills out a Job Application Form built with n8n — entering their full name, email, phone number, and uploading their CV as a PDF. The form submission triggers the automation pipeline.',
    image: { src: imgForm, caption: 'n8n-powered application form with CV upload — workflow visible in the background' },
  },
  {
    num: 2,
    icon: '📂',
    title: 'CV Upload & Text Extraction',
    description: 'The submitted CV is automatically uploaded to Google Drive for storage, then downloaded and parsed using PDF text extraction. Simultaneously, the job requirements document is also retrieved and extracted — giving the AI both sides of the comparison.',
    image: null,
  },
  {
    num: 3,
    icon: '🤖',
    title: 'AI Agent Analysis & Scoring',
    description: 'An OpenAI-powered AI Agent receives both the candidate\'s CV text and the job requirements. It performs a structured comparison and produces a detailed assessment — not just a number, but actionable recruitment insights including Strengths, Weaknesses, Risk Factors, Reward Factors, Overall Fit Score, and a written Justification for the rating.',
    image: { src: imgWorkflow, caption: 'Complete n8n pipeline — Form → Upload → Extract → AI Agent → Gmail → Notion' },
  },
  {
    num: 4,
    icon: '📧',
    title: 'Confirmation Email',
    description: 'The applicant receives an automated confirmation email via Gmail acknowledging their application has been received and is being reviewed. This maintains a professional candidate experience while the AI handles the screening.',
    image: null,
  },
  {
    num: 5,
    icon: '🗂️',
    title: 'Results Stored in Notion',
    description: 'The AI\'s structured output — including the candidate\'s name, email, CV link, strengths, weaknesses, risk/reward factors, and fit score — is automatically written to a Notion database. Recruiters can view candidates filtered by Low, Medium, or High Ranking to quickly focus on the best fits.',
    image: { src: imgNotion, caption: 'Notion Job Applicant Tracker — candidate data with strengths, weaknesses, and ranking views' },
  },
]

const AIResumeProject = () => {
  const [lightboxImg, setLightboxImg] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="air-page">
      {/* Top Nav */}
      <div className="air-top-nav">
        <a href="#home" className="btn btn-outline air-back-btn">← Back to Home</a>
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div className="air-lightbox" onClick={() => setLightboxImg(null)}>
          <span className="air-lightbox-close">&times;</span>
          <img src={lightboxImg} alt="Enlarged screenshot" className="air-lightbox-img" />
        </div>
      )}

      {/* Hero */}
      <section className="air-hero">
        <div className="container">
          <div className="air-hero-badge">AI AUTOMATION</div>
          <h1 className="air-hero-title">AI-Powered Resume Screening Workflow</h1>
          <h2 className="air-hero-subtitle">n8n • OpenAI • Google Drive • Gmail • Notion</h2>
          <p className="air-hero-intro">
            Built an automated recruitment screening pipeline that extracts CV text, compares candidates against job requirements using an AI Agent, produces structured scoring with strengths/weaknesses analysis, and stores results in Notion for recruiter review.
          </p>
          <div className="air-hero-stats">
            <div className="air-stat">
              <span className="air-stat-number">5</span>
              <span className="air-stat-label">Pipeline Stages</span>
            </div>
            <div className="air-stat">
              <span className="air-stat-number">AI</span>
              <span className="air-stat-label">Scoring Agent</span>
            </div>
            <div className="air-stat">
              <span className="air-stat-number">6</span>
              <span className="air-stat-label">Assessment Criteria</span>
            </div>
            <div className="air-stat">
              <span className="air-stat-number">5</span>
              <span className="air-stat-label">Integrations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Flow */}
      <section className="air-flow-section">
        <div className="container">
          <div className="air-flow">
            {['Apply', 'Upload CV', 'Extract Text', 'AI Scores', 'Email', 'Notion'].map((step, i) => (
              <span key={step} className="air-flow-item">
                {i > 0 && <span className="air-flow-arrow">→</span>}
                <span className="air-flow-label">{step}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* AI Output Preview */}
      <section className="air-output-section">
        <div className="container">
          <h3 className="air-output-heading">What the AI Produces</h3>
          <p className="air-output-intro">The AI doesn't just give a score — it produces structured, actionable insights for every candidate:</p>
          <div className="air-output-grid">
            <div className="air-output-card"><span>✅</span><h4>Strengths</h4><p>Key qualifications and experience that match the role requirements</p></div>
            <div className="air-output-card"><span>⚠️</span><h4>Weaknesses</h4><p>Gaps in experience or missing qualifications identified by the AI</p></div>
            <div className="air-output-card"><span>🔴</span><h4>Risk Factors</h4><p>Potential concerns that recruiters should investigate further</p></div>
            <div className="air-output-card"><span>🟢</span><h4>Reward Factors</h4><p>Standout qualities that make this candidate particularly valuable</p></div>
            <div className="air-output-card"><span>📈</span><h4>Overall Fit Score</h4><p>A numerical rating (e.g. 8/10) based on how well the candidate matches</p></div>
            <div className="air-output-card"><span>📝</span><h4>Justification</h4><p>Written explanation of why the candidate received their specific rating</p></div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="air-steps-section">
        <div className="container">
          <h3 className="air-steps-heading">Workflow Pipeline — Stage by Stage</h3>
          <div className="air-steps">
            {steps.map((step) => (
              <div key={step.num} className="air-step">
                <div className="air-step-header">
                  <div className="air-step-icon">{step.icon}</div>
                  <div className="air-step-info">
                    <span className="air-step-label">Stage {step.num}</span>
                    <h4 className="air-step-title">{step.title}</h4>
                    <p className="air-step-desc">{step.description}</p>
                  </div>
                </div>
                {step.image && (
                  <div className="air-step-image" onClick={() => setLightboxImg(step.image.src)}>
                    <img src={step.image.src} alt={step.image.caption} />
                    <p className="air-step-caption">{step.image.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech & Why */}
      <section className="air-tech-section">
        <div className="container">
          <div className="air-tech-split">
            <div className="air-tech-left">
              <h3>Technologies & Concepts</h3>
              <div className="air-tech-tags">
                {['n8n', 'OpenAI', 'Google Drive', 'Gmail', 'Notion', 'AI Agents', 'Structured Output Parsing', 'PDF Text Extraction', 'Workflow Orchestration', 'Business Process Automation'].map(t => (
                  <span key={t} className="air-tech-tag">{t}</span>
                ))}
              </div>
            </div>
            <div className="air-tech-right">
              <h3>Why This Matters</h3>
              <p>Companies receiving 1,000+ applications per vacancy can't manually review every CV. This workflow doesn't replace recruiters — it reduces repetitive screening work and gives recruiters structured, consistent information to make faster hiring decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="container">
        <section className="air-footer">
          <a href="#home" className="btn btn-outline">← Back to Home</a>
        </section>
      </div>
    </div>
  )
}

export default AIResumeProject
