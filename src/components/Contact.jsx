import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <span className="section-label reveal">Contact</span>
        <h2 className="contact__heading reveal">Let's Connect</h2>
        <p className="contact__text reveal">
          I'm open to opportunities where I can contribute my technical skills, continue learning and help build technology that solves real problems.
        </p>

        <div className="contact__actions reveal">
          <a href="/cv.pdf" download className="btn btn-primary">Download CV</a>
          <a href="https://github.com/nashell263" target="_blank" rel="noreferrer" className="btn btn-outline">GitHub</a>
          <a href="https://www.linkedin.com/in/tadiwanashe-badze-5852b4188/" target="_blank" rel="noreferrer" className="btn btn-outline">LinkedIn</a>
          <a href="mailto:nashelliphone@gmail.com" className="btn btn-outline">Email Me</a>
        </div>
      </div>

      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__brand">
            <span className="footer__name">NASHELL</span>
            <span className="footer__role">Information Systems Graduate · Software Engineer · IT Support</span>
          </div>
          <span className="footer__copy">© 2026 Nashell</span>
        </div>
      </footer>
    </section>
  )
}

export default Contact
