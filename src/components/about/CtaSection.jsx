import React from 'react';
import ctaBannerImg from '../../assets/img/cta-banner/01.webp';
import layerShapeImg from '../../assets/img/layer-shape-4.webp';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section
      className="cta-section-2 fix section-padding background-image"
      style={{ backgroundImage: `url(${ctaBannerImg})` }}
    >
      <div className="shape-image">
        <img src={layerShapeImg} alt="shape-img" />
      </div>
      <div className="container">
        <div className="cta-wrapper-2">
          <div className="cta-content">
            <h2
              className="wow fadeInUp text-3xl md:text-4xl lg:text-5xl "
              data-wow-delay=".3s"
              style={{
                animationDelay: "0.3s",
                animationName: "fadeInUp"
              }}
            >
              Watch the video and see what it feels <br /> like to work with us
            </h2>
            <div
              className="cta-button mt-5 wow fadeInUp"
              data-wow-delay=".5s"
              style={{
                animationDelay: "0.5s",
                animationName: "fadeInUp"
              }}
            >
              <Link to="/contact" onClick={scrollToTop} className="theme-btn hover-white">
                DISCOVER MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
