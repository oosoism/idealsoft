import React from 'react';
import clientLeftShape from '../../assets/img/client/left-shape.webp';
import clientRightShape from '../../assets/img/client/right-shape.webp';
import clientImage01 from '../../assets/img/client/01.webp';
import clientImage02 from '../../assets/img/client/02.webp';
import clientImage03 from '../../assets/img/client/03.webp';

const TestimonialSection = () => {
  return (
    <section className="testimonial-section section-padding fix section-bg">
      <div className="left-shape">
        <img src={clientLeftShape} alt="shape-img" />
      </div>
      <div className="right-shape">
        <img src={clientRightShape} alt="shape-img" />
      </div>
      <div className="container">
        <div className="section-title text-center">
          <span className="wow fadeInUp">Success stories</span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Why customers love to <br /> working with us
          </h2>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="testimonial-card-items">
              <div className="testimonial-image bg-cover" style={{ backgroundImage: `url(${clientImage01})` }} />
              <div className="icon">
                <i className="flaticon-quotation" />
              </div>
              <div className="testimonial-content">
                <p>
                  Bring to the table win-win strategies to ensure proactive domination. At the end of the day going forward normal that has evolved from operational X is on the
                </p>
                <h4>Janes Cooper</h4>
                <span>Designer</span>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
            <div className="testimonial-card-items active">
              <div className="testimonial-image bg-cover" style={{ backgroundImage: `url(${clientImage02})` }} />
              <div className="icon">
                <i className="flaticon-quotation" />
              </div>
              <div className="testimonial-content">
                <p>
                  Bring to the table win-win strategies to ensure proactive domination. At the end of the day going forward normal that has evolved from operational X is on the
                </p>
                <h4>Jack Daniel</h4>
                <span>Designer</span>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
            <div className="testimonial-card-items">
              <div className="testimonial-image bg-cover" style={{ backgroundImage: `url(${clientImage03})` }} />
              <div className="icon">
                <i className="flaticon-quotation" />
              </div>
              <div className="testimonial-content">
                <p>
                  Bring to the table win-win strategies to ensure proactive domination. At the end of the day going forward normal that has evolved from operational X is on the
                </p>
                <h4>Ava Olivia</h4>
                <span>Designer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
