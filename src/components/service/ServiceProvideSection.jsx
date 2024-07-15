import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { SiCoinmarketcap } from "react-icons/si";
import { SiTaichigraphics } from "react-icons/si";
import { MdDeveloperMode } from "react-icons/md";

const ServiceProvideSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <>
      <section className="service-provide section-padding">
        <div className="shape-image">
          <img src="assets/img/service/arrow-shape.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <span
              className="wow fadeInUp"
              style={{ animationName: "fadeInUp" }}
            >
              What We Provide{" "}
            </span>
            <h2
              className="wow fadeInUp"
              data-wow-delay=".3s"
              style={{

                animationDelay: "0.3s",
                animationName: "fadeInUp"
              }}
            >
              We always deliver best <br /> service for customer
            </h2>
          </div>
          <div className="row mt-5 lg:mt-0">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp "
              data-wow-delay=".3s"
              style={{
                animationDelay: "0.3s",
                animationName: "fadeInUp"
              }}
            >
              <div className="service-provide-items text-center">
                <div className="icon lg:pt-8 lg:pl-7 pt-6 pl-6">

                  <FaMobileAlt className="flaticon-mobile-development " />
                </div>
                <div className="content">
                  <h5>
                    <Link to="/android-development" onClick={scrollToTop} >
                      Mobile <br />
                      Application
                    </Link>
                  </h5>
                  <p>
                    Lorem ipsum dolor sit am adipiscing elit sed do eiusm incididunt
                    ut loreum ipsum dsu
                  </p>
                  <div className="arrow-icon ml-24 lg:ml-14 mt-5 fs-3">
                    <Link to="/android-development" onClick={scrollToTop} >
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
              style={{

                animationDelay: "0.5s",
                animationName: "fadeInUp"
              }}
            >
              <div className="service-provide-items text-center ">
                <div className="icon lg:pt-8 lg:pl-7 pt-6 pl-6">
                  <SiCoinmarketcap className="flaticon-advertisig-agency" />
                </div>
                <div className="content">
                  <h5>
                    <Link to="/digital-marketing" onClick={scrollToTop} >
                      Digital <br />
                      Marketing
                    </Link>
                  </h5>
                  <p>
                    Lorem ipsum dolor sit am adipiscing elit sed do eiusm incididunt
                    ut loreum ipsum dsu
                  </p>
                  <div className="arrow-icon ml-24 lg:ml-14 mt-5 fs-3">
                    <Link to="/android-development" onClick={scrollToTop} >
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
              style={{

                animationDelay: "0.7s",
                animationName: "fadeInUp"
              }}
            >
              <div className="service-provide-items text-center">
                <div className="icon lg:pt-8 lg:pl-7 pt-6 pl-6">
                  <SiTaichigraphics className="flaticon-curve" />
                </div>
                <div className="content">
                  <h5>
                    <Link to="/graphic-designing" onClick={scrollToTop} >
                      Graphics <br />
                      Designing
                    </Link>
                  </h5>
                  <p>
                    Lorem ipsum dolor sit am adipiscing elit sed do eiusm incididunt
                    ut loreum ipsum dsu
                  </p>
                  <div className="arrow-icon ml-24 lg:ml-14 mt-5 fs-3">
                    <Link to="/android-development" onClick={scrollToTop} >
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".9s"
              style={{
                animationDelay: "0.9s",
                animationName: "fadeInUp"
              }}
            >
              <div className="service-provide-items text-center">
                <div className="icon lg:pt-8 lg:pl-7 pt-6 pl-6">
                  <MdDeveloperMode className="flaticon-advertisig-agency" />
                </div>
                <div className="content">
                  <h5>
                    <Link to="/web-development" onClick={scrollToTop} >
                      Website <br />
                      Development
                    </Link>
                  </h5>
                  <p>
                    Lorem ipsum dolor sit am adipiscing elit sed do eiusm incididunt
                    ut loreum ipsum dsu
                  </p>
                  <div className="arrow-icon ml-24 lg:ml-14 mt-5 fs-3">
                    <Link to="/android-development" onClick={scrollToTop} >
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default ServiceProvideSection