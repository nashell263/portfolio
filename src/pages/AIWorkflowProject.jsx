import { useEffect, useState } from 'react'
import './AIWorkflowProject.css'

import imgN8n from '../assets/ai-n8n.png'
import imgFaq from '../assets/ai-faq.png'
import imgSupabase from '../assets/ai-supabase.png'
import imgGmail from '../assets/ai-gmail.png'
import imgSlack from '../assets/ai-slack.png'

const steps = [
  {
    num: 1,
    icon: '📩',
    title: 'Incoming Email — Event Trigger',
    description: 'The workflow starts when a new customer email arrives in Gmail. Rather than manually monitoring an inbox, the email becomes an event that automatically triggers the entire automation pipeline.',
    image: null,
  },
  {
    num: 2,
    icon: '🤖',
    title: 'AI Classification',
    description: 'The incoming inquiry is analyzed by an OpenAI-powered text classifier and categorized by intent — Customer Support, Promotions, or Finance & Billing. This classification determines which specialized agent handles the request.',
    image: null,
  },
  {
    num: 3,
    icon: '🔀',
    title: 'Intelligent Agent Routing',
    description: 'Instead of sending every request to the same AI agent, the workflow routes each inquiry to the appropriate specialized agent based on the classification output. This modular multi-agent architecture means each agent has its own instructions, tools, knowledge sources, and actions.',
    image: { src: imgN8n, caption: 'n8n workflow — Email Trigger → Classification → Agent Routing → RAG → Draft → Slack' },
  },
  {
    num: 4,
    icon: '🧠',
    title: 'Knowledge Retrieval — RAG + Supabase',
    description: 'The relevant AI agent retrieves business-specific information from a Supabase vector database containing the store\'s FAQs, product info, sizing guides, return policies, and payment details. This Retrieval-Augmented Generation (RAG) approach ensures responses are grounded in real business data rather than relying purely on the model\'s general knowledge.',
    image: { src: imgSupabase, caption: 'Supabase vector database with embedded FAQ documents and metadata' },
  },
  {
    num: 5,
    icon: '✉️',
    title: 'AI-Generated Email Draft',
    description: 'Using the customer\'s inquiry and the retrieved business context, the AI agent generates a relevant, professional response and creates it as a Gmail draft. The objective is to automate the repetitive work while maintaining the ability for a human to review the response before it reaches the customer.',
    image: { src: imgGmail, caption: 'AI-generated Gmail draft responding to a customer\'s shoe sizing inquiry' },
  },
  {
    num: 6,
    icon: '💬',
    title: 'Human-in-the-Loop + Slack Notification',
    description: 'Once the draft has been created, the workflow sends a notification to the support team through Slack with details about the inquiry and a confirmation that the draft is ready for review. This human-in-the-loop architecture ensures AI never operates without oversight.',
    image: { src: imgSlack, caption: 'Slack #support channel receiving automated notifications for each new inquiry' },
  },
]

const AIWorkflowProject = () => {
  const [lightboxImg, setLightboxImg] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="aiw-page">
      {/* Top Nav */}
      <div className="aiw-top-nav">
        <a href="#home" className="btn btn-outline aiw-back-btn">← Back to Home</a>
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div className="aiw-lightbox" onClick={() => setLightboxImg(null)}>
          <span className="aiw-lightbox-close">&times;</span>
          <img src={lightboxImg} alt="Enlarged screenshot" className="aiw-lightbox-img" />
        </div>
      )}

      {/* Hero */}
      <section className="aiw-hero">
        <div className="container">
          <div className="aiw-hero-badge">AI AUTOMATION</div>
          <h1 className="aiw-hero-title">AI-Powered Multi-Agent Customer Support Workflow</h1>
          <h2 className="aiw-hero-subtitle">n8n • OpenAI • Supabase • Gmail • Slack</h2>
          <p className="aiw-hero-intro">
            Built a complete workflow where incoming customer requests are automatically processed, classified, routed to specialized AI agents, enriched with business-specific knowledge via RAG, and prepared for human review.
          </p>
          <div className="aiw-hero-stats">
            <div className="aiw-stat">
              <span className="aiw-stat-number">6</span>
              <span className="aiw-stat-label">Pipeline Stages</span>
            </div>
            <div className="aiw-stat">
              <span className="aiw-stat-number">3</span>
              <span className="aiw-stat-label">AI Agents</span>
            </div>
            <div className="aiw-stat">
              <span className="aiw-stat-number">RAG</span>
              <span className="aiw-stat-label">Knowledge Retrieval</span>
            </div>
            <div className="aiw-stat">
              <span className="aiw-stat-number">5</span>
              <span className="aiw-stat-label">Integrations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Flow */}
      <section className="aiw-flow-section">
        <div className="container">
          <div className="aiw-flow">
            {['Email', 'Classify', 'Route', 'AI Agent', 'RAG', 'Draft', 'Slack', 'Review'].map((step, i) => (
              <span key={step} className="aiw-flow-item">
                {i > 0 && <span className="aiw-flow-arrow">→</span>}
                <span className="aiw-flow-label">{step}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Base Preview */}
      <section className="aiw-knowledge-section">
        <div className="container">
          <div className="aiw-knowledge-grid">
            <div className="aiw-knowledge-text">
              <h3>Business Knowledge Base</h3>
              <p>The FAQ document containing product information, sizing guides, return policies, and payment details was embedded into Supabase as vector data — enabling the AI agents to retrieve relevant context for each customer inquiry.</p>
              <div className="aiw-knowledge-tags">
                {['Product Info', 'Shoe Sizing', 'Returns & Exchanges', 'Payment Info', 'Delivery Policies', 'FAQs'].map(tag => (
                  <span key={tag} className="aiw-knowledge-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="aiw-knowledge-img" onClick={() => setLightboxImg(imgFaq)}>
              <img src={imgFaq} alt="FAQ Knowledge Base Document" />
              <p className="aiw-img-caption">E-Commerce Shoe Store FAQ document used as the knowledge source</p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="aiw-steps-section">
        <div className="container">
          <h3 className="aiw-steps-heading">Workflow Pipeline — Stage by Stage</h3>
          <div className="aiw-steps">
            {steps.map((step) => (
              <div key={step.num} className="aiw-step">
                <div className="aiw-step-header">
                  <div className="aiw-step-icon">{step.icon}</div>
                  <div className="aiw-step-info">
                    <span className="aiw-step-label">Stage {step.num}</span>
                    <h4 className="aiw-step-title">{step.title}</h4>
                    <p className="aiw-step-desc">{step.description}</p>
                  </div>
                </div>
                {step.image && (
                  <div className="aiw-step-image" onClick={() => setLightboxImg(step.image.src)}>
                    <img src={step.image.src} alt={step.image.caption} />
                    <p className="aiw-step-caption">{step.image.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="aiw-tech-section">
        <div className="container">
          <h3 className="aiw-tech-heading">Technologies & Concepts</h3>
          <div className="aiw-tech-grid">
            <div className="aiw-tech-card">
              <h4>🛠️ Tools</h4>
              <div className="aiw-tech-tags">
                {['n8n', 'OpenAI', 'Supabase', 'Gmail', 'Slack'].map(t => (
                  <span key={t} className="aiw-tech-tag">{t}</span>
                ))}
              </div>
            </div>
            <div className="aiw-tech-card">
              <h4>🤖 AI & Automation</h4>
              <div className="aiw-tech-tags">
                {['AI Agents', 'RAG', 'Vector Databases', 'Embeddings', 'Intent Classification', 'Prompt Engineering'].map(t => (
                  <span key={t} className="aiw-tech-tag">{t}</span>
                ))}
              </div>
            </div>
            <div className="aiw-tech-card">
              <h4>🧩 Architecture</h4>
              <div className="aiw-tech-tags">
                {['Event-Driven Automation', 'Multi-Agent Workflows', 'Human-in-the-Loop', 'API Integrations', 'Business Process Automation'].map(t => (
                  <span key={t} className="aiw-tech-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="aiw-why-section">
        <div className="container">
          <h3 className="aiw-why-heading">Why This Matters to Businesses</h3>
          <div className="aiw-why-grid">
            <div className="aiw-why-card">
              <span className="aiw-why-icon">⚡</span>
              <h4>Accelerate Response Times</h4>
              <p>AI generates context-aware drafts instantly instead of support teams writing each response from scratch.</p>
            </div>
            <div className="aiw-why-card">
              <span className="aiw-why-icon">🎯</span>
              <h4>Intelligent Routing</h4>
              <p>Each inquiry reaches the right specialized agent automatically — no manual triage required.</p>
            </div>
            <div className="aiw-why-card">
              <span className="aiw-why-icon">🛡️</span>
              <h4>Human Oversight</h4>
              <p>AI handles the repetitive work while humans maintain final review and control over every customer interaction.</p>
            </div>
            <div className="aiw-why-card">
              <span className="aiw-why-icon">📈</span>
              <h4>Scalable & Extensible</h4>
              <p>Additional agents, knowledge sources, and integrations can be introduced without redesigning the entire workflow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="container">
        <section className="aiw-footer">
          <a href="#home" className="btn btn-outline">← Back to Home</a>
        </section>
      </div>
    </div>
  )
}

export default AIWorkflowProject
