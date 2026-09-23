import { useState } from 'react'
import './Skills.css'

const skillsData = [
  {
    category: 'SOFTWARE DEVELOPMENT',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    skills: [
      { name: 'JavaScript', projects: ['EmoSense'] },
      { name: 'React', projects: ['EmoSense'] },
      { name: 'Python', projects: ['EmoSense'] },
      { name: 'Dart', projects: [] },
      { name: 'Flutter', projects: [] },
      { name: 'REST APIs', projects: ['EmoSense'] },
    ]
  },
  {
    category: 'IT SUPPORT / ITSM',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
    skills: [
      { name: 'IT Support', projects: ['Spiceworks Simulation'] },
      { name: 'IT Service Management', projects: ['Spiceworks Simulation'] },
      { name: 'Ticket Management', projects: ['Spiceworks Simulation'] },
      { name: 'Incident Management', projects: ['Spiceworks Simulation'] },
      { name: 'Troubleshooting', projects: ['Spiceworks Simulation'] },
      { name: 'Escalation', projects: ['Spiceworks Simulation'] },
      { name: 'Documentation', projects: ['Spiceworks Simulation'] },
    ]
  },
  {
    category: 'DATABASES',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
    skills: [
      { name: 'SQL', projects: ['EmoSense'] },
      { name: 'MySQL', projects: ['EmoSense'] },
      { name: 'Firebase', projects: [] },
      { name: 'Database Design', projects: ['EmoSense'] },
    ]
  },
  {
    category: 'SYSTEMS & INFRASTRUCTURE',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>,
    skills: [
      { name: 'Windows OS', projects: [] },
      { name: 'Networking', projects: [] },
      { name: 'IT Infrastructure', projects: [] },
      { name: 'System Administration', projects: [] },
    ]
  },
  {
    category: 'SECURITY',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
    skills: [
      { name: 'Cybersecurity Fundamentals', projects: [] },
      { name: 'Information Security', projects: [] },
      { name: 'Security Awareness', projects: [] },
    ]
  },
  {
    category: 'TOOLS',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 9.36l-7.1 7.1a1 1 0 0 1-1.4 0l-2.8-2.8a1 1 0 0 1 0-1.4l7.1-7.1a6 6 0 0 1 9.36-7.94l-3.77 3.77a1 1 0 0 0 0 1.4z"/></svg>,
    skills: [
      { name: 'Git', projects: ['EmoSense'] },
      { name: 'GitHub', projects: ['EmoSense'] },
      { name: 'Spiceworks', projects: ['Spiceworks Simulation'] },
      { name: 'VS Code', projects: [] },
      { name: 'Android Studio', projects: [] },
    ]
  }
]

const Skills = () => {
  const [expandedCat, setExpandedCat] = useState('SOFTWARE DEVELOPMENT')
  const [activeSkill, setActiveSkill] = useState(null)

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-label reveal">TECHNICAL EXPERTISE</h2>
        <h3 className="section-title reveal">
          What I <span className="text-accent">Know.</span>
        </h3>

        <div className="skills__container reveal">
          {skillsData.map((cat) => (
            <div key={cat.category} className={`skills__category ${expandedCat === cat.category ? 'active' : ''}`}>
              <div 
                className="skills__category-header" 
                onClick={() => setExpandedCat(expandedCat === cat.category ? null : cat.category)}
              >
                <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
                  <span className="skills__icon">{cat.icon}</span>
                  <h4 style={{fontSize: '15px', letterSpacing: '1px'}}>{cat.category}</h4>
                </div>
                <span className="skills__toggle">{expandedCat === cat.category ? '−' : '+'}</span>
              </div>
              
              {expandedCat === cat.category && (
                <div className="skills__body">
                  {cat.skills.map(skill => (
                    <div 
                      key={skill.name} 
                      className={`skill__tag ${activeSkill === skill.name ? 'active' : ''}`}
                      onClick={() => setActiveSkill(activeSkill === skill.name ? null : skill.name)}
                    >
                      {skill.name}
                      {activeSkill === skill.name && skill.projects.length > 0 && (
                        <div className="skill__tooltip">
                          <span style={{fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase'}}>Demonstrated in:</span>
                          {skill.projects.map(p => <div key={p} style={{color: '#fff', fontSize: '12px'}}>{p}</div>)}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
