import React, { useEffect } from 'react';
import postImage from '../../assets/img/post.webp';
import { Link } from 'react-router-dom';
import AOS from 'aos';

const ClearPostSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="clear-post section-padding">
      <div className="container">
        <div className="clear-post-wrapper">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div className="post-content">
                <h3 className="wow fadeInUp text-3xl md:text-4xl lg:text-5xl " data-wow-delay=".3s" >
                Your Gateway to Understanding &amp; Our Roles
                </h3>
                <p className="wow fadeInUp" data-wow-delay=".5s">
                At our digital marketing agency, we believe that transparency is key to building a strong team. Our job postings are meticulously crafted to provide a clear understanding of the responsibilities and expectations for each role. We're not just looking for employees; we're seeking collaborators who will contribute to our collective success.

Explore Our Team Culture
                </p>
                <Link
                  to="/about"
                  onClick={scrollToTop}
                  className="theme-btn wow fadeInUp"
                  data-wow-delay=".7s"
                >
                  KNOW MORE
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 wow fadeInRight" data-aos="fade-left" data-aos-delay="200">
              <div className="post-image bg-cover" style={{ backgroundImage: `url(${postImage})` }} />
            </div>
            <div className="col-xl-4 col-lg-6 mt-5 mt-xl-0">
              <div className="progress-content">
                <h2 className="wow fadeInUp text-3xl md:text-4xl lg:text-4xl" data-wow-delay=".3s">
                Our Pursuit of Excellence
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".5s">
                In the ever-evolving landscape of digital marketing, our agency stands out for our relentless pursuit of excellence. We are committed to delivering innovative solutions that drive results for our clients. Our team's expertise and passion for the craft are reflected in every project we undertake.
                </p>
                <div className="progress-wrap">
                  <div className="pro-items wow fadeInUp" data-wow-delay=".7s">
                    <div className="pro-head">
                      <h6 className="title">Industry Experience</h6>
                      <span className="point">90%</span>
                    </div>
                    <div className="progress">
                      <div className="progress-value" />
                    </div>
                  </div>
                  <div className="pro-items wow fadeInUp" data-wow-delay=".9s">
                    <div className="pro-head">
                      <h6 className="title">Innovation Rate</h6>
                      <span className="point">75%</span>
                    </div>
                    <div className="progress">
                      <div className="progress-value style-two" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClearPostSection;
