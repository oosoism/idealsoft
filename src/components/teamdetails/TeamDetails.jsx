import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

const TeamDetails = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
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
                      <h4>Services</h4>
                    </div>
                    <div className="service-category">
                      <Link
                        to="/services"
                        className="active teamblog text-black"
                        onClick={scrollToTop}
                      >
                        Our Services &nbsp;
                        <FaArrowRightFromBracket className="inline position-absolute right-2 top-6" />
                      </Link>
                      <Link
                        to="/web-development"
                        className="teamblog text-black"
                        onClick={scrollToTop}
                      >
                        Web Development &nbsp;
                        <FaArrowRightFromBracket className="inline position-absolute right-2 top-6" />
                      </Link>
                      <Link
                        to="/influencer-marketing"
                        className="teamblog text-black"
                        onClick={scrollToTop}
                      >
                        Influencer Marketing &nbsp;
                        <FaArrowRightFromBracket className="inline position-absolute right-2 top-6" />
                      </Link>
                      <Link
                        to="/digital-marketing"
                        className="teamblog text-black"
                        onClick={scrollToTop}
                      >
                        Digital Marketing &nbsp;
                        <FaArrowRightFromBracket className="inline position-absolute right-2 top-6" />
                      </Link>
                      <Link
                        to="/graphic-design"
                        className="teamblog text-black"
                        onClick={scrollToTop}
                      >
                        Graphic Design &nbsp;
                        <FaArrowRightFromBracket className="inline position-absolute right-2 top-6" />
                      </Link>
                      <Link
                        to="/mobile-solutions"
                        className="teamblog text-black"
                        onClick={scrollToTop}
                      >
                        Mobile Solutions &nbsp;
                        <FaArrowRightFromBracket className="inline position-absolute right-2 top-6" />
                      </Link>
                    </div>
                  </div>
                  <div
                    className="service-post bg-cover mb-4"
                    style={{
                      backgroundImage:
                        'url("./src/assets/img/services/details.webp")',
                    }}
                  >
                    <div className="content">
                      <h3>Need a Custom Solution?</h3>
                      <Link
                        to="/contact"
                        onClick={scrollToTop}
                        className="theme-btn bg-white"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                  <div className="service-sidebar-widget mb-4">
                    <div className="service-info">
                      <div className="icon">
                        <i class="fa-solid fa-phone-volume"></i>
                      </div>
                      <div className="content side_content">
                        <p>Contact Us Anytime</p>
                        <h5>
                          <Link to="tel:+919653820555">+91 9653820555</Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-8 order-1 order-md-2">
                <div className="service-details-content">
                  <h2>Premier Web Design Services</h2>
                  <p>
                    Our agency is committed to fostering a supportive and
                    growth-oriented environment for our team, ensuring we remain
                    a top choice in our industry. With our unique blend of
                    expertise in engineering, construction, and design, we're
                    poised to deliver exceptional results.
                  </p>
                  <div
                    className="details-image bg-cover mt-4"
                    style={{
                      backgroundImage:
                        'url("./src/assets/img/services/details.webp")',
                    }}
                  />
                  <h3 className="details-title">Cloud Services</h3>
                  <p>
                    Our cloud services are designed to enhance your business
                    operations, providing scalable and secure solutions that
                    adapt to your needs. From data storage to application
                    hosting, our cloud offerings are tailored to drive
                    efficiency and innovation.
                  </p>
                  <div className="service-details-list mt-5">
                    <div className="row g-4 justify-content-between">
                      <div className="col-lg-4">
                        <div className="goal-list">
                          <h3 className="details-title">Our Objectives</h3>
                          <ul>
                            <li>
                              <GiCheckMark className="inline mr-2 text-green-400" />
                              Enhance lead generation through targeted campaigns
                            </li>
                            <li>
                              <GiCheckMark className="inline mr-2 text-green-400" />
                              Optimize content marketing for better engagement
                            </li>
                            <li>
                              <GiCheckMark className="inline mr-2 text-green-400" />
                              Improve website performance and user experience
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <div className="challenges-list">
                          <h3 className="details-title">
                            Overcoming Challenges
                          </h3>
                          <p>
                            Our strategic approach to digital marketing involves
                            identifying and addressing the unique challenges
                            faced by your business. We leverage data-driven
                            insights to craft solutions that not only meet but
                            exceed your goals.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="faq-content style-3">
                    <div className="faq-accordion">
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                          <AccordionTrigger className="text-lg font-semibold text-gray-700 text-left">
                            How can we improve the lead generation process?
                          </AccordionTrigger>
                          <AccordionContent>
                            The main elements of a marketing strategy are your
                            target audience goals and objectives and the tasks
                            you will employ to actively market to achieve the
                            goals.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                          <AccordionTrigger className="text-lg font-semibold text-gray-700 text-left">
                            What is content marketing strategy?
                          </AccordionTrigger>
                          <AccordionContent>
                            The main elements of a marketing strategy are your
                            target audience goals and objectives and the tasks
                            you will employ to actively market to achieve the
                            goals.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                          <AccordionTrigger className="text-lg font-semibold text-gray-700 text-left">
                            What is the purpose of digital agency?
                          </AccordionTrigger>
                          <AccordionContent>
                            The main elements of a marketing strategy are your
                            target audience goals and objectives and the tasks
                            you will employ to actively market to achieve the
                            goals.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                          <AccordionTrigger className="text-lg font-semibold text-gray-700 text-left">
                            Can I succeed on this platform with my experience?
                          </AccordionTrigger>
                          <AccordionContent>
                            The main elements of a marketing strategy are your
                            target audience goals and objectives and the tasks
                            you will employ to actively market to achieve the
                            goals.
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
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

export default TeamDetails;
