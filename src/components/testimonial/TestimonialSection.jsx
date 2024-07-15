import React from 'react';

import client01 from '../../assets/img/client/01.webp';
import client02 from '../../assets/img/client/02.webp';
import client03 from '../../assets/img/client/03.webp';
import client04 from '../../assets/img/client/04.webp';
import client05 from '../../assets/img/client/05.webp';
import client06 from '../../assets/img/client/06.webp';
import { BsFeather } from "react-icons/bs";

const TestimonialSection = () => {
  return (
    <>
      <section className="testimonial-section section-padding fix section-bg">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
              style={{

                animationDelay: "0.3s",
                animationName: "fadeInUp"
              }}
            >
              <div className="testimonial-card-items">
                <div
                  className="testimonial-image bg-cover"
                  style={{ backgroundImage: `url(${client01})` }}
                />
                <div className="icon">
                  {/* <i  /> */}
                  <BsFeather className="flaticon-quotation " />
                </div>
                <div className="testimonial-content">
                  <p>
                    Bring to the table win-win strategies to ensure proactive
                    domination. At the end of the day going forward normal that has
                    evolved from operational X is on the
                  </p>
                  <h4>Janes Cooper</h4>
                  <span>Designer</span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
              style={{

                animationDelay: "0.5s",
                animationName: "fadeInUp"
              }}
            >
              <div className="testimonial-card-items ">
                <div
                  className="testimonial-image bg-cover"
                  style={{ backgroundImage: `url(${client02})` }}
                />
                <div className="icon">
                  {/* <i  /> */}
                  <BsFeather className="flaticon-quotation " />
                </div>
                <div className="testimonial-content">
                  <p>
                    Bring to the table win-win strategies to ensure proactive
                    domination. At the end of the day going forward normal that has
                    evolved from operational X is on the
                  </p>
                  <h4>Jack Daniel</h4>
                  <span>Designer</span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
              style={{

                animationDelay: "0.7s",
                animationName: "fadeInUp"
              }}
            >
              <div className="testimonial-card-items">
                <div
                  className="testimonial-image bg-cover"
                  style={{ backgroundImage: `url(${client03})` }}
                />
                <div className="icon">
                  {/* <i  /> */}
                  <BsFeather className="flaticon-quotation " />
                </div>
                <div className="testimonial-content">
                  <p>
                    Bring to the table win-win strategies to ensure proactive
                    domination. At the end of the day going forward normal that has
                    evolved from operational X is on the
                  </p>
                  <h4>Ava Olivia</h4>
                  <span>Designer</span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
              style={{

                animationDelay: "0.3s",
                animationName: "fadeInUp"
              }}
            >
              <div className="testimonial-card-items">
                <div
                  className="testimonial-image bg-cover"
                  style={{ backgroundImage: `url(${client04})` }}
                />
                <div className="icon">
                  {/* <i  /> */}
                  <BsFeather className="flaticon-quotation " />
                </div>
                <div className="testimonial-content">
                  <p>
                    Bring to the table win-win strategies to ensure proactive
                    domination. At the end of the day going forward normal that has
                    evolved from operational X is on the
                  </p>
                  <h4>Liam Noah</h4>
                  <span>Designer</span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
              style={{

                animationDelay: "0.5s",
                animationName: "fadeInUp"
              }}
            >
              <div className="testimonial-card-items">
                <div
                  className="testimonial-image bg-cover"
                  style={{ backgroundImage: `url(${client05})` }}
                />
                <div className="icon">
                  {/* <i  /> */}
                  <BsFeather className="flaticon-quotation " />
                </div>
                <div className="testimonial-content">
                  <p>
                    Bring to the table win-win strategies to ensure proactive
                    domination. At the end of the day going forward normal that has
                    evolved from operational X is on the
                  </p>
                  <h4>Salman Islam</h4>
                  <span>Designer</span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
              style={{

                animationDelay: "0.7s",
                animationName: "fadeInUp"
              }}
            >
              <div className="testimonial-card-items">
                <div
                  className="testimonial-image bg-cover"
                  style={{ backgroundImage: `url(${client06})` }}
                />
                <div className="icon">
                  {/* <i  /> */}
                  <BsFeather className="flaticon-quotation " />
                </div>
                <div className="testimonial-content">
                  <p>
                    Bring to the table win-win strategies to ensure proactive
                    domination. At the end of the day going forward normal that has
                    evolved from operational X is on the
                  </p>
                  <h4>Lucas Owen</h4>
                  <span>Designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;
