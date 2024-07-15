import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { MapPin, AtSign} from 'lucide-react';


// Import images
import headerLogo from "../assets/img/logo/header-logo.webp";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <div className="header-top">
          <div className="container-fluid">
            <div className="header-top-wrapper">
              <ul>
                <li>
                <MapPin color="#fff"/> <span>Kesari Chand
                Choudhary Nagar Jaipur</span>
                </li>
                <li>
                <AtSign color="#fff"/>
                  <Link to="mailto:connect@idealsoft.com">
                    <span>connect@idealsoft.com</span>
                  </Link>
                </li>
              </ul>
              <div className="social-icon d-flex align-items-center">
                <span className="me-3">Follow us:</span>
                <Link
                  to="#"
                  className="text-gray-500 hover:text-blue-500 transition-colors duration-300"
                >
                  <i className="fab fa-facebook-f me-3"></i>
                </Link>
                <Link
                  to="#"
                  className="text-gray-500 hover:text-blue-500 transition-colors duration-300"
                >
                  <i className="fab fa-twitter me-3"></i>
                </Link>
                <Link
                  to="#"
                  className="text-gray-500 hover:text-red-500 transition-colors duration-300"
                >
                  <i className="fab fa-youtube me-3"></i>
                </Link>
                <Link
                  to="#"
                  className="text-gray-500 hover:text-blue-500 transition-colors duration-300"
                >
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div id="header-sticky" className="header-2">
          <div className="container-fluid">
            <div className="mega-menu-wrapper">
              <div className="header-main">
                <div className="header-left">
                  <div className="logo">
                    <Link to="/" className="header-logo" onClick={scrollToTop}>
                      <img src={headerLogo} alt="logo-img" />
                    </Link>
                  </div>
                  <div className="mean__menu-wrapper d-none d-lg-block">
                    <div className="main-menu">
                      <nav id="mobile-menu">
                        <ul>
                          <li className="has-dropdown active menu-thumb">
                            <Link to="/" onClick={scrollToTop}>
                              {" "}
                              Home{" "}
                            </Link>
                          </li>
                          <li>
                            <Link to="/about" onClick={scrollToTop}>
                              About
                            </Link>
                          </li>
                          <li>
                            <Link to="/service" onClick={scrollToTop}>
                              Services
                              <i className="fas fa-angle-down" />
                            </Link>
                            <ul className="submenu">
                              <li className="has-dropdown">
                                <Link to="/it-service" onClick={scrollToTop}>
                                  IT Department
                                  <i className="fa-solid fa-angle-right"></i>
                                </Link>
                                <ul className="submenu">
                                  <li>
                                    <Link
                                      to="/web-development"
                                      onClick={scrollToTop}
                                    >
                                      Web Development
                                      <i className="fa-solid fa-angle-right"></i>
                                    </Link>
                                    <ul className="submenu">
                                      <li>
                                        <Link
                                          to="/wordpress"
                                          onClick={scrollToTop}
                                        >
                                          Wordpress
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to="/shopify"
                                          onClick={scrollToTop}
                                        >
                                          Shopify
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to="/e-commerce"
                                          onClick={scrollToTop}
                                        >
                                          E-commerce
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/crm" onClick={scrollToTop}>
                                          CRM Software
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to="/billing"
                                          onClick={scrollToTop}
                                        >
                                          Billing Software
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to="/gaming"
                                          onClick={scrollToTop}
                                        >
                                          Gaming
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/mlm" onClick={scrollToTop}>
                                          MLM Software
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <Link
                                      to="/android-development"
                                      onClick={scrollToTop}
                                    >
                                      Android Development
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="has-dropdown">
                                <Link
                                  to="/digital-marketing"
                                  onClick={scrollToTop}
                                >
                                  Digital Marketing
                                  <i className="fa-solid fa-angle-right"></i>
                                </Link>
                                <ul className="submenu">
                                  <li>
                                    <Link to="/email" onClick={scrollToTop}>
                                      E-mail Marketing
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/whatsapp" onClick={scrollToTop}>
                                      WhatsApp Marketing
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/seo" onClick={scrollToTop}>
                                      SEO
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/google" onClick={scrollToTop}>
                                      Google Ads
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/meta" onClick={scrollToTop}>
                                      Meta Ads
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/influencer-marketing"
                                      onClick={scrollToTop}
                                    >
                                      Influencer Marketing
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/social-media"
                                      onClick={scrollToTop}
                                    >
                                      Social Media Marketing
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <Link
                                  to="/graphic-designing"
                                  onClick={scrollToTop}
                                >
                                  Graphic Designing
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="/blog" onClick={scrollToTop}>
                              Blog
                              <i className="fas fa-angle-down" />
                            </Link>
                            <ul className="submenu">
                              <li>
                                <Link to="/blog-details" onClick={scrollToTop}>
                                  Blog Details
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="/hire" onClick={scrollToTop}>
                              {" "}
                              Hiring{" "}
                            </Link>
                          </li>
                          <li className="has-dropdown">
                            <Link to="" onClick={scrollToTop}>
                              Others
                              <i className="fas fa-angle-down" />
                            </Link>
                            <ul className="submenu">
                              <li className="has-dropdown">
                                <Link to="/project" onClick={scrollToTop}>
                                  Projects
                                </Link>
                              </li>
                              <li className="has-dropdown">
                                <Link to="/team" onClick={scrollToTop}>
                                  Team
                                  <i className="fa-solid fa-angle-right"></i>
                                </Link>
                                <ul className="submenu">
                                  <li>
                                    <Link
                                      to="/team-details"
                                      onClick={scrollToTop}
                                    >
                                      Team Details
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <Link to="/testimonial" onClick={scrollToTop}>
                                  Testimonial
                                </Link>
                              </li>
                              <li>
                                <Link to="/pricing" onClick={scrollToTop}>
                                  Pricing
                                </Link>
                              </li>
                              <li>
                                <Link to="/faq" onClick={scrollToTop}>
                                  Faq's
                                </Link>
                              </li>
                              <li>
                                <Link to="/error" onClick={scrollToTop}>
                                  404 Page
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="/contact" onClick={scrollToTop}>
                              Contact
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="header-right d-flex justify-content-end align-items-center">
                  <div className="search-wrp">
                    <input placeholder="Search...." aria-label="Search" />
                    <button>
                      <i className="fas fa-search" />
                    </button>
                  </div>
                  <div className="header-button">
                    <Link
                      to="/get-quote"
                      className="theme-btn"
                      onClick={scrollToTop}
                    >
                      GET A QUOTE
                    </Link>
                  </div>
                  <div className="header__hamburger d-lg-none my-auto">
                    <div className="sidebar__toggle" onClick={toggleMenu}>
                      <i className="fa-solid fa-bars"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <Sidebar toggleMenu={toggleMenu} scrollToTop={scrollToTop} />
      )}
    </>
  );
};

export default Header;
