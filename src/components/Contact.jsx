import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <span className="section-label reveal">CONTACT</span>
        <h2 className="contact__heading reveal">Let's Work Together</h2>
        <p className="contact__text reveal">
          I'm open to opportunities where I can contribute my technical skills, continue learning, and help build technology that solves real problems.
        </p>

        <div className="contact__grid reveal">
          <a href="tel:+263712155253" className="contact__card">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <h4>Phone</h4>
            <p>+263 71 215 5253</p>
          </a>
          <a href="mailto:nashelliphone@gmail.com" className="contact__card">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            <h4>Email</h4>
            <p>nashelliphone@gmail.com</p>
          </a>
          <a href="https://www.linkedin.com/in/tadiwanashe-badze-5852b4188/" target="_blank" rel="noreferrer" className="contact__card">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--accent)"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            <h4>LinkedIn</h4>
            <p>Connect with me</p>
          </a>
          <a href="https://github.com/nashell263" target="_blank" rel="noreferrer" className="contact__card">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--accent)"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            <h4>GitHub</h4>
            <p>View my repos</p>
          </a>
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
