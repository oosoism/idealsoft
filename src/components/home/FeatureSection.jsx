import React from 'react';
import featureImage from '../../assets/img/choose/feature.webp';
import { Link } from 'react-router-dom';

const FeatureSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Feature Section Start */}
      <section className="feature-section fix section-padding pt-0">
        <div className="container">
          <div className="feature-wrapper">
            <div className="row justify-content-between">
              <div className="col-xl-5 col-lg-6">
                <div className="feature-content">
                  <div className="section-title">
                    <span className="wow fadeInUp ">
                      We are IdealSoft digital agency
                    </span>
                    <h2 className="wow fadeInUp text-3xl md:text-4xl lg:text-5xl" data-wow-delay=".3s">
                      Great digital <br /> agency since 2015
                    </h2>
                  </div>
                  <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  Welcome to IdealSoft, your trusted partner in digital marketing since 2015. We specialize in merging innovative strategies with the core values of dedication and trust. Our mission is to elevate your brand by crafting compelling stories that captivate and inspire. At IdealSoft, we are committed to your success and growth.                  </p>
                  <div
                    className="feature-button wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <Link to="/about" onClick={scrollToTop} className="theme-btn">
                      DISCOVER MORE
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 mt-5 mt-lg-0 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="feature-image">
                  <img src={featureImage} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureSection;
