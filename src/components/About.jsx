import './About.css'

const strengths = [
  { title: 'Problem Solving', desc: 'Analytical approach to diagnosing and resolving technical challenges.' },
  { title: 'Communication', desc: 'Translating technical concepts for clients, users and stakeholders.' },
  { title: 'Technical Thinking', desc: 'Breaking complex systems into structured, practical solutions.' },
  { title: 'Team Collaboration', desc: 'Working effectively with developers, designers and business teams.' },
  { title: 'Business Understanding', desc: 'Connecting technology decisions to organizational goals.' },
  { title: 'Continuous Learning', desc: 'Staying current with evolving tools, frameworks and practices.' },
]

const toolkit = [
  { category: 'Software', items: 'JavaScript, React, Node.js, Python, HTML/CSS, REST APIs' },
  { category: 'Databases', items: 'MySQL, SQLite' },
  { category: 'Tools', items: 'Git, GitHub, Firebase, Remote Desktop' },
  { category: 'Data', items: 'Power BI, Tableau, Microsoft Excel' },
  { category: 'IT', items: 'IT Support, Networking, Hardware & Software Troubleshooting' },
  { category: 'Security', items: 'Cybersecurity, JWT, bcrypt' },
]

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <span className="section-label reveal">About</span>

        <div className="about__intro reveal">
          <p>
            I am an Information Systems graduate with a strong interest in software engineering, IT support, databases, cybersecurity, data analytics and technology-driven business solutions.
          </p>
          <p>
            My academic background has given me an understanding of both technology and business, while my industry experience allowed me to apply that knowledge to real-world software, support and client-facing challenges.
          </p>
        </div>

        <div className="about__divider" />

        <h3 className="about__subtitle reveal">What I Bring</h3>
        <div className="about__strengths reveal">
          {strengths.map((s) => (
            <div key={s.title} className="about__strength">
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="about__divider" />

        <h3 className="about__subtitle reveal">Technical Toolkit</h3>
        <div className="about__toolkit reveal">
          {toolkit.map((t) => (
            <div key={t.category} className="about__toolkit-row">
              <span className="about__toolkit-label">{t.category}</span>
              <span className="about__toolkit-items">{t.items}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
