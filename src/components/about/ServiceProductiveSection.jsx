import React from 'react';
import circleShape from '../../assets/img/circle-shape.webp';
import serviceImage from '../../assets/img/services/04.webp';
import { Link } from 'react-router-dom';
import { GrDeliver } from "react-icons/gr";
import { GiReceiveMoney } from "react-icons/gi";

const ServiceProductiveSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="service-productive fix section-padding">
      <div className="service-productive-wrapper pt-0">
        <div className="circle-shape">
          <img src={circleShape} alt="shape-img" className="text-circle" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="productive-image-2">
                <img src={serviceImage} alt="img" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 mt-5 mt-xl-0">
              <div className="productive-content">
                <div className="section-title wow fadeInUp" data-wow-delay=".3s">
                  <h2>
                    We made things easier <br /> for your business
                  </h2>
                </div>
                <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  Bring to the table win-win survival strategies to ensure proactive
                  domination. At the end of the day going forward, a new normal that
                  has evolved from operational X is on the runway
                </p>
                <div className="icon-items-area">
                  <div className="icon-item d-flex align-items-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="icon">
                      <GrDeliver className="flaticon-light-bulb" />
                    </div>
                    <div className="content">
                      <h5>
                        Deliver <br /> Awesome Idea
                      </h5>
                    </div>
                  </div>
                  <div className="icon-item d-flex align-items-center active wow fadeInUp" data-wow-delay=".5s">
                    <div className="icon">
                      <GiReceiveMoney className="flaticon-review" />
                    </div>
                    <div className="content">
                      <h5>
                        Moneyback <br /> Guarantee
                      </h5>
                    </div>
                  </div>
                </div>
                <h6 className="wow fadeInUp" data-wow-delay=".7s">
                  We’re committed to deliver high quality productive service
                </h6>
                <div className="author-items wow fadeInUp" data-wow-delay=".9s">
                  <div className="about-button">
                    <Link to="/contact" onClick={scrollToTop} className="theme-btn">
                      Discover More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceProductiveSection;
