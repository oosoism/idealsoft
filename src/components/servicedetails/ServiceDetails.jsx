import React from 'react';
import { Link } from 'react-router-dom';
import serviceImage from '../../assets/img/services/04.webp';
import detailsImage from '../../assets/img/services/details.webp';

const Serviceandro = () => {
  return (
    <>
      <section className="Service-details fix section-padding">
        <div className="container">
          <div className="service-details-wrapper">
            <div className="row g-5">
              <div className="col-12 col-lg-4 order-2 order-md-1">
                <div className="main-sidebar">
                  <div className="service-sidebar-widget mb-4">
                    <div className="wid-title">
                      <h4>Categories</h4>
                    </div>
                    <div className="service-category">
                    <Link
                      to="/service"
                      className="active teamblog text-black"
                    >
                      Our Service &nbsp;
                      {/* <FaArrowRightLong /> */}
                      <i class="fa-solid fa-arrow-right-long"></i>
                    </Link>
                    <Link
                      to="/web-development"
                      className="teamblog text-black"
                    >
                      Web Development &nbsp;
                      {/* <FaArrowRightLong /> */}
                      <i class="fa-solid fa-arrow-right-long"></i>
                    </Link>
                    <Link
                      to="/influencer-marketing"
                      className="teamblog text-black"
                    >
                      Influencer Marketing &nbsp;
                      {/* <FaArrowRightLong /> */}
                      <i class="fa-solid fa-arrow-right-long"></i>
                    </Link>
                    <Link
                      to="/digital-marketing"
                      className="teamblog text-black"
                    >
                      Digital Marketing &nbsp;
                      {/* <FaArrowRightLong /> */}
                      <i class="fa-solid fa-arrow-right-long"></i>
                    </Link>
                    <Link
                      to="/graphic-designing"
                      className="teamblog text-black"
                    >
                      Graphic Designing &nbsp;
                      {/* <FaArrowRightLong /> */}
                      <i class="fa-solid fa-arrow-right-long"></i>
                    </Link>
                    <Link
                      to="/android-development"
                      className="teamblog text-black"
                    >
                      Android Development &nbsp;
                      {/* <FaArrowRightLong /> */}
                      <i class="fa-solid fa-arrow-right-long"></i>
                    </Link>
                  </div>
                  </div>
                  <div className="service-post bg-cover mb-4" style={{ backgroundImage: `url(${serviceImage})` }}>
                    <div className="content">
                      <h3>
                        Need Any Types <br /> of Service <br /> from us
                      </h3>
                      <Link to="/contact" className="theme-btn bg-white">
                        FIND SOLUTION
                      </Link>
                    </div>
                  </div>
                  <div className="service-sidebar-widget mb-4">
                    <div className="service-info">
                      <div className="icon">
                        <i className="fa-solid fa-phone-volume"></i>
                      </div>
                      <div className="content">
                        <p>You can call anytime</p>
                        <h5 className="mob">
                          Free{' '}
                          <Link to="tel:+997868765">+(91) 96538 20555</Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-8 order-1 order-md-2">
                <div className="service-details-content">
                  <h2>
                    World best web <br /> design service provider.
                  </h2>
                  <p>
                    We embrace holistic development and support for employees
                    with the aim of being a first-choice employer within our
                    sectors. Through a unique combination of engineering,
                    construction and design disciplines and expertise.
                  </p>
                  <div
                    className="details-image bg-cover mt-4"
                    style={{ backgroundImage: `url(${detailsImage})` }}
                  />
                  <h3 className="details-title">Cloud Service</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas varius tortor nibh, sit amet tempor nibh finibus
                    et. Aenean eu enim justo. Vestibulum aliquam hendrerit
                    molestie. Mauris malesuada nisi sit amet augue accumsan
                    tincidunt. Maecenas tincidunt, velit ac porttitor pulvinar,
                    tortor eros facilisis libero, vitae commodo nunc quam et
                    ligula
                  </p>
                  <div className="service-details-list mt-5">
                    <div className="row g-4 justify-content-between">
                      <div className="col-lg-4">
                        <div className="goal-list">
                          <h3 className="details-title">Our Goals</h3>
                          <ul>
                            <li>
                              <i className="fa-solid fa-check"></i>
                              Aliquam accumsan et ante id
                            </li>
                            <li>
                              <i className="fa-solid fa-check"></i>
                              Lorem ipsum dolor sit dgdr
                            </li>
                            <li>
                              <i className="fa-solid fa-check"></i>
                              Maecenas varius tortor
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <div className="challenges-list">
                          <h3 className="details-title">The Challenges</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Maecenas varius tortor nibh, sit amet tempor
                            finibus et. Aenean eu enim justo. Vestibulum
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="faq-content style-3">
                    <div className="faq-accordion">
                      <div className="accordion" id="accordion">
                        <div
                          className="accordion-item wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <h5 className="accordion-header">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faq1"
                              aria-expanded="false"
                              aria-controls="faq1"
                            >
                              I'm a total beginner. Can I still follow along?
                            </button>
                          </h5>
                          <div
                            id="faq1"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordion"
                          >
                            <div className="accordion-body">
                              Your applicant may have limited help desk
                              wexperience. In that case, look for applicants who
                              are motivated to grow and have some transferable
                              nibh finibus et. Aenean eu enim justo. Vestibulum
                              aliquam hendrerit moles accumsan
                            </div>
                          </div>
                        </div>
                        <div
                          className="accordion-item wow fadeInUp"
                          data-wow-delay=".5s"
                        >
                          <h5 className="accordion-header">
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faq2"
                              aria-expanded="true"
                              aria-controls="faq2"
                            >
                              Which technical skills would you improve?
                            </button>
                          </h5>
                          <div
                            id="faq2"
                            className="accordion-collapse collapse show"
                            data-bs-parent="#accordion"
                          >
                            <div className="accordion-body">
                              Your applicant may have limited help desk
                              wexperience. In that case, look for applicants who
                              are motivated to grow and have some transferable
                              nibh finibus et. Aenean eu enim justo. Vestibulum
                              aliquam hendrerit moles accumsan
                            </div>
                          </div>
                        </div>
                        <div
                          className="accordion-item wow fadeInUp"
                          data-wow-delay=".7s"
                        >
                          <h5 className="accordion-header">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faq3"
                              aria-expanded="false"
                              aria-controls="faq3"
                            >
                              What do Logical Drives do?
                            </button>
                          </h5>
                          <div
                            id="faq3"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordion"
                          >
                            <div className="accordion-body">
                              Your applicant may have limited help desk
                              wexperience. In that case, look for applicants who
                              are motivated to grow and have some transferable
                              nibh finibus et. Aenean eu enim justo. Vestibulum
                              aliquam hendrerit moles accumsan
                            </div>
                          </div>
                        </div>
                        <div
                          className="accordion-item wow fadeInUp"
                          data-wow-delay=".8s"
                        >
                          <h5 className="accordion-header">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faq4"
                              aria-expanded="false"
                              aria-controls="faq4"
                            >
                              What about our safety measures ?
                            </button>
                          </h5>
                          <div
                            id="faq4"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordion"
                          >
                            <div className="accordion-body">
                              Your applicant may have limited help desk
                              wexperience. In that case, look for applicants who
                              are motivated to grow and have some transferable
                              nibh finibus et. Aenean eu enim justo. Vestibulum
                              aliquam hendrerit moles accumsan
                            </div>
                          </div>
                        </div>
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

export default Serviceandro;
