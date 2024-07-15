import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

const ServiceWhats = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top:0,
          behavior:'smooth'
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
                    <h4>Catagories</h4>
                  </div>
                  <div className="service-category">
                    <Link
                      to="/it-service"
                      className="teamblog text-black" onClick={scrollToTop}
                    >
                      IT Department &nbsp;
                     <FaArrowRightFromBracket className='inline position-absolute right-2 top-6' />
                    </Link>
                    <Link
                      to="/web-development"
                      className="teamblog text-black" onClick={scrollToTop}
                    >
                      Web Development &nbsp;
                     <FaArrowRightFromBracket className='inline position-absolute right-2 top-6' />
                    </Link>
                    <Link
                      to="/graphic-designing"
                      className="teamblog text-black" onClick={scrollToTop}
                    >
                      Ui/Ux Designing &nbsp;
                     <FaArrowRightFromBracket className='inline position-absolute right-2 top-6' />
                    </Link>
                    <Link
                      to="/android-development"
                      className="  teamblog text-black" onClick={scrollToTop}
                    >
                      Android Development &nbsp;
                     <FaArrowRightFromBracket className='inline position-absolute right-2 top-6' />
                    </Link>
                    <Link
                      to="/wordpress"
                      className="teamblog text-black" onClick={scrollToTop}
                    >
                      Wordpress &nbsp;
                     <FaArrowRightFromBracket className='inline position-absolute right-2 top-6' />
                    </Link>
                    <Link
                      to="/e-commerce"
                      className="teamblog text-black" onClick={scrollToTop}
                    >
                      E-commerce &nbsp;
                     <FaArrowRightFromBracket className='inline position-absolute right-2 top-6' />
                    </Link>
                    <Link
                      to="/whatsapp"
                      className=" active teamblog text-black" onClick={scrollToTop}
                    >
                      Whatsapp Marketing &nbsp;
                     <FaArrowRightFromBracket className='inline position-absolute right-2 top-6' />
                    </Link>
                   
                  </div>
                </div>
                <div
                  className="service-post bg-cover mb-4"
                  style={{
                    backgroundImage:'url("./src/assets/img/services/details.webp")',
                  }}
                >
                  <div className="content">
                    <h3>
                      Need Any Types <br /> of Service <br /> from us
                    </h3>
                    <Link
                      to="/contact" onClick={scrollToTop}
                      className="theme-btn bg-white"
                    >
                      FIND SOLUTION
                    </Link>
                  </div>
                </div>
                <div className="service-sidebar-widget mb-4">
                <div className="service-info">
                    <div className="icon">
                    <i class="fa-solid fa-phone-volume"></i>

                    </div>
                    <div className="content side_content">
                      <p>You can call anytime</p>
                      <h5>
                        Free <Link to="tel:+997868765">+91 96538 20555</Link>
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
                  We embrace holistic development and support for employees with
                  the aim of being a first-choice employer within our sectors.
                  Through a unique combination of engineering, construction and
                  design disciplines and expertise.
                </p>
                <div
                  className="details-image bg-cover mt-4"
                  style={{
                    backgroundImage: 'url("./src/assets/img/services/details.webp")',
                  }}
                />
                <h3 className="details-title">Cloud Service</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas varius tortor nibh, sit amet tempor nibh finibus et.
                  Aenean eu enim justo. Vestibulum aliquam hendrerit molestie.
                  Mauris malesuada nisi sit amet augue accumsan tincidunt.
                  Maecenas tincidunt, velit ac porttitor pulvinar, tortor eros
                  facilisis libero, vitae commodo nunc quam et ligula
                </p>
                <div className="service-details-list mt-5">
                  <div className="row g-4 justify-content-between">
                    <div className="col-lg-4">
                      <div className="goal-list">
                        <h3 className="details-title">Our Goals</h3>
                        <ul>
                          <li>
                          <GiCheckMark className='inline mr-2 text-green-400' />

                            Aliquam accumsan et ante id
                          </li>
                          <li>
                          <GiCheckMark className='inline mr-2 text-green-400' />

                            Lorem ipsum dolor sit dgdr
                          </li>
                          <li>
                          <GiCheckMark className='inline mr-2 text-green-400' />

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
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-semibold text-gray-700 text-left">
                      How can we improve the lead generation process?
                    </AccordionTrigger>
                    <AccordionContent>
                      The main elements of a marketing strategy are your target audience goals and objectives and the tasks you will employ to actively market to achieve the goals.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg font-semibold text-gray-700 text-left">
                      What is content marketing strategy?
                    </AccordionTrigger>
                    <AccordionContent>
                      The main elements of a marketing strategy are your target audience goals and objectives and the tasks you will employ to actively market to achieve the goals.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg font-semibold text-gray-700 text-left">
                      What is the purpose of digital agency?
                    </AccordionTrigger>
                    <AccordionContent>
                      The main elements of a marketing strategy are your target audience goals and objectives and the tasks you will employ to actively market to achieve the goals.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-lg font-semibold text-gray-700 text-left">
                      Can I succeed on this platform with my experience?
                    </AccordionTrigger>
                    <AccordionContent>
                      The main elements of a marketing strategy are your target audience goals and objectives and the tasks you will employ to actively market to achieve the goals.
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
  )
}

export default ServiceWhats