import React from 'react';
import growthImage from '../../assets/img/growth/01.webp';
import shapeImage from '../../assets/img/growth/shape.webp';

const GrowthSection = () => {
  return (
    <section className="growth-section fix">
      <div className="container">
        <div className="growth-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="growth-content">
                <div className="section-title">
                  <span className="wow fadeInUp" style={{ animationName: "fadeInUp" }}>
                    Our recent work
                  </span>
                  <h2
                    className="wow fadeInUp"
                    data-wow-delay=".3s"
                    style={{ animationDelay: "0.3s", animationName: "fadeInUp" }}
                  >
                    Sales growth
                  </h2>
                </div>
                <p
                  className="mt-4 mt-md-0 wow fadeInUp"
                  data-wow-delay=".5s"
                  style={{ animationDelay: "0.5s", animationName: "fadeInUp" }}
                >
                  Our clients describe us as a product team which creates amazing{" "}
                  <strong className="head-color">UI/UX</strong> experiences, by
                  crafting top-notch user experience of funny the century rather.,
                </p>
                <div
                  className="circle-progress-bar-wrapper wow fadeInUp"
                  data-wow-delay=".7s"
                  style={{ animationDelay: "0.7s", animationName: "fadeInUp" }}
                >
                  <div className="single-circle-bar">
                    <div
                      className="circle-bar"
                      data-percent={65}
                      data-duration={1000}
                    >
                      <div
                        className="background"
                        style={{ backgroundColor: "rgb(179, 206, 246)" }}
                      />
                      <div
                        className="rotate"
                        style={{
                          backgroundColor: "rgb(75, 134, 219)",
                          transition: "transform 1000ms linear 0s",
                          transform: "rotate(234deg)"
                        }}
                      />
                      <div
                        className="left"
                        style={{
                          backgroundColor: "rgb(179, 206, 246)",
                          animation:
                            "769.231ms step-start 0s 1 normal none running toggle",
                          opacity: 0
                        }}
                      />
                      <div
                        className="right"
                        style={{
                          backgroundColor: "rgb(75, 134, 219)",
                          animation:
                            "769.231ms step-end 0s 1 normal none running toggle",
                          opacity: 1
                        }}
                      />
                      <div className="">
                        <span>65%</span>
                      </div>
                    </div>
                    <div className="content">
                      <h5>
                        Increased by <br /> the last 2 years
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 mt-4 mt-lg-0">
              <div
                className="growth-image bg-cover wow fadeInUp"
                data-wow-delay=".9s"
                style={{ backgroundImage: `url(${growthImage})`, animationDelay: "0.9s", animationName: "fadeInUp" }}
              >
                <div className="shape-image">
                  <img src={shapeImage} alt="shape-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GrowthSection;
