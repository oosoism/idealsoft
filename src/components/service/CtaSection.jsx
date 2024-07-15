import React from 'react';
import videoBg from '../../assets/img/cta-banner/video-bg.webp';
import { Link } from 'react-router-dom';
import { FaPlayCircle } from "react-icons/fa";

const CtaSection = () => {
  return (
    <>
      <section
        className="cta-section-2 style-2 fix section-padding bg-cover"
        style={{ backgroundImage: `url(${videoBg})` }}
      >
        <div className="container">
          <div className="cta-wrapper-2">
            <div className="cta-content">
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Watch the video and see what it feels <br /> like to work with us
              </h2>
              <Link
                to="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                className="video-icon video-popup wow fadeInUp "
                data-wow-delay=".5s"
              >
                <FaPlayCircle className="flaticon-play-button fs-1 lg:ml-12 lg:mt-12 ml-10 mt-8" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaSection;
