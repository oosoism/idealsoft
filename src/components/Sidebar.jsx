import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo/header-logo.webp";

const Sidebar = ({ toggleMenu, scrollToTop }) => {
  const [dropdowns, setDropdowns] = useState({
    services: false,
    "services-it": false,
    "services-web": false,
    "services-digital": false,
    others: false,
    "others-team": false,
  });

  const toggleDropdown = (dropdown) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
      <div className="fixed top-0 right-0 w-90 h-full bg-white p-4 overflow-y-auto">
        {/* Close Button */}
        <button className="text-right mb-4" onClick={toggleMenu}>
          <i className="fa-solid fa-times text-2xl text-[#a20038]"></i>
        </button>

        {/* Logo */}
        <div className="mb-8 text-center">
          <img src={logo} alt="Logo" className="mx-auto" />
        </div>

        {/* Navigation */}
        <nav className="flex flex-col space-y-4">
          <Link
            to="/"
            onClick={() => {
              toggleMenu();
              scrollToTop();
            }}
            className="hover:text-gray-700"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => {
              toggleMenu();
              scrollToTop();
            }}
            className="hover:text-gray-700"
          >
            About
          </Link>
          <div>
            <button
              onClick={() => toggleDropdown("services")}
              className="w-full text-left hover:text-gray-700 flex justify-between items-center"
            >
              Services <i className="fa-solid fa-plus"></i>
            </button>
            {dropdowns.services && (
              <ul className="ml-4 mt-2 space-y-2">
                <li>
                  <button
                    onClick={() => toggleDropdown("services-it")}
                    className="w-full text-left hover:text-gray-700 flex justify-between items-center"
                  >
                    IT Department <i className="fa-solid fa-angle-right"></i>
                  </button>
                  {dropdowns["services-it"] && (
                    <ul className="ml-4 mt-2 space-y-2">
                      <li>
                        <button
                          onClick={() => toggleDropdown("services-web")}
                          className="w-full text-left hover:text-gray-700 flex justify-between items-center"
                        >
                          Web Development{" "}
                          <i className="fa-solid fa-angle-right"></i>
                        </button>
                        {dropdowns["services-web"] && (
                          <ul className="ml-4 mt-2 space-y-2">
                            <li>
                              <Link
                                to="/wordpress"
                                onClick={() => {
                                  toggleMenu();
                                  scrollToTop();
                                }}
                              >
                                WordPress
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/shopify"
                                onClick={() => {
                                  toggleMenu();
                                  scrollToTop();
                                }}
                              >
                                Shopify
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/e-commerce"
                                onClick={() => {
                                  toggleMenu();
                                  scrollToTop();
                                }}
                              >
                                E-commerce
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/crm"
                                onClick={() => {
                                  toggleMenu();
                                  scrollToTop();
                                }}
                              >
                                CRM Software
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/billing"
                                onClick={() => {
                                  toggleMenu();
                                  scrollToTop();
                                }}
                              >
                                Billing Software
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/gaming"
                                onClick={() => {
                                  toggleMenu();
                                  scrollToTop();
                                }}
                              >
                                Gaming
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/mlm"
                                onClick={() => {
                                  toggleMenu();
                                  scrollToTop();
                                }}
                              >
                                MLM Software
                              </Link>
                            </li>
                          </ul>
                        )}
                      </li>
                      <li>
                        <Link
                          to="/android-development"
                          onClick={() => {
                            toggleMenu();
                            scrollToTop();
                          }}
                        >
                          Android Development
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <button
                    onClick={() => toggleDropdown("services-digital")}
                    className="w-full text-left hover:text-gray-700 flex justify-between items-center"
                  >
                    Digital Marketing{" "}
                    <i className="fa-solid fa-angle-right"></i>
                  </button>
                  {dropdowns["services-digital"] && (
                    <ul className="ml-4 mt-2 space-y-2">
                      <li>
                        <Link
                          to="/email"
                          onClick={() => {
                            toggleMenu();
                            scrollToTop();
                          }}
                        >
                          E-mail Marketing
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/whatsapp"
                          onClick={() => {
                            toggleMenu();
                            scrollToTop();
                          }}
                        >
                          WhatsApp Marketing
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/seo"
                          onClick={() => {
                            toggleMenu();
                            scrollToTop();
                          }}
                        >
                          SEO
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/google"
                          onClick={() => {
                            toggleMenu();
                            scrollToTop();
                          }}
                        >
                          Google Ads
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/meta"
                          onClick={() => {
                            toggleMenu();
                            scrollToTop();
                          }}
                        >
                          Meta Ads
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/influencer-marketing"
                          onClick={() => {
                            toggleMenu();
                            scrollToTop();
                          }}
                        >
                          Influencer Marketing
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/social-media"
                          onClick={() => {
                            toggleMenu();
                            scrollToTop();
                          }}
                        >
                          Social Media Marketing
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link
                    to="/graphic-designing"
                    onClick={() => {
                      toggleMenu();
                      scrollToTop();
                    }}
                  >
                    Graphic Designing
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <Link
            to="/blog"
            onClick={() => {
              toggleMenu();
              scrollToTop();
            }}
            className="hover:text-gray-700"
          >
            Blog
          </Link>
          <Link
            to="/hire"
            onClick={() => {
              toggleMenu();
              scrollToTop();
            }}
            className="hover:text-gray-700"
          >
            Hiring
          </Link>
          <div>
            <button
              onClick={() => toggleDropdown("others")}
              className="w-full text-left hover:text-gray-700 flex justify-between items-center"
            >
              Others <i className="fa-solid fa-plus"></i>
            </button>
            {dropdowns.others && (
              <ul className="ml-4 mt-2 space-y-2">
                <li>
                  <Link
                    to="/project"
                    onClick={() => {
                      toggleMenu();
                      scrollToTop();
                    }}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => toggleDropdown("others-team")}
                    className="w-full text-left hover:text-gray-700 flex justify-between items-center"
                  >
                    Team <i className="fa-solid fa-angle-right"></i>
                  </button>
                  {dropdowns["others-team"] && (
                    <ul className="ml-4 mt-2 space-y-2">
                      <li>
                        <Link
                          to="/team-details"
                          onClick={() => {
                            toggleMenu();
                            scrollToTop();
                          }}
                        >
                          Team Details
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link
                    to="/testimonial"
                    onClick={() => {
                      toggleMenu();
                      scrollToTop();
                    }}
                  >
                    Testimonial
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    onClick={() => {
                      toggleMenu();
                      scrollToTop();
                    }}
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    onClick={() => {
                      toggleMenu();
                      scrollToTop();
                    }}
                  >
                    Faq's
                  </Link>
                </li>
                <li>
                  <Link
                    to="/error"
                    onClick={() => {
                      toggleMenu();
                      scrollToTop();
                    }}
                  >
                    404 Page
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <Link
            to="/contact"
            onClick={() => {
              toggleMenu();
              scrollToTop();
            }}
            className="hover:text-gray-700"
          >
            Contact
          </Link>
        </nav>

        {/* Contact Info */}
        <div className="mt-8">
          <h3 className="font-semibold mb-2">Contact Info</h3>
          <p className="flex items-center mb-2">
            <i className="fa-solid fa-map-marker-alt mr-2"></i>
            Kesari Chand Choudhary Nagar Jaipur
          </p>
          <p className="flex items-center mb-2">
            <i className="fa-solid fa-envelope mr-2"></i>
            connect@idealsoft.com
          </p>
          <p className="flex items-center mb-2">
            <i className="fa-solid fa-clock mr-2"></i>
            Mon-Friday, 09am - 05pm
          </p>
          <p className="flex items-center mb-2">
            <i className="fa-solid fa-phone mr-2"></i>
            +91 96538 20555
          </p>
        </div>

        {/* Contact Us Button */}
        <div className="mt-4">
          <Link
            to="/contact"
            className="bg-[#FD0054] text-white py-2 px-4 rounded block text-center"
          >
            CONTACT US
          </Link>
        </div>

        {/* Social Icons */}
        <div className="mt-4 flex justify-around">
          <a href="#" className="text-gray-500 hover:text-[#3b5998]">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-[#00acee]">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-[#FF0000]">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-[#0077b5]">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
