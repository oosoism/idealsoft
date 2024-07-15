import React from "react";
import { Link } from "react-router-dom";
import { RiAdminFill } from "react-icons/ri";
import { BiLogoUnity } from "react-icons/bi";

const WebsiteCheckingSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="website-checking section-padding">
        <div className="website-checking-wrapper">
          <div className="container">
            <div className="section-title text-center">
              <span className="text-white wow fadeInUp text-1xl md:text-4xl lg:text-5xl">
                Ready to buildup
              </span>
              <h2
                className="text-white wow fadeInUp text-1xl md:text-4xl lg:text-5xl"
                data-wow-delay=".3s"
              >
                Get your free quote today
              </h2>
            </div>
            <div className="website-checking-wrapper">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="checking-area">
                    <div
                      className="check-items d-flex align-items-center wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <div className="check-input">
                        <input type="text" id="text" placeholder="Web URL" />
                      </div>
                      <div className="check-input">
                        <input
                          type="email"
                          id="email"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <button
                      className="theme-btn header-color-2 wow fadeInUp"
                      data-wow-delay=".7s"
                      type="submit"
                    >
                      CHECK NOW
                    </button>
                  </div>
                  <h6 className="wow fadeInUp" data-wow-delay=".9s">
                    Please check our{" "}
                    <Link to="/Privacy-Policy" onClick={scrollToTop}>
                      Privacy Policy
                    </Link>{" "}
                    to find out how we manage and protect your data.
                  </h6>
                </div>
              </div>
              <div className="icon-area">
                <div className="row g-4">
                  <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                    <div className="icon-items">
                      <div className="icon">
                        <RiAdminFill className="flaticon-digital-marketing" />
                      </div>
                      <div className="content">
                        <h5>Expertise Redefined</h5>
                        <p>
                          Our agency is synonymous with professionalism. With a
                          team of seasoned experts, we deliver strategic
                          marketing solutions that drive growth and exceed
                          expectations. Our commitment to excellence ensures
                          that every campaign we undertake is executed with
                          precision and finesse.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                    <div className="icon-items style-2">
                      <div className="icon">
                        <BiLogoUnity className="flaticon-innovative-strategy" />
                      </div>
                      <div className="content">
                        <h5>Innovation at Its Core</h5>
                        <p>
                          We pride ourselves on our unique approach to digital
                          marketing. By combining cutting-edge technology with
                          creative thinking, we craft campaigns that stand out
                          in the crowded online landscape. Our innovative
                          methods are designed to engage, inspire, and convert
                          your target audience.
                        </p>
                      </div>
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

export default WebsiteCheckingSection;
