import './Certifications.css'
import ciscoCert from '../assets/cisco-cert.jpg'
import nfcCert from '../assets/nfc-cert.jpg'

const Certifications = () => {
  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <h2 className="section-label reveal">QUALIFICATIONS</h2>
        <h3 className="section-title reveal">
          Licenses & <span className="text-accent">Certifications.</span>
        </h3>

        <div className="certs__grid reveal">
          <div className="cert__card">
            <div className="cert__image-container">
              <img src={ciscoCert} alt="Introduction to Cybersecurity Certificate" className="cert__image" />
            </div>
            <div className="cert__content">
              <div className="cert__header">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" 
                  alt="Cisco Logo" 
                  className="cert__company-logo" 
                />
                <span className="cert__date">Issued Sep 2026</span>
              </div>
              
              <h4 className="cert__title">Introduction to Cybersecurity</h4>
              <p className="cert__issuer">Cisco Networking Academy</p>
              
              <div className="cert__details">
                <p><strong>Credential ID:</strong> 75da697c-1383-4132-8562-424f0d661d36</p>
              </div>

              <a 
                href="https://www.credly.com/badges/6eae317b-257b-407c-bcaf-190d5427e956/public_url" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-outline cert__btn"
              >
                Verify Credential
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
              </a>
            </div>
          </div>

          <div className="cert__card">
            <div className="cert__image-container">
              <img src={nfcCert} alt="National Foundation Certificate" className="cert__image" />
            </div>
            <div className="cert__content">
              <div className="cert__header">
                <h4 style={{ fontSize: '16px', fontWeight: '800', margin: 0, opacity: 0.9 }}>HEXCO Zimbabwe</h4>
                <span className="cert__date">Issued Dec 2019</span>
              </div>
              
              <h4 className="cert__title">National Foundation Certificate</h4>
              <p className="cert__issuer">Computer Operations and Packages</p>
              
              <div className="cert__details">
                <p><strong>Credential No:</strong> 147677</p>
              </div>

              <span className="btn btn-outline cert__btn disabled" style={{opacity: 0.5, cursor: 'not-allowed'}}>
                Verified
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications
