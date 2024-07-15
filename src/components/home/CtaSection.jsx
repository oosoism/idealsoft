import React from 'react';
import ctaBannerImage from '../../assets/img/cta-banner/01.webp';
import shapeImage from '../../assets/img/layer-shape-2.webp';
import ctaImage from '../../assets/img/cta.webp';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Cta Section Start */}
      <section
        className="cta-section-2 fix section-padding background-image"
        style={{ backgroundImage: `url(${ctaBannerImage})` }}
      >
        <div className="shape-image">
          <img src={shapeImage} alt="shape-img" />
        </div>
        <div className="container">
          <div className="cta-wrapper-4">
            <div className="cta-content">
              <h2 className="wow fadeInUp text-1xl md:text-4xl lg:text-5xl" data-wow-delay=".3s">
                Better digital agency solution &amp; <br /> service at your
                fingertips
              </h2>
              <div className="cta-button mt-4 wow fadeInUp" data-wow-delay=".5s">
                <Link
                  to="/contact"
                  onClick={scrollToTop}
                  className="theme-btn hover-white"
                >
                  DISCOVER MORE
                </Link>
              </div>
            </div>
            <div
              className="cta-image wow fadeInUp"
              data-wow-delay=".4s"
            >
              <img src={ctaImage} alt="img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaSection;
