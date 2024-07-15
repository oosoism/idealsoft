import React from 'react';
import faqImage from '../../assets/img/faq/faq.webp';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

const FaqSection = () => {
  return (
    <section className="faq-section py-20 bg-gray-100 -mt-10 -mb-20">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2 lg:order-1 lg:pr-10">
            <div className="faq-image bg-cover bg-center h-80 lg:h-full lg:rounded-lg"
                 style={{ backgroundImage: `url(${faqImage})`, minHeight: '20rem' }}>
            </div>
          </div>
          
          {/* Right Side - Accordion */}
          <div className="w-full lg:w-1/2 lg:order-2 mt-8 lg:mt-0">
            <div className="faq-content">
              <div className="mb-8">
                <span className="text-gray-600 text-lg font-semibold mb-2 block">
                  What people ask
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                  Get every single answer <br /> from here
                </h2>
              </div>
              <div className="faq-accordion">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-semibold text-gray-700  text-left">
                      How can we improve the lead generation process?
                    </AccordionTrigger>
                    <AccordionContent>
                      The main elements of a marketing strategy are your target audience goals and objectives and the tasks you will employ to actively market to achieve the goals.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg font-semibold text-gray-700  text-left">
                      What is content marketing strategy?
                    </AccordionTrigger>
                    <AccordionContent>
                      The main elements of a marketing strategy are your target audience goals and objectives and the tasks you will employ to actively market to achieve the goals.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg font-semibold text-gray-700  text-left">
                      What is the purpose of digital agency?
                    </AccordionTrigger>
                    <AccordionContent>
                      The main elements of a marketing strategy are your target audience goals and objectives and the tasks you will employ to actively market to achieve the goals.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-lg font-semibold text-gray-700  text-left">
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
    </section>
  );
}

export default FaqSection;
