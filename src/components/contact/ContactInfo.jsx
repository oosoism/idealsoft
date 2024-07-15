import React from 'react';
import { Link } from 'react-router-dom';

const ContactInfo = () => {
  return (
    <>
      <section className="contact-info-section section-padding fix">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="map-items">
                <div className="googpemap">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.813631777129!2d75.70904807578033!3d26.877661661595315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db50976c8a077%3A0xb15e264284e31cd5!2sIdealSoft!5e0!3m2!1sen!2sin!4v1717151140548!5m2!1sen!2sin"
                    width={600}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 mt-5 mt-lg-0">
              <div className="contact-info-content">
                <div className="section-title wow fadeInUp" data-wow-delay=".3s">
                  <h2>Get in Touch</h2>
                </div>
                <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  A vast majority of the app marketers mainly concent post-launch app
                  marketing techniques and measures while completely missing
                  pre-launch campaign. This prevents the
                </p>
                <div className="info-list">
                  <h3 className="wow fadeInUp" data-wow-delay=".3s">
                    Contact Info
                  </h3>
                  <div className="info-items mb-3 wow fadeInUp" data-wow-delay=".5s">
                    <h5>Address</h5>
                    <p>
                      Kesari Chand Choudhary Nagar, Plot number A-1, Ajmer Rd, behind
                      SHIV TAMPLE, KCC Nagar, Heerapura, Jaipur, Rajasthan 302021
                    </p>
                  </div>
                  <div className="info-items mb-3 wow fadeInUp" data-wow-delay=".7s">
                    <h5>Phone</h5>
                    <Link to="tel:+919653820555">+91 96538 20555</Link>
                  </div>
                  <div className="info-items wow fadeInUp" data-wow-delay=".9s">
                    <h5>Email</h5>
                    <Link to="mailto:connect@idealsoft.com">connect@idealsoft.com</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactInfo;
