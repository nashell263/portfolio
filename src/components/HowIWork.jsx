import './HowIWork.css'

const steps = [
  { num: '01', title: 'UNDERSTAND', desc: 'Understand the problem and requirements.' },
  { num: '02', title: 'ANALYZE', desc: 'Break the problem into requirements, users and processes.' },
  { num: '03', title: 'DESIGN', desc: 'Plan the system, workflow or solution.' },
  { num: '04', title: 'IMPLEMENT', desc: 'Build, configure or deploy the solution.' },
  { num: '05', title: 'TEST', desc: 'Check that the solution behaves as expected.' },
  { num: '06', title: 'DOCUMENT', desc: 'Record the process, solution and outcome.' },
]

const HowIWork = () => {
  return (
    <section id="work" className="section how-work">
      <div className="container">
        <h2 className="section-label reveal">METHODOLOGY</h2>
        <h3 className="section-title reveal">
          How I <span className="text-accent">Work.</span>
        </h3>

        <div className="how-work__grid reveal">
          {steps.map((step, index) => (
            <div key={step.num} className="how-work__step">
              <div className="how-work__header">
                <span className="how-work__num">{step.num}</span>
                <span className="how-work__title">{step.title}</span>
              </div>
              <p className="how-work__desc">{step.desc}</p>
              
              {index < steps.length - 1 && (
                <div className="how-work__arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowIWork
