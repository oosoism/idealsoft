import React from 'react';
import bgImage from '../../assets/img/cta-banner/02.webp';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  };
  return (
    <>
      <section
        className="cta-section-3 fix section-padding bg-cover bg-cta"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="container">
          <div className="cta-wrapper-3">
            <h2
              className="text-white wow fadeInUp"
              data-wow-delay=".3s"
            >
              Make your website unforgettable <br /> join the azent community
            </h2>
            <Link
              to="/contact" onClick={scrollToTop}
              className="theme-btn hover-white wow fadeInUp"
              data-wow-delay=".5s"
            >
              JOIN TO DOWNLOAD
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaSection;
