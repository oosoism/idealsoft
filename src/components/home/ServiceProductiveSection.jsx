import React from "react";
import circleShapeImage from "../../assets/img/circle-shape.webp";
import serviceImage from "../../assets/img/services/04.webp";
import { Link } from "react-router-dom";
import { GrDeliver } from "react-icons/gr";
import { GiReceiveMoney } from "react-icons/gi";

const ServiceProductiveSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="service-productive fix section-padding">
        <div className="service-productive-wrapper style-2">
          <div className="circle-shape">
            <img
              src={circleShapeImage}
              alt="shape-img"
              className="text-circle"
            />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className="productive-image-2">
                  <img src={serviceImage} alt="img" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 mt-5 mt-xl-0">
                <div className="productive-content">
                  <div
                    className="section-title wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl">
                      Streamlining Success for Your Business
                    </h2>
                  </div>
                  <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    Our agency specializes in crafting strategies that simplify
                    your business operations, enhancing efficiency and driving
                    growth. We're dedicated to providing proactive solutions
                    that adapt to the evolving needs of your enterprise.
                  </p>
                  <div className="icon-items-area">
                    <div
                      className="icon-item d-flex align-items-center wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <div className="icon">
                        <GrDeliver className="flaticon-creative-ideas" />
                      </div>
                      <div className="content">
                        <h5>Innovative Solutions</h5>
                      </div>
                    </div>
                    <div
                      className="icon-item d-flex align-items-center active wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <div className="icon">
                        <GiReceiveMoney className="flaticon-customer-satisfaction" />
                      </div>
                      <div className="content">
                        <h5>Satisfaction Guaranteed</h5>
                      </div>
                    </div>
                  </div>
                  <h6 className="wow fadeInUp" data-wow-delay=".7s">
                    Our commitment to excellence ensures that you receive
                    top-tier, results-driven service.
                  </h6>
                  <div
                    className="author-items wow fadeInUp"
                    data-wow-delay=".9s"
                  >
                    <div className="about-button">
                      <Link
                        to="/about"
                        onClick={scrollToTop}
                        className="theme-btn"
                      >
                        Learn About Our Process
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceProductiveSection;
