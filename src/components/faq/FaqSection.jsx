import React from 'react';
import faqImage from '../../assets/img/faq.webp';
import faqSectionImage from '../../assets/img/faq/faq-4.webp';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

const FaqSection = () => {
  return (
    <>
      <section className="faq-section fix section-padding">
        <div className="container">
          <div className="faq-wrapper-2">
            <div className="faq-items">
              <div className="section-title mb-0">
                <span className="wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                  Our question and answer
                </span>
                <h2
                  className="wow fadeInUp"
                  data-wow-delay=".3s"
                  style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}
                >
                  Frequently asked question <br /> &amp; answer here
                </h2>
              </div>
              <div className="faq-image">
                <img src={faqImage} alt="faq-img" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="faq-sidebar">
                  <div
                    className="search-widget wow fadeInUp"
                    data-wow-delay=".3s"
                    style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}
                  >
                    <form action="#">
                      <input type="text" placeholder="Search...." />
                      <button type="submit">
                      <i class="fa-solid fa-magnifying-glass"></i>
                      </button>
                    </form>
                  </div>
                  <div
                    className="side-post bg-cover wow fadeInUp"
                    data-wow-delay=".5s"
                    style={{
                      backgroundImage: `url(${faqSectionImage})`,
                      visibility: 'visible',
                      animationDelay: '0.5s',
                      animationName: 'fadeInUp',
                    }}
                  >
                    <h3>
                      Azent a smart <br /> agency
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-1" />
              <div className="col-lg-6">
                <div className="faq-content style-2">
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
      </section>
    </>
  );
};

export default FaqSection;
