import React from 'react';
import { Link } from 'react-router-dom';

import team05 from '../../assets/img/team/05.webp';
import team06 from '../../assets/img/team/06.webp';
import team07 from '../../assets/img/team/07.webp';
import team08 from '../../assets/img/team/08.webp';
import team09 from '../../assets/img/team/09.webp';
import team10 from '../../assets/img/team/10.webp';

const TeamSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  };
  return (
    <>
      <section className="team-section fix section-padding">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
              style={{
                
                animationDelay: "0.3s",
                animationName: "fadeInUp"
              }}
            >
              <div className="team-card-items style-2">
                <div
                  className="team-image bg-cover"
                  style={{ backgroundImage: `url(${team05})` }}
                >
                  <div className="team-content-2">
                    <h4>
                      <Link to="/team" onClick={scrollToTop } > Salman Islam </Link>
                    </h4>
                    <p>Developer</p>
                  </div>
                 
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
              style={{
                
                animationDelay: "0.5s",
                animationName: "fadeInUp"
              }}
            >
              <div className="team-card-items style-2 active">
                <div
                  className="team-image bg-cover"
                  style={{ backgroundImage: `url(${team06})` }}
                >
                  <div className="team-content-2">
                    <h4>
                      <Link to="/team" onClick={scrollToTop } > Janes Cooper </Link>
                    </h4>
                    <p>Designer</p>
                  </div>
                 
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
              style={{
                
                animationDelay: "0.7s",
                animationName: "fadeInUp"
              }}
            >
              <div className="team-card-items style-2">
                <div
                  className="team-image bg-cover"
                  style={{ backgroundImage: `url(${team07})` }}
                >
                  <div className="team-content-2">
                    <h4>
                      <Link to="/team" onClick={scrollToTop } > James Bond </Link>
                    </h4>
                    <p>Creator</p>
                  </div>
                  
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
              style={{
                
                animationDelay: "0.3s",
                animationName: "fadeInUp"
              }}
            >
              <div className="team-card-items style-2">
                <div
                  className="team-image bg-cover"
                  style={{ backgroundImage: `url(${team08})` }}
                >
                  <div className="team-content-2">
                    <h4>
                      <Link to="/team" onClick={scrollToTop } > Lucas Henry </Link>
                    </h4>
                    <p>Developer</p>
                  </div>
                
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
              style={{
                
                animationDelay: "0.5s",
                animationName: "fadeInUp"
              }}
            >
              <div className="team-card-items style-2">
                <div
                  className="team-image bg-cover"
                  style={{ backgroundImage: `url(${team09})` }}
                >
                  <div className="team-content-2">
                    <h4>
                      <Link to="/team" onClick={scrollToTop } > Theodore Daniel </Link>
                    </h4>
                    <p>Designer</p>
                  </div>
                  
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
              style={{
                
                animationDelay: "0.7s",
                animationName: "fadeInUp"
              }}
            >
              <div className="team-card-items style-2">
                <div
                  className="team-image bg-cover"
                  style={{ backgroundImage: `url(${team10})` }}
                >
                  <div className="team-content-2">
                    <h4>
                      <Link to="/team" onClick={scrollToTop } > Asher Samuel </Link>
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
