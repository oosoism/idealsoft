import React from 'react';
import teamImage1 from '../../assets/img/team/05.webp';
import teamImage2 from '../../assets/img/team/06.webp';
import teamImage3 from '../../assets/img/team/07.webp';
import { Link } from 'react-router-dom';

const TeamSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  };
  return (
    <>
      <section className="team-section fix section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">Our team members</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              The amazing team behind IdealSoft
            </h2>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="team-card-items style-2">
                <div className="team-image bg-cover" style={{ backgroundImage: `url(${teamImage1})` }}>
                  <div className="team-content-2">
                    <h4>
                      <Link to="/team" onClick={scrollToTop}> Salman Islam </Link>
                    </h4>
                    <p>Developer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="team-card-items style-2">
                <div className="team-image bg-cover" style={{ backgroundImage: `url(${teamImage2})` }}>
                  <div className="team-content-2">
                    <h4>
                      <Link to="/team" onClick={scrollToTop}> Janes Cooper </Link>
                    </h4>
                    <p>Designer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
              <div className="team-card-items style-2">
                <div className="team-image bg-cover" style={{ backgroundImage: `url(${teamImage3})` }}>
                  <div className="team-content-2">
                    <h4>
                      <Link to="/team" onClick={scrollToTop}> James Bond </Link>
                    </h4>
                    <p>Creator</p>
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

export default TeamSection;
