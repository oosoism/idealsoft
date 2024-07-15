import React from "react";

import post4Img from "../../assets/img/news/post-4.webp";
import post5Img from "../../assets/img/news/post-5.webp";
import authorImg2 from "../../assets/img/news/author_img2.webp";
import authorImg3 from "../../assets/img/news/author_img3.webp";
import authorImg4 from "../../assets/img/news/author_img4.webp";
import pp1Img from "../../assets/img/news/pp1.webp";
import pp2Img from "../../assets/img/news/pp2.webp";
import pp3Img from "../../assets/img/news/pp3.webp";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
const Blogwrapper = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <>
      <section className="blog-wrapper news-wrapper section-padding border-bottom">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="blog-post-details border-wrap mt-0">
                  <div className="single-blog-post post-details mt-0">
                    <div className="post-content pt-0">
                      <h2 className="mt-0">
                        Mind-Blowing Reasons Why Agency Is Using This Technique
                        For Exposure.
                      </h2>
                      <div className="post-meta mt-3">
                        <span>
                          <FaUser className="inline  mr-1" />
                          Shikhon .Ha
                        </span>
                        <span>
                          <FaComments className="inline  mr-1" /> 15 Comments
                        </span>
                        <span>
                          <FaCalendarAlt className="inline mr-1" /> 4th February
                          2024
                        </span>
                      </div>
                      <p>
                        With worldwide annual spend on digital advertising
                        surpassing $325 billion, it’s no surprise that different
                        approaches to online marketing are becoming available.
                        One of these new approaches is performance marketing or
                        digital performance marketing. Keep reading to learn all
                        about performance marketing, from how it works to how it
                        compares to digital marketing. Plus, get insight into
                        the benefits and risks of performance marketing and how
                        it can affect your company’s long-term success and
                        profitability.
                      </p>
                      <p>
                        With worldwide annual spend on digital advertising
                        surpassing $325 billion, it’s no surprise that different
                        approaches to online marketing are becoming available.
                        One of these new approaches is performance marketing or
                        digital performance marketing. Keep reading to learn all
                        about performance marketing, from how it works to how it
                        compares to digital marketing. Plus, get insight into
                        the benefits and risks of performance marketing and how
                        it can affect your company’s long-term success and
                        profitability.
                      </p>
                      <img
                        src={post4Img}
                        alt="blog__img"
                        className="single-post-image"
                      />
                      <h2>
                        You Should Experience Agency At Least Once In Your
                        Lifetime And Here's Why.
                      </h2>
                      <p>
                        Performance marketing is an approach to digital
                        marketing or advertising where businesses only pay when
                        a specific result occurs. This result could be a new
                        lead, sale, or other outcome agreed upon by the
                        advertiser and business. Performance marketing involves
                        channels such as affiliate marketing, online
                        advertising.
                      </p>
                      <blockquote>
                        Diam luctus nostra dapibus varius et semper semper
                        rutrum ad risus felis eros. Cursus libero viverra tempus
                        netus diam vestibulum
                      </blockquote>
                      <p>
                        With worldwide annual spend on digital advertising
                        surpassing $325 billion, it’s no surprise that different
                        approaches to online marketing are becoming available.
                        One of these new approaches is performance marketing or
                        digital performance marketing. Keep reading to learn all
                        about performance marketing
                      </p>
                      <ul className=" mb-4">
                        <li>Cooking is love made visible</li>
                        <li>We’re an open book</li>
                        <li>100% goes to the field</li>
                        <li>Received the highest grades</li>
                      </ul>
                      <h4>Easy &amp; Most Powerful Server Platform.</h4>
                      <p>
                        With worldwide annual spend on digital advertising
                        surpassing $325 billion, it’s no surprise that different
                        approaches to online marketing are becoming available.
                        One of these new approaches is performance marketing or
                        digital performance marketing. Keep reading to learn all
                        about performance marketing, from how it works to how it
                        compares to digital marketing. Plus, get insight into
                        the benefits and risks of performance marketing and how
                        it can affect your company’s long-term success and
                        profitability.
                      </p>
                      <img
                        className="alignleft"
                        src={post5Img}
                        alt="blog__img"
                      />
                      <p>
                        With worldwide annual spend on digital advertising
                        surpassing $325 billion, it’s no surprise that different
                        approaches to online marketing are becoming available.
                        One of these new approaches is performance marketing or
                        digital performance marketing. Keep reading to learn all
                        about performance marketing
                      </p>
                      <p>
                        With worldwide annual spend on digital advertising
                        surpassing $325 billion, it’s no surprise that different
                        approaches to online marketing are becoming available.
                        One of these new approaches is performance marketing or
                        digital performance marketing. Keep reading to learn all
                        about performance marketing
                      </p>
                    </div>
                  </div>
                  <div className="row tag-share-wrap">
                    <div className="col-lg-8 col-12">
                      <h4>Related Tags</h4>
                      <div className="tagcloud">
                        <Link to="/web-development" onClick={scrollToTop} >Development</Link>
                        <Link to="/digital-marketing" onClick={scrollToTop} >Digital</Link>
                        <Link to="/it-service" onClick={scrollToTop} >Tech</Link>
                      </div>
                    </div>
                    <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end">
                      <h4>Social Share</h4>
                      <div className="social-share">
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="comments-section-wrap pt-4">
                    <div className="comments-heading">
                      <h3>03 Comments</h3>
                    </div>
                    <ul className="comments-item-list">
                      <li className="single-comment-item">
                        <div className="author-img">
                          <img src={authorImg2} alt="img" />
                        </div>
                        <div className="author-info-comment">
                          <div className="info">
                            <h5>
                              <a href="#">Rosalina Kelian</a>
                            </h5>
                            <span>19th May 2024</span>
                            <a href="#" className="theme-btn minimal-btn">
                              <i className="fal fa-reply" />
                              Reply
                            </a>
                          </div>
                          <div className="comment-text">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna. Ut enim ad minim
                              veniam, quis nostrud laboris nisi ut aliquip ex ea
                              commodo consequat.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="single-comment-item">
                        <div className="author-img">
                          <img src={authorImg3} alt="img" />
                        </div>
                        <div className="author-info-comment">
                          <div className="info">
                            <h5>
                              <a href="#">Arista Williamson</a>
                            </h5>
                            <span>21st Feb 2024</span>
                            <a href="#" className="theme-btn minimal-btn">
                              <i className="fal fa-reply" />
                              Reply
                            </a>
                          </div>
                          <div className="comment-text">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco nisi ut
                              aliquip ex ea commodo consequat.
                            </p>
                          </div>
                        </div>
                        <ul className="replay-comment">
                          <li className="single-comment-item">
                            <div className="author-img">
                              <img src={authorImg4} alt="img" />
                            </div>
                            <div className="author-info-comment">
                              <div className="info">
                                <h5>
                                  <a href="#">Salman Ahmed</a>
                                </h5>
                                <span>29th Jan 2021</span>
                                <a href="#" className="theme-btn minimal-btn">
                                  <i className="fal fa-reply" />
                                  Reply
                                </a>
                              </div>
                              <div className="comment-text">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="comment-form-wrap mt-4">
                    <h3>Post Comment</h3>
                    <form action="#" className="comment-form">
                      <div className="single-form-input">
                        <textarea
                          placeholder="Type your comments...."
                          defaultValue={""}
                        />
                      </div>
                      <div className="single-form-input">
                        <input type="text" placeholder="Type your name...." />
                      </div>
                      <div className="single-form-input">
                        <input type="email" placeholder="Type your email...." />
                      </div>
                      <div className="single-form-input">
                        <input
                          type="text"
                          placeholder="Type your website...."
                        />
                      </div>
                      <button className="theme-btn center" type="submit">
                        <i className="fal fa-comments" />
                        Post Comment
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="main-sidebar">
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Search</h3>
                    </div>
                    <div className="search_widget">
                      <form action="#">
                        <input type="text" placeholder="Keywords here...." />
                        <button type="submit">
                          <i className="fal fa-search" />
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Popular Feeds</h3>
                    </div>
                    <div className="popular-posts">
                      <div className="single-post-item">
                        <div
                          className="thumb bg-cover"
                          style={{
                            backgroundImage: `url(${pp1Img})`,
                          }}
                        />
                        <div className="post-content">
                          <h5>
                            <Link to="/team" onClick={scrollToTop} >
                              Keep your business safe and ensure high
                            </Link>
                          </h5>
                          <div className="post-date">
                            <i className="far fa-calendar-alt" />
                            24th March 2024
                          </div>
                        </div>
                      </div>
                      <div className="single-post-item">
                        <div
                          className="thumb bg-cover"
                          style={{
                            backgroundImage: `url(${pp2Img})`,
                          }}
                        />
                        <div className="post-content">
                          <h5>
                            <Link to="/team" onClick={scrollToTop} >
                              We’ve been a strategy thought leader for nearly
                            </Link>
                          </h5>
                          <div className="post-date">
                            <i className="far fa-calendar-alt" />
                            25th March 2024
                          </div>
                        </div>
                      </div>
                      <div className="single-post-item">
                        <div
                          className="thumb bg-cover"
                          style={{
                            backgroundImage: `url(${pp3Img})`,
                          }}
                        />
                        <div className="post-content">
                          <h5>
                            <Link to="/team" onClick={scrollToTop} >
                              This week’s top stories and about It
                            </Link>
                          </h5>
                          <div className="post-date">
                            <i className="far fa-calendar-alt" />
                            26th March 2024
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Categories</h3>
                    </div>
                    <div className="widget_categories">
                      <ul>
                        <li>
                          <Link to="/it-service" onClick={scrollToTop} >
                            IT Department <span>23</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/web-development" onClick={scrollToTop} >
                            Web Development <span>24</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/graphic-designing" onClick={scrollToTop} >
                            Ui/Ux Designing <span>11</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/digital-marketing" onClick={scrollToTop} >
                            Digital Marketing <span>05</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/android-development" onClick={scrollToTop} >
                            Android Development <span>06</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/seo" onClick={scrollToTop} >
                            Seo <span>10</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Never Miss News</h3>
                    </div>
                    <div className="social-link">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Popular Tags</h3>
                    </div>
                    <div className="tagcloud">
                      <Link to="/it-service" onClick={scrollToTop}> IT Technology</Link>
                      <Link to="/it-service" onClick={scrollToTop}> Software</Link>
                      <Link to="/graphic-designing" onClick={scrollToTop}> Design</Link>
                      <Link to="/service" onClick={scrollToTop}> Service</Link>
                      <Link to="/web-development" onClick={scrollToTop}> Development</Link>
                      <Link to="/digital-marketing" onClick={scrollToTop}> Digital</Link>
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

export default Blogwrapper;
