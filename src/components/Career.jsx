import './Career.css'

const Career = () => {
  return (
    <section id="career" className="section career">
      <div className="container">
        <span className="section-label reveal">Career</span>

        <div className="career__grid">
          {/* Education */}
          <div className="career__education reveal">
            <h3 className="career__heading">Education</h3>

            <div className="career__degree">
              <div className="career__degree-main">
                <h4>Bachelor of Commerce Honours Degree in Information Systems</h4>
                <p className="career__institution">Midlands State University</p>
                <p className="career__date">2022 – 2026</p>
              </div>
              <div className="career__grade">
                <span className="career__grade-number">2.1</span>
                <span className="career__grade-text">Upper Second</span>
              </div>
            </div>

            <div className="career__certs">
              <div className="career__cert">
                <span className="career__cert-title">National Foundation Certificate in Computer Operations and Packages</span>
                <span className="career__cert-date">2019</span>
              </div>
              <div className="career__cert">
                <span className="career__cert-title">5 O-Level passes including Mathematics and English</span>
              </div>
            </div>

            <div className="career__extras">
              <div className="career__extra">
                <span className="career__extra-label">Languages</span>
                <span className="career__extra-value">English · Shona</span>
              </div>
              <div className="career__extra">
                <span className="career__extra-label">Driver's License</span>
                <span className="career__extra-value">Class 4</span>
              </div>
            </div>
          </div>

          {/* Direction */}
          <div className="career__direction reveal">
            <h3 className="career__heading">Where I'm Going</h3>

            <div className="career__statement">
              <p>
                My goal is to build a career at the intersection of technology, business and problem-solving.
              </p>
              <p>
                I want to continue developing as a software engineer while expanding my expertise in cloud technologies, cybersecurity, data analytics, artificial intelligence and enterprise systems.
              </p>
              <p>
                I am looking for opportunities where I can work on real-world technology challenges, learn from experienced professionals, collaborate with strong teams and contribute to reliable solutions that create value for organizations and their users.
              </p>
            </div>

            <div className="career__path">
              <div className="career__path-step">
                <span className="career__path-badge career__path-badge--now">Now</span>
                <span>Information Systems Graduate</span>
              </div>
              <span className="career__path-arrow">→</span>
              <div className="career__path-step">
                <span className="career__path-badge career__path-badge--next">Next</span>
                <span>Software Engineering / ICT / Technology Role</span>
              </div>
              <span className="career__path-arrow">→</span>
              <div className="career__path-step">
                <span className="career__path-badge career__path-badge--grow">Grow</span>
                <span>Cloud · Cybersecurity · Data · AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Career
